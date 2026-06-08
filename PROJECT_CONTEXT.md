# Contexto Completo do Projeto - Metodo Filho Responsavel

Este documento existe para permitir que outro Codex, desenvolvedor ou designer continue o projeto sem depender do historico da conversa original.

> Importante: este arquivo registra requisitos, decisoes, justificativas, implementacao e estado atual. Ele nao contem raciocinio interno privado do modelo, mas inclui todo o contexto tecnico e de produto necessario para continuar o trabalho.

## 1. Localizacao do projeto

Diretorio principal:

```text
C:\tmp\metodo-filho-responsavel
```

O diretorio nao era um repositorio Git na ultima verificacao. Portanto, comandos como `git status` nao funcionavam.

## 2. Objetivo do produto

Nome:

```text
Metodo Filho Responsavel
```

Tipo:

- Produto digital low ticket.
- Landing page estatica de venda.
- Pagina para visualizacao e validacao de ideia.
- Sem backend.
- Sem checkout real.
- Sem VSL real por enquanto.

Objetivo principal da pagina:

- Levar a visitante a assistir a VSL.
- Gerar identificacao emocional sem atacar o filho ou culpar a mae.
- Mostrar que existe um plano pratico.
- Conduzir a visitante ate a oferta e os CTAs.
- Parecer uma pagina de venda direta, nao um site institucional ou blog.

## 3. Publico-alvo

Publico principal:

- Maes entre 40 e 58 anos.
- Filhos homens entre 16 e 30 anos.
- Maes cansadas de ver o filho gastar dinheiro com festa, bebida, mulheres, jogos ou apostas.
- Familias preocupadas com filhos que nao assumem responsabilidade, nao respeitam o esforco financeiro da casa ou nao constroem um futuro.

Publicos complementares apresentados na secao "Para quem e?":

1. Maes preocupadas.
2. Pais cansados.
3. Familias em conflito.
4. Responsaveis por jovens adultos.

## 4. Tom da comunicacao

O texto deve ser:

- Direto.
- Emocional.
- Maduro.
- Simples.
- Confiavel.
- Firme sem ser agressivo.

Nao deve:

- Atacar ou humilhar o filho.
- Culpar a mae.
- Prometer controle absoluto sobre outra pessoa.
- Usar termos como "vagabundo", "fracassado" ou "inutil".
- Parecer infantil.
- Parecer alegre demais.
- Usar linguagem exagerada de coach.

Termos e ideias preferenciais:

- Filho sem rumo.
- Criar juizo.
- Tomar rumo.
- Respeitar dinheiro.
- Limite sem culpa.
- Amor sem passar pano.
- Parar de sustentar o ciclo.
- Plano, limite e clareza.

## 5. Stack e arquivos

A aplicacao usa HTML, CSS e JavaScript simples.

Arquivos principais:

```text
index.html
styles.css
script.js
server.js
package.json
package-lock.json
PROJECT_CONTEXT.md
```

Responsabilidades:

### `index.html`

- Estrutura e copy da landing.
- Todas as secoes da pagina.
- SVGs inline.
- Mockup da VSL.
- FAQ.
- CTAs e links internos.

### `styles.css`

- Paleta.
- Layout responsivo.
- Paineis flutuantes.
- Cards.
- Mockup do iPhone.
- Animacoes de entrada por scroll.
- Animacoes continuas leves.
- Layout mobile.

### `script.js`

- Contador regressivo ate a meia-noite de Brasilia.
- Animacoes por scroll com `IntersectionObserver`.
- Clique no placeholder da VSL.
- Scroll suave dos links internos.
- Comportamento de acordeao do FAQ.

### `server.js`

- Servidor HTTP estatico simples em Node.js.
- Serve os arquivos a partir da raiz do projeto.
- Usa `127.0.0.1`.
- Porta padrao `5173`.
- Respeita a variavel de ambiente `PORT`.

### `package.json`

Script disponivel:

```json
{
  "scripts": {
    "dev": "node server.js"
  }
}
```

## 6. Como executar

No PowerShell:

```powershell
cd C:\tmp\metodo-filho-responsavel
npm install
npm run dev
```

URL padrao:

```text
http://127.0.0.1:5173
```

Ultima validacao:

- `npm install` concluiu sem vulnerabilidades.
- `node --check .\script.js` passou.
- O servidor respondeu HTTP `200 OK`.

Pode haver um processo antigo do servidor ainda ativo em segundo plano. Se a porta estiver ocupada, identificar o processo ou usar outra porta:

```powershell
$env:PORT='5174'
npm run dev
```

## 7. Paleta

Variaveis principais em `styles.css`:

```css
--background: #F8F5EF;
--primary: #1F4E5F;
--surface: #E8DCC8;
--accent: #B8860B;
--text: #222222;
--light-text: #F8F5EF;
```

Interpretacao:

- Fundo geral: branco quente `#F8F5EF`.
- Azul petroleo: paineis, CTAs e contraste.
- Bege: cards e paineis secundarios.
- Dourado: detalhes e enfase discreta.
- Texto principal: quase preto.

Requisito visual importante:

- A pagina inteira deve ter apenas o fundo geral `#F8F5EF`.
- Secoes coloridas nao devem pintar a largura inteira do viewport.
- Azul e bege devem aparecer dentro de paineis internos com leve raio, sombra e sensacao de flutuacao.

## 8. Direcao visual atual

A direcao escolhida e uma pagina de venda:

- Seria.
- Emocional.
- Organizada.
- Madura.
- Direta.
- Com bastante espaco visual.
- Sem excesso de decoracao.

Alteracoes mais recentes aumentaram:

- Espacamento vertical entre secoes.
- Padding dos paineis.
- Tamanho e respiracao dos cards.
- Largura maxima do conteudo.
- Hierarquia dos titulos.

A pagina nao deve voltar a parecer compacta.

## 9. Ordem atual das secoes

### 9.1 Faixa de oferta

No topo da pagina:

```text
OFERTA EXCLUSIVA TERMINA HOJE!
FALTAM HH:MM:SS
```

Caracteristicas:

- Faixa azul petroleo.
- Texto principal em caixa alta.
- Contador em capsula branca.
- Capsula com movimento horizontal automatico leve.
- Layout em linha no desktop.
- Layout empilhado no celular.

### 9.2 Hero

Ordem:

1. Selo:
   `Para maes que ja tentaram conversar, brigar e aconselhar`
2. Headline centralizada.
3. Subheadline centralizada.
4. VSL vertical centralizada.
5. CTA.
6. Microcopy.
7. Barra de identificacao.

Headline:

```text
Seu filho esta jogando fora o dinheiro, o futuro e a paz da sua familia?
```

Subheadline:

```text
Assista ao video e entenda como conversar, impor limites e parar de sustentar habitos que afastam seu filho da responsabilidade - sem transformar sua casa em uma guerra.
```

CTA:

```text
Quero conhecer o metodo
```

Microcopy:

```text
Acesso imediato • Plano pratico • Linguagem simples
```

Barra:

```text
Se voce ja pensou "eu nao criei meu filho para isso", essa pagina e para voce.
```

### 9.3 VSL

A VSL fica obrigatoriamente na hero, acima da dobra sempre que o viewport permitir.

Formato:

- Mockup de iPhone.
- Tela vertical `9:16`.
- Referencia de producao: `1080x1920`.
- Placeholder escuro.
- Botao de play central.
- Notch superior.
- Leve pulsacao de sombra.

Nao existe video real neste momento.

### 9.4 Secao "Para quem e?"

Esta secao deve aparecer imediatamente depois da hero/VSL.

Regras importantes:

- O titulo `Para quem e?` fica centralizado e fora de qualquer card.
- O titulo e grande e destacado.
- Existe uma linha dourada curta abaixo dele.
- O painel branco externo foi removido de proposito.
- No desktop: cards de um lado e imagem do outro.
- No celular: titulo, cards e depois foto.

Imagem usada:

```text
https://i.postimg.cc/x8nYHxyh/Chat-GPT-Image-5-de-jun-de-2026-23-51-02.png
```

Atualmente a imagem e remota. Para maior estabilidade futura, recomenda-se baixa-la para uma pasta local como `assets/` e atualizar o `src`.

Cards:

1. `Maes preocupadas`
   `Para quem sente que o filho esta sem rumo.`

2. `Pais cansados`
   `Para quem ja tentou conversar, brigar e aconselhar.`

3. `Familias em conflito`
   `Para casas onde o comportamento do filho virou motivo de desgaste.`

4. `Responsaveis por jovens adultos`
   `Para quem ainda ajuda financeiramente, mas sente que isso virou um ciclo.`

Iconografia:

- Os numeros foram removidos.
- Cada card possui SVG inline.
- Mae: mulher adulta.
- Pai: homem adulto com expressao cansada.
- Familia em conflito: casa, adultos e ruptura.
- Responsavel por jovem adulto: duas pessoas e simbolo de apoio financeiro.

O usuario foi bastante especifico sobre a coerencia literal dos SVGs. Se os icones forem alterados, eles devem continuar representando claramente o texto do card.

### 9.5 Dor direta

Esta secao foi removida em 6 de junho de 2026 para evitar repeticao com o componente de ponte entre dor e solucao.

### 9.6 Ciclo gamificado

Titulo:

```text
O ciclo que muitas maes vivem sem perceber
```

Etapas:

1. Ele erra.
2. Voce briga.
3. Ele promete mudar.
4. Voce sente pena.
5. Voce ajuda de novo.
6. Tudo se repete.

A etapa 5 recebe destaque dourado.

CTA:

```text
Quero sair desse ciclo
```

### 9.7 Plano de 30 dias

Esta secao foi removida em 6 de junho de 2026. O checklist de 30 dias continua citado como parte dos bonus e da oferta, mas nao possui mais uma secao exclusiva.

### 9.8 Mecanismo

Titulo:

```text
Por que brigar mais uma vez provavelmente nao vai resolver?
```

Pilares:

- Conversa certa.
- Limite claro.
- Consequencia real.

Fechamento:

```text
O metodo nao comeca tentando controlar seu filho. Ele comeca mudando o que esta nas suas maos.
```

### 9.9 Conteudo do metodo

Esta antiga secao escura de entregaveis foi removida em 6 de junho de 2026. A vitrine `#ferramentas` passou a concentrar a apresentacao visual do que a cliente recebe.

### 9.10 Objecoes

Titulo:

```text
Mas e se meu filho nao quiser mudar?
```

Resposta central:

```text
O metodo nao promete controlar seu filho. Ele te mostra como mudar sua postura, suas conversas, seus limites e suas decisoes para parar de alimentar o mesmo ciclo.
```

Blocos:

- Nao e sobre abandonar.
- Nao e sobre gritar mais.
- Nao e sobre controlar.

### 9.11 Oferta

Produto:

```text
Metodo Filho Responsavel
```

Preco placeholder:

```text
R$ 37,00
```

Itens:

- Acesso ao metodo completo.
- Plano de 30 dias.
- Roteiros de conversa.
- Checklist de limites.
- Modelo de acordo familiar.

CTA:

```text
Quero acessar o metodo agora
```

Garantia:

```text
Garantia simples de 7 dias
```

Nao existe checkout real.

### 9.12 Fechamento emocional

Titulo:

```text
Voce nao precisa desistir do seu filho.
```

Texto:

```text
Mas tambem nao precisa continuar sustentando habitos que tiram a paz da sua casa e afastam ele de um futuro responsavel.
```

CTA:

```text
Quero comecar agora
```

### 9.13 FAQ

Perguntas:

- Esse metodo serve para filho adulto?
- Preciso mostrar o metodo para meu filho?
- E se ele nao aceitar limites?
- Isso substitui terapia?
- Serve para casos de vicio?
- O acesso e imediato?
- Tem garantia?

Aviso obrigatorio:

```text
Este metodo e um guia educativo e pratico para maes. Em casos de vicio grave, violencia, risco a vida, depressao, dependencia quimica ou situacao clinica, procure ajuda profissional especializada.
```

O FAQ funciona como acordeao. Apenas uma pergunta fica aberta de cada vez.

## 10. Contador regressivo

O contador nao e um temporizador local de duas horas.

Comportamento atual:

- Calcula o tempo restante ate a proxima meia-noite.
- Usa explicitamente o fuso `America/Sao_Paulo`.
- Nao depende do fuso configurado no dispositivo do visitante.
- Recalcula a partir do horario atual.
- Nao acumula erro decrementando uma variavel a cada segundo.
- Continua correto depois de aba suspensa, computador em repouso ou atraso do navegador.
- Ao virar o dia, calcula automaticamente a proxima meia-noite.
- Atualiza internamente a cada 250 ms, mas so altera o DOM quando o segundo exibido muda.

Implementacao principal:

- `Intl.DateTimeFormat`.
- `formatToParts`.
- Conversao de horario zonado para UTC.
- Alvo absoluto para a proxima meia-noite de Brasilia.

Nao substituir por um simples `setInterval(() => segundos--)`, pois esse modelo deriva e buga quando a aba e suspensa.

## 11. Animacoes

As animacoes usam CSS e JavaScript nativos.

Tecnologia:

```text
IntersectionObserver
```

Comportamento:

- Elementos aparecem conforme entram no viewport.
- Entrada com leve opacidade, translacao, escala e blur.
- Cards de grupos aparecem em sequencia.
- Elementos sao desobservados depois da primeira entrada.
- Animacoes foram suavizadas a pedido do usuario.

Valores atuais aproximados:

- Deslocamento vertical: 14 px.
- Blur: 3 px.
- Escala inicial: 0.995.
- Duracao: 520 ms.
- Atraso dos cards: 45 ms por item, limitado a 260 ms.

Acessibilidade:

- `prefers-reduced-motion: reduce` desativa movimentos.

Outras animacoes:

- Capsula do contador se move horizontalmente automaticamente.
- Mockup do iPhone pulsa a sombra de forma leve.
- Cards e paineis levantam alguns pixels no hover.

## 12. Paineis flutuantes

O usuario pediu sensacao clara de elementos flutuando.

Variaveis:

```css
--float-shadow
--float-shadow-hover
```

Comportamento:

- Sombra leve em repouso.
- Leve translacao para cima no hover.
- Sombra um pouco mais forte no hover.
- Sem exagero.

Nao transformar novamente as secoes em faixas de cor de ponta a ponta.

## 13. Responsividade

Breakpoints principais:

```css
@media (max-width: 980px)
@media (max-width: 620px)
```

Prioridades mobile:

- Hero centralizada.
- Headline, subheadline, VSL e CTA em coluna.
- Mockup vertical cabe na largura da tela.
- CTAs ocupam a largura disponivel.
- Cards ficam em uma coluna.
- Secao "Para quem e?": titulo, cards, foto.
- Faixa de oferta empilha mensagem e contador.
- Texto nao deve transbordar.

Grande parte do publico acessara por celular. Mudancas futuras precisam ser verificadas primeiro em larguras proximas de 375 px e 430 px.

## 14. Fonte

A pagina usa uma unica familia tipografica pelo Google Fonts:

```text
Poppins - corpo, controles, cards e microcopy
Poppins 900 italic - titulos e chamadas principais
```

Objetivo:

- Priorizar legibilidade e familiaridade.
- Manter uma hierarquia limpa usando pesos diferentes.
- Evitar tipografia editorial ou serifada.
- Priorizar integralmente a leitura no celular.
- Manter `letter-spacing: 0` para evitar sobreposicao e perda de leitura no mobile.

## 15. Skill instalada

Foi instalada a skill:

```text
frontend-design
```

Origem:

```text
https://github.com/anthropics/skills
```

Caminho instalado:

```text
C:\Users\gusta\.agents\skills\frontend-design
```

Comando utilizado:

```powershell
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

Importante:

- A primeira tentativa foi executada em `C:\Windows\System32` e falhou com `EPERM` ao tentar criar `.agents`.
- A instalacao correta foi executada em `C:\Users\gusta`.
- O Codex precisa ser reiniciado para carregar uma skill recem-instalada.
- Em uma nova sessao, confirmar se `frontend-design` aparece na lista de skills disponiveis antes de assumir que esta ativa.

Principios relevantes da skill:

- Criar interfaces distintas e com intencao visual clara.
- Evitar aparencia generica de pagina produzida por IA.
- Dar atencao a tipografia, composicao, movimento e detalhes.
- Implementar codigo funcional e responsivo.
- Escolher uma direcao estetica coerente com o contexto.

Neste projeto, esses principios devem ser equilibrados com:

- Conversao.
- Clareza.
- Publico maduro.
- Sobriedade.
- Poucas cores.
- Ausencia de elementos decorativos excessivos.

## 16. Decisoes importantes e justificativas

### HTML/CSS/JS em vez de React

O projeto ja existia como landing estatica e nao precisava de framework. Manter HTML, CSS e JavaScript:

- Reduz dependencias.
- Facilita edicao.
- Evita build.
- E suficiente para as interacoes atuais.

### VSL vertical

O usuario pediu explicitamente mockup de iPhone e conteudo `9:16`, em vez de video horizontal.

### Fundo unico

O usuario rejeitou fundos coloridos ocupando secoes inteiras. Por isso:

- `body` e secoes usam o mesmo branco quente.
- Cor aparece em paineis internos.

### Mais espaco

O usuario considerou a pagina compacta e feia. O CSS foi ajustado para:

- Secoes mais altas.
- Paineis com padding maior.
- Cards maiores.
- Gaps maiores.
- Conteudo com largura maxima um pouco maior.

### SVGs literais

Iconografia abstrata foi rejeitada. Os icones devem permitir associacao imediata com o perfil descrito.

### Animacoes discretas

Uma primeira versao foi considerada forte demais. A versao atual e mais suave e nao deve voltar a usar deslocamentos ou blur intensos.

## 17. Cuidados tecnicos

### Encoding

Os arquivos usam:

```html
<meta charset="UTF-8">
```

O servidor envia:

```text
charset=utf-8
```

O PowerShell antigo pode exibir caracteres portugueses como `MÃ©todo` ao usar `Get-Content`, mesmo quando o arquivo esta correto. Verificar no navegador antes de concluir que o arquivo esta corrompido.

### Imagem externa

A imagem da secao de publico depende do Postimages. Se o host remover ou bloquear hotlink, a imagem quebrara.

Recomendacao:

1. Baixar a imagem.
2. Criar `assets/images/`.
3. Salvar com nome previsivel.
4. Trocar o `src` remoto por caminho local.

### Google Fonts

A fonte depende de rede. Se o projeto precisar funcionar totalmente offline, baixar os arquivos da fonte ou usar fallback local.

### Links de CTA

Os CTAs apontam para IDs internos, principalmente:

```text
#oferta
#ferramentas
#topo
```

Nao existe integracao de compra.

### Placeholder da VSL

O clique apenas adiciona a classe:

```text
video-clicked
```

Nao toca video.

Quando houver VSL real:

- Substituir o `button.video-placeholder` por `video`, iframe ou player escolhido.
- Preservar a proporcao `9 / 16`.
- Preservar o mockup ou remover apenas se solicitado.
- Evitar autoplay com som.

## 18. Validacoes recomendadas antes de entregar mudancas

Executar:

```powershell
node --check .\script.js
```

Depois iniciar:

```powershell
npm run dev
```

Validar:

```text
http://127.0.0.1:5173
```

Checklist visual:

- Desktop largo.
- Notebook.
- Mobile 375 px.
- Mobile 430 px.
- Headline sem corte.
- VSL sem ultrapassar viewport.
- Contador sem colar `FALTAM` ao horario.
- Ordem mobile da secao "Para quem e?".
- Imagem externa carregando.
- Cards sem texto cortado.
- CTAs visiveis.
- Animacoes suaves.
- FAQ funcionando.
- Contador coerente com o horario de Brasilia.

## 19. Melhorias futuras possiveis

Nao implementar automaticamente sem pedido, mas estas sao evolucoes razoaveis:

- Baixar a imagem remota para o projeto.
- Adicionar favicon.
- Adicionar metadados Open Graph.
- Integrar VSL real.
- Integrar checkout.
- Adicionar eventos de analytics nos CTAs.
- Testar contraste com ferramenta automatizada.
- Testar a pagina visualmente com Playwright em desktop e mobile.
- Criar repositorio Git e primeiro commit.
- Revisar fonte para uma combinacao mais autoral e madura.
- Otimizar CSS removendo seletores que nao sejam mais usados.
- Revisar os SVGs com referencia visual ou biblioteca de icones consistente.

## 20. Estado final conhecido

Na ultima verificacao:

- Landing implementada.
- Frontend redesenhado com direcao editorial acolhedora e madura.
- Tipografia atualizada para Poppins em todo o site.
- Raios, paineis e cards mais organicos e arredondados.
- Hero com composicao mais marcante e moldura visual sutil.
- Hero centralizada.
- VSL vertical em mockup de iPhone.
- Faixa de oferta funcional.
- Contador ate o fim do dia em Brasilia.
- Secao "Para quem e?" logo abaixo da VSL.
- SVGs literais para os quatro publicos.
- Ordem mobile correta.
- Fundo unico.
- Paineis flutuantes.
- Animacoes suaves por scroll.
- Layout com mais espacamento.
- Ciclo com percurso visual alternado no desktop.
- Cards de publico com deslocamento sutil e imagem em moldura organica.
- FAQ com indicador visual de abertura.
- Fallback para navegadores sem IntersectionObserver.
- Servidor respondendo HTTP `200`.
- JavaScript passando em `node --check`.

## 21. Instrucao para o proximo Codex

Antes de editar:

1. Leia este arquivo.
2. Leia `index.html`, `styles.css` e `script.js`.
3. Confirme se a skill `frontend-design` esta disponivel.
4. Abra a pagina local em desktop e mobile.
5. Preserve todas as mudancas existentes do usuario.
6. Nao reverta a VSL para 16:9.
7. Nao mova a secao "Para quem e?" para longe da hero.
8. Nao volte a usar fundos coloridos em largura total.
9. Nao compacte novamente os espacamentos.
10. Nao torne as animacoes chamativas.
11. Nao troque os SVGs por simbolos abstratos sem justificativa.
12. Mantenha a pagina orientada a conversao.

O usuario valoriza iteracao visual direta e costuma avaliar o resultado no navegador. Mudancas devem ser implementadas, executadas e verificadas, nao apenas propostas.

## 22. Atualizacao estrategica de produto e copy

O posicionamento do produto foi aprofundado. Estas diretrizes substituem qualquer apresentacao anterior que faca o produto parecer curso, conjunto de aulas ou ebook tradicional.

### Posicionamento

O Metodo Filho Responsavel deve ser vendido como:

```text
Um kit pratico pronto para saber exatamente o que falar, o que cortar e como agir diante de um filho sem rumo.
```

Promessa principal:

```text
+100 frases prontas para saber exatamente o que dizer quando seu filho pede dinheiro, promete mudar, tenta te culpar ou continua fugindo da responsabilidade.
```

Promessa secundaria:

```text
Checklists, simuladores e modelos prontos para voce saber o que cortar, quais limites colocar e como agir sem transformar sua casa em uma guerra.
```

Mensagem central:

```text
Voce nao precisa continuar tentando no escuro. O Metodo Filho Responsavel te entrega frases, checklists, simuladores e modelos prontos para saber o que falar, o que cortar e como agir quando seu filho pede dinheiro, promete mudar ou continua jogando o futuro fora.
```

### Entregaveis atuais

1. Diagnostico personalizado.
2. Mais de 100 frases prontas.
3. Roteiros prontos de conversa.
4. Checklist de 30 dias.
5. Contrato familiar editavel.
6. Mapa dos limites.
7. Simulador de decisao.
8. Frases que a familia deve parar de dizer.

### Order bumps

1. Frases curtas para momentos de pressao.
2. Simulador "Ajudo ou digo nao?".

Os order bumps devem parecer ferramentas praticas e rapidas, nunca aulas.

### Dor central

```text
Eu lutei para dar uma vida melhor, mas meu filho esta desperdicando tudo.
```

A dor mistura culpa, medo, vergonha, raiva, impotencia, amor, exaustao e preocupacao com o futuro.

### O que a cliente realmente compra

- Clareza para saber o que falar.
- Coragem para dizer nao.
- Limite sem culpa.
- Respostas prontas para nao travar.
- Um caminho para parar de passar pano.
- Esperanca de que o filho ainda tem jeito.
- Sensacao de nao estar tentando sozinha.
- Um plano para parar de agir no desespero.

### Nova headline recomendada

```text
+100 frases prontas para saber o que falar, o que cortar e como agir em casa
```

Subheadline:

```text
Tenha respostas para pedidos de dinheiro, promessas vazias e pressao emocional sem explodir, ceder por culpa ou transformar sua casa em uma guerra.
```

### Planos da oferta

#### Plano Essencial

- Pagamento unico.
- Acesso vitalicio.
- Mais de 100 frases prontas.
- Diagnostico personalizado.
- Checklist de 30 dias.
- Mapa dos limites.
- Frases que voce deve parar de dizer.
- Contrato familiar editavel.
- Atualizacoes mensais.

Promessa:

```text
Tudo que voce precisa para parar de improvisar nas conversas dificeis e comecar a agir com mais firmeza, clareza e direcao.
```

#### Plano VIP

Inclui tudo do Essencial, mais:

- Suporte VIP prioritario.
- Simulador de decisao completo.
- Simulador "Ajudo ou digo nao?".
- Frases curtas para momentos de pressao.
- Orientacoes extras para pedido de dinheiro, promessa vazia, chantagem emocional e conflito familiar.

Promessa:

```text
Alem do kit principal, voce recebe ferramentas extras para decidir melhor, responder com firmeza e nao voltar atras quando a pressao emocional aparecer.
```

### Diferenciais

- Ja vem pronto.
- Nao e curso longo.
- Trabalha situacoes reais.
- Ajuda a mae a nao ceder por culpa.
- Organiza limites dentro de casa.
- Comeca pelo que esta nas maos da familia.

### Regras de promessa

Nao prometer:

- Transformar o filho.
- Fazer o filho obedecer.
- Controlar as escolhas dele.

Prometer:

- Ferramentas praticas.
- Mudanca de postura familiar.
- Conversas melhores.
- Limites claros.
- Corte de reforcos errados.
- Fim da improvisacao e maior clareza de decisao.

### Perfil de consciencia

- 70% meio de funil.
- 20% fundo de funil emocional.
- 10% topo de funil.

A entrada da copy deve ser emocional. A solucao deve parecer imediatamente pratica.

Estrutura preferida:

```text
dor emocional -> identificacao -> quebra de crenca -> kit pronto -> CTA
```

### CTAs recomendados

- Quero acessar o kit agora.
- Quero saber o que falar.
- Quero parar de tentar no escuro.
- Quero impor limites sem culpa.
- Quero o Metodo Filho Responsavel.

### Observacao de implementacao

A revisao completa de copy foi implementada em 6 de junho de 2026:

1. Headline e subheadline agora apresentam a promessa pratica imediatamente.
2. A pagina vende um kit de ferramentas, nao aulas ou curso.
3. Situacoes reais substituem dores genericas.
4. O ciclo foi reescrito em torno de pedido, pressao, culpa e recuo.
5. A vitrine de ferramentas apresenta os beneficios principais.
6. A secao de mecanismo explica como abrir, encontrar e usar o material.
8. A oferta possui Plano Essencial e Plano VIP.
9. O FAQ foi reescrito para responder objecoes de meio e fundo de funil.
10. Os CTAs dizem claramente o que a pessoa recebe.

Precos usados no prototipo:

```text
Plano Essencial: R$ 37,00
Plano VIP: R$ 67,00
```

O preco VIP e provisório e precisa ser confirmado antes da publicacao.

## 23. Componente de ponte entre dor e solucao

Foi criada uma nova secao imediatamente abaixo de "Para quem e?".

Identificador:

```text
#ponte
```

Classes principais:

```text
.problem-solution-section
.problem-solution-grid
.problem-panel
.solution-panel
.bridge-transition
.bridge-list
.problem-list
.solution-list
```

Objetivo:

- Fazer a transicao entre identificacao do publico e apresentacao da solucao.
- Mostrar dor reconhecida de um lado e caminho pratico do outro.
- Preparar a visitante para entender o produto como ferramenta pronta.

Estado da copy:

- A copy definitiva foi implementada com foco em meio e fundo de funil.
- O bloco de dor identifica indecisao, promessas vazias, culpa e conversas improdutivas.
- O bloco de solucao apresenta ferramentas prontas para falar, decidir, cortar e sustentar limites.

Estrutura desktop:

```text
card de dor -> indicador de transicao -> bloco de solucao
```

Estrutura mobile:

```text
card de dor
indicador vertical
bloco de solucao
```

Comentarios obrigatorios presentes no HTML:

- Secao de dor.
- Lista de dores.
- Secao de solucao.
- Lista de beneficios.

O componente possui classes isoladas, usa a paleta global, participa das animacoes por scroll e pode ser reutilizado ou movido sem depender de backend.

## 24. Vitrine de ferramentas do kit

Foi criada uma secao imediatamente depois do ciclo "O que acontece quando voce continua improvisando?".

Identificador:

```text
#ferramentas
```

Classes principais:

```text
.toolkit-section
.toolkit-heading
.toolkit-grid
.toolkit-card
.toolkit-icon
```

Objetivo:

- Mostrar visualmente o que a pessoa recebe.
- Reforcar que o produto e organizado e pronto para usar.
- Facilitar a leitura rapida dos beneficios.
- Preparar a visitante para o mecanismo e para a oferta.

Titulo atual:

```text
O que voce vai receber:
```

Nao existe subheadline nesta secao. Icone, titulo e descricao ficam centralizados dentro de cada card.

Beneficios apresentados:

1. Mais de 100 frases prontas.
2. Bonus exclusivos.
3. Area de membros.
4. Acesso digital.
5. Diagnostico personalizado.
6. Metodologia testada e aprovada.

Layout:

- Desktop amplo: tres colunas e duas linhas.
- Tablet: duas colunas.
- Mobile: uma coluna.

Cada card possui SVG contextual, titulo, descricao curta, sombra suave, raio amplo e efeito discreto de elevacao.

Comentarios obrigatorios presentes:

- Topo da secao.
- Grid de beneficios.
- Card individual.
- Comportamento responsivo.

## 25. Navbar com logo

Foi adicionada uma navbar flutuante entre a faixa de oferta e a hero.

Logo usada na navbar:

```text
https://i.postimg.cc/909WR6Zf/logo-upscale-4x.webp
```

O arquivo possui margens transparentes internas. O CSS da `.site-brand` amplia e recorta visualmente a imagem para manter a marca legivel.

Estrutura:

- Logo a esquerda.
- Links centrais para Inicio, Para quem e, O que voce recebe e Planos.
- CTA principal `Quero o kit` a direita.
- Nenhum icone de chave.

Comportamento mobile:

- Links centrais sao ocultados.
- Logo e CTA permanecem visiveis.
- Navbar usa formato compacto com area de toque confortavel.

O CTA usa o destaque da paleta global e possui brilho discreto no hover.

Comportamento de scroll:

- O contêiner da navbar usa `position: fixed`.
- A navbar permanece na mesma posição durante toda a rolagem.
- A faixa de oferta possui margem superior para não ficar escondida atrás da navbar.
- No mobile, a distância do topo é reduzida para preservar área útil.

## 26. Barra de progresso de leitura

Foi adicionada uma barra fixa no topo absoluto da tela, acima da navbar.

Comportamento:

- Comeca vazia no topo da pagina.
- Avanca horizontalmente conforme o scroll.
- Chega a 100% quando a visitante alcanca a secao de planos `#oferta`.
- Usa `requestAnimationFrame` para evitar atualizacoes excessivas durante a rolagem.
- Nao bloqueia cliques.

A faixa "Acesso especial disponivel hoje" continua apenas no inicio do documento e nao acompanha o scroll.

Hero atual:

- O selo "100% Educativo" foi removido.
- A headline possui duas linhas explicitas.
- A segunda linha, "o que falar, o que cortar e como agir em casa", recebe sublinhado visual.
