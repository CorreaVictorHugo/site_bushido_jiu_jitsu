# 🥋 Bushido — Jiu-Jitsu

Site institucional desenvolvido para a equipe **Bushido Jiu-Jitsu**, com foco em identidade, filosofia, rotina de treinamento e história da equipe.

O projeto foi pensado para fugir do padrão tradicional de landing pages de academias e apresentar a Bushido como uma equipe, uma comunidade e um caminho de evolução dentro e fora do tatame.

---

## 📸 Preview

![Bushido Jiu-Jitsu — Preview]
(https://bushido-jiu-jitsu-old-scholl.vercel.app/)

## ✨ Sobre o projeto

O site apresenta a identidade da Bushido através de uma experiência visual editorial e esportiva.

A proposta combina:

- fotografia em destaque;
- tipografia marcante;
- contraste entre preto, papel e vermelho;
- navegação simples;
- animações sutis;
- conteúdo institucional;
- princípios da equipe;
- rotina de treinamento;
- espaço para construção da história da equipe.

O projeto prioriza **experiência visual, performance, acessibilidade e responsividade**.

---

## 🎯 Objetivos

- apresentar a identidade da equipe;
- comunicar os valores da Bushido;
- criar uma experiência visual diferente de sites genéricos de academias;
- funcionar bem em dispositivos móveis e desktops;
- utilizar imagens otimizadas para diferentes tamanhos de tela;
- oferecer navegação acessível;
- manter uma estrutura simples e fácil de manter.

---

## 🧭 Estrutura do site

### Manifesto

Apresenta a filosofia da equipe e sua visão sobre treinamento, disciplina, evolução e aprendizado.

### Pilares

Três princípios orientam a comunicação da equipe:

- **Técnica**
- **Constância**
- **Respeito**

### Rotina

Apresenta a dinâmica de um treino:

1. Preparar
2. Aprender
3. Testar
4. Evoluir

### Memória

Área destinada à construção do arquivo histórico da equipe, incluindo treinos, graduações, campeonatos, encontros e outros momentos importantes.

> O conteúdo histórico real será adicionado conforme o acervo da equipe for organizado.

---

## 🛠️ Tecnologias

- **HTML5**
- **CSS3**
- **JavaScript**
- **Node.js**
- **Sharp**

### Recursos utilizados

- HTML semântico
- CSS Variables
- CSS Grid
- Flexbox
- Media Queries
- `IntersectionObserver`
- `prefers-reduced-motion`
- imagens responsivas com `<picture>`
- formatos WebP e AVIF
- Open Graph
- Twitter Cards
- Schema.org / JSON-LD
- recursos de acessibilidade

---

## ⚡ Performance

As imagens principais possuem versões otimizadas para diferentes tamanhos de tela.

São utilizados:

- AVIF
- WebP
- diferentes resoluções
- `srcset`
- `sizes`
- `fetchpriority`

As imagens são processadas através do script:

```text
scripts/optimize-images.mjs
```

O script utiliza o pacote `sharp` para gerar versões otimizadas dos arquivos.

---

## ♿ Acessibilidade

O projeto possui práticas voltadas à acessibilidade, incluindo:

- `lang="pt-BR"`
- HTML semântico
- textos alternativos nas imagens
- navegação por teclado
- `:focus-visible`
- skip link para o conteúdo principal
- atributos ARIA quando necessários
- suporte a `prefers-reduced-motion`

---

## 📁 Estrutura do projeto

```text
site_bushido_jiu_jitsu/
│
├── assets/
│   ├── hero-bushido.png
│   ├── hero-bushido.webp
│   ├── hero-bushido.avif
│   ├── hero-bushido-480w.webp
│   ├── hero-bushido-800w.webp
│   ├── hero-bushido-1200w.webp
│   ├── hero-bushido-1600w.webp
│   ├── hero-bushido-480w.avif
│   ├── hero-bushido-800w.avif
│   ├── hero-bushido-1200w.avif
│   ├── hero-bushido-1600w.avif
│   └── og-bushido.webp
│
├── docs/
│   ├── preview.webp
│   └── stories/
│       └── 1.1-site-institucional-mobile-first.md
│
├── fonts/
│   ├── fonts.css
│   ├── SpaceGrotesk-300.ttf
│   ├── SpaceGrotesk-400.ttf
│   ├── SpaceGrotesk-500.ttf
│   ├── SpaceGrotesk-600.ttf
│   └── SpaceGrotesk-700.ttf
│
├── scripts/
│   └── optimize-images.mjs
│
├── index.html
├── script.js
├── style.css
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/CorreaVictorHugo/site_bushido_jiu_jitsu.git
```

### 2. Entre na pasta

```bash
cd site_bushido_jiu_jitsu
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

O projeto utiliza um servidor estático para disponibilizar os arquivos localmente.

---

## 🖼️ Otimização de imagens

Para gerar as versões responsivas das imagens:

```bash
npm run optimize-images
```

O processo gera versões em diferentes resoluções e formatos para utilização pelo site.

---

## 🔍 Verificação do JavaScript

Para verificar a sintaxe do JavaScript:

```bash
npm run lint
```

Também está disponível:

```bash
npm run typecheck
```

---

## 📱 Responsividade

O site foi desenvolvido considerando diferentes tamanhos de tela, com foco inicial em dispositivos móveis.

A interface adapta:

- navegação;
- tipografia;
- espaçamento;
- imagens;
- composição das seções;
- cards;
- elementos interativos.

---

## 🎨 Identidade visual

A direção visual utiliza uma linguagem inspirada em pôsteres esportivos e editoriais.

### Conceitos

**Preto**  
Força, concentração e intensidade.

**Papel**  
Humanidade, materialidade e memória.

**Vermelho**  
Energia e identidade.

**Tipografia**  
Comunicação direta, rígida e contemporânea.

---

## 📌 Estado do projeto

**Em desenvolvimento.**

A estrutura principal do site está implementada, enquanto algumas informações institucionais e registros históricos ainda serão substituídos pelo conteúdo oficial da equipe.

Próximas etapas podem incluir:

- adicionar informações reais da equipe;
- adicionar história e registros fotográficos;
- inserir dados de contato oficiais;
- adicionar localização;
- adicionar horários de treino;
- integrar redes sociais;
- melhorar SEO;
- adicionar testes automatizados;
- publicar a versão definitiva.

---

## ⚠️ Conteúdo

Algumas partes do conteúdo atual são textos-base desenvolvidos para estruturar a experiência do site.

Informações institucionais, datas, registros históricos, contatos e demais dados deverão ser substituídos pelos dados oficiais da equipe antes da publicação definitiva.

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido por **Victor Hugo Correa**.

---

## 📄 Licença

Este projeto foi desenvolvido para a apresentação e utilização do site da equipe Bushido Jiu-Jitsu.

A utilização, reprodução ou redistribuição dos conteúdos, imagens, identidade visual e materiais específicos do projeto deve respeitar seus respectivos direitos.
