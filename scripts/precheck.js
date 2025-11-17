const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class PreDeployChecker {
  constructor() {
    this.errors = [];
    this.warnings = [];
  }

  // Verificar arquivos essenciais
  checkEssentialFiles() {
    const requiredFiles = [
      'package.json',
      'next.config.js',
      'app/layout.tsx',
      'app/page.tsx',
      'vercel.json',
    ];

    requiredFiles.forEach(file => {
      if (!fs.existsSync(file)) {
        this.errors.push(`Arquivo obrigatório não encontrado: ${file}`);
      } else {
        console.log(`✓ ${file} encontrado`);
      }
    });
  }

  // Verificar dependências
  checkDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      console.log('✓ package.json válido');
      
      // Verificar se há dependências críticas
      const criticalDeps = ['next', 'react', 'react-dom'];
      criticalDeps.forEach(dep => {
        if (!packageJson.dependencies[dep] && !packageJson.devDependencies[dep]) {
          this.warnings.push(`Dependência crítica não encontrada: ${dep}`);
        }
      });
    } catch (error) {
      this.errors.push('Erro ao ler package.json: ' + error.message);
    }
  }

  // Verificar build
  checkBuild() {
    try {
      console.log('Executando build...');
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✓ Build executado com sucesso');
    } catch (error) {
      this.errors.push('Build falhou');
    }
  }

  // Verificar tipos TypeScript
  checkTypeScript() {
    try {
      console.log('Verificando tipos TypeScript...');
      execSync('npx tsc --noEmit', { stdio: 'inherit' });
      console.log('✓ Tipos TypeScript verificados');
    } catch (error) {
      this.errors.push('Erro de tipos TypeScript');
    }
  }

  // Verificar variáveis de ambiente (apenas aviso, não erro)
  checkEnvironmentVariables() {
    const recommendedEnvVars = [
      'SMTP_HOST',
      'SMTP_USER',
      'SMTP_PASS',
    ];

    recommendedEnvVars.forEach(envVar => {
      if (!process.env[envVar]) {
        this.warnings.push(`Variável de ambiente recomendada não configurada: ${envVar}`);
      }
    });
  }

  // Verificar tamanho do bundle
  checkBundleSize() {
    const bundlePath = '.next/static/chunks/';
    if (fs.existsSync(bundlePath)) {
      try {
        const size = execSync(`du -sh ${bundlePath}`, { encoding: 'utf8' });
        const sizeValue = size.split('\t')[0];
        console.log(`✓ Tamanho do bundle: ${sizeValue.trim()}`);
        
        // Extrair número do tamanho
        const sizeMatch = sizeValue.match(/(\d+\.?\d*)([KMGT]?)/);
        if (sizeMatch) {
          const value = parseFloat(sizeMatch[1]);
          const unit = sizeMatch[2] || '';
          
          let sizeInMB = value;
          if (unit === 'K') sizeInMB = value / 1024;
          if (unit === 'G') sizeInMB = value * 1024;
          
          if (sizeInMB > 50) {
            this.warnings.push(`Bundle muito grande: ${sizeValue.trim()} (>50MB recomendado)`);
          }
        }
      } catch (error) {
        this.warnings.push('Não foi possível verificar tamanho do bundle');
      }
    } else {
      this.warnings.push('Bundle não encontrado. Execute npm run build primeiro.');
    }
  }

  // Verificar performance
  checkPerformance() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      // Verificar dependências pesadas
      const heavyDependencies = ['lodash', 'moment', 'jquery'];
      
      heavyDependencies.forEach(dep => {
        if (packageJson.dependencies && packageJson.dependencies[dep]) {
          this.warnings.push(`Dependência pesada encontrada: ${dep} (considere alternativas mais leves)`);
        }
      });
    } catch (error) {
      // Ignorar erro
    }
  }

  // Executar todas as verificações
  async runAllChecks() {
    console.log('🔍 Iniciando verificações pré-deploy...\n');
    
    this.checkEssentialFiles();
    this.checkDependencies();
    this.checkEnvironmentVariables();
    this.checkPerformance();
    
    // Verificações que requerem build
    if (fs.existsSync('.next')) {
      this.checkBundleSize();
    } else {
      console.log('⚠️  Pasta .next não encontrada. Execute npm run build primeiro.');
    }
    
    // Mostrar resultados
    console.log('\n📊 Resultados das verificações:');
    
    if (this.errors.length > 0) {
      console.log('\n❌ ERROS ENCONTRADOS:');
      this.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (this.warnings.length > 0) {
      console.log('\n⚠️  AVISOS:');
      this.warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('\n✅ Todas as verificações passaram!');
    }
    
    // Sair com erro se houver problemas críticos
    if (this.errors.length > 0) {
      console.log('\n❌ Deploy não pode prosseguir devido aos erros acima.');
      process.exit(1);
    }
    
    console.log('\n🚀 Pronto para deploy!');
  }
}

// Executar verificações
const checker = new PreDeployChecker();
checker.runAllChecks().catch(error => {
  console.error('Erro ao executar verificações:', error);
  process.exit(1);
});

