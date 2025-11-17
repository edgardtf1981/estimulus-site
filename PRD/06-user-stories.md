# 📖 User Stories

## Epic 1: Calculadoras de Métricas

### Story 1.1: Visualizar Calculadoras Disponíveis
**Como** um gestor de PME  
**Eu quero** ver todas as calculadoras disponíveis  
**Para** escolher qual métrica desejo calcular

**Critérios de Aceitação:**
- [ ] Grid responsivo com 4 calculadoras (CAC, LTV, ROI, Churn)
- [ ] Cada card mostra ícone, título e subtítulo
- [ ] Cards clicáveis que expandem a calculadora
- [ ] Design consistente com paleta Estimulus
- [ ] Animações suaves ao hover

**Tarefas Técnicas:**
- [ ] Criar página `/calculadoras`
- [ ] Implementar grid responsivo
- [ ] Criar componente `CalculatorCard`
- [ ] Adicionar estados de hover e active

### Story 1.2: Calcular CAC (Custo de Aquisição de Cliente)
**Como** um gestor  
**Eu quero** calcular o CAC do meu negócio  
**Para** entender quanto gasto para adquirir cada cliente

**Critérios de Aceitação:**
- [ ] Campos: Custos de Marketing, Custos de Vendas, Número de Clientes
- [ ] Validação: todos os campos obrigatórios e numéricos positivos
- [ ] Cálculo: (Marketing + Vendas) / Clientes
- [ ] Resultado formatado como R$ X.XX
- [ ] Mensagem de erro se número de clientes = 0
- [ ] Opção de receber resultado por email

**Tarefas Técnicas:**
- [ ] Criar componente `CACCalculator`
- [ ] Implementar lógica de cálculo
- [ ] Adicionar validação de inputs
- [ ] Formatação de moeda brasileira
- [ ] Integração com sistema de email

### Story 1.3: Receber Resultado de Cálculo por Email
**Como** um usuário  
**Eu quero** receber o resultado da calculadora por email  
**Para** ter um registro e material explicativo

**Critérios de Aceitação:**
- [ ] Checkbox "Receber resultado por email"
- [ ] Campo de email aparece quando checkbox marcado
- [ ] Validação de email em tempo real
- [ ] Email enviado com resultado formatado
- [ ] Email inclui material explicativo sobre a métrica
- [ ] Confirmação visual de envio bem-sucedido

**Tarefas Técnicas:**
- [ ] Criar API route `/api/calculadora/email`
- [ ] Template de email HTML
- [ ] Integração com Nodemailer
- [ ] Validação de email no frontend e backend

## Epic 2: Diagnóstico Raio-X

### Story 2.1: Preencher Formulário de Diagnóstico
**Como** um gestor  
**Eu quero** preencher um formulário sobre meu negócio  
**Para** receber um diagnóstico personalizado gratuito

**Critérios de Aceitação:**
- [ ] Formulário multi-step intuitivo
- [ ] Campos: Nome, Email, Telefone, Faturamento, Segmento, Problemas
- [ ] Validação em tempo real
- [ ] Progress indicator mostrando passo atual
- [ ] Botões de navegação (Anterior/Próximo)
- [ ] Botão de submit final

**Tarefas Técnicas:**
- [ ] Criar página `/raio-x`
- [ ] Implementar componente multi-step
- [ ] Validação com regex e Zod (futuro)
- [ ] Gerenciamento de estado do formulário
- [ ] Animações de transição entre steps

### Story 2.2: Receber Diagnóstico com Score
**Como** um gestor  
**Eu quero** ver meu score e recomendações  
**Para** entender o estado atual do meu negócio

**Critérios de Aceitação:**
- [ ] Score calculado automaticamente (0-100)
- [ ] Exibição visual do score (barra de progresso, número)
- [ ] Recomendações baseadas no score
- [ ] CTA para agendar consultoria
- [ ] Email automático com diagnóstico completo

**Tarefas Técnicas:**
- [ ] Algoritmo de cálculo de score
- [ ] Componente de visualização de score
- [ ] Template de email com diagnóstico
- [ ] API route para processar e enviar

## Epic 3: Blog e Conteúdo

### Story 3.1: Navegar pelos Artigos do Blog
**Como** um usuário  
**Eu quero** ver a lista de artigos disponíveis  
**Para** encontrar conteúdo relevante sobre fidelização

**Critérios de Aceitação:**
- [ ] Lista de artigos com título, excerpt, data, categoria
- [ ] Imagem destacada de cada artigo
- [ ] Paginação (se necessário)
- [ ] Filtro por categoria
- [ ] Busca por título/conteúdo
- [ ] Design responsivo

**Tarefas Técnicas:**
- [ ] Criar página `/blog`
- [ ] Carregar posts de `blog-posts.json`
- [ ] Implementar componente `BlogCard`
- [ ] Sistema de busca (futuro)
- [ ] Filtros por categoria

### Story 3.2: Ler Artigo Completo
**Como** um usuário  
**Eu quero** ler o artigo completo  
**Para** aprender sobre fidelização e estratégias

**Critérios de Aceitação:**
- [ ] Página individual para cada artigo (`/blog/[slug]`)
- [ ] Conteúdo Markdown renderizado corretamente
- [ ] Títulos, parágrafos, listas formatados
- [ ] Imagens otimizadas e responsivas
- [ ] Sugestões de artigos relacionados
- [ ] Botões de compartilhamento social
- [ ] SEO otimizado (meta tags, structured data)

**Tarefas Técnicas:**
- [ ] Criar página dinâmica `/blog/[slug]`
- [ ] Parser de Markdown customizado
- [ ] Estilização de conteúdo Markdown
- [ ] Componente de artigos relacionados
- [ ] Meta tags dinâmicas

## Epic 4: Contato e Conversão

### Story 4.1: Preencher Formulário de Contato
**Como** um visitante interessado  
**Eu quero** enviar uma mensagem de contato  
**Para** agendar consultoria ou tirar dúvidas

**Critérios de Aceitação:**
- [ ] Formulário com campos: Nome, Email, Telefone, Mensagem
- [ ] Validação em tempo real
- [ ] Mensagens de erro claras
- [ ] Confirmação visual de envio
- [ ] Rate limiting (máximo 3 envios por hora)
- [ ] Email enviado para equipe Estimulus

**Tarefas Técnicas:**
- [ ] Criar seção de contato na homepage
- [ ] Componente de formulário acessível
- [ ] API route `/api/contato`
- [ ] Integração com Nodemailer
- [ ] Rate limiting no backend

### Story 4.2: Agendar Consultoria
**Como** um gestor interessado  
**Eu quero** agendar uma consultoria  
**Para** receber orientação personalizada

**Critérios de Aceitação:**
- [ ] CTA "Agendar Consultoria" em múltiplos pontos
- [ ] Scroll suave até seção de contato
- [ ] Formulário pré-preenchido com assunto "Agendamento"
- [ ] Confirmação de recebimento
- [ ] Email automático de confirmação

**Tarefas Técnicas:**
- [ ] Implementar scroll suave com `scrollIntoView`
- [ ] Pré-preenchimento de campos quando aplicável
- [ ] Template de email de confirmação

## Epic 5: Navegação e UX

### Story 5.1: Navegar pelo Site
**Como** um visitante  
**Eu quero** navegar facilmente pelo site  
**Para** encontrar informações rapidamente

**Critérios de Aceitação:**
- [ ] Header fixo com menu responsivo
- [ ] Links de navegação funcionais
- [ ] Menu mobile com hamburger
- [ ] Scroll suave entre seções
- [ ] Botão "Voltar ao topo" após scroll
- [ ] Breadcrumbs em páginas internas

**Tarefas Técnicas:**
- [ ] Componente `Header` com navegação
- [ ] Menu mobile com animações
- [ ] Implementar scroll suave
- [ ] Componente `BackToTop`

### Story 5.2: Visualizar Soluções Oferecidas
**Como** um visitante  
**Eu quero** ver as soluções oferecidas pela Estimulus  
**Para** entender como posso ser ajudado

**Critérios de Aceitação:**
- [ ] Seção "FINX 360" com descrição detalhada
- [ ] Cards de soluções (Cursos, Criação)
- [ ] Preços e planos quando aplicável
- [ ] CTAs para cada solução
- [ ] Design visual atraente

**Tarefas Técnicas:**
- [ ] Seção de soluções na homepage
- [ ] Componentes de cards
- [ ] Animações de hover
- [ ] Links para formulários de contato

