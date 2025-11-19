import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { rateLimit, getClientIP } from '@/lib/rate-limit'

// Função para sanitizar strings e prevenir XSS
function sanitizeString(str: string): string {
  if (typeof str !== 'string') return ''
  return str
    .replace(/[<>]/g, '') // Remove < e >
    .replace(/javascript:/gi, '') // Remove javascript:
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .substring(0, 1000) // Limita tamanho
}

// Função para validar email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  // 🔒 Rate Limiting: Máximo 5 requisições por hora por IP
  const clientIP = getClientIP(request)
  const rateLimitResult = rateLimit(clientIP, 5, 60 * 60 * 1000) // 5 req/hora
  
  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Muitas requisições. Tente novamente mais tarde.',
        error: 'RATE_LIMIT_EXCEEDED'
      },
      { 
        status: 429,
        headers: {
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
          'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
        }
      }
    )
  }
  
  try {
    const data = await request.json()
    
    // Validação de entrada
    if (!data || typeof data !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Dados inválidos' },
        { status: 400 }
      )
    }

    const { email, nome, telefone, mensagem, origem } = data

    // Validar e sanitizar email (obrigatório)
    const emailSanitizado = email ? sanitizeString(email) : ''
    
    if (!emailSanitizado || !isValidEmail(emailSanitizado)) {
      return NextResponse.json(
        { success: false, message: 'Email inválido' },
        { status: 400 }
      )
    }

    // Sanitizar campos opcionais
    const nomeSanitizado = nome ? sanitizeString(nome) : ''
    const telefoneSanitizado = telefone ? sanitizeString(telefone) : ''
    const mensagemSanitizada = mensagem ? sanitizeString(mensagem) : ''
    const origemSanitizada = origem ? sanitizeString(origem) : 'Formulário de Contato'

    // Formatar o email
    const assunto = nomeSanitizado 
      ? `Novo contato de ${nomeSanitizado} - ${origemSanitizada}`
      : `Novo contato - ${origemSanitizada}`
    
    const corpoEmailTexto = `
NOVO CONTATO RECEBIDO

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DADOS DO CONTATO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${nomeSanitizado ? `Nome: ${nomeSanitizado}` : 'Nome: Não informado'}
Email: ${emailSanitizado}
${telefoneSanitizado ? `Telefone: ${telefoneSanitizado}` : 'Telefone: Não informado'}
Origem: ${origemSanitizada}
${mensagemSanitizada ? `\nMensagem:\n${mensagemSanitizada}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Este email foi gerado automaticamente pelo site Estimulus.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`

    const corpoEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2A3B95;">NOVO CONTATO RECEBIDO</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2A3B95; margin-top: 0;">DADOS DO CONTATO</h3>
          <p><strong>Nome:</strong> ${nomeSanitizado || 'Não informado'}</p>
          <p><strong>Email:</strong> ${emailSanitizado}</p>
          <p><strong>Telefone:</strong> ${telefoneSanitizado || 'Não informado'}</p>
          <p><strong>Origem:</strong> ${origemSanitizada}</p>
          ${mensagemSanitizada ? `<div style="margin-top: 15px; padding: 15px; background: white; border-left: 4px solid #2A3B95;"><strong>Mensagem:</strong><p style="margin: 10px 0 0 0; color: #666;">${mensagemSanitizada}</p></div>` : ''}
        </div>

        <p style="color: #999; font-size: 12px; margin-top: 30px;">
          Este email foi gerado automaticamente pelo site Estimulus.
        </p>
      </div>
    `

    // Verificar se as variáveis de ambiente estão configuradas
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      // Em desenvolvimento, apenas logar (não enviar email real)
      if (process.env.NODE_ENV === 'development') {
        console.log('📧 Email que seria enviado:')
        console.log('Para:', 'contato@estimulus.com.br, edgardtf@gmail.com')
        console.log('Assunto:', assunto)
        console.log('Corpo:', corpoEmailTexto)
        
        return NextResponse.json({ 
          success: true, 
          message: 'Contato recebido (modo desenvolvimento - email não enviado)' 
        })
      }
      
      // Em produção, retornar erro se não configurado
      return NextResponse.json(
        { success: false, message: 'Serviço de email não configurado' },
        { status: 500 }
      )
    }

    // Configurar transporter de email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Enviar email para ambos os destinatários
    const destinatarios = ['contato@estimulus.com.br', 'edgardtf@gmail.com']
    
    const info = await transporter.sendMail({
      from: `"Site Estimulus" <${process.env.SMTP_USER}>`,
      to: destinatarios.join(', '),
      subject: assunto,
      text: corpoEmailTexto,
      html: corpoEmailHTML,
    })

    // Log seguro (não expor dados sensíveis)
    if (process.env.NODE_ENV === 'development') {
      console.log('Email enviado:', info.messageId)
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Contato enviado com sucesso!' 
    }, {
      headers: {
        'X-RateLimit-Remaining': String(rateLimitResult.remaining),
        'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
      }
    })

  } catch (error) {
    // Log seguro (não expor stack traces ou dados sensíveis em produção)
    if (process.env.NODE_ENV === 'development') {
      console.error('Erro ao processar contato:', error)
    } else {
      console.error('Erro ao processar contato: [erro interno]')
    }
    
    return NextResponse.json(
      { success: false, message: 'Erro ao enviar contato. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}

