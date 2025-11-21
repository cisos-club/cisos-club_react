# Problemas de Legibilidade Identificados - CISO's Club

## Análise dos Problemas

Baseado na análise visual das páginas e nas imagens fornecidas pelo usuário, identifiquei os seguintes problemas de legibilidade:

### 1. Títulos de Seções com Texto Escuro em Fundo Escuro

**Páginas Afetadas:** Todas as páginas internas (Sobre, Membros, Patrocinadores, etc.)

**Problemas Identificados:**
- Títulos como "Nossos Diferenciais" aparecem em texto preto/escuro sobre fundo azul escuro
- Subtítulos e descrições também com contraste insuficiente
- Texto de "Depoimentos de Membros" difícil de ler

**Exemplos Específicos:**
- "Nossos Diferenciais" (texto escuro em fundo azul)
- "Depoimentos de Membros" (texto escuro em fundo azul)
- Descrições de seções com baixo contraste

### 2. Classes CSS Problemáticas

**Classes que precisam ser ajustadas:**
- Títulos de seção (`h2`, `h3`) em fundo escuro
- Texto de descrição (`text-muted-foreground`) em fundo escuro
- Parágrafos e subtítulos sem cor específica para fundo escuro

### 3. Seções Específicas com Problemas

**Página Sobre:**
- Seção "Nossos Valores" - títulos escuros
- Seção "Liderança" - texto de descrição
- Seção "Nossa Jornada" - títulos de timeline
- Seção "Nossos Diferenciais" - títulos e descrições

**Página Membros:**
- Seção "Depoimentos de Membros" - títulos escuros
- Seção "Benefícios Exclusivos" - descrições
- Formulários e labels

**Outras Páginas:**
- Padrão similar em todas as páginas internas

## Solução Necessária

### Abordagem Recomendada:
1. **Manter o fundo azul escuro** para consistência visual
2. **Ajustar as cores do texto** para garantir contraste adequado
3. **Usar classes Tailwind específicas** para texto em fundo escuro

### Classes CSS a Implementar:
- `text-white` para títulos principais
- `text-white/90` para subtítulos
- `text-white/80` para descrições
- `text-white/70` para texto secundário

### Elementos a Corrigir:
- Todos os `h2` e `h3` em seções com fundo escuro
- Parágrafos descritivos
- Labels de formulários
- Texto de cards e componentes
