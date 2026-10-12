# Redesign implementado

## Auditoria e decisões

Stack preservada: React 19, TypeScript 6, Vite 8, Tailwind 4, Motion 12, React Icons 5 e Formspree React 3, conforme package.json. Nenhuma dependência de aplicação foi adicionada. A arquitetura de seções e os arrays de projetos/tecnologias foram mantidos.

| Antes | Depois | Motivo |
| --- | --- | --- |
| Navbar escura com textos herdados do tema claro | Navbar clara sticky, identidade fb e navegação ativa | Consistência e legibilidade |
| Benefícios da Hero em posicionamento absoluto | Grid no fluxo do documento | Evitar sobreposição e permitir reflow |
| Foto com dimensões rígidas e SVG decorativo extenso | Foto original circular, gradiente e formas CSS discretas | Proporção e clareza visual |
| Cores misturadas e tokens duplicados | Tokens semânticos e escopo para seções escuras | Manutenção e contraste |
| Carrossel com páginas ocultas focáveis | Apenas página ativa renderizada, navegação e seletor acessíveis | Teclado, performance e responsividade |
| Texto claro em Sobre claro | Hierarquia de texto escuro e tecnologias organizadas | Legibilidade |
| Inputs compactos e feedback limitado | Inputs maiores, autocomplete, obrigatórios e feedback acessível | Uso mobile e tratamento de estados |
| Link do rodapé para âncora inexistente #hero | Link para #home | Corrigir navegação |

## Arquivos

Modificados:

- `.gitignore`: exclui evidências temporárias `.qa/`.
- `index.html`: favicon, theme-color, preconnect e pesos da Inter; título/descrição existentes mantidos.
- `src/App.tsx`: landmarks, skip link e MotionConfig.
- `src/styles/index.css`: tokens, estilos base e padrões reutilizáveis.
- `src/styles/App.css`: composição de todas as seções e breakpoints.
- `src/components/navbar.tsx`, `src/components/footer.tsx`: navegação e identidade.
- `src/sections/Hero.tsx`, `Projetos.tsx`, `Sobre.tsx`, `Contato.tsx`: redesign visual e acessibilidade.
- `src/lib/motion.ts`: entrada mais curta e sutil.
- `src/data/projetos.ts`: somente extensões dos imports das imagens; dados e URLs preservados.

Criados:

- `src/components/SocialLinks.tsx`: redes sociais compartilhadas.
- `src/components/Reveal.tsx`: entrada de conteúdo respeitando reduced motion.
- `src/assets/img/{avanti,avatar2,ebc,econverse,fernando2,git,jogo,jokenpo,onebitflix,onebitx,pet,pokedex,sistema,smash,tirarvisto}.webp`.
- `DESIGN.md` e este relatório.

## Skills e fontes consultadas

Skill disponível utilizada: Sites, no fluxo local, sem hospedagem ou publicação.

As três skills solicitadas não estavam instaladas no ambiente. Foram consultados os SKILL.md públicos e referências relevantes de [Emil Kowalski / emil-design-eng](https://github.com/emilkowalski/skills/tree/main/skills/emil-design-eng), [Impeccable](https://github.com/pbakaus/impeccable) e [Taste Skill](https://github.com/Leonxlnx/taste-skill). Foram aplicados princípios de hierarquia, ritmo, contraste, preservação de conteúdo, movimento intencional e revisão visual. Isso não equivale à instalação ou execução integral dos motores dessas skills. O carregador/detector do Impeccable não foi executado; houve revisão independente do código e das capturas.

Para habilitar as skills, os READMEs oficiais consultados documentam:

```powershell
npx skills@latest add emilkowalski/skills
npx impeccable install
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

Esses comandos são instruções de habilitação e não foram executados nesta alteração. A configuração global do ambiente foi preservada.

## Validação executada

- `npm run lint`: passou.
- `npm run build`: passou, incluindo `tsc -b`.
- Chrome headless com Playwright em 320, 375, 430, 768, 1024, 1440 e 1920 px: sem scroll horizontal, elementos transbordando ou imagens quebradas.
- axe-core com regras WCAG 2 A/AA e 2.1 A/AA nas sete larguras: nenhuma violação detectada. Auditoria automatizada não equivale a certificação completa de acessibilidade.
- Menu mobile: abertura, Escape e foco, navegação para seção.
- Skip link: acessível via Tab e direcionando foco ao conteúdo.
- Todos os 12 projetos adicionais alcançáveis; limites da paginação, seletor e remapeamento entre mobile/desktop verificados.
- Formulário: campos obrigatórios, sucesso e erro testados com respostas interceptadas localmente. Nenhuma mensagem real foi enviada.
- Reduced motion: rolagem instantânea e animação decorativa desativada.
- Nenhum erro JavaScript capturado durante os testes.
- Inspeção visual de desktop e mobile; evidências em `.qa/` (ignoradas pelo Git), incluindo `report.json` e screenshots. Ferramentas de QA instaladas somente em diretório temporário, fora das dependências do projeto.

As imagens usadas no build passaram de 16.198.498 para 1.137.978 bytes (93% de redução). JS final: cerca de 383 kB, 123 kB gzip. Nenhuma promessa de Core Web Vitals é feita: Lighthouse e métricas em produção não foram medidos.

## Limitações

- A imagem de referência mencionada no briefing não veio no anexo; a direção seguiu a descrição textual.
- URLs dos projetos e redes foram preservadas; a disponibilidade dos sites de terceiros não foi auditada.
- Entrega real do Formspree não foi testada para evitar envio de mensagem sem autorização.
- Nenhuma publicação foi feita. Execute `npm run dev` para visualizar o resultado local.
