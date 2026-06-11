# Contexto Canônico da Landing Page - Kit Filho Responsável

**Identificador exclusivo:** `FR-LP-KIT-2026`  
**Tipo de projeto:** landing page de venda do produto Método Filho Responsável  
**Repositório oficial:** `https://github.com/GustavoFalcone/kit-filho-responsavel`  
**Branch de produção:** `main`  
**URL de produção:** `https://kit-filho-responsavel.vercel.app`  
**Diretório local usado no desenvolvimento:** `C:\tmp\metodo-filho-responsavel`

> Este é o documento canônico deste projeto específico. Ele deve ser usado para diferenciar esta landing page de qualquer outro projeto do mesmo usuário. Ao criar documentação semelhante em outro repositório, não reutilizar o identificador `FR-LP-KIT-2026` nem este nome de arquivo.

## 1. Finalidade deste documento

Este arquivo reúne o contexto de produto, público, copy, UX, decisões visuais, implementação, infraestrutura e histórico relevante da landing page.

Ele foi criado para permitir que outro Codex, desenvolvedor ou designer continue o projeto mesmo sem acesso à conversa original.

O documento não contém tokens, senhas, credenciais nem raciocínio interno privado. Credenciais que possam ter aparecido em conversas anteriores devem ser consideradas revogadas e nunca devem ser registradas no repositório.

## 2. Identidade do projeto

Nome do produto:

```text
Método Filho Responsável
```

Posicionamento correto:

```text
Kit prático pronto para mães e famílias saberem exatamente o que falar,
o que cortar e como agir diante de um filho sem rumo.
```

O produto não deve ser apresentado como:

- curso longo;
- ebook genérico;
- conjunto de aulas teóricas;
- terapia;
- promessa de controlar ou transformar o filho.

O produto deve parecer:

- imediatamente aplicável;
- organizado;
- simples de consultar;
- voltado a situações reais;
- uma ferramenta de decisão, conversa e limite.

## 3. Promessa central

Promessa principal:

```text
+100 frases prontas para saber exatamente o que dizer quando seu filho
pede dinheiro, promete mudar, tenta te culpar ou continua fugindo da responsabilidade.
```

Promessa complementar:

```text
Checklists, simuladores e modelos prontos para saber o que cortar,
quais limites colocar e como agir sem transformar a casa em uma guerra.
```

Mensagem estratégica:

```text
Você não precisa desistir do seu filho.
Mas também não precisa continuar sustentando a irresponsabilidade dele.
```

O que a cliente realmente compra:

- clareza para saber o que falar;
- coragem para dizer não;
- limite sem culpa;
- respostas prontas para não travar;
- direção para parar de improvisar;
- organização para decisões familiares;
- esperança sem promessas irreais;
- amor sem passar pano.

## 4. Público-alvo

Público principal:

- mães entre 40 e 58 anos;
- predominantemente classes C e B baixa;
- filhos homens entre 16 e 30 anos;
- famílias que ainda ajudam financeiramente o jovem;
- mães que já perceberam que o problema não é apenas uma fase;
- público de meio e fundo de funil.

Situações recorrentes:

- pedidos repetidos de dinheiro;
- promessas de mudança que não se sustentam;
- festa, bebida, mulheres, jogos ou apostas;
- falta de estudo, trabalho, direção ou responsabilidade;
- chantagem emocional;
- culpa ao negar ajuda;
- conflitos entre pai, mãe e filho;
- medo de o jovem chegar aos 30, 35 ou 40 anos ainda dependente.

Pensamentos da persona:

- “Eu não sei mais o que falar.”
- “Se eu nego dinheiro, fico com culpa.”
- “Se eu ajudo, me arrependo.”
- “Ele promete mudar e faz tudo de novo.”
- “Eu não criei meu filho para isso.”
- “Eu só queria que ele criasse juízo.”
- “Tenho medo de morrer e ele não saber viver sozinho.”

Perfis usados na seção “Para quem é?”:

1. Mães preocupadas.
2. Pais cansados.
3. Famílias em conflito.
4. Responsáveis por jovens adultos.

## 5. Tom da copy

A copy deve ser:

- direta;
- emocional;
- prática;
- madura;
- familiar;
- firme;
- fácil de escanear no celular.

A visitante já reconhece o problema. A página não deve gastar muito tempo explicando que existe uma dor. Ela precisa mostrar rapidamente:

```text
Isso vai me dizer o que falar e como agir.
```

Evitar:

- “controle seu filho”;
- “conserte seu filho”;
- “faça ele obedecer”;
- “a culpa é sua”;
- insultos ao filho;
- promessas absolutas;
- texto excessivamente dramático;
- linguagem de coach;
- introduções longas e abstratas.

Preferir:

- filho sem rumo;
- criar juízo;
- tomar rumo;
- limite sem culpa;
- amor sem passar pano;
- parar de sustentar o ciclo;
- saber exatamente o que dizer;
- o que falar, o que cortar e como agir;
- ferramentas prontas;
- decisões claras.

Estrutura persuasiva preferida:

```text
dor reconhecida -> identificação -> consequência da improvisação ->
ferramentas prontas -> percepção de valor -> planos -> garantia -> FAQ -> CTA final
```

## 6. Entregáveis do produto

O kit é composto por:

1. Mais de 100 frases prontas.
2. Diagnóstico personalizado.
3. Roteiros prontos de conversa.
4. Checklist de 30 dias.
5. Contrato familiar editável.
6. Mapa dos limites.
7. Simulador de decisão.
8. Frases que a família deve parar de dizer.
9. Frases curtas para momentos de pressão.
10. Simulador “Ajudo ou digo não?”.

Os materiais devem parecer arquivos, ferramentas e modelos prontos, não módulos de um curso.

## 7. Stack técnica

O projeto usa:

- HTML5;
- CSS3;
- JavaScript simples;
- servidor HTTP local em Node.js;
- Vercel para hospedagem estática.

Não usa:

- React;
- TypeScript;
- Tailwind;
- backend;
- banco de dados;
- checkout real;
- player de VSL real.

Arquivos principais:

```text
index.html
styles.css
script.js
server.js
package.json
package-lock.json
vercel.json
assets/
```

Responsabilidades:

- `index.html`: estrutura, copy, SVGs inline, links e seções.
- `styles.css`: identidade visual, responsividade, cards, animações e estados.
- `script.js`: contador, progresso de leitura, revelação por scroll, FAQ e interações.
- `server.js`: servidor estático local.
- `vercel.json`: deploy estático e fallback para `index.html`.

## 8. Como executar localmente

```powershell
cd C:\tmp\metodo-filho-responsavel
npm install
npm run dev
```

URL padrão:

```text
http://127.0.0.1:5173
```

O script atual é:

```json
"dev": "node server.js"
```

Para validar o JavaScript:

```powershell
node --check .\script.js
```

## 9. Direção visual

Paleta global:

```css
--background: #F8F5EF;
--primary: #1F4E5F;
--surface: #E8DCC8;
--accent: #B8860B;
--text: #222222;
--light-text: #F8F5EF;
```

Princípios:

- fundo geral único em branco quente;
- azul, bege e dourado usados em componentes internos;
- seções coloridas aparecem como painéis flutuantes, não como faixas de fundo de ponta a ponta;
- sombras leves;
- bordas arredondadas;
- hover com elevação discreta;
- bastante respiro;
- visual maduro, sério e familiar;
- experiência mobile como prioridade absoluta.

Evitar:

- aparência infantil;
- excesso de cores;
- cards apertados;
- seções quadradas;
- página compactada;
- efeitos fortes;
- gradientes decorativos genéricos;
- componentes institucionais;
- tipografia pequena no mobile.

Fonte:

```css
font-family: "Poppins", sans-serif;
```

Headlines usam peso alto e itálico quando definido pelo CSS. Não voltar para fontes serifadas ou fontes experimentais. O usuário rejeitou fortemente versões tipográficas anteriores e prioriza legibilidade no celular.

## 10. Hero atual

A hero é centralizada e contém:

1. headline em três linhas;
2. subheadline curta;
3. chamada “Veja como o kit funciona na prática”;
4. duas setas curvadas apontando para a VSL;
5. mockup vertical de iPhone;
6. CTA principal animado;
7. selo “Acesso vitalício”;
8. frase de identificação abaixo.

Headline atual:

```text
+100 frases prontas para saber
o que falar, o que cortar
e como agir em casa
```

As duas últimas linhas recebem sublinhado visual.

Subheadline atual:

```text
Tenha respostas para pedidos de dinheiro, promessas vazias e pressão emocional
sem explodir, ceder por culpa ou transformar sua casa em uma guerra.
```

CTA:

```text
Quero saber o que falar
```

O CTA possui animação contínua de zoom/pulso para ganhar destaque.

Frase inferior:

```text
Pare de travar, explodir ou ceder por culpa.
Tenha respostas prontas para a próxima conversa difícil.
```

Essa frase deve permanecer visualmente mais discreta que o CTA.

## 11. VSL

A VSL:

- fica na hero;
- usa mockup de iPhone;
- possui proporção vertical `9:16`;
- usa o vídeo `O7LB8TmSFgc`, publicado originalmente como YouTube Short;
- não deve voltar para `16:9`;
- não deve receber um card externo desnecessário.

URL de origem:

```text
https://youtube.com/shorts/O7LB8TmSFgc
```

Implementação:

- arquivo MP4 local `assets/vsl-filho-responsavel.mp4`;
- resolução vertical `1080x1920`;
- elemento HTML5 `<video>` sem controles nativos;
- interação direta com o elemento de vídeo bloqueada;
- interface própria com play/pausa e tela cheia;
- tela cheia aplicada ao contêiner customizado;
- mobile usa pseudo-fullscreen com `100dvh` para evitar bugs da API nativa;
- ao entrar em tela cheia no mobile, o player é movido temporariamente para o `<body>`, evitando recorte por ancestrais animados da hero;
- ao sair, o player retorna exatamente à posição original e o scroll é restaurado;
- thumbnail vertical oficial `1080x1920` (`oar2.jpg`);
- vídeo e capa preservados sem corte;
- barra de progresso visual não interativa;
- nenhuma opção de velocidade ou busca manual.
- nenhuma interface, título, canal, descrição ou marca d'água de Shorts do YouTube.

A barra inteligente usa o progresso real do vídeo e a fórmula:

```text
progresso exibido = progresso real + 0,25 × seno(π × progresso real)
```

Isso faz a barra avançar mais rapidamente no início e desacelerar no final. Ela é limitada a `99,5%` enquanto o vídeo não termina e só chega a `100%` no estado `ENDED`.

O arquivo local foi adotado porque o iframe do YouTube Shorts injetava canal, título e controles internos que não podiam ser removidos com garantia por CSS externo. A implementação atual não depende mais do player do YouTube.

## 12. Topo e navegação

### Barra de progresso

Existe uma barra azul fixa no topo absoluto da viewport.

Ela:

- avança conforme o scroll;
- chega a 100% ao alcançar a seção de planos;
- usa `requestAnimationFrame`;
- não bloqueia cliques.

### Faixa de oferta

Texto:

```text
ACESSO ESPECIAL DISPONÍVEL HOJE
FALTAM HH:MM:SS
```

A faixa fica apenas no topo do documento. Ela não acompanha a rolagem.

### Navbar

A navbar:

- é flutuante e fixa durante o scroll;
- fica abaixo da barra de progresso;
- usa efeito de vidro discreto;
- contém logo à esquerda;
- links no centro no desktop;
- CTA à direita;
- esconde links centrais no mobile;
- mantém a logo visível e alinhada à esquerda no celular.

Logo remota:

```text
https://i.postimg.cc/909WR6Zf/logo-upscale-4x.webp
```

Links:

- Início;
- Para quem é;
- O que você recebe;
- Planos.

CTA:

```text
Quero o kit
```

## 13. Ordem atual das seções

1. Barra de progresso.
2. Faixa de oferta com contador.
3. Navbar fixa.
4. Hero com VSL.
5. Para quem é.
6. Ponte entre dor e solução.
7. Ciclo da improvisação.
8. O que você vai receber.
9. Materiais gratuitos/entregáveis visuais.
10. Oferta com Plano Básico e Plano Pro.
11. Garantia de 7 dias.
12. FAQ.
13. Fechamento emocional.
14. Rodapé.
15. Botão flutuante de WhatsApp.

## 14. Seção “Para quem é?”

Regras:

- fica imediatamente abaixo da hero;
- título centralizado e fora de card externo;
- desktop: cards e imagem lado a lado;
- mobile: título, cards e foto;
- os SVGs devem representar literalmente cada público.

Cards:

1. **Mães preocupadas**  
   Para quem vê o filho sem rumo e não sabe mais o que dizer.

2. **Pais cansados**  
   Para quem já conversou, brigou, aconselhou e continua sem resultado.

3. **Famílias em conflito**  
   Para casas onde dinheiro, promessas e cobranças viraram desgaste.

4. **Responsáveis por jovens adultos**  
   Para quem ainda ajuda financeiramente, mas teme sustentar o ciclo.

Imagem:

```text
https://i.postimg.cc/x8nYHxyh/Chat-GPT-Image-5-de-jun-de-2026-23-51-02.png
```

## 15. Ponte entre dor e solução

ID:

```text
#ponte
```

Objetivo:

- reconhecer a indecisão da mãe;
- mostrar as consequências de agir no impulso;
- apresentar o produto como caminho pronto.

Desktop:

```text
card de dor -> indicador -> bloco de solução
```

Mobile:

```text
card de dor
indicador vertical
bloco de solução
```

Título da dor:

```text
Você vive sem saber se ajuda, nega ou impõe um limite?
```

Título da solução:

```text
Agora você pode parar de improvisar nas conversas difíceis
```

## 16. Ciclo da improvisação

Título:

```text
O que acontece quando você continua improvisando?
```

Etapas:

1. Ele pede ou erra de novo.
2. Você tenta dizer não.
3. Ele promete ou pressiona.
4. A culpa aparece.
5. Você volta atrás.
6. O ciclo recomeça.

No mobile existem setas curvas, mais grossas, apontando para baixo e conectando os cards.

## 17. Vitrine “O que você vai receber”

ID:

```text
#ferramentas
```

Título:

```text
O que você vai receber:
```

Não existe subheadline nessa seção.

Os seis cards são centralizados internamente:

1. `+100 frases prontas`
2. `Bônus exclusivos`
3. `Área de membros`
4. `Acesso digital`
5. `Diagnóstico personalizado`
6. `Metodologia testada e aprovada`

O card de metodologia menciona conhecimentos de neurociência e comportamento humano. Evitar transformar isso em alegação clínica ou científica absoluta.

## 18. Vitrine de cinco materiais

ID:

```text
#materiais
```

Headline:

```text
Recebe de graça hoje
```

Não há selo superior nem subheadline.

Duas setas curvas grossas ficam junto à headline e apontam para os cards abaixo.

Materiais:

1. Checklist de 30 dias.
2. Diagnóstico personalizado.
3. Simulador de decisão.
4. Contrato Familiar.
5. Mapa dos limites.

Cada card possui:

- mockup visual;
- título;
- descrição curta;
- selo `Grátis somente hoje`.

Asset local do simulador:

```text
assets/simulador-de-decisao.png
```

## 19. Oferta e preços

ID:

```text
#oferta
```

Existe um relógio digital acima de:

```text
Pagamento único e acesso vitalício
```

O timer mostra o tempo restante até o fim do dia no horário de Brasília.

### Plano Básico

Preço:

```text
R$ 10,00
```

Itens:

- +100 frases prontas;
- Suporte VIP;
- Acesso vitalício e imediato;
- Metodologia comprovada.

Iconografia:

- check apenas em `+100 frases prontas`;
- headset em `Suporte VIP`;
- infinito/raio em `Acesso vitalício e imediato`;
- medalha em `Metodologia comprovada`.

CTA:

```text
Quero começar pelo Básico
```

### Plano Pro

Âncora de preço:

```text
De R$ 97,00 por
```

Preço:

```text
R$ 27,90
```

O `27` recebe máximo destaque. O `,90` é menor e alinhado na parte superior do preço.

Itens:

- Tudo do Plano Básico;
- Suporte VIP Prioritário;
- Recebe Atualizações Constantes;
- Diagnóstico personalizado;
- Checklist prático de 30 dias;
- Mapa dos limites;
- Contrato familiar editável;
- Simulador “Ajudo ou digo não?”;
- Frases curtas para momentos de pressão.

Iconografia:

- headset no suporte prioritário;
- setas circulares nas atualizações;
- presente no diagnóstico e nos demais bônus.

O Plano Pro é o plano recomendado e deve ter mais destaque visual. O Plano Básico funciona como ancoragem. Não dar o mesmo peso visual aos dois.

CTA:

```text
Quero o Plano Pro
```

Imagens usadas nos planos:

```text
https://i.postimg.cc/4xPMMQrP/Chat-GPT-Image-6-de-jun-de-2026-15-47-48-removebg-preview.png
https://i.postimg.cc/Vvn4WCrN/Chat-GPT-Image-6-de-jun-de-2026-20-05-15-removebg-preview.png
```

Não existe checkout real. Os botões ainda usam links internos.

## 20. Garantia

Existe uma seção em card grande com garantia de sete dias.

Headline:

```text
Você tem 7 dias para testar com tranquilidade
```

Imagem:

```text
https://i.postimg.cc/44YNW3FF/Chat-GPT-Image-6-de-jun-de-2026-17-28-23-removebg-preview.png
```

Pontos:

- Compra protegida.
- Reembolso simples.
- Sem risco.

## 21. FAQ

O FAQ fica acima da seção emocional final.

Perguntas atuais:

- Esse kit serve para filho adulto?
- Preciso mostrar o kit para meu filho?
- E se ele pressionar ou tentar me culpar?
- Isso substitui terapia?
- Serve para casos de vício?
- O acesso é imediato?
- Tem garantia?

Aviso obrigatório:

```text
Este é um kit educativo e prático para famílias.
Em casos de vício grave, violência, risco à vida, depressão,
dependência química ou situação clínica, procure ajuda profissional especializada.
```

O FAQ funciona como acordeão e mantém apenas um item aberto.

## 22. Fechamento emocional

Headline:

```text
Você não precisa desistir do seu filho.
Mas também não precisa continuar sustentando a irresponsabilidade dele.
```

CTA:

```text
Quero saber o que falar
```

## 23. WhatsApp

Existe um botão circular fixo no canto inferior direito.

Requisitos:

- sempre visível durante o scroll;
- tamanho contido no mobile;
- não cobrir conteúdo importante;
- usar o ícone oficial reconhecível do WhatsApp.

Link:

```text
https://wa.me/5584994257596?text=Oi%2C%20quero%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20Frases%20Prontas!
```

## 24. Contadores

Existem dois pontos de exibição:

1. faixa do topo;
2. seção da oferta.

Ambos usam elementos com:

```text
data-countdown
```

O cálculo:

- usa `America/Sao_Paulo`;
- conta até a próxima meia-noite em Brasília;
- recalcula por horário absoluto;
- continua correto após suspensão da aba;
- não usa decremento acumulativo simples;
- atualiza a cada 250 ms, alterando o DOM apenas quando necessário.

Não substituir por um contador falso de duas horas.

## 25. Animações e interações

Implementações atuais:

- revelação suave por scroll com `IntersectionObserver`;
- fallback para navegadores sem `IntersectionObserver`;
- animação escalonada em grupos de cards;
- progresso de leitura com `requestAnimationFrame`;
- hover com elevação;
- CTA principal pulsando;
- FAQ em acordeão;
- scroll suave;
- estado visual no placeholder da VSL;
- respeito a `prefers-reduced-motion`.

O usuário pediu que as animações fossem suavizadas. Não aumentar blur, deslocamento ou duração sem necessidade.

## 26. Responsividade

O projeto é mobile-first em prioridade prática, mesmo que parte do CSS tenha regras desktop como base.

Validar principalmente:

```text
375 x 812
390 x 844
430 x 932
```

Também validar desktop:

```text
1366 x 768
1440 x 900
```

Pontos sensíveis:

- headline centralizada e sem palavras coladas;
- três linhas da headline no mobile;
- logo à esquerda e visível na navbar;
- mockup do iPhone sem corte;
- CTA sem competir com textos secundários;
- setas do ciclo apontando para baixo;
- setas da seção de materiais apontando para os cards;
- Plano Pro claramente mais destacado;
- botão do WhatsApp sem cobrir CTAs;
- textos sem transbordamento.

## 27. Assets e dependências externas

Assets locais:

```text
assets/favicon-rounded.png
assets/favicon-source.png
assets/simulador-de-decisao.png
```

Favicon em uso:

```text
assets/favicon-rounded.png
```

Há imagens hospedadas no Postimages. Isso cria risco de hotlink ou remoção futura. Antes de uma campanha paga, baixar todas as imagens essenciais para `assets/` e atualizar os caminhos.

Google Fonts também exige rede para carregar Poppins.

## 28. Skills usadas

Skills instaladas e usadas durante o projeto:

### Frontend design

```text
C:\Users\gusta\.agents\skills\frontend-design
```

Origem:

```text
https://github.com/anthropics/skills
```

### Copywriting

```text
C:\Users\gusta\.agents\skills\copywriting
```

Origem:

```text
https://github.com/coreyhaines31/marketingskills
```

Em uma nova conta ou máquina, confirmar se as skills estão disponíveis antes de usá-las. A ausência das skills não impede a manutenção, pois as regras essenciais estão documentadas aqui.

## 29. GitHub

Repositório correto:

```text
https://github.com/GustavoFalcone/kit-filho-responsavel
```

Branch:

```text
main
```

Commit de código mais recente antes deste documento:

```text
34a215c Atualiza beneficios e icones dos planos
```

O remote local deve ser:

```text
origin https://github.com/GustavoFalcone/kit-filho-responsavel.git
```

As imagens locais abaixo são capturas de revisão e não fazem parte do produto:

```text
review-ciclo.png
review-plano.png
review-publico.png
```

Elas não devem ser adicionadas ao Git sem uma decisão explícita.

## 30. Vercel e histórico do incidente de deploy

Projeto Vercel correto:

```text
kit-filho-responsavel
```

ID observado:

```text
prj_iQiKWJm1rMU8oL2OTSifJmPzn6yu
```

URL:

```text
https://kit-filho-responsavel.vercel.app
```

Situação ocorrida em 10 de junho de 2026:

1. O commit foi enviado corretamente para `main`.
2. O GitHub confirmou o commit.
3. Nenhum check/status da Vercel apareceu no commit.
4. A pasta local estava vinculada pela CLI ao projeto Vercel antigo `metodo-filho-responsavel`.
5. O projeto correto `kit-filho-responsavel` existia, mas o webhook não disparou.
6. A pasta foi vinculada ao projeto correto.
7. Foi executado deploy de produção manual.
8. O alias `kit-filho-responsavel.vercel.app` foi atualizado.
9. O conteúdo público foi validado.
10. A conexão GitHub/Vercel foi desconectada e reconectada com sucesso.

Comandos relevantes:

```powershell
npx vercel link --yes --project kit-filho-responsavel
npx vercel --prod --yes
npx vercel git disconnect
npx vercel git connect https://github.com/GustavoFalcone/kit-filho-responsavel.git
```

Os próximos pushes para `main` devem disparar deploy automaticamente. Se não dispararem:

1. confirmar o commit no GitHub;
2. verificar checks/status no commit;
3. executar `npx vercel ls kit-filho-responsavel`;
4. confirmar o vínculo do projeto;
5. renovar a conexão Git apenas se necessário;
6. usar `npx vercel --prod --yes` para não deixar produção desatualizada.

## 31. Configuração de deploy

O `vercel.json` usa builders estáticos para:

- `index.html`;
- `styles.css`;
- `script.js`;
- `assets/**`.

Todas as rotas restantes apontam para `index.html`.

Não há build de React ou diretório `dist`.

## 32. Histórico de decisões importantes

Decisões consolidadas ao longo das iterações:

- VSL centralizada na hero.
- Headline e subheadline centralizadas acima da VSL.
- VSL vertical dentro de mockup de iPhone.
- Fundo único em branco quente.
- Cor aplicada em painéis flutuantes internos.
- Sombras e hover sutis.
- Poppins em toda a interface.
- Mobile como prioridade máxima.
- Navbar fixa.
- Faixa de oferta originalmente fixa foi revertida; hoje fica apenas no topo.
- Barra de progresso fixa acima da navbar.
- Título “Para quem é?” fora de card externo.
- Cards antes da foto no mobile.
- SVGs literais e coerentes com cada promessa.
- Seções redundantes foram removidas.
- FAQ movido para antes da seção final.
- Garantia de sete dias adicionada.
- Botão de WhatsApp fixo adicionado.
- Plano Pro destacado e Plano Básico usado como ancoragem.
- Ícones dos benefícios dos planos tornados semanticamente distintos.

## 33. Preferências de colaboração do usuário

O usuário:

- avalia visualmente no navegador;
- espera implementação direta, não apenas propostas;
- prioriza mobile;
- percebe rapidamente desalinhamentos, falta de espaço e textos colados;
- prefere comunicação objetiva;
- costuma pedir ajustes incrementais específicos;
- não quer que mudanças simples quebrem áreas já aprovadas;
- valoriza autonomia para executar, testar, fazer commit, push e deploy quando solicitado.

Ao trabalhar:

1. ler os arquivos antes de alterar;
2. limitar a edição ao componente pedido;
3. preservar as decisões anteriores;
4. testar em mobile;
5. validar sintaxe;
6. iniciar servidor local quando solicitado;
7. não afirmar que publicou sem verificar a URL pública.

## 34. Regras que não devem ser revertidas

- Não transformar o produto em curso.
- Não prometer controle do filho.
- Não usar VSL horizontal.
- Não colocar a hero em duas colunas.
- Não fazer fundos coloridos em largura total.
- Não compactar a página.
- Não reduzir demais a logo mobile.
- Não mover a logo do lado esquerdo.
- Não fazer a faixa do topo acompanhar o scroll.
- Não deixar os dois planos com o mesmo destaque.
- Não usar check em todos os benefícios do Plano Básico.
- Não remover o aviso profissional sobre vício, violência e situações clínicas.
- Não adicionar checkout fictício.
- Não adicionar dependências pesadas sem necessidade.

## 35. Checklist para retomar em outra conta

1. Clonar:

```powershell
git clone https://github.com/GustavoFalcone/kit-filho-responsavel.git
cd kit-filho-responsavel
```

2. Ler primeiro:

```text
LANDING_PAGE_CONTEXT_KIT_FILHO_RESPONSAVEL.md
index.html
styles.css
script.js
```

3. Instalar e executar:

```powershell
npm install
npm run dev
```

4. Conferir:

```text
http://127.0.0.1:5173
```

5. Verificar Git:

```powershell
git status
git branch
git remote -v
```

6. Confirmar produção:

```text
https://kit-filho-responsavel.vercel.app
```

7. Se a nova conta não tiver acesso à Vercel, solicitar convite para o projeto correto ou autenticar na conta proprietária. Não criar outro projeto Vercel com nome semelhante sem necessidade.

## 36. Checklist antes de publicar alterações

- `node --check .\script.js`
- abrir a página local;
- validar mobile e desktop;
- testar timer;
- testar FAQ;
- testar links internos;
- testar WhatsApp;
- confirmar que imagens remotas carregam;
- verificar `git diff`;
- não incluir screenshots de revisão;
- fazer commit descritivo;
- enviar para `main`;
- confirmar deployment na Vercel;
- abrir a URL pública e procurar o conteúdo alterado.

## 37. Estado final registrado

Data desta consolidação:

```text
10 de junho de 2026
```

Estado:

- landing page funcional;
- VSL real integrada ao mockup com player customizado;
- GitHub configurado no repositório correto;
- branch `main`;
- produção online;
- integração GitHub/Vercel renovada;
- servidor local funcional;
- timer de Brasília funcional;
- responsividade mobile implementada;
- planos atuais em R$ 10,00 e R$ 27,90;
- documentação canônica criada.

Este arquivo deve ser atualizado sempre que houver alteração estrutural, mudança de oferta, troca de preço, mudança de repositório, domínio ou integração de checkout.

## 38. Popup de upgrade e back redirect

O botão do Plano Básico abre um popup de upgrade oferecendo o Plano Pro por `R$ 17,90`.

Copy central:

```text
Leve o Plano Pro por apenas R$ 7,90 a mais
```

O popup possui:

- CTA principal para o Pro com desconto;
- lista curta do valor adicional;
- botão explícito `Prefiro continuar com o Plano Básico`;
- fechamento por botão, backdrop e tecla Escape;
- layout em bottom sheet no mobile.

Também existe um back redirect em tela cheia:

- aparece ao pressionar voltar no navegador;
- no desktop, também pode aparecer por intenção de saída no topo da janela;
- aparece a cada nova tentativa real de voltar, enquanto a pessoa permanecer na landing;
- não aparece durante navegação interna normal;
- possui CTA do Plano Pro por `R$ 17,90`;
- possui botão honesto `Não, quero sair mesmo`;
- libera a saída do navegador quando a oferta é recusada.

O back redirect não usa mais `sessionStorage`. A trava persistente foi removida porque podia impedir a oferta de aparecer em tentativas reais posteriores de saída.

Limitação técnica:

Navegadores não permitem mostrar uma seção personalizada depois que a aba já foi fechada. Por isso, o fluxo cobre o botão voltar e a intenção de saída detectável antes do fechamento.

As URLs reais de checkout ainda não existem no projeto. Os CTAs usam o destino histórico `#topo` e estão identificados com:

```text
data-checkout="basic"
data-checkout="pro-discount"
```

Quando os links forem fornecidos, substituir apenas os respectivos `href`.
