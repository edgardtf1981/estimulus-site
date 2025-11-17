# Script para configurar o remote do GitHub
# Uso: .\scripts\setup-github.ps1 [username] [repo-name]

param(
    [string]$Username = "edgardtf",
    [string]$RepoName = "estimulus-site"
)

Write-Host "🔧 Configurando remote do GitHub..." -ForegroundColor Cyan

# Verificar se já existe remote
$existingRemote = git remote get-url origin 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "⚠️  Remote 'origin' já existe: $existingRemote" -ForegroundColor Yellow
    $response = Read-Host "Deseja substituir? (s/N)"
    if ($response -ne "s" -and $response -ne "S") {
        Write-Host "❌ Operação cancelada." -ForegroundColor Red
        exit 1
    }
    git remote remove origin
}

# Configurar remote
$remoteUrl = "https://github.com/$Username/$RepoName.git"
Write-Host "📡 Adicionando remote: $remoteUrl" -ForegroundColor Green
git remote add origin $remoteUrl

# Verificar conexão
Write-Host "🔍 Verificando conexão..." -ForegroundColor Cyan
git remote -v

Write-Host "`n✅ Remote configurado com sucesso!" -ForegroundColor Green
Write-Host "`n📝 Próximos passos:" -ForegroundColor Yellow
Write-Host "1. Crie o repositório no GitHub: https://github.com/new" -ForegroundColor White
Write-Host "   Nome: $RepoName" -ForegroundColor White
Write-Host "   NÃO marque 'Initialize with README'" -ForegroundColor White
Write-Host "2. Execute: git push -u origin master" -ForegroundColor White

