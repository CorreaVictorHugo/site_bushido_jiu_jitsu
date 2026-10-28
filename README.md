# Bushido — Jiu-Jitsu

Site institucional conceitual para a equipe Bushido Jiu-Jitsu. A página usa uma linguagem de pôster esportivo para apresentar o manifesto, os pilares, a rotina de treino e o espaço reservado à memória da equipe.

**[Ver o site publicado](https://bushido-jiu-jitsu-old-scholl.vercel.app/)**

![Prévia da abertura do site Bushido](assets/og-bushido.webp)

## O que foi desenvolvido

- Página responsiva em HTML, CSS e JavaScript, sem framework ou etapa de build.
- Abertura com imagem adaptada ao tamanho da tela em AVIF e WebP.
- Navegação móvel, link para pular ao conteúdo, foco visível e suporte a movimento reduzido.
- Tipografia local e identidade visual em preto, papel e vermelho.
- Seção de memória preparada para receber registros reais da equipe, sem atribuir datas ou conquistas ainda não confirmadas.

## Estado do conteúdo

Este é um **projeto conceitual de portfólio**. O manifesto e os textos de treino são editoriais; a imagem de abertura é conceitual. Antes de usar o site como presença oficial da equipe, confirme textos, fotos, histórico, contato, endereço, horários e redes sociais com os responsáveis. Nenhum contato de exemplo é publicado na página.

## Executar localmente

```bash
git clone https://github.com/CorreaVictorHugo/site_bushido_jiu_jitsu.git
cd site_bushido_jiu_jitsu
npm run dev
```

Abra [http://127.0.0.1:4173](http://127.0.0.1:4173). O servidor local usa apenas o Node.js; também é possível abrir `index.html` diretamente no navegador.

Para verificar a sintaxe dos scripts:

```bash
npm run check
```

Para recriar as versões otimizadas da imagem de abertura a partir de `assets/hero-bushido.png`:

```bash
npm ci
npm run optimize-images
```

## Estrutura

```text
├── assets/                   # Imagem de origem, versões responsivas e imagem social
├── fonts/                    # Space Grotesk e licença da fonte
├── scripts/                  # Servidor local e otimização de imagens
├── index.html                # Conteúdo e metadados
├── style.css                 # Layout e identidade visual
├── script.js                 # Menu e animações opcionais
├── package.json
└── README.md
```

## Autoria e direitos

Desenvolvido por **Victor Hugo Correa**. O código-fonte está sob a [licença MIT](LICENSE). Essa licença não cobre a marca Bushido, o conteúdo editorial nem as imagens do projeto. A fonte Space Grotesk é distribuída conforme a [SIL Open Font License](fonts/OFL.txt).
