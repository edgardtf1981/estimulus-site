# Script para fazer push para o GitHub
# Tenta criar o repositório se não existir

param(
    [string]$Branch = "master"
)

Write-Host "🚀 Preparando push para GitHub..." -ForegroundColor Cyan

# Verificar se remote existe
$remoteExists = git remote get-url origin 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Remote 'origin' não configurado!" -ForegroundColor Red
    Write-Host "Execute primeiro: .\scripts\setup-github.ps1" -ForegroundColor Yellow
    exit 1
}

Write-Host "📡 Remote configurado: $remoteExists" -ForegroundColor Green

# Tentar fazer push
Write-Host "`n📤 Tentando fazer push..." -ForegroundColor Cyan
$pushResult = git push -u origin $Branch 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Push realizado com sucesso!" -ForegroundColor Green
    Write-Host $pushResult
    exit 0
}

# Se falhou, verificar motivo
if ($pushResult -match "Repository not found") {
    Write-Host "`n⚠️  Repositório não encontrado no GitHub" -ForegroundColor Yellow
    Write-Host "`n📝 Você precisa criar o repositório primeiro:" -ForegroundColor Cyan
    Write-Host "1. Acesse: https://github.com/new" -ForegroundColor White
    Write-Host "2. Nome: estimulus-site-novo" -ForegroundColor White
    Write-Host "3. Escolha: Público ou Privado" -ForegroundColor White
    Write-Host "4. NÃO marque 'Initialize with README'" -ForegroundColor White
    Write-Host "5. Clique em 'Create repository'" -ForegroundColor White
    Write-Host "`nDepois execute novamente: .\scripts\push-to-github.ps1" -ForegroundColor Yellow
} elseif ($pushResult -match "Authentication failed" -or $pushResult -match "unauthorized") {
    Write-Host "`n❌ Erro de autenticação" -ForegroundColor Red
    Write-Host "💡 Você precisa configurar um token válido do GitHub" -ForegroundColor Yellow
    Write-Host "   Obtenha em: https://github.com/settings/tokens" -ForegroundColor White
    Write-Host "   Permissões necessárias: repo" -ForegroundColor White
} else {
    Write-Host "`n❌ Erro no push:" -ForegroundColor Red
    Write-Host $pushResult
}

exit $LASTEXITCODE

