import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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
  try {
    const data = await request.json()
    
    // Validação de entrada
    if (!data || typeof data !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Dados inválidos' },
        { status: 400 }
      )
    }

    const { dadosUsuario, respostas, score, categoriaScores } = data

    // Validar dados do usuário
    if (!dadosUsuario || typeof dadosUsuario !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Dados do usuário inválidos' },
        { status: 400 }
      )
    }

    // Validar e sanitizar campos obrigatórios
    const nome = sanitizeString(dadosUsuario.nome || '')
    const email = dadosUsuario.email ? sanitizeString(dadosUsuario.email) : ''
    const telefone = dadosUsuario.telefone ? sanitizeString(dadosUsuario.telefone) : ''

    if (!nome || nome.length < 2) {
      return NextResponse.json(
        { success: false, message: 'Nome inválido' },
        { status: 400 }
      )
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Email inválido' },
        { status: 400 }
      )
    }

    // Validar score
    const validScore = typeof score === 'number' && !isNaN(score) && score >= 0 && score <= 100 ? score : 0

    // Formatar o email
    const assunto = `Novo Raio-X Gratuito - ${nome}`
    
    let corpoEmail = `
NOVO RAIO-X GRATUITO RECEBIDO

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DADOS DO CLIENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nome: ${nome}
Email: ${email}
Telefone: ${telefone || 'Não informado'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCORE GERAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Score de Fidelização: ${validScore}%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCORES POR CATEGORIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Fidelização: ${categoriaScores['Fidelização']}%
IA + Dados: ${categoriaScores['IA + Dados']}%
Neuromarketing: ${categoriaScores['Neuromarketing']}%
Experiência Marca: ${categoriaScores['Experiência Marca']}%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPOSTAS DO QUESTIONÁRIO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`

    // Adicionar respostas
    const perguntas = [
      'Com que frequência seus clientes compram novamente na sua empresa?',
      'Você possui um programa de fidelização ou cashback para seus clientes?',
      'Como você utiliza dados e informações sobre seus clientes para tomar decisões?',
      'Você conhece seus principais indicadores: CAC (Custo de Aquisição), LTV (Valor do Cliente) e Taxa de Churn?',
      'Você utiliza gatilhos mentais e técnicas de neuromarketing nas suas campanhas?',
      'Como você segmenta seus clientes para campanhas de marketing?',
      'Seus clientes indicam sua empresa para outras pessoas?',
      'Você tem um processo estruturado para criar experiências memoráveis para seus clientes?',
      'Qual é a principal forma de comunicação com seus clientes após a primeira compra?',
      'Quanto você investe em marketing para reter clientes existentes versus adquirir novos?'
    ]

    // Validar e sanitizar respostas
    if (respostas && typeof respostas === 'object') {
      Object.entries(respostas).forEach(([id, resposta], index) => {
        const respostaSanitizada = sanitizeString(String(resposta || ''))
        if (respostaSanitizada && index < perguntas.length) {
          corpoEmail += `\n${index + 1}. ${perguntas[index]}\n   Resposta: ${respostaSanitizada}\n`
        }
      })
    }

    corpoEmail += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`
    corpoEmail += `Este email foi gerado automaticamente pelo sistema de Raio-X Gratuito.\n`

    // Configurar transporter de email
    // NOTA: Configure estas variáveis de ambiente no seu .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER, // Seu email
        pass: process.env.SMTP_PASS, // Sua senha ou app password
      },
    })

    // Enviar email para ambos os destinatários
    const destinatarios = ['contato@estimulus.com.br', 'edgardtf@gmail.com']
    
    const info = await transporter.sendMail({
      from: `"Sistema Raio-X" <${process.env.SMTP_USER || 'noreply@estimulus.com.br'}>`,
      to: destinatarios.join(', '),
      subject: assunto,
      text: corpoEmail,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #33399a;">NOVO RAIO-X GRATUITO RECEBIDO</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #46239f; margin-top: 0;">DADOS DO CLIENTE</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #46239f; margin-top: 0;">SCORE GERAL</h3>
            <p style="font-size: 24px; font-weight: bold; color: #fbbf24;">Score de Fidelização: ${validScore}%</p>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #46239f; margin-top: 0;">SCORES POR CATEGORIA</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin: 10px 0;"><strong>Fidelização:</strong> ${categoriaScores['Fidelização']}%</li>
              <li style="margin: 10px 0;"><strong>IA + Dados:</strong> ${categoriaScores['IA + Dados']}%</li>
              <li style="margin: 10px 0;"><strong>Neuromarketing:</strong> ${categoriaScores['Neuromarketing']}%</li>
              <li style="margin: 10px 0;"><strong>Experiência Marca:</strong> ${categoriaScores['Experiência Marca']}%</li>
            </ul>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #46239f; margin-top: 0;">RESPOSTAS DO QUESTIONÁRIO</h3>
            ${respostas && typeof respostas === 'object' ? Object.entries(respostas).map(([id, resposta], index) => {
              const respostaSanitizada = sanitizeString(String(resposta || ''))
              if (respostaSanitizada && index < perguntas.length) {
                return `
                  <div style="margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #33399a;">
                    <p style="margin: 0; font-weight: bold;">${index + 1}. ${perguntas[index]}</p>
                    <p style="margin: 5px 0 0 0; color: #666;">Resposta: ${respostaSanitizada}</p>
                  </div>
                `
              }
              return ''
            }).filter(Boolean).join('') : ''}
          </div>

          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            Este email foi gerado automaticamente pelo sistema de Raio-X Gratuito.
          </p>
        </div>
      `,
    })

    console.log('Email enviado:', info.messageId)

    return NextResponse.json({ 
      success: true, 
      message: 'Raio-X enviado com sucesso' 
    })

  } catch (error) {
    console.error('Erro ao processar Raio-X:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao enviar Raio-X' },
      { status: 500 }
    )
  }
}

