# Script para criar repositório no GitHub via API
# Requer um Personal Access Token do GitHub

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubToken,
    
    [string]$RepoName = "estimulus-site",
    [string]$Description = "Site institucional da Estimulus",
    [bool]$Private = $true
)

Write-Host "🚀 Criando repositório no GitHub..." -ForegroundColor Cyan

$headers = @{
    "Authorization" = "token $GitHubToken"
    "Accept" = "application/vnd.github.v3+json"
}

$body = @{
    name = $RepoName
    description = $Description
    private = $Private
    auto_init = $false
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body -ContentType "application/json"
    
    Write-Host "✅ Repositório criado com sucesso!" -ForegroundColor Green
    Write-Host "📦 Nome: $($response.name)" -ForegroundColor White
    Write-Host "🔗 URL: $($response.html_url)" -ForegroundColor White
    Write-Host "`n📝 Próximo passo: git push -u origin master" -ForegroundColor Yellow
    
    return $response
} catch {
    Write-Host "❌ Erro ao criar repositório:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    
    if ($_.Exception.Response.StatusCode -eq 401) {
        Write-Host "`n💡 Dica: Verifique se o token está válido e tem permissão 'repo'" -ForegroundColor Yellow
    } elseif ($_.Exception.Response.StatusCode -eq 422) {
        Write-Host "`n💡 Dica: O repositório pode já existir ou o nome é inválido" -ForegroundColor Yellow
    }
    
    exit 1
}

