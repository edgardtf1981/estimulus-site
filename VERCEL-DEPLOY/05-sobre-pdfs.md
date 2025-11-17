# 📄 Sobre Arquivos PDF no Projeto

## 📋 Situação Atual

O projeto contém **3 arquivos PDF**:
1. `Id Visual Estimulus (4).pdf` (raiz)
2. `ESTIMULUS/estimulus Fidelização de Clientes.pdf`
3. `ESTIMULUS/PROPOSTA LISMELLOW.pdf`

## ✅ O Que Foi Feito

1. **Adicionado `*.pdf` ao `.gitignore`**
   - Os PDFs não serão commitados no Git
   - Evita aumentar o tamanho do repositório

## 🔧 Sobre "vscode-pdf"

### Se você quer **visualizar PDFs no VS Code**:

1. **Instalar extensão:**
   - Abra o VS Code
   - Vá em Extensions (Ctrl+Shift+X)
   - Procure por "PDF" ou "vscode-pdf"
   - Instale uma das opções:
     - `PDF` (por yzane)
     - `vscode-pdf` (por tomoki1207)

2. **Usar:**
   - Clique em qualquer arquivo `.pdf` no explorador
   - O PDF será aberto no VS Code

### Se você quer **gerar PDFs a partir de Markdown**:

O projeto já tem o pacote `md-to-pdf` instalado (devDependency).

**Para usar:**
```bash
# Gerar PDF de um arquivo markdown
npx md-to-pdf arquivo.md

# Gerar PDFs de todos os arquivos em uma pasta
npx md-to-pdf PRD/*.md
```

## 📁 Recomendações

### Opção 1: Manter PDFs Localmente
- ✅ PDFs ficam no projeto (já ignorados pelo Git)
- ✅ Útil para referência durante desenvolvimento
- ⚠️ Não serão enviados para o Vercel

### Opção 2: Mover PDFs para `public/`
Se você quiser servir os PDFs no site:
```bash
# Mover para public
mv "Id Visual Estimulus (4).pdf" public/
mv ESTIMULUS/*.pdf public/
```

Depois, acesse via: `https://seu-site.com/Id Visual Estimulus (4).pdf`

### Opção 3: Remover PDFs
Se não precisar mais:
```bash
# Remover PDFs
rm "Id Visual Estimulus (4).pdf"
rm ESTIMULUS/*.pdf
```

## 🎯 Conclusão

**Você não precisa fazer nada!** Os PDFs estão:
- ✅ Ignorados pelo Git (não serão commitados)
- ✅ Disponíveis localmente para referência
- ✅ Não afetam o build ou deploy

**Se quiser visualizar no VS Code:** Instale a extensão "PDF" ou "vscode-pdf".

