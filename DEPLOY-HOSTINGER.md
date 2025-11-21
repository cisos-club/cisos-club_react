# 🚀 Guia de Deploy - CISO's Club Website na Hostinger

## 📋 Pré-requisitos

- Conta ativa na Hostinger
- Acesso ao painel de controle (hPanel)
- Domínio configurado (ex: cisosclub.com.br)

## 🎯 Opções de Deploy

### Opção 1: Upload Manual (Mais Simples)

#### Passo 1: Preparar os arquivos
1. ✅ **Build já criado** - A pasta `dist/` contém todos os arquivos necessários
2. ✅ **Arquivo ZIP criado** - `cisos-club-website-build.zip` está pronto para upload

#### Passo 2: Upload via File Manager
1. Acesse o **hPanel** da Hostinger
2. Vá em **Arquivos** → **Gerenciador de Arquivos**
3. Navegue até a pasta `public_html` (ou pasta do seu domínio)
4. **Limpe a pasta** (remova arquivos existentes se necessário)
5. Faça upload do arquivo `cisos-club-website-build.zip`
6. **Extraia o arquivo ZIP** diretamente no File Manager
7. **Mova todos os arquivos** da pasta `dist/` para a raiz do `public_html`
8. **Delete** a pasta `dist/` vazia e o arquivo ZIP

#### Passo 3: Verificar estrutura final
A pasta `public_html` deve conter:
```
public_html/
├── index.html
├── .htaccess
├── favicon.ico
└── assets/
    ├── index-B7DijS8T.css
    └── index-BnDqdHVO.js
```

### Opção 2: Git Deploy (Recomendado para atualizações)

#### Passo 1: Configurar repositório
1. Crie um repositório no GitHub/GitLab
2. Faça push do código fonte (não o build)
3. Configure o repositório como público ou adicione chaves SSH

#### Passo 2: Configurar Auto Deploy na Hostinger
1. No hPanel, vá em **Avançado** → **Git**
2. Clique em **Criar novo repositório**
3. Configure:
   - **Repository URL**: URL do seu repositório
   - **Branch**: main ou master
   - **Destination path**: public_html
   - **Build command**: `npm run build`
   - **Output directory**: dist

## ⚙️ Configurações Importantes

### 1. Configuração do Node.js
- **Versão recomendada**: Node.js 18+
- No hPanel: **Avançado** → **Node.js** → Selecionar versão 18+

### 2. Variáveis de Ambiente (se necessário)
No hPanel → **Avançado** → **Variáveis de Ambiente**:
```
NODE_ENV=production
```

### 3. Configuração de Domínio
1. **Domínio Principal**: Configure para apontar para `public_html`
2. **Subdomínio**: Se usar subdomínio, configure para apontar para a pasta correta
3. **SSL**: Ative o certificado SSL gratuito da Hostinger

## 🔧 Configurações do .htaccess

O arquivo `.htaccess` já está incluído no build com:
- ✅ Redirecionamento para React Router
- ✅ Headers de segurança
- ✅ Cache de arquivos estáticos
- ✅ Compressão GZIP
- ✅ Proteção de arquivos sensíveis

## 🧪 Testes Pós-Deploy

### 1. Verificações Básicas
- [ ] Site carrega na URL principal
- [ ] Todas as páginas são acessíveis via navegação
- [ ] URLs diretas funcionam (ex: seudominio.com/membros)
- [ ] Formulários estão funcionais
- [ ] Design responsivo em mobile

### 2. Verificações de Performance
- [ ] Tempo de carregamento < 3 segundos
- [ ] Imagens otimizadas
- [ ] CSS e JS minificados
- [ ] GZIP ativo

### 3. Verificações de SEO
- [ ] Meta tags carregando corretamente
- [ ] Título da página correto
- [ ] Sitemap.xml (opcional)
- [ ] Google Analytics (se configurado)

## 🚨 Solução de Problemas

### Problema: Página em branco
**Solução**: Verifique se todos os arquivos da pasta `dist/` estão na raiz do `public_html`

### Problema: 404 em rotas diretas
**Solução**: Verifique se o arquivo `.htaccess` está presente e configurado corretamente

### Problema: CSS não carrega
**Solução**: Verifique se a pasta `assets/` está presente com os arquivos CSS e JS

### Problema: Formulários não funcionam
**Solução**: Configure endpoints de backend ou serviços como Formspree/Netlify Forms

## 📞 Suporte

### Hostinger Support
- **Chat**: Disponível 24/7 no hPanel
- **Knowledge Base**: help.hostinger.com
- **Tutoriais**: YouTube Hostinger Brasil

### Suporte Técnico do Site
- **Email**: dev@cisosclub.com.br
- **Documentação**: README.md do projeto

## 🔄 Atualizações Futuras

### Para atualizações manuais:
1. Faça as alterações no código
2. Execute `pnpm run build`
3. Faça upload da nova pasta `dist/`

### Para atualizações via Git:
1. Faça push das alterações
2. No hPanel → **Git** → **Pull Changes**
3. O build será executado automaticamente

## ✅ Checklist Final

- [ ] Build criado com sucesso
- [ ] Arquivos enviados para Hostinger
- [ ] .htaccess configurado
- [ ] Domínio apontando corretamente
- [ ] SSL ativado
- [ ] Site testado em diferentes dispositivos
- [ ] Formulários testados
- [ ] Performance verificada
- [ ] SEO básico configurado

---

**🎉 Parabéns! Seu site do CISO's Club está no ar!**

Acesse: https://seudominio.com.br
