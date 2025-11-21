# CISO's Club Website

Site oficial da maior comunidade de líderes de segurança da América Latina.

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework JavaScript moderno
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/UI** - Componentes de interface elegantes
- **Lucide React** - Ícones modernos
- **React Router DOM** - Roteamento SPA
- **Framer Motion** - Animações suaves

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de interface (shadcn/ui)
│   ├── Navigation.jsx  # Navegação principal
│   └── Footer.jsx      # Rodapé
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   ├── Sobre.jsx       # Sobre o CISO's Club
│   ├── Membros.jsx     # Para membros
│   ├── Patrocinadores.jsx # Para patrocinadores
│   ├── Eventos.jsx     # Eventos
│   ├── Conteudo.jsx    # Conteúdo & insights
│   └── Contato.jsx     # Contato
├── assets/             # Recursos estáticos
├── App.jsx             # Componente principal
├── App.css             # Estilos globais e tema
└── main.jsx            # Ponto de entrada
```

## 🎨 Design System

### Cores Principais
- **Primary**: Azul profundo (confiança e liderança)
- **Secondary**: Cinza grafite (seriedade e modernidade)
- **Accent**: Dourado (prestígio e exclusividade)

### Componentes
- Sistema de cores personalizado para o CISO's Club
- Animações suaves com hover states
- Design responsivo mobile-first
- Gradientes e efeitos glass morphism

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone o repositório
git clone <repository-url>
cd cisos-club-website

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm run dev
```

### Scripts Disponíveis
```bash
pnpm run dev          # Servidor de desenvolvimento
pnpm run build        # Build para produção
pnpm run preview      # Preview do build
pnpm run lint         # Verificação de código
```

## 🚀 Deploy na Hostinger

### Opção 1: Upload Manual
1. Execute o build: `pnpm run build`
2. Faça upload da pasta `dist/` para o diretório `public_html` da Hostinger
3. Configure o domínio para apontar para o diretório correto

### Opção 2: Git Deploy (Recomendado)
1. Conecte seu repositório Git à Hostinger
2. Configure o build automático:
   - Build command: `pnpm run build`
   - Output directory: `dist`
3. Configure as variáveis de ambiente se necessário

### Configurações Importantes
- **Node.js Version**: 18+
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

### Redirecionamentos (arquivo .htaccess)
Crie um arquivo `.htaccess` na pasta `public_html`:

```apache
RewriteEngine On
RewriteBase /

# Handle Angular and React Router
RewriteRule ^(?!.*\.).*$ /index.html [L]

# Security headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

## 📱 Funcionalidades

### Páginas Implementadas
- ✅ **Home** - Página inicial com hero section e estatísticas
- ✅ **Sobre** - História, missão, visão e valores
- ✅ **Para Membros** - Benefícios e formulário de candidatura
- ✅ **Para Patrocinadores** - Oportunidades e formulário de contato
- ✅ **Eventos** - Agenda e formatos de eventos
- ✅ **Conteúdo** - Blog e recursos
- ✅ **Contato** - Informações e formulário

### Recursos
- 📱 Design totalmente responsivo
- 🎨 Animações suaves e micro-interações
- 🔍 SEO otimizado com meta tags
- ⚡ Performance otimizada
- 🎯 Formulários funcionais
- 🧭 Navegação intuitiva

## 🔧 Customização

### Cores
Edite as variáveis CSS em `src/App.css` para personalizar o tema:

```css
:root {
  --primary: oklch(0.25 0.15 240);
  --secondary: oklch(0.35 0.02 240);
  --accent: oklch(0.75 0.12 85);
}
```

### Conteúdo
- Textos: Edite diretamente nos componentes das páginas
- Imagens: Adicione na pasta `src/assets/`
- Formulários: Configure endpoints nos componentes

## 📞 Suporte

Para dúvidas sobre o desenvolvimento ou deploy:
- Email: dev@cisosclub.com.br
- Documentação: [Hostinger Help Center](https://help.hostinger.com)

## 📄 Licença

© 2024 CISO's Club. Todos os direitos reservados.
