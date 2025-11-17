# 🧪 Testing Criteria

## Estratégia de Teste

### Pirâmide de Testes
```
    E2E Tests (10%)
   ╱              ╲
 Integration Tests (20%)
╱                      ╲
Unit Tests (70%)
```

## Testes Unitários

### Frontend Components
```typescript
// Exemplo de teste para CalculatorCard
import { render, screen, fireEvent } from '@testing-library/react';
import CalculatorCard from '@/components/CalculatorCard';

describe('CalculatorCard', () => {
  it('should display calculator information', () => {
    const calculator = {
      id: 'cac',
      title: 'CAC',
      subtitle: 'Custo de Aquisição de Cliente',
      icon: '💰'
    };
    
    render(<CalculatorCard calculator={calculator} />);
    
    expect(screen.getByText('CAC')).toBeInTheDocument();
    expect(screen.getByText('Custo de Aquisição de Cliente')).toBeInTheDocument();
  });
  
  it('should expand calculator on click', () => {
    const calculator = { id: 'cac', title: 'CAC', subtitle: '...', icon: '💰' };
    const onExpand = jest.fn();
    
    render(<CalculatorCard calculator={calculator} onExpand={onExpand} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(onExpand).toHaveBeenCalledWith('cac');
  });
});
```

### Backend APIs
```typescript
// Exemplo de teste para API de Raio-X
import { POST } from '@/app/api/raio-x/route';
import { NextRequest } from 'next/server';

describe('POST /api/raio-x', () => {
  it('should return 200 for valid submission', async () => {
    const request = new NextRequest('http://localhost/api/raio-x', {
      method: 'POST',
      body: JSON.stringify({
        dadosUsuario: {
          nome: 'João Silva',
          email: 'joao@example.com',
          telefone: '11999999999'
        },
        respostas: {
          faturamento: '100000',
          segmento: 'varejo'
        },
        score: 75
      })
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });
  
  it('should return 400 for invalid email', async () => {
    const request = new NextRequest('http://localhost/api/raio-x', {
      method: 'POST',
      body: JSON.stringify({
        dadosUsuario: {
          nome: 'João',
          email: 'invalid-email',
          telefone: '11999999999'
        },
        respostas: {},
        score: 50
      })
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toContain('email');
  });
});
```

## Testes de Integração

### Formulário Completo
```typescript
describe('Raio-X Form Integration', () => {
  it('should submit form and receive email', async () => {
    // Mock do Nodemailer
    jest.mock('nodemailer', () => ({
      createTransport: jest.fn(() => ({
        sendMail: jest.fn().mockResolvedValue({ messageId: 'test-id' })
      }))
    }));
    
    // Renderizar formulário
    render(<RaioXForm />);
    
    // Preencher campos
    fireEvent.change(screen.getByLabelText('Nome'), {
      target: { value: 'João Silva' }
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'joao@example.com' }
    });
    
    // Submeter
    fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));
    
    // Verificar sucesso
    await waitFor(() => {
      expect(screen.getByText('Diagnóstico enviado com sucesso')).toBeInTheDocument();
    });
  });
});
```

## Testes End-to-End

### User Flows
```typescript
// Exemplo com Playwright
import { test, expect } from '@playwright/test';

test.describe('Calculadoras Flow', () => {
  test('should calculate CAC successfully', async ({ page }) => {
    await page.goto('/calculadoras');
    
    // Clicar na calculadora CAC
    await page.click('text=CAC');
    
    // Preencher campos
    await page.fill('[name="marketing"]', '10000');
    await page.fill('[name="vendas"]', '5000');
    await page.fill('[name="clientes"]', '100');
    
    // Calcular
    await page.click('button:has-text("Calcular")');
    
    // Verificar resultado
    await expect(page.locator('text=R$ 150,00')).toBeVisible();
  });
});

test.describe('Raio-X Flow', () => {
  test('should complete Raio-X and receive email', async ({ page }) => {
    await page.goto('/raio-x');
    
    // Preencher formulário
    await page.fill('[name="nome"]', 'João Silva');
    await page.fill('[name="email"]', 'joao@example.com');
    await page.fill('[name="telefone"]', '11999999999');
    
    // Navegar pelos steps
    await page.click('button:has-text("Próximo")');
    
    // Preencher respostas
    await page.fill('[name="faturamento"]', '100000');
    await page.selectOption('[name="segmento"]', 'varejo');
    
    // Submeter
    await page.click('button:has-text("Enviar")');
    
    // Verificar confirmação
    await expect(page.locator('text=Diagnóstico enviado')).toBeVisible();
  });
});
```

## Critérios de Aceitação de Testes

### Coverage Requirements
- **Unit Tests:** > 80% code coverage
- **Integration Tests:** > 70% API coverage
- **E2E Tests:** > 90% user flow coverage

### Performance Tests
- **Load Testing:** 1000 concurrent users
- **Stress Testing:** 5000 concurrent users
- **Response Time:** < 500ms for 95% of requests
- **PageSpeed Insights:** > 90 score

### Security Tests
- **Input Validation:** Test with malicious inputs
- **XSS Prevention:** Test script injection attempts
- **Rate Limiting:** Test rate limit enforcement
- **Email Validation:** Test invalid email formats

### Accessibility Tests
- **WCAG 2.1 AA:** All pages must comply
- **Screen Reader:** Test with screen readers (NVDA, JAWS)
- **Keyboard Navigation:** All functionality accessible via keyboard
- **Color Contrast:** Minimum 4.5:1 ratio (tested with tools)

### Browser Compatibility Tests
- **Chrome 90+:** All features working
- **Safari 14+:** All features working
- **Firefox 88+:** All features working
- **Edge 90+:** All features working
- **Mobile Safari (iOS 14+):** Responsive design working
- **Chrome Mobile (Android):** Responsive design working

## Testes de Regressão

### Checklist de Regressão
- [ ] Todas as calculadoras funcionam corretamente
- [ ] Formulário de Raio-X envia emails
- [ ] Blog carrega e exibe artigos
- [ ] Navegação funciona em todas as páginas
- [ ] Formulários de contato funcionam
- [ ] Responsividade em mobile/tablet/desktop
- [ ] Animações e transições suaves
- [ ] Performance dentro dos limites

## Testes de Acessibilidade

### Ferramentas
- **axe DevTools:** Teste automatizado
- **WAVE:** Validação de acessibilidade
- **Lighthouse:** Auditoria de acessibilidade
- **Manual Testing:** Navegação por teclado, screen readers

### Checklist
- [ ] Todos os botões têm aria-labels
- [ ] Imagens têm alt text descritivo
- [ ] Formulários têm labels associados
- [ ] Contraste de cores adequado
- [ ] Foco visível em elementos interativos
- [ ] Navegação por teclado funcional
- [ ] Screen reader anuncia conteúdo corretamente

