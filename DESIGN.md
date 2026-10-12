# Sistema visual do portfólio

## Direção

Portfólio de Fernando Barbosa para apresentar projetos e facilitar contato profissional. Linguagem Light Tech, clara, espaçosa e com identidade verde. A fotografia original e o nome conduzem a Hero. Projetos e Contato usam superfícies escuras; Sobre usa a mesma superfície clara da Hero. A alternância foi solicitada no briefing.

## Tokens

A fonte de verdade está em `src/styles/index.css`; os tokens de marca também são expostos ao Tailwind 4 por `@theme`.

| Papel | Token | Valor |
| --- | --- | --- |
| Fundo claro | `--bg` | `#F7F8F6` |
| Superfície clara | `--surface` | `#FFFFFF` |
| Texto claro | `--text` | `#171A18` |
| Texto secundário | `--muted` | `#606560` |
| Ação principal | `--primary` | `#00C853` |
| Texto verde sobre claro | `--green-dark` | `#007C3D` |
| Verde suave | `--green-soft` | `#DDFBE8` |
| Fundo escuro | `--bg-dark` | `#101311` |
| Card escuro | `--card` | `#191E1A` |
| Texto sobre escuro | `--text-dark` | `#F4F7F4` |
| Texto secundário sobre escuro | `--muted-dark` | `#ABB6AD` |
| Borda clara / escura | `--border` / `--border-dark` | `#E2E5E2` / `#343E36` |

O verde textual é mais escuro que o verde inicial do briefing para melhorar contraste. Botões verdes usam texto escuro. `.dark-section` redefine tokens sem duplicar estilos de componentes.

## Tipografia e composição

- Inter existente preservada, pesos 400/500/600/700 e carregamento com `display=swap`.
- Nome entre 55 e 94 px conforme a largura; títulos de seção entre 35 e 54 px, tracking de -0.04em.
- Container de até 1200 px, margens de 48 px no desktop e 16–20 px no mobile.
- Seções com 72–112 px de respiro; grupos de controles usam 8–16 px; cards usam 20–40 px.
- Raios de 7–8 px em controles e 12–14 px em cards. Sombra discreta reservada às imagens.
- Hero em duas colunas a partir de 768 px. Carrossel: 1 projeto abaixo de 640 px, 2 abaixo de 1024 px, 6 nas demais telas.

## Interações e acessibilidade

Foco visível, link para pular ao conteúdo, navegação semântica e estado ativo por IntersectionObserver. Menu mobile fecha com Escape, clique externo, saída de foco e seleção de destino; Escape devolve o foco ao botão. Paginação tem controles nomeados, seletor de página e anúncio de status; páginas ocultas não permanecem focáveis.

Hover só produz movimento em dispositivos com ponteiro preciso. Entradas e transições respeitam `prefers-reduced-motion`; `Reveal` reutiliza Motion existente. Formulário mantém o endpoint e todos os campos originais, com labels, autocomplete, validação, estado ocupado e feedback de sucesso/erro.

## Imagens

As 15 versões WebP são derivadas dos arquivos existentes, sem substituir o conteúdo das fotos ou capturas. Os originais permanecem no repositório. A Hero tem prioridade de carregamento; as outras imagens usam lazy loading, decoding assíncrono e espaço reservado.
