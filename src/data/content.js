import reactContextImg1 from "../assets/images/react-context-img1.png";
import reactContextImg2 from "../assets/images/react-context-img2.png";
import reactContextImg3 from "../assets/images/react-context-img3.png";
import reactContextImg4 from "../assets/images/react-context-img4.png";
import reactContextImg5 from "../assets/images/react-context-img5.png";
import reactContextImg6 from "../assets/images/react-context-img6.png";
import reactContextImg7 from "../assets/images/react-context-img7.png";
import reactContextImg8 from "../assets/images/react-context-img8.png";
import reactContextImg9 from "../assets/images/react-context-img9.png";
import reactContextImg10 from "../assets/images/react-context-img10.png";
import reactContextImg11 from "../assets/images/react-context-img11.png";
import reactContextImg12 from "../assets/images/react-context-img12.png";
import reactContextImg13 from "../assets/images/react-context-img13.png";
import reactContextImg14 from "../assets/images/react-context-img14.png";
import reactContextImg15 from "../assets/images/react-context-img15.png";
import reactContextImg16 from "../assets/images/react-context-img16.png";
import reactContextImg17 from "../assets/images/react-context-img17.png";
import reactContextImg18 from "../assets/images/react-context-img18.png";

import reactHooksImg1 from "../assets/images/react-hooks-img1.png";
import reactHooksImg2 from "../assets/images/react-hooks-img2.png";
import reactHooksImg3 from "../assets/images/react-hooks-img3.png";
import reactHooksImg4 from "../assets/images/react-hooks-img4.png";
import reactHooksImg5 from "../assets/images/react-hooks-img5.png";

import reactRouterDomImg1 from "../assets/images/react-router-dom-img1.png";
import reactRouterDomImg2 from "../assets/images/react-router-dom-img2.png";
import reactRouterDomImg3 from "../assets/images/react-router-dom-img3.png";
import reactRouterDomImg4 from "../assets/images/react-router-dom-img4.png";
import reactRouterDomImg5 from "../assets/images/react-router-dom-img5.png";

import javascriptImg1 from "../assets/images/javascript-img1.png";
import javascriptImg2 from "../assets/images/javascript-img2.png";
import javascriptImg3 from "../assets/images/javascript-img3.png";
import javascriptImg4 from "../assets/images/javascript-img4.png";
import javascriptImg5 from "../assets/images/javascript-img5.png";

import callbackImg1 from "../assets/images/callback-img1.png";

import arrayIncludesImg1 from "../assets/images/array-includes-img1.png";

import arrayMapImg1 from "../assets/images/array-map-img1.png";
import arrayMapImg2 from "../assets/images/array-map-img2.png";

import stringIncludesImg1 from "../assets/images/string-includes-img1.png";

import domImg1 from "../assets/images/dom-img1.png";
import domImg2 from "../assets/images/dom-img2.png";
import domImg3 from "../assets/images/dom-img3.png";
import domImg4 from "../assets/images/dom-img4.png";
import domImg5 from "../assets/images/dom-img5.png";
import domImg6 from "../assets/images/dom-img6.png";


const content = [
    {
        title: "React",
        content: [
            {
                subtitle: "O que é React?",
                text: `React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface).
                Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros.
                A princípio, todas essas atividades, chamadas de estados, tinham uma descrição muito complexa. Com o React, esta descrição torna-se mais simples, bem como também é simplificada a conexão entre HTML, CSS e JavaScript e todos os componentes de uma página.
                Por ter demonstrado grande eficiência, nos anos que se seguiram o React foi incorporado à interface de outras redes sociais do grupo, como o Instagram e, em 2013, seu código foi aberto à comunidade, dando início a sua popularização.
                Hoje, o React é uma das mais prestigiadas bibliotecas de JavaScript do mercado.`
            },
            {
                subtitle: "Como funciona o React?",
                text: `O React é uma biblioteca front-end e tem como um de seus objetivos facilitar a conexão entre diferentes partes de uma página, portanto seu funcionamento acontece através do que chamamos de componentes.
                Em outras palavras, podemos imaginar que o React divide uma tela em diversos componentes para, então, trabalhar sobre eles de maneira individual.
                Os componentes são utilizados para reaproveitamento de código e padronização de interface.
                Isso torna o React uma tecnologia muito flexível para a solução de problemas e para a construção de interfaces reutilizáveis, uma vez que cada um destes componentes pode ser manipulado de maneira distinta.`
            },
            {
                subtitle: "Como o React usa JavaScript?",
                text: `O React é uma biblioteca que utiliza a linguagem de programação JavaScript.
                O JS é uma das mais versáteis e populares linguagens de programação do mundo e conta com um grande número de bibliotecas e outras tecnologias que a utilizam. Entre elas, Node.js, Angular, VueJS, jQuery, Ember.js e, é claro, o React.
                Por essa razão, se você quer aprender a manipular esta biblioteca e extrair dela todo o seu potencial, é preciso antes ter uma sólida base de conhecimento em JavaScript, bem como em suas outras duas linguagens de marcação: HTML e CSS.
                Isso porque o React utiliza uma extensão alternativa ao JavaScript para descrever seus componentes. Esta sintaxe é chamada de JSX.
                O JSX, a grosso modo, é uma linguagem desenvolvida como uma mistura de HTML e JS. Seu objetivo é ser transposta para JS da maneira mais simplificada possível.`
            },
            {
                subtitle: "Qual a diferença entre React e React Native?",
                text: `Esta é uma dúvida muito comum para quem ainda é novato no universo de front-end, JavaScript e seus recursos.
                O React é uma biblioteca criada para construir telas de forma declarativa. Ou seja: o React cria aplicações web para serem executadas em navegadores, sejam eles para desktop, mobile ou qualquer outro dispositivo.
                Para que essas aplicações possam ser transpostas para diferentes dispositivos, algumas bibliotecas são utilizadas — e o React Native é uma delas.
                O React Native é a biblioteca voltada para a criação de aplicativos mobile em Android e iOS.
                Em suma, a diferença entre React e React Native é que o primeiro diz respeito à maneira geral com que a biblioteca trabalha, enquanto o segundo traduz o JavaScript para a linguagem nativa do dispositivo, tanto para iOS quanto para Android.`
            },
            {
                subtitle: "Componentes",
                text: `O uso de componentes é um dos pilares de sustentação do React.
                Para compreender e agir sobre uma determinada página, o React a quebra em pequenos pedaços, chamados de componentes, e os isola, sendo cada um deles independentes entre si perante a tecnologia.
                Estes componentes são reutilizáveis e, uma vez categorizados, podem ser reaproveitados em quaisquer páginas de um site ou aplicativo.
                Os componentes de uma página podem ser organizados, por exemplo, em BarraLateral, MenuSuperior, BotaoChamada, ou da maneira que o programador preferir.
                Os componentes podem ser comparados às funções em JavaScript.`
            },
            {
                subtitle: "Props (properties)",
                text: `Dentro dos componentes estão as propriedades, ou props. Estas props são objetos com várias informações que podem ser de variados tipos, como função, número ou string.`
            },
            {
                subtitle: "State (estado)",
                text: `Assim como as propriedades, os estados, ou states, também são objetos ou informações, mas ao invés de serem passadas para o componente, eles são criados dentro do componente.
                Diferentemente das propriedades, os states são mutáveis, como por exemplo variáveis declaradas dentro de uma função.`
            },
            {
                subtitle: "Virtual DOM",
                text: `O Virtual DOM, ou VDOM, é uma representação em memória de um DOM (Document Object Model) real de uma interface.
                Na prática, DOM real é a estrutura que representa a camada visual de uma página.
                Para que fique mais claro, imagine o seguinte processo:
                Para atualizar uma página, o React primeiro salva suas alterações em memória, ou seja, em um ambiente chamado de Virtual DOM. Isso acontece porque manipular um DOM virtual é muito mais rápido do que manipular um DOM real — ou seja, a página que está sendo atualizada.
                Em front-end, a atualização de DOMs é extremamente corriqueira, uma vez que é através deles que as páginas de um site ou aplicativo são efetivamente atualizadas.
                Após criada esta estrutura virtual, o React a traduz para a tela real com o mínimo de processos possível, trazendo mais agilidade para a atualização. Este processo é chamado de reconciliação.`
            },
            {
                subtitle: "JSX",
                text: `Como citado acima, o JSX é uma sintaxe muito parecida com HTML, mas com elementos de JS. 
                Todos os componentes do React são descritos com o JSX, então se você pretende trabalhar com o React e todo o seu universo de possibilidades, é necessário aprender antes a compreender o JSX.
                A boa notícia é que esta sintaxe é muito simples de ser assimilada!`
            }
        ]
    },
    {
        title: "React Context",
        content: [
            {
                text: `Contexto (context) disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.
                Em uma aplicação típica do React, os dados são passados de cima para baixo (de pai para filho) via props, mas esse uso pode ser complicado para certos tipos de props (como preferências locais ou tema de UI), que são utilizadas por muitos componentes dentro da aplicação. Contexto (context) fornece a forma de compartilhar dados como esses, entre todos componentes da mesma árvore de componentes, sem precisar passar explicitamente props entre cada nível.`
            },
            {
                subtitle: "Quando Usar Contexto",
                text: `Contexto (context) é indicado para compartilhar dados que podem ser considerados “globais” para a árvore de componentes do React. Usuário autenticado ou o idioma preferido, são alguns casos comuns. No exemplo do código a seguir, nós passamos um tema a fim de estilizar o componente Button.`,
                img: reactContextImg1
            },
            {
                text: `Usando contexto, nós podemos evitar passar prop através de elementos intermediários.`,
                img: reactContextImg2
            },
            {
                subtitle: "Antes de você usar Contexto",
                text: `Contexto (context) é usado principalmente quando algum dado precisa ser acessado por muitos componentes em diferentes níveis. Use contexto moderadamente uma vez que isto pode dificultar a reutilização de componentes.
                Se você apenas quer evitar passar algumas props por muitos níveis, composição de componente geralmente é uma solução mais simples que Contexto (context).
                Considere por exemplo o componente Page que passa as props user e avatarSize por vários níveis abaixo de modo que os componentes Link e Avatar profundamente aninhados, podem ler essas props.`,
                img: reactContextImg3
            },
            {
                text: `Pode parecer redundante passar para baixo as props user e avatarSize através de vários níveis se no final apenas o componente Avatar realmente precisa usa-las. Além disso, é incômodo sempre que o componente Avatar precisar de mais props do topo, você também precisar adicionar todas elas por todos os níveis intermediários.
                Uma forma de resolver este problema sem contexto é atribuir o próprio componente Avatar a uma prop do componente Page, assim os componentes intermediários não precisam saber sobre a prop user ou o avatarSize:`,
                img: reactContextImg4
            },
            {
                text: `Com esta mudança, apenas o componente Page do topo precisa saber sobre os componentes Link e Avatar e das props user e avatarSize.
                Esta inversão de controle pode fazer seu código mais limpo em vários casos, reduzindo a quantidade de props que você precisa passar através da sua aplicação e dando mais controle para os componentes raíz. Essa inversão, entretanto, não é a escolha certa em todos os casos; mover mais complexibilidade para o topo da árvore, faz com que estes componentes fiquem mais complicados e forçando os componentes dos níveis mais abaixo ficarem mais flexíveis do que você gostaria.
                Você não está limitado a um único filho por componente, Você pode passar vários componentes filhos ou até mesmo ter vários slots de componentes filhos como documentado aqui:`,
                img: reactContextImg5
            },
            {
                text: `Este padrão é suficiente para vários casos onde você precisa separar um componente filho de seu pai imediato. Você pode ainda ir mais longe com render props se o filho precisa se comunicar com o pai antes de ser renderizado.
                Contudo, às vezes o mesmo dado precisa ser acessado por vários componentes na árvore e em diferentes níveis de aninhamento. Contexto (context) deixa você “transmitir” este dado e mudanças do mesmo para todos componentes abaixo. Exemplos comuns onde usar contexto pode ser mais simples que as alternativas incluem o gerenciamento de localização atual, tema, ou um dado em cache.`
            },
            {
                subtitle: "API"
            },
            {
                subtitle2: "React.createContext",
                example: `const MyContext = React.createContext(defaultValue);`
            },
            {
                text: `Cria um objeto Contexto (context). Quando o React renderiza um componente que assina este objeto Contexto (context), este vai ler o valor atual do Provider superior na árvore que estiver mais próximo.
                O argumento defaultValue (valor padrão) é usado apenas quando o componente não corresponder com um Provider acima dele na árvore. Este valor padrão pode ser útil para testar componentes isoladamente, sem envolvê-los. Observação: passando undefined como um valor de Provider não faz com que os componentes consumidores do Provider usem defaultValue.`
            },
            {
                subtitle2: "Context.Provider",
                example: `<MyContext.Provider value={/* some value */}>`
            },
            {
                text: `Cada objeto Contexto (context) vem com um componente Provider que permite componentes consumidores a assinarem mudanças no contexto.
                O componente Provider aceita uma prop value que pode ser passada para ser consumida por componentes que são descendentes deste Provider. Um Provider pode ser conectado a vários consumidores. Providers podem ser aninhados para substituir valores mais ao fundo da árvore.
                Todos consumidores que são descendentes de um Provider serão renderizados novamente sempre que a prop value do Provider for alterada. A propagação do Provider aos seus descendentes (incluido .contextType e useContext), não está condicionada ao método shouldComponenteUpdate, logo, o consumidor é atualizado mesmo quando um componente antepassado ignora uma atualização.
                Mudanças são determinadas comparando os valores novos com os anteriores usando o mesmo algoritimo de Object.is.
                Nota:
                A forma como as mudanças são determinadas, podem causar alguns problemas quando se atribui objetos como value: veja Ressalvas`
            },
            {
                subtitle2: "Class.contextType",
                img: reactContextImg6
            },
            {
                text: `A propriedade contextType pode ser atribuída a um objeto Contexto (Context) criado por React.createContext(). Usar esta propriedade permite que você consuma o valor atual mais próximo deste tipo de contexto usando this.context. Você pode referencia-lo em qualquer momento nos métodos de ciclo-de-vida, incluindo a função render.
                Nota:
                Você pode assinar apenas um contexto usando esta API. Se você precisa ler mais de um contexto, veja Consumindo vários Contextos.
                Se você está usando o recurso experimental public class fields syntax, você pode usar um campo estático da classe para inicializar o seu contextType.`,
                img: reactContextImg7
            },
            {
                subtitle2: "Context.Consumer",
                img: reactContextImg8
            },
            {
                text: `Um componente React que assina mudanças de contexto. Usar este componente permite você assinar a um contexto por um function component.
                Requer uma function as a child. A função recebe o valor atual do contexto e retorna um nó React. O argumento value passado para a função será igual ao value da prop do Provider do contexto mais próximo acíma na árvore. Se não houver um Provider para este contexto acima, o argumento value será igual a defaultValue que foi passado ao criar o contexto com createContext().
                Nota:
                Para mais informações sobre o padrão “function as a child” veja, render props.`
            },
            {
                subtitle2: "Context.displayName",
                text: `O objeto Context aceita uma propriedade string displayName. React DevTools usa essa string para determinar o que exibir para o contexto.
                Por exemplo, o seguinte componente aparecerá como MyDisplayName no DevTools:`,
                img: reactContextImg9
            },
            {
                subtitle: "Exemplos"
            },
            {
                subtitle2: "Contexto Dinâmico",
                text: `Um exemplo mais complexo com valores dinâmicos para o tema:`
            },
            {
                subtitle2: "theme-context.js",
                img: reactContextImg10
            },
            {
                subtitle2: "themed-button.js",
                img: reactContextImg11
            },
            {
                subtitle2: "app.js",
                img: reactContextImg12
            },
            {
                subtitle: "Atualizando o Contexto de um componente aninhado",
                text: `Geralmente é necessário atualizar o contexto de um componente que está aninhado em algum lugar da árvore de componentes. Neste caso, você pode passar uma função para o contexto, permitindo assim que consumidores possam atualizar o contexto.`
            },
            {
                subtitle2: "theme-context.js",
                img: reactContextImg13
            },
            {
                subtitle2: "theme-toggler-button.js",
                img: reactContextImg14
            },
            {
                subtitle2: "app.js",
                img: reactContextImg15
            },
            {
                subtitle: "Consumindo vários Contextos",
                text: `Para que o contexto possa continuar renderizando rapidamente, o React precisa manter cada consumidor de contexto separado em um nó da árvore.`,
                img: reactContextImg16
            },
            {
                text: `Se dois ou mais valores de contexto são utilizados juntos com frequência, você pode considerar criar o seu próprio render prop.
                Nota:
                Para mais informações sobre render prop, veja render props.`
            },
            {
                subtitle: "Ressalvas",
                text: `Contexto (context) usa referência de identidade para determinar quando renderizar novamente, por este motivo, existem alguns casos que podem desencadear renderizações não intencionais em consumidores quando algum componente que antecede um Provider é renderizados. Por exemplo, o código abaixo vai re-renderizar todos consumidores toda vez que o Provider re-renderizar porque um novo objeto é sempre criado para value:`,
                img: reactContextImg17
            },
            {
                text: `Para contornar isso, mova a prop value para o state do nível antecessor.`,
                img: reactContextImg18
            },
            {
                subtitle: "API Legada",
                text: `Nota:
                Versões anteriores do React foram disponibilizadas com uma versão experimental do context API. Esta versão antiga da API será suportada em todas versões 16.x lançadas mas, aplicações utilizando esta API, devem migrar para a nova versão. Leia aqui em API Legada.`
            }
        ]
    },
    {
        title: "React Hooks",
        content: [
            {
                text: `Até a versão 16.7 do React algumas funcionalidades só eram possíveis de ser acessadas através de classes (como, por exemplo, o lifecycle). Apesar da possibilidade de criar componentes a partir de função, até essa versão, eles só recebiam propriedades, não podendo acessar todas as funcionalidades do React, como as classes. Na versão 16.8 do React, foram lançado os hooks, que permitem o uso de vários recursos de forma simples através de funções. Eles também ajudam a organizar a lógica utilizada dentro dos componentes.
                Dentro da nossa rotina de desenvolvimento, uma tarefa comum é a criação de um portfólio para mostrarmos as nossas habilidades para possíveis recrutamentos, um amigo ou até mesmo para que a gente possa ter um histórico da nossa evolução enquanto devs. Normalmente, colocamos os nossos projetos dentro do Github, porém, se a gente quiser criar o nosso site para mostrar estes projetos, como faríamos?
                Em nosso projeto com React, teremos um componente que será responsável por listar os nossos repositórios do GitHub. Gostaríamos de ter uma estrutura como esta abaixo:`,
                img: reactHooksImg1
            },
            {
                text: `Já temos a nossa lista de repositórios, correto? Porém, se a gente quiser adicionar mais repositórios, teríamos que criar mais <li> para isso, pois o nosso código ainda está estático. Como faremos para gerar essa lista de maneira dinâmica?`
            },
            {
                subtitle: "Hook useEffect",
                text: `Com o nosso componente criado, podemos começar a adicionar as funcionalidades. Iremos construir uma aplicação que lista os repositórios da nossa conta do GitHub, então precisarei acessar a API deles. Faremos uma requisição HTTP utilizando o fetch do JavaScript para buscar a lista de repositórios desta API. Vale ressaltar que o fetch gera efeitos colaterais (desejados ou não) em nosso código, pois ele é uma operação de I/O (input/output).
                A documentação oficial do React nos orienta como lidar com efeitos colaterais em nossos componentes, então vamos utilizar o hook useEffect para lidar com estes efeitos gerados pelo fetch() com o código abaixo:`,
                img: reactHooksImg2
            },
            {
                text: `O hook useEffect nos auxilia a lidar com os side-effects (efeitos colaterais) e podemos usá-los também como ciclo de vida do componente.
                No exemplo acima, o side-effect é a chamada API. Este hook recebe dois parâmetros: o primeiro é uma função que será executada quando o componente for inicializado e atualizado (pode ser assíncrona ou não). Em nosso exemplo, este primeiro parâmetro é uma arrow function assíncrona, que faz uma requisição à API e guarda na const resposta, em formato de json, e, depois, na const repositorios. Já o segundo parâmetro indica em qual situação o side-effect irá modificar. No nosso caso, como queremos carregar a lista somente uma vez, passamos um array vazio [], pois ele garante a execução única (parecido com o funcionamento do componentDidMount()).
                Agora que já estamos trazendo os dados da API, como fazemos para gerar uma lista dinâmica a partir desses dados?`
            },
            {
                subtitle: "Hook useState",
                text: `Com os dados da API em mãos, precisamos conseguir armazená-los em uma lista e depois exibi-los em tela, mas como podemos fazer isto?
                Vamos pensar…
                Usamos o hook useEffect para controlar os side-effects da requisição HTTP fetch() que fizemos, após a chamada, há uma mudança de estado dentro da nossa aplicação, pois ela passa a ter os dados vindos da API que antes não tinha. Para que possamos lidar com as mudanças de estado da nossa aplicação, iremos usar o hook useState. Para isso, usamos o hook desta forma:`,
                img: reactHooksImg3
            },
            {
                text: `O useState, que permite a criação de estado no componente através de função e faz o gerenciamento do estado local do componente retorna um array como resultado. Por isso, é possível fazermos uma desestruturação para receber partes desse retorno. O array de retorno possui dois índices. O primeiro valor deste array é uma variável que guarda o estado em si, que chamamos de repositorio. Já o segundo valor é uma variável que é uma função, e é através dela que faremos as atualizações do valor do nosso estado, usamos setRepositorio para nomear a nossa função, o set vem antes do nome por ser uma convenção da comunidade.
                Como a nossa função setRepositorio é a responsável por alterar o estado de repositorio, precisamos colocá-la dentro do escopo da função useEffect, porque ela é a responsável por pegar os dados que vão modificar o estado da nossa aplicação. Desta forma, nossa função useEffect fica assim:`,
                img: reactHooksImg4
            },
            {
                text: `A diferença dentro dessa função é que retiramos o return repositorios e adicionamos a função setRepositorios(), passando como parâmetro a constante repositorios, pois, como foi explicado, é essa função responsável por atualizar os estado da nossa aplicação.
                Agora que já temos os dados dos repositórios vindo da API do GitHub e estamos atualizando o estado da nossa aplicação com eles, o último passo é exibir ele de forma dinâmica dentro da tag ul desta forma:`,
                img: reactHooksImg5
            },
            {
                text: `Para que fosse possível gerar dinamicamente, utilizamos o método map() para poder percorrer o nosso array repositorio, que possui a lista de repositórios, e imprimir um a um na tela.`
            },
            {
                subtitle: "React Hooks",
                text: `Os hooks permitem o uso de state e outros recursos que antes só eram possíveis dentro do React através de classes. Apesar disso, os hooks são opcionais, ficando a seu critério se vai usá-los ou continuar usando as classes. Clicando aqui você pode ver dentro da documentação oficial do React as principais motivações que levaram à criação dos hooks.
                Se você quiser saber mais, aqui na Alura, temos a Formação React JS, onde mergulhamos ainda mais no conceito de hooks e falamos de todo ecossistema do React.
                Te vejo numa próxima, até mais!`
            }
        ]
    },
    {
        title: "ReactDOM",
        content: [
            {
                subtitle: "Visão Geral",
                text: `O pacote react-dom provê métodos específicos para o DOM que podem ser usados no nível superior de sua aplicação como uma válvula de escape para sair do modelo do React se você precisar. A maioria de seus componentes não devem precisar deste módulo.`,
                ul: [
                    "render()",
                    "hydrate()",
                    "unmountComponentAtNode()",
                    "findDOMNode()",
                    "createPortal()"
                ]
            },
            {
                subtitle: "Suporte dos Navegadores",
                text: `O React suporta todos os navegadores populares, incluindo Internet Explorer 9 e acima, apesar de precisar de alguns polyfills para navegadores antigos como IE 9 e IE 10.`
            },
            {
                text: `Nota: Nós não temos suporte para navegadores antigos que não possuem suporte para métodos ES5. Mas, você pode descobrir que suas aplicações funcionam em navegadores antigos se polyfills como es5-shim and es5-sham forem incluídos na página. Você estará por conta e risco se optar por seguir esse caminho.`
            },
            {
                subtitle: "Referência",
                subtitle2: "render()",
                example: "ReactDOM.render(element, container[, callback])"
            },
            {
                text: `Renderiza o um elemento do React no DOM no container fornecido e retorna uma referência ao componente (ou retorna null para componentes sem state)
                Se o elemento do React foi previamente renderizado no container, isso vai realizar uma atualização nele e só alterar o DOM conforme necessário para refletir o elemento do React mais recente.
                Se a callback opcional for fornecida, ela será executada depois do componente ser renderizado ou atualizado.`
            },
            {
                text: `Nota:
                ReactDOM.render() controla o conteúdo do nó contêiner que você passa. Qualquer elemento do DOM que existe dentro será substituído na primeira chamada. As próximas chamadas usam o algoritmo de diferenciação do React para atualizações eficientes.
                ReactDOM.render() não modifica o nó contêiner (só modifica os filhos do contêiner). Pode ser possível inserir um componente em um nó já existente no DOM sem sobrescrever os filhos existentes.
                ReactDOM.render() atualmente retorna uma referência à instância raiz de ReactComponent. Porém, usar esse valor de retorno é legado e deve ser evitado porque versões futuras do React podem renderizar componentes assincronamente em alguns casos. Se você precisa de uma referência da instância raiz de ReactComponent, a solução preferida é de anexar uma callback de ref para o elemento raiz.
                Usar ReactDOM.render() para hidratar um contêiner renderizado no servidor está deprecado e será removido no React 17. Ao invés disso, use hydrate().`
            },
            {
                subtitle2: "hydrate()",
                example: "ReactDOM.hydrate(element, container[, callback])"
            },
            {
                text: `O mesmo que render(), mas é usado para hidratar um contêiner cujo o conteúdo HTML foi renderizado pelo ReactDOMServer. O React tentará anexar event listeners ao markup existente.
                O React espera que o conteúdo renderizado seja idêntico entre o servidor e o cliente. Ele pode consertar diferenças no conteúdo de texto, mas você deve tratar incompatibilidades como erros e ajustá-las. Em modo de desenvolvimento, o React avisa sobre incompatibilidades durante a hidratação. Não existem garantias de que diferenças entre atributos serão consertadas em caso de incompatibilidade. Isso é importante por questões de performance porque na maioria dos aplicativos, incompatibilidades são raras e, portanto, validar todo o markup seria proibitivamente caro.
                Se um único atributo de elemento ou conteúdo de texto é inevitavelmente diferente entre o servidor e o cliente (como por exemplo, um timestamp), você pode silenciar o aviso adicionando suppressHydrationWarning={true} ao elemento. Só funciona à um nível de profundidade, e destina-se a ser uma válvula de escape. Não use em excesso. A não ser que o conteúdo seja um texto, o React ainda não vai tentar consertar, então ele pode permanecer inconsistente até futuras atualizações.
                Se você precisa propositalmente renderizar algo diferente no servidor e no cliente, você pode fazer uma renderização de dois passos. Componentes que renderizam algo diferente no cliente podem ler uma variável de state como this.state.isClient, que você pode atribuir o valor true no componentDidMount(). Dessa forma o passo de renderização inicial irá renderizar o mesmo conteúdo que o servidor, evitando incompatibilidades, mas um passo adicional acontecerá sincronamente logo após a hidratação. Note que essa abordagem fará seus componentes mais lentos porque eles tem de renderizar duas vezes, então use com cautela.
                Lembre-se de estar atento à experiência de usuário em conexões lentas. O código JavaScript pode carregar significativamente depois da renderização inicial do HTML, então se você renderizar algo diferente no passo do cliente, a transição pode ser áspera. No entanto, se executado bem, pode ser benéfico renderizar uma “casca” da aplicação no servidor, e só mostrar ferramentas extras no lado do cliente. Para aprender como fazer isso sem encontrar problemas de incompatibilidade do markup, consulte a explicação do parágrafo anterior.`
            },
            {
                subtitle2: "unmountComponentAtNode()",
                example: "ReactDOM.unmountComponentAtNode(container)"
            },
            {
                text: `Remove do DOM um componente React já montado e limpa seus manipuladores de evento (event handlers) e estado (state). Se nenhum componente foi montado no contêiner, chamar essa função não faz nada. Retorna true se um componente foi desmontado e false se não tinha nenhum componente para desmontar.`
            },
            {
                subtitle2: "findDOMNode()",
                text: `Nota:
                findDOMNode é uma válvula de escape usada para acessar o nó subjacente do DOM. Na maioria dos casos, o uso dessa válvula de escape é desencorajado porque perfura a abstração do componente. Foi deprecado em StrictMode.`,
                example: "ReactDOM.findDOMNode(component)"
            },
            {
                text: `Se esse componente foi montado no DOM, isso retorna o elemento do DOM nativo do navegador. Esse método é útil para ler valores fora do DOM, como valores de campos de formulário e realizar medições do DOM. Na maioria dos casos, você pode anexar uma ref ao nó do DOM e evitar completamente o uso de findDOMNode.
                Quando um componente renderiza null ou false, findDOMNode retorna null. Quando um componente renderiza uma string, findDOMNode retorna um nó de texto do DOM contendo esse valor. A partir do React 16, um componente pode retornar um fragmento com múltiplos filhos, nesse caso findDOMNode irá retornar o nó do DOM correspondente ao primeiro filho não vazio.`
            },
            {
                text: `Nota:
                findDOMNode só funciona em componentes montados (ou seja, componentes que foram postos no DOM). Se você tentar chamar isso em um componente que não foi montado ainda (como chamar findDOMNode() no render() em um componente que ainda tem que ser criado) uma exceção será lançada.
                findDOMNode não pode ser usado em componentes funcionais.`
            },
            {
                subtitle2: "createPortal()",
                example: "ReactDOM.createPortal(child, container)"
            },
            {
                text: `Cria um portal. Portais provêm uma forma de renderizar filhos em um nó do DOM que existe fora da hierarquia do componente do DOM.`
            }
        ]
    },
    {
        title: "React Router Dom",
        content: [
            {
                text: `Em um site acessamos várias páginas, como por exemplo, página inicial, contatos, sobre e perfil. Para navegar entre as páginas de uma aplicação React.JS precisaremos criar rotas, onde cada rota vai representar uma tela.
                Para trabalhar com rotas no React vamos utilizar um pacote chamado React Router Dom que precisa ser instalado no nosso projeto. É ele que nos auxiliará na criação da navegação.`
            },
            {
                subtitle: "Instalação e Configuração",
                text: `Antes de aplicar o conceito de navegação e instalar o pacote React Router Dom precisamos criar um projeto React. Para isso execute o Código 1.`
            },
            {
                example: `npx create-react-app react-rotas`
            },
            {
                text: `Após a criação do novo projeto em React, precisamos instalar o pacote React Router Dom que vai manipular as rotas do nosso projeto React. Antes disso acesse a pasta do projeto executando o comando do Código 2.`
            },
            {
                example: `cd react-rotas`
            },
            {
                text: `A instalação de pacotes nos nossos projetos é feita através de um gerenciador de pacotes, que pode ser o NPM ou o Yarn. Nesse artigo manteremos o foco no NPM por ser comumente usado, para instalar o pacote react router dom. Basta executar o comando do Código 3 no terminal.`
            },
            {
                example: `npm install react-router-dom`
            },
            {
                text: `Com projeto criado e o pacote instalado, abriremos nossa aplicação em um editor de texto ou IDE de sua preferência e implementar a navegação do nosso projeto.`
            },
            {
                subtitle: "Criando o arquivo de rotas",
                text: `Neste ponto vamos criar o arquivo de rotas da nossa aplicação, o routes.js. Seu código pode ser visto no Código 4.`,
                img: reactRouterDomImg1
            },
            {
                text: `Note que na linha 2 do arquivo routes.js importamos dois componentes do pacote do react-router-dom: BrowserRouter e Route.
                Esses dois componentes provêm e gerenciam as rotas dentro da nossa aplicação. Vamos aprender a função de cada um.
                BrowserRouter: é um componente responsável por informar a nossa aplicação que teremos um roteamento de componentes, por conta disso ele ficará em volta dos componentes <Route>.
                Route: componente que associa a rota ao componente. Nele temos três parâmetros: component, path e exact. O parâmetro component recebe o componente que precisa ser exibido ao acessar a rota. O parâmetro path é o caminho na URL que precisa ser acessado para mostrar o componente, definido pelo parâmetro component. O parâmetro exact determina qual o componente vai ser exibido apenas se a rota for igual ao definido entre aspas, no nosso caso se for exatamente "/".
                Os componentes Home, Sobre e Usuario que foram importados em routes.js serão criados mais a frente ainda neste artigo, então não se preocupe com eles nesse momento.
                Em nosso arquivo App.js precisaremos importar o routes.js, para usarmos a navegação através das páginas em nossa aplicação, conforme mostra o Código 5.`,
                img: reactRouterDomImg2
            },
            {
                text: `O próximo passo é criar nossos componentes que serão exibidos de acordo com a URL acessada pelos nossos usuários. O primeiro será o componente Home.
                Para cada componente, deixaremos uma mensagem e um Link para retornar a página inicial.`
            },
            {
                subtitle: "Componente Home",
                text: `O código do componente Home (arquivo Home.js) pode ser visto no Código 6.`,
                img: reactRouterDomImg3
            },
            {
                text: `O componente Home foi estruturado para ser a nossa página inicial, nele temos dois links que nos permite navegar para as páginas Sobre e Usuario.
                Observando o código vemos que existe um componente chamado <Link> que foi usado duas vezes como pode ser visto nas linhas 11 e 14.
                Esse componente, que pertence ao pacote react-router-dom vai substituir a nossa tag <a> do HTML para acessar as páginas do próprio projeto. Além disso, recebe o parâmetro to. Ele representa o nome da rota que será acessada pela URL.
                O componente Link possui duas tags: uma de abertura e uma de fechamento. Entre as duas tags (abertura e fechamento) será inserido o conteúdo que ficará disponível para ser clicado. Veja um exemplo no Código 7.`
            },
            {
                example: `<Link to="/">retornar a página inicial</Link>`
            },
            {
                text: `No nosso exemplo inserimos o texto "retornar a página inicial", que ao ser clicado exibirá o componente referente a rota /.
                A tag <a> será utilizada na programação React para acessar links externos ou links âncora da própria página.`
            },
            {
                subtitle: "Componentes Sobre e Usuário",
                text: `As páginas de Sobre e Usuário tem a mesma estrutura: têm o título da página e um link para retornar a página inicial.
                Veja o código do componente Sobre (arquivo Sobre.js) no Código 8.`,
                img: reactRouterDomImg4
            },
            {
                text: `Veja o código do componente Usuario (arquivo Usuario.js) no Código 9.`,
                img: reactRouterDomImg5
            },
            {
                subtitle: "Executando a aplicação",
                text: `Agora que já configuramos nosso arquivo de rotas e nossos componentes, acesse o projeto e execute o comando do Código 10.`,
            },
            {
                example: `npm start`
            }
        ]
    },
    {
        title: "Javascript",
        content: [
            {
                text: `JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido. É a terceira camada do bolo das tecnologias padrões da web, duas das quais (HTML e CSS) nós falamos com muito mais detalhes em outras partes da Área de Aprendizado.`,
                img: javascriptImg1
            },
            {
                text: `HTML é a linguagem de marcação que nós usamos para estruturar e dar significado para o nosso conteúdo web. Por exemplo, definindo parágrafos, cabeçalhos, tabelas de conteúdo, ou inserindo imagens e vídeos na página.
                CSS é uma linguagem de regras de estilo que nós usamos para aplicar estilo ao nosso conteúdo HTML. Por exemplo, definindo cores de fundo e fontes, e posicionando nosso conteúdo em múltiplas colunas.
                JavaScript é uma linguagem de programação que permite a você criar conteúdo que se atualiza dinamicamente, controlar múltimídias, imagens animadas, e tudo o mais que há de intessante. Ok, não tudo, mas é maravilhoso o que você pode efetuar com algumas linhas de código JavaScript.`
            },
            {
                subtitle: "Então o que ele pode realmente fazer?",
                text: `O núcleo da linguagem JavaScript consiste em alguns benefícios comuns da programação que permite a você fazer coisas como:
                Armazenar conteúdo útil em variáveis. No exemplo acima, a propósito, nós pedimos que um novo nome seja inserido e armazenamos o nome em uma variável chamada nome.
                Operações com pedaços de texto (conhecidos como "strings" em programação). No exemplo acima, nós pegamos a string "Jogador 1: " e concatenamos (juntamos) com a variável nome para criar o texto completo "Jogador 1: Chris".
                Executar o código em resposta a determinados eventos que ocorrem em uma página da Web. Nós usamos o click (en-US) no nosso exemplo acima para que quando clicassem no botão, rodasse o código que atualiza o texto.
                E muito mais!
                O que é ainda mais empolgante é a funcionalidade construída no topo do núcleo da linguagem JavaScript. As APIs (Application Programming Interfaces - Interface de Programação de Aplicativos) proveem a você superpoderes extras para usar no seu código JavaScript.
                APIs são conjuntos prontos de blocos de construção de código que permitem que um desenvolvedor implemente programas que seriam difíceis ou impossíveis de implementar. Eles fazem o mesmo para a programação que os kits de móveis prontos para a construção de casas - é muito mais fácil pegar os painéis prontos e parafusá-los para formar uma estante de livros do que para elaborar o design, sair e encontrar a madeira, cortar todos os painéis no tamanho e formato certos, encontrar os parafusos de tamanho correto e depois montá-los para formar uma estante de livros.
                Elas geralmente se dividem em duas categorias.`,
                img: javascriptImg2
            },
            {
                text: `APIs de navegadores já vem implementadas no navegador, e são capazes de expor dados do ambiente do computador, ou fazer coisas complexas e úteis. Por exemplo:
                A API DOM (Document Object Model) permite a você manipular HTML e CSS, criando, removendo e mudando HTML, aplicando dinamicamente novos estilos para a sua página, etc. Toda vez que você vê uma janela pop-up aparecer em uma página, ou vê algum novo conteúdo sendo exibido (como nós vimos acima na nossa simples demonstração), isso é o DOM em ação.
                A API de Geolocalização recupera informações geográficas. É assim que o Google Maps consegue encontrar sua localização e colocar em um mapa.
                As APIs Canvas e WebGL permite a você criar gráficos 2D e 3D animados. Há pessoas fazendo algumas coisas fantásticas usando essas tecnologias web — veja Chrome Experiments e webglsamples.
                APIs de áudio e vídeo como HTMLMediaElement (en-US) e WebRTC permitem a você fazer coisas realmente interessantes com multimídia, tanto tocar música e vídeo em uma página da web, como capturar vídeos com a sua câmera e exibir no computador de outra pessoa (veja Snapshot demo para ter uma ideia).
                Nota: Muitas demonstrações acima não vão funcionar em navegadores antigos — quando você for experimentar, é uma boa ideia usar browsers modernos como Firefox, Edge ou Opera para ver o código funcionar. Você vai precisar estudar testes cross browser com mais detalhes quando você estiver chegando perto de produzir código (código real que as pessoas vão usar).
                APIs de terceiros não estão implementados no navegador automaticamente, e você geralmente tem que pegar seu código e informações em algum lugar da Web. Por exemplo:
                A API do Twitter permite a você fazer coisas como exibir seus últimos tweets no seu website.
                A API do Google Maps permite a você inserir mapas customizados no seu site e outras diversas funcionalidades.
                Note: Essas APIs são avançadas e nós não vamos falar sobre nenhuma delas nesse módulo.Vo cê pode achar muito mais sobre elas em nosso módulo APIs web no lado cliente. 
                Tem muito mais coisas disponíveis! Contudo, não fique animado ainda. Você não estará pronto para desenvolver o próximo Facebook, Google Maps ou Instagram depois de estudar JavaScript por 24 horas — há um monte de coisas básicas para estudar primeiro. E é por isso que você está aqui — vamos começar!`
            },
            {
                subtitle: "O que JavaScript está fazendo na sua página web?",
                text: `Aqui nós vamos realmente começar a ver algum código, e enquanto fazemos isso vamos explorar o que realmente acontece quando você roda algum código JavaScript na sua página.
                Vamos recaptular brevemente a história do que acontece quando você carrega uma página web em um navegador (falamos sobre isso no nosso artigo Como o CSS funciona). Quando você carrega uma página web no seu navegador, você está executando seu código (o HTML, CSS e JavaScript) dentro de um ambiente de execução (a guia do navegador). Isso é como uma fábrica que pega a matéria prima (o código) e transforma em um produto (a página web).`,
                img: javascriptImg3
            },
            {
                text: `Um uso muito comum do JavaScript é modificar dinamicamente HTML e CSS para atualizar uma interface do usuário, por meio da API do Document Object Model (conforme mencionado acima). Observe que o código em seus documentos web geralmente é carregado e executado na ordem em que aparece na página. Se o JavaScript carregar e tentar executar antes do carregamento do HTML e CSS afetado, poderão ocorrer erros. Você aprenderá maneiras de contornar isso mais adiante neste artigo, na seção Estratégias de carregamento de scripts .`
            },
            {
                subtitle: "Segurança do navegador",
                text: `Segurança do navegador
                Cada guia do navegador tem seu próprio espaço para executar código (esses espaços são chamados de "ambientes de execução", em termos técnicos) — isso significa que na maioria dos casos o código em cada guia está sendo executado separadamente, e o código em uma guia não pode afetar diretamente o código de outra guia — ou de outro website. Isso é uma boa medida de segurança — se esse não fosse o caso, então hackers poderiam começar a escrever código para roubar informações de outros websites, e fazer outras coisas más.`
            },
            {
                subtitle: "Código interpretado x compilado",
                text: `Você pode ouvir os termos interpretado e compilado no contexto da programação. JavaScript é uma linguagem interpretada — o código é executado de cima para baixo e o resultado da execução do código é imediatamente retornado. Você não tem que transformar o código em algo diferente antes do navegador executa-lo.
                Linguagens compiladas, por outro lado, são transformadas (compiladas) em algo diferente antes que sejam executadas pelo computador. Por exemplo, C/C++ são compiladas em linguagem Assembly, e depois são executadas pelo computador.
                JavaScript é uma linguagem de programação leve e interpretada. O navegador recebe o código JavaScript em sua forma de texto original e executa o script a partir dele. Do ponto de vista técnico, a maioria dos intérpretes modernos de JavaScript realmente usa uma técnica chamada compilação just-in-time para melhorar o desempenho; o código-fonte JavaScript é compilado em um formato binário mais rápido enquanto o script está sendo usado, para que possa ser executado o mais rápido possível. No entanto, o JavaScript ainda é considerado uma linguagem interpretada, pois a compilação é manipulada em tempo de execução, e não antes.
                Há vantagens em ambos os tipos de linguagem, mas nós não iremos discutir no momento.`
            },
            {
                subtitle: "Lado do servidor x Lado do cliente",
                text: `Você pode também ouvir os termos lado do servidor (server-side) e lado do cliente (client-side), especialmente no contexto de desenvolvimento web. Códigos do lado do cliente são executados no computador do usuário — quando uma página web é visualizada, o código do lado do cliente é baixado, executado e exibido pelo navegador. Nesse módulo JavaScript nós estamos explicitamente falando sobre JavaScript do lado do cliente.
                Códigos do lado do servidor, por outro lado, são executados no servidor e o resultado da execução é baixado e exibido no navegador. Exemplos de linguagens do lado do servidor populares incluem PHP, Python, Ruby, e ASP.NET. E JavaScript! JavaScript também pode ser usada como uma linguagem server-side, por exemplo, no popular ambiente Node.js — você pode encontrar mais sobre JavaScript do lado do servidor no nosso tópico Websites dinâmicos - Programação do lado do servidor.`
            },
            {
                subtitle: "Código dinâmico x estático",
                text: `A palavra dinâmico é usada para descrever tanto o JavaScript client-side como o server-side — essa palavra se refere a habilidade de atualizar a exibição de uma página web/app para mostrar coisas diferentes em circunstâncias diferentes, gerando novo conteúdo como solicitado. Código do lado do servidor dinamicamente gera novo conteúdo no servidor, puxando dados de um banco de dados, enquanto que JavaScript do lado do cliente dinamicamente gera novo conteúdo dentro do navegador do cliente, como criar uma nova tabela HTML com dados recebidos do servidor e mostrar a tabela em uma página web exibida para o usuário. Os significados são ligeiramente diferente nos dois contextos, porém relacionados, e ambos (JavaScript server-side e client-side) geralmente trabalham juntos.
                Uma página web sem atualizações dinâmicas é chamada de estática — ela só mostra o mesmo conteúdo o tempo todo.`
            },
            {
                subtitle: "Como você adiciona JavaScript na sua página?",
                text: `O JavaScript é inserido na sua página de uma maneira similar ao CSS. Enquanto o CSS usa o elemento <link> para aplicar folhas de estilo externas e o elemento <style> para aplicar folhas de estilo internas, o JavaScript só precisa de um amigo no mundo do HTML — o elemento <script>.`
            },
            {
                subtitle: "Estratégias para o carregamento de scripts",
                text: `Há um considerável número de problemas envolvendo o carregamento de scripts na ordem correta. Infelizmente, nada é tão simples quanto parece ser! Um problema comum é que todo o HTML de uma página é carregado na ordem em que ele aparece. Se você estiver usando Javascript para manipular alguns elementos da página (sendo mais preciso, manipular o Document Object Model), seu código não irá funcionar caso o JavaScript for carregado e executado antes mesmo dos elementos HTML estarem disponíveis.
                Nos exemplos acima, tanto nos scripts internos ou externos, o JavaScript é carregado e acionado dentro do cabeçalho do documento, antes do corpo da página ser completamente carregado. Isso poderá causar algum erro. Assim, temos algumas soluções para isso.
                No exemplo interno, você pode ver essa estrutura em volta do código:`
            },
            {
                example: `document.addEventListener( "DOMContentLoaded", function() {...});`
            },
            {
                text: `Isso é um event listener (ouvidor de eventos), que ouve e aguarda o disparo do evento "DOMContentLoaded" vindo do browser, evento este que significa que o corpo do HTML está completamente carregado e pronto. O código JavaScript que estiver dentro desse bloco não será executado até que o evento seja disparado, portanto, o erro será evitado (você irá aprender sobre eventos mais tarde).
                No exemplo externo, nós usamos um recurso moderno do JavaScript para resolver esse problema: Trata-se do atributo defer, que informa ao browser para continuar renderizando o conteúdo HTML uma vez que a tag <script> foi atingida.`
            },
            {
                example: `<script src="script.js" defer></script>`
            },
            {
                text: `Neste caso, ambos script e HTML irão carregar de forma simultânea e o código irá funcionar.
                Nota: No caso externo, nós não precisamos utilizar o evento DOMContentLoaded porque o atributo defer resolve o nosso problema. Nós não utilizamos defer como solução para os exemplos internos pois defer funciona apenas com scripts externos.
                Uma solução à moda antiga para esse problema era colocar o elemento script bem no final do body da página (antes da tag </body>). Com isso, os scripts iriam carregar logo após todo o conteúdo HTML. O problema com esse tipo de solução é que o carregamento/renderização do script seria completamente bloqueado até que todo o conteúdo HTML fosse analisado. Em sites de maior escala, com muitos scripts, essa solução causaria um grande problema de performance e deixaria o site lento. `
            },
            {
                subtitle: "async e defer",
                text: `Atualmente, há dois recursos bem modernos que podermos usar para evitar o problema com o bloqueio de scripts — async e defer (que vimos acima). Vamos ver as diferenças entre esses dois?
                Os scripts que são carregados usando o atributo async (veja abaixo) irão baixar o script sem bloquear a renderização da página e irão executar imediatamente após o script terminar de ser disponibilizado. Nesse modo você não tem garantia nenhuma que os scripts carregados irão rodar em uma ordem específica, mas saberá que dessa forma eles não irão impedir o carregamento do restante da página. O melhor uso para o async é quando os scripts de uma página rodam de forma independente entre si e também não dependem de nenhum outro script.
                Por exemplo, se você tiver os seguintes elementos script:`,
                img: javascriptImg4
            },
            {
                text: `Você não pode garantir que o script. jquery.js carregará antes ou depois do script2.js e script3.js . Nesse caso, se alguma função desses scripts dependerem de algo vindo do jquery, ela produzirá um erro pois o jquery ainda não foi definido/carregado quando os scripts executaram essa função.
                async deve ser usado quando houver muitos scripts rodando no background, e você precisa que estejam disponíveis o mais rápido possível. Por exemplo, talvez você tenha muitos arquivos de dados de um jogo para carregar que serão necessários assim que o jogo iniciar, mas por enquanto, você só quer entrar e ver a tela de carregamento, a do titulo do jogo e o lobby, sem ser bloqueado pelo carregamento desses scripts.
                Scripts que são carregados utilizando o atributo defer (veja abaixo) irão rodar exatamente na ordem em que aparecem na página e serão executados assim que o script e o conteúdo for baixado.`,
                img: javascriptImg5
            },
            {
                text: `Todos os scripts com o atributo defer irão carregar na ordem que aparecem na página. No segundo exemplo, podemos ter a certeza que o script jquery.js irá carregar antes do script2.js e script3.js e o script2.js irá carregar antes do script3.js. Os scripts não irão rodar sem que antes todo o conteúdo da página seja carregado, que no caso, é muito útil se os seus scripts dependem de um DOM completamente disponibilizado em tela (por exemplo, scripts que modificam um elemento).
                Resumindo:
                async e defer istruem o browser a baixar os scripts numa thread (processo) á parte, enquanto o resto da página (o DOM, etc.) está sendo baixado e disponibilizado de forma não bloqueante.
                Se os seus scripts precisam rodar imediatamente, sem que dependam de outros para serem executados, use async.
                Se seus scripts dependem de outros scripts ou do DOM completamente disponível em tela, carregue-os usando defer e coloque os elementos <script> na ordem exata que deseja que sejam carregados.`
            }
        ]
    },
    {
        title: "Função Callback",
        content: [
            {
                subtitle: "O que é callback?",
                text: `Basicamente, callback é um tipo de função que só é executada após o processamento de outra função. Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é, então, chamada de callback.
                Isso é importante porque uma característica dessa linguagem é não esperar o término de cada evento para a execução do próximo. Portanto, ela contribui para controlar melhor o fluxo de processamento assíncrono.`,
                img: callbackImg1
            },
            {
                text: `O JavaScript executa o código sequencialmente em uma ordem de cima para baixo. No entanto, existem alguns casos em que o código é executado (ou deve ser executado) depois que algo acontece e de modo não sequencial. Isso é chamado de programação assíncrona.
                Callbacks garantem que uma função não seja executada antes que uma tarefa seja concluída, mas logo depois dessa tarefa ser concluída. Elas nos ajudam a desenvolver código JavaScript assíncrono e evitam que tenhamos problemas e erros.
                Em JavaScript, o jeito de criar uma função de callback é passá-la como um parâmetro para outra função, chamando-a novamente em seguida, logo depois que algo aconteça ou que alguma tarefa seja concluída.`
            }
        ]
    },
    {
        title: "Array.includes()",
        content: [
            {
                subtitle: "Sumário",
                text: `O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.`
            },
            {
                subtitle: "Sintaxe",
                example: `array.includes(searchElement[, fromIndex])`
            },
            {
                subtitle: "Parâmetros"
            },
            {
                subtitle2: "searchElement",
                text: `O elemento a buscar`
            },
            {
                subtitle2: "fromIndex",
                text: `Opcional. A posição no array de onde a busca pelo searchElement se iniciará. Por padrão, 0.`
            },
            {
                subtitle: "Exemplos",
                img: arrayIncludesImg1
            }
        ]
    },
    {
        title: "Array.map()",
        content: [
            {
                subtitle: "Resumo",
                text: "O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado."
            },
            {
                subtitle: "Sintaxe",
                example: "arr.map(callback[, thisArg])"
            },
            {
                subtitle: "Parâmetros",
                subtitle2: "callback",
                text: "Função cujo retorno produz o elemento do novo Array. Recebe três argumentos:"
            },
            {
                subtitle2: "valorAtual",
                text: "O valor do elemento original do Array de origem."
            },
            {
                subtitle2: "indice",
                text: "O índice do elemento atual que está sendo processado no array.",
            },
            {
                subtitle2: "array",
                text: "O Array de origem."
            },
            {
                subtitle2: "thisArg",
                text: "Opcional. Valor a ser utilizado como o this no momento da execução da função callback."
            },
            {
                subtitle: "Descrição",
                text: `O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.
                A função callback é chamada com três argumentos: o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido.
                Se o parametro thisArg foi passado para o método map, ele será repassado para a função callback no momento da invocação para ser utilizado como o this. Caso contrário, o valor undefined será repassado para uso como o this. O valor do this a ser repassado para o callback deve respeitar as regras para determinar como o this é acessado por uma função (em inglês).
                O método map não modifica o array original. No entanto, a função callback invocada por ele pode fazê-lo.
                A lista de elementos que serão processados pelo map é montada antes da primeira invocação à função callback. Se um elemento for acrescentado ao array original após a chamada ao map, ele não será visível para o callback. Se os elementos existentes forem modificados, os valores que serão repassados serão os do momento em que o método map invocar o callback. Elementos removidos não serão visitados.`
            },
            {
                subtitle: "Exemplos",
                subtitle2: "Exemplo: Mapeando um array de números para um array de raízes quadradas",
                text: "O código a seguir mapeia um array de números e cria um novo array contendo o valor da raiz quadrada de cada número do primeiro array.",
                img: arrayMapImg1
            },
            {
                subtitle2: "Exemplo: Mapeando um array de números usando uma função callback que contém um argumento",
                text: `O código a seguir mostrar como o método map funciona quando a função callback possui apenas um argumento. Esse argumento será automaticamente atribuído para cada elemento do array conforme o map itera sobre o array original.`,
                img: arrayMapImg2
            }
        ]
    },
    {
        title: "String.includes()",
        content: [
            {
                text: `O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false.`
            },
            {
                subtitle: "Sintaxe",
                example: `str.includes(searchString[, position])`
            },
            {
                subtitle: "Parâmetros"
            },
            {
                subtitle2: "searchString",
                text: `É o conjunto de caracteres que será pesquisado dentro desta string.`
            },
            {
                subtitle2: "position",
                text: `Opcional. É um número inteiro que indica por onde a busca iniciará, referente ao índice da string a ser pesquisada. O valor padrão é 0.`
            },
            {
                subtitle: "Valor retornado",
                text: `true se o conjunto de caracteres for encontrado em algum lugar dentro da string sendo pesquisada. Do contrário, retorna false.`
            },
            {
                subtitle: "Descrição",
                text: `Este método permite conferir se uma string contém um determinado conjunto de caracteres.`
            },
            {
                subtitle: "Case-sensitivity",
                text: `O método includes() é case sensitive. Por exemplo, a seguinte expressão retorna false:`
            },
            {
                example: `'Bandeira do Brasil'.includes('brasil'); // retorna false`
            },
            {
                subtitle: "Exemplos",
                img: stringIncludesImg1
            }
        ]
    },
    {
        title: "HTML",
        content: [
            {
                text: `HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web.
                "Hipertexto" refere-se aos links que conectam páginas da Web entre si, seja dentro de um único site ou entre sites. Links são um aspecto fundamental da web. Ao carregar conteúdo na Internet e vinculá-lo a páginas criadas por outras pessoas, você se torna um participante ativo na world wide web.
                O HTML usa "Marcação" para anotar texto, imagem e outros conteúdos para exibição em um navegador da Web. A marcação HTML inclui "elementos" especiais, como <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <nav>, <output>, <progress>, <video>, <ul>, <ol>, <li> e muitos outros.
                Um elemento HTML é separado de outro texto em um documento por "tags", que consistem no nome do elemento entre "<" e ">". O nome de um elemento dentro de uma tag é insensível a maiúsculas e minúsculas. Isto é, pode ser escrito em maiúsculas, minúsculas ou um mistura. Por exemplo, a tag <title> pode ser escrita como <Title>, <TITLE> ou de qualquer outra forma.`
            }
        ]
    },
    {
        title: "Comandos e tags HTML5",
        content: [
            {
                subtitle: "Tags Continuadas:",
                ul: [
                    "<!--...--> Define um comentário;",
                    `<!DOCTYPE> Define o tipo de documento; (No HTML 4 existiam três (3) diferentes tipos de doctype, mas no HTML 5 temos apenas um (1) tipo <!DOCTYPE HTML>. É aqui que o navegador entende o tipo de documento e como ele deve interpretar as tags nele contidas.)`,
                    "<a> Define um hyperlink;",
                    "<abbr> Define uma abreviação",
                    "<address> Define um endereço. (Passa a ser tratado como uma seção);",
                    "<area> Define uma área dentro de um mapa de imagem;",
                    "<b> Define um texto em negrito; (Possui o mesmo nível semântico que um SPAN, e também o estilo de negrito no texto. Contudo, ele não dá nenhuma importância para o texto marcado com ele.)",
                    "<base> Define uma base URL para todos os links da página;",
                    "<bdo> Define a direção do texto apresentado;",
                    "<blockquote> Define uma citação longa;",
                    "<body> Define o corpo da página;",
                    "<br> Insere uma quebra de linha simples;",
                    "<button> Define um botão de comando;",
                    `<caption> Define o "caption" de uma tabela;`,
                    "<cite> Define uma citação;",
                    "<code> Define o código texto do computador;",
                    "<col> Define os atributos da coluna da tabela;",
                    "<colgroup> Define um grupo de colunas da tabela;",
                    "<dd> Define uma descrição de definição;",
                    "<del> Define um texto deletado;",
                    "<dfn> Define um termo de definição;",
                    "<div> Define uma seção no documento;",
                    "<dl> Define uma lista de definição;",
                    "<dt> Define um termo de definição;",
                    "<em> Define um texto em ênfase;",
                    "<fieldset> Define um conjunto de campos (fieldset);",
                    "<form> Define um formulário;",
                    "<h1> até >h6> Define do cabeçalho 1 até o cabeçalho 6;",
                    "<head> Define uma informação sobre o documento. (Não aceita mais elementos Child como filho);",
                    "<hr> Define uma regra horizontal. (Tem o mesmo nível que um parágrafo, mas também é utilizado para fazer separações e quebras de linha);",
                    "<html> Define um documento html;",
                    "<i> Define um texto em itálico; (Possui o mesmo nível semântico que um SPAN. O texto continua sendo itálico e para usuários de leitores de tela, a voz utilizada é modificada para indicar ênfase. É de grande valor e utilidade para marcar, termos técnicos, termos em outras linguagens etc.)",
                    "<iframe> Define uma linhas sobre a janela (frame);",
                    "<img> Define uma imagem;",
                    "<input> Define um campo de inserção;",
                    "<ins> Define um texto inserido;",
                    "<kbd> Define um texto do teclado;",
                    `<label> Define uma "label" para o formulário;`,
                    "<legend> Define um título para os campos (fields);",
                    "<li> Define os itens da lista;",
                    "<link> Define uma referência;",
                    "<map> Define uma imagem de mapa;",
                    `<menu> Define uma lista de "menus";`,
                    "<meta> Define informações meta;",
                    "<noscript> Define uma seção noscript;",
                    "<object> Define um objeto incorporado;",
                    "<ol> Define uma lista ordenada;",
                    "<optgroup> Define um grupo de opção;",
                    "<option> Define uma opção em uma lista suspensa (drop-down list);",
                    "<p> Define um parágrafo;",
                    "<param> Define um parâmetro para determinado objeto;",
                    "<pre> Define um texto pré-formatado;",
                    "<q> Define uma citação curta;",
                    "<s> Define um texto que não é mais correto.",
                    "<samp> Define um código de amostra;",
                    "<script> Define um script;",
                    "<select> Define uma lista selecionável;",
                    "<small> Define um pequeno texto;",
                    "<span> Define uma seção no documento;",
                    "<strong> Define um texto forte (similar ao negrito);",
                    "<style> Define um estilo;",
                    "<sub> Define um texto subscrito;",
                    "<sup> Define um texto sobrescrito;",
                    "<table> Define uma tabela;",
                    "<tbody> Define o corpo da tabela;",
                    "<td> Define uma célula da tabela;",
                    "<textarea> Define um área de texto;",
                    "<tfoot> Define o rodapé da tabela;",
                    "<th> Define o cabeçalho da tabela;",
                    "<thead> Define o cabeçalho da tabela;",
                    "<title> Define o título do documento;",
                    "<tr> Define uma linha da tabela;",
                    "<ul> Define uma lista desordenada;",
                    "<var> Define uma variável;"
                ]
            },
            {
                subtitle: "Tags Descontinuadas:",
                ul: [
                    "<acronym> Define siglas em HTML 4.01. (Desenvolvedores preferem utilizar a tag <abbr>);",
                    "<applet> Define um miniaplicativo incorporado. (Ficou obsoleto em função da tag <object>);",
                    "<basefont> Define as propriedads da font padrão para todo o texto do documento. (Apenas efeito visual);",
                    "<big> Usado para tornar o texto maior. (Apenas efeito visual);",
                    "<center> Usado para alinhar texto e conteúdo no centro. (Apenas efeito visual);",
                    "<dir> Define a lista do diretório. (Ficou obsoleto em função da Tag <ul>);",
                    "<font> Especifica o tipo de fonte, tamanho, e cor do texto. (Apenas efeito visual);",
                    `<frame> Define uma janela particular dentro de um conjunto de "frames". (Fere princípios de usabilidade e acessibilidade);`,
                    "<frameset> Define um conjunto de frames organizado por múltiplas janelas.(Fere princípios de usabilidade e acessibilidade);",
                    `<noframes> Texto exibido para navegadores que não lidam com "frames". (Fere princípios de usabilidade e acessibilidade);`,
                    "<strike> Exibe texto rasurado. (Apenas efeito visual);",
                    "<tt> Define teletipo de texto. (Apenas efeito visual);",
                    "<u> Define sublinhado. (Apenas efeito visual);",
                    "<xmp> Define texto pré-formatado. (Ficou obsoleto em função da tag <pre>);"
                ]
            },
            {
                text: `Se analisarmos bem as definições podemos perceber que muitas tags descontinuadas tiveram esse fim por já existirem tags que realizam a mesma função. E ao utilizar o HTML 5 você perceberá que algumas tags continuadas foram modificadas e passaram a exercer outras propriedades, fazendo, também, que outras tags percam valor.`,
                ul: [
                    "Nota 1: Você pode ouvir em algum lugar sobre HTML - ArqHP (Arquitetura de Home Pages). É o próprio HTML 5 com outra denominação e isso é apenas uma jogada de marketing.",
                    "Nota 2: Os HTML 1, HTML 2 , HTML 3 e o HTML 4 estão todos contidos no HTML 5 e mesmo as tags descontinuadas não trazem nenhum problema de compatibilidade com o HTML 5 e o contrário também ocorre, onde as novas tags também não trazem nenhum problema de compatibilidade com as versões antigas."
                ]
            },
            {
                subtitle: "HTML5 DOCTYPE e as Tags link e script",
                text: `A tag <DOCTYPE> é a primeira que aparece em um documento HTML e indica para o browser o tipo e versão do documento que está sendo aberto.
                Na HTML5 o DOCTYPE ficou mais simples, com relação à HTML4.1. Observe as listagens a seguir.`
            },
            {
                subtitle2: "Listagem 1: HTML4.1 DOCTYPE",
                example: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`
            },
            {
                subtitle2: "Listagem 2: HTML5 DOCTYPE",
                example: "<!DOCTYPE html>"
            },
            {
                text: `Nas tags link e script, utilizadas para referenciar arquivos CSS e JavaScript, respectivamente, não é mais necessário informar o atributo type=”text/css” ou text=”text/javascript”, como era feito na HTML 4.1.
                As listagens a seguir mostram como eram essas tags na HTML4.1 e como são agora na HTML5.`
            },
            {
                subtitle2: `HTML4.1 LINK e SCRIPT`,
                ul: [
                    `<link rel="stylesheet" type="text/css" href="arquivo.css">`,
                    `<script type="text/javascript" src="arquivo.js"></script>`
                ]
            },
            {
                subtitle2: `Listagem 4: HTML5 LINK e SCRIPT`,
                ul: [
                    `<link rel="stylesheet" href="arquivo.css">`,
                    `<script src="arquivo.js"></script>`
                ]
            },
            {
                subtitle: "HTML 5 - Novos Atributos e Eventos",
                text: `Neste artigo estaremos vendo os novos atributos globais e eventos do HTML 5.`
            },
            {
                subtitle2: "Atributos Globais",
                ul: [
                    "contenteditable - especifica se o usuário está autorizado a editar um conteúdo ou não: true|false (verdadeiro|Falso).",
                    "contextmenu - especifica um menu contexto para um elemento. menu_id.",
                    "draggable - especifica se um usuário tem permissão para arrastar um elemento: true|false|auto (verdadeiro|falso|automático).",
                    "dropzone - especifica o que acontece quando um dado arrastado é solto: copy|move|link (copiar|mover|linkar).",
                    "hidden - especifica que o elemento não é relevante: hidden (oculto).",
                    "spellcheck - especifica se o elemento deve ter sua grafia verificada: true|false (verdadeiro|falso)."
                ]
            },
            {
                subtitle2: "Eventos",
                example: `De Janelas:`,
                ul: [
                    "onafterprint - executa após o documento ser impresso.",
                    "onbeforeprint - executa antes do documento ser impresso.",
                    "onbeforeonload - executa antes do documento ser carregado.",
                    "onerror - executa quando ocorre um erro.",
                    "onhaschange - executa quando o documento sofre alteração.",
                    "onmessage - executa quando uma mensagem é disparada.",
                    "onoffline - executa quando o documento é desconectado da internet.",
                    "ononline - executa quando o documento é conectado à internet.",
                    "onpagehide - executa quando a janela é ocultada.",
                    "onpageshow - executa quando a janela se torna visível.",
                    "onpopstate - executa quando ocorre alteração no histórico da janela.",
                    "onredo- executa quando é acionado o comando de repetir.",
                    "onresize - executa quando a janela tem alteração de tamanho.",
                    "onstorage - executa quando um documento é carregado.",
                    "onundo - executa quando é acionado o comando de desfazer.",
                    "onunload - executa quando o usuário sai do documento."
                ]
            },
            {
                example: `De Formulários:`,
                ul: [
                    "oncontextmenu - executa quando um menu de contexto é acionado.",
                    "onformchange - executa quando ocorre alterações no formulário.",
                    "onforminput - executa quando o usuário dá entrada no formulário.",
                    "oninput - executa quando um elemento dá entrada do usuário no formulário.",
                    "oninvalid - executa quando um elemento não é válido."
                ]
            },
            {
                example: `De Mouse:`,
                ul: [
                    "ondrag - executa quando um elemento é arrastado.",
                    "ondragend - executa ao fim de uma operação de arrastar um elemento.",
                    "ondragenter - executa quando um elemento é arrastado e solto em seu destino.",
                    "ondragleave - executa quando um elemento é solto em um destino válido.",
                    "ondragover - executa quando elemento é arrastado e solto ao longo de um destino.",
                    "ondragstart - executa quando se inicia uma operação de arrastar.",
                    "ondrop - executa quando o elemento arrastado está sendo descartado.",
                    "onmousewheel - executa quando o scroll do mouse é girado.",
                    "onscroll - executa quando as barras de rolagem de um elemento está sendo rolada."
                ]
            },
            {
                example: `De Multimídia:`,
                ul: [
                    "oncanplay - executa quando uma mídia está sendo iniciada a tocar.",
                    "onclanplaythrought - executa quando a mídia está sendo tocada até o fim.",
                    "ondurationchange - executa quando o comprimento da mídia é alterado.",
                    "onemptied - executado quando um elemento de recursos de mídia torna-se vazio.",
                    "onended - executa quando a mídia chega ao fim.",
                    "onerror - executa quando ocorre um erro de carregamento de um elemento.",
                    "onloadeddata - executa quando os dados de mídia são carregados.",
                    "onloadedmetadata - executa quando a duração de um elemento de mídia está sendo carregado.",
                    "onloadstart - executa quando o navegador começa a carregar os dados de mídia.",
                    "onpause - executa quando a mídia de dados está em pausa.",
                    "onplay - executa quando a mídia de dados for começar a tocar.",
                    "onplaying - executa quando a mídia começa a tocar.",
                    "onprogress - executa quando o navegador está buscando os dados de mídia.",
                    "onratechange - executa quando altera a faixa de mídia.",
                    "onreadystatechange - executa quando ocorre uma mudança de estado.",
                    "onseeked - executa quando o atributo de busca de um elemento não é verdadeiro.",
                    "onseeking - executa quando o atributo de busca de um elemento é verdadeiro.",
                    "onstalled - executa quando há um erro na busca de dados de mídia.",
                    "onsuspend - executa quando o navegador para de buscar os dados da mídia.",
                    "ontimeupdate - executa quando a posição da mídia é alterada.",
                    "onvolumechange - executar quando a mídia muda de volume e, também, quando o volume fica mudo.",
                    "onwaiting - executar quando a mídia para de tocar."
                ]
            },
            {
                subtitle: "HTML5 - Novas Tags",
                text: `O HTML5 acrescentou uma nova série de Tags a serem explorados pelos Web Designers, conforme mostra o (infográfico disponivel no site). 
                Há praticamente uma década sem atualização, o HTML abre as portas para os diversos browsers que conhecemos oferecendo uma gama de recursos multimídia e aplicações off-line.
                Os novos recursos tem por objetivo facilitar a compreensão e a manutenção do código. Por isso, que organizações como  Mozilla Foundation, Opera e Apple se uniram para atualizar o HTML4 de 1999 e lançar o HTML5.`
            },
            {
                subtitle2: "Layout",
                ul: [
                    "<article>: Define um artigo;",
                    "<aside>: Define o conteúdo além do conteúdo da página;",
                    "<embed>: Define o conteúdo interativo ou plugin externo;",
                    "<figcaption>: Define o caption de uma imagem;",
                    "<figure>: Define um grupo de média e seus captions;",
                    "<footer>: Define o rodapé de uma página;",
                    "<header>: Define o cabeçalho de uma página;",
                    "<nav>: Define os links de navegação;",
                    "<section>: Define uma área ou seção;",
                    "<wbr>: Define uma possível quebra de linha;"
                ]
            },
            {
                subtitle2: "Media",
                ul: [
                    "<audio>: Define o conteúdo de som;",
                    "<source>: Define recursos de mídia;",
                    "<video>: Define um vídeo;"
                ]
            },
            {
                subtitle2: "Aplicativos Web",
                ul: [
                    "<canvas>: Define gráficos;",
                    "<command>: Define um botão de comando;",
                    "<datagrid>: Referências aos dados dinâmicos em Tree View ou tabelas;",
                    "<datalist>: Define uma lista suspensa (DropDown);",
                    "<details>: Define detalhes de um elemento;",
                    "<output>: Define os tipos de saída (outputs);",
                    "<progress>: Define o progresso de uma tarefa qualquer;"
                ]
            },
            {
                subtitle2: "Linguagem Ruby",
                ul: [
                    "<rp>: Define o browser substituto para elementos não suportados pelo ruby;",
                    "<rt>: Define explicações para as anotações de ruby;",
                    "<ruby>: Define as anotações de ruby;"
                ]
            },
            {
                subtitle2: "Outros",
                ul: [
                    "<dialog>: Define uma conversa ou pessoas falando;",
                    "<hgroup>: Define informações sobre uma determinada área do documento;",
                    "<keygen>: Define a key (chave) do formulário;",
                    "<mark>: Define a marcação de um texto;",
                    "<meter>: Define a medição dentro de um intervalo pré-definido;",
                    "<summary>: Define o cabeçalho de dados “detalhe”;",
                    "<time>: Define uma data ou hora;"
                ]
            },
            {
                text: `Com esse novo leque de comandos e a adequação e compatibilidade temos uma maior segurança de nossas páginas e aplicações.
                Desde setembro de 2011, grandes empresas têm se aderido ao uso do HTML5. Como grande exemplo temos o Facebook que liberou recursos aos desenvolvedores para criar, transformar e inovar em aplicações utilizadas para si mesmo.`
            }
        ]
    },
    {
        title: "DOM",
        content: [
            {
                subtitle: "Introdução ao DOM",
                text: `O DOM (Document Object Model) é a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web. Neste guia, apresentaremos brevemente o DOM. Veremos como o DOM representa um documento HTML ou XML na memória e como você usa APIs para criar aplicativos e conteúdo da Web.`
            },
            {
                subtitle: "O que é o DOM?",
                text: `O Document Object Model (DOM) é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas possam alterar a estrutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página.
                Uma página da Web é um documento. Este documento pode ser exibido na janela do navegador ou como a fonte HTML. Mas é o mesmo documento nos dois casos. O DOM (Document Object Model) representa o mesmo documento para que possa ser manipulado. O DOM é uma representação orientada a objetos da página da web, que pode ser modificada com uma linguagem de script como JavaScript.
                Os padrões W3C DOM e WHATWG DOM são implementados na maioria dos navegadores modernos. Muitos navegadores estendem o padrão; portanto, é necessário ter cuidado ao usá-los na Web, onde os documentos podem ser acessados por vários navegadores com diferentes DOMs.
                Por exemplo, o DOM padrão especifica que o método getElementsByTagName no código abaixo deve retornar uma lista de todos os elementos <p> no documento:`,
                img: domImg1
            },
            {
                text: `Todas as propriedades, métodos e eventos disponíveis para manipular e criar páginas da Web são organizados em objetos (por exemplo, o objeto de document que representa o próprio documento, o objeto de table que implementa a Interface especial DOM HTMLTableElement (en-US)}}  para acessar tabelas HTML e assim por diante). Esta documentação fornece uma referência objeto a objeto ao DOM.
                O DOM moderno é construído usando várias APIs que trabalham juntas. O DOM principal define os objetos que descrevem fundamentalmente um documento e os objetos dentro dele. Isso é expandido conforme necessário por outras APIs que adicionam novos recursos e capacidades ao DOM. Por exemplo, a HTML DOM API adiciona suporte para representar documentos HTML no DOM principal.`
            },
            {
                subtitle: "DOM e JavaScript",
                text: `O pequeno exemplo acima, como quase todos os exemplos nesta referência, é JavaScript. Ou seja, está escrito em JavaScript, mas usa o DOM para acessar o documento e seus elementos. O DOM não é uma linguagem de programação, mas sem ela, a linguagem JavaScript não teria nenhum modelo ou noção de páginas da web, documentos HTML, documentos XML e suas partes componentes (por exemplo, elementos). Cada elemento de um documento - o documento como um todo, o cabeçalho, as tabelas do documento, os cabeçalhos da tabela, o texto nas células da tabela - faz parte do modelo de objeto do documento desse documento, para que todos possam ser acessados e manipulados usando o método DOM e uma linguagem de script como JavaScript.
                No início, o JavaScript e o DOM estavam fortemente interligados, mas, eventualmente, evoluíram para entidades separadas. O conteúdo da página é armazenado no DOM e pode ser acessado e manipulado via JavaScript, para que possamos escrever esta equação aproximada:
                API (página HTML ou XML) = DOM + JS (linguagem de script)
                O DOM foi projetado para ser independente de qualquer linguagem de programação específica, disponibilizando a representação estrutural do documento a partir de uma única API consistente. Embora nos concentremos exclusivamente no JavaScript nesta documentação de referência, as implementações do DOM podem ser construídas para qualquer idioma, como este exemplo em Python demonstra:`,
                img: domImg2
            },
            {
                subtitle: "Acessando o DOM",
                text: `Você não precisa fazer nada de especial para começar a usar o DOM. Navegadores diferentes têm implementações diferentes do DOM, e essas implementações exibem graus variados de conformidade com o padrão DOM real (um assunto que tentamos evitar nesta documentação), mas todo navegador usa um modelo de objeto de documento para tornar as páginas da web acessíveis via JavaScript.
                Quando você cria um script - seja embutido em um elemento(tag) <script> ou incluído na página da web por meio de uma instrução de carregamento de script - você pode começar imediatamente a usar a API para o document ou { {domxref ("Window", "window")}} elementos para manipular o próprio documento ou obter os filhos desse documento, que são os vários elementos na página da web. Sua programação DOM pode ser algo tão simples quanto o exemplo seguinte, que exibe uma mensagem de alerta usando a função alert() da função window ou pode usar métodos DOM mais sofisticados para criar realmente novo conteúdo, como no extenso exemplo abaixo.
                O JavaScript a seguir exibirá um alerta quando o documento for carregado (e quando todo o DOM estiver disponível para uso):`,
                example: `<body onload="window.alert('Welcome to my home page!');">`
            },
            {
                text: `Outro exemplo. Esta função cria um novo elemento H1, adiciona texto a esse elemento e, em seguida, adiciona o H1 à árvore deste documento:`,
                img: domImg3
            },
            {
                subtitle: "DOM interfaces",
                text: `Esse guia é sobre os objetos e o que você pode usar ao manipular a hierarquia do DOM. Há muitos aspectos que tornam entender como eles funcionam confuso. Por exemplo, o objeto representando o elemento HTML form pega a propriedade name da interface do HTMLFormElement mas a sua propriedade className vem da interface HTMLElement. Em ambos os casos, a propriedade que você quer está naquele objeto do formulário.
                Mas o relacionamento entre objetos e interfaces que são implementadas no DOM pode ser confuso, então essa seção busca mostrar um pouco sobre as interfaces na especificação do DOM e como elas são disponibilizadas.`
            },
            {
                subtitle2: "Interfaces e Objetos",
                text: `Muitos objetos pegam emprestados de várias interfaces diferentes. O objeto table por exemplo implementa uma interface especializada HTMLTableElement (en-US), que inclui métodos como createCaption e insertRow. Mas como é também um elemento HTML, table implementa a interface Element descrita no capítulo DOM Element Reference. E finalmente, já que um elemento HTML é também, no que diz respeito ao DOM, um nó na árvore de nós que fazem o modelo de objeto para uma página HTML ou XML, o objeto table também implementa a interface Node mais básica, de onde deriva Element.
                Quando você pegar a referência para um objeto table, como no exemplo a seguir, você rotineiramente usa todas as três interfaces de forma intercambiável no objeto, talvez sem saber.`,
                img: domImg4
            },
            {
                subtitle: "Interfaces Core no DOM",
                text: `Essa seção lista algumas das interfaces mais utilizadas no DOM. A ideia não é descrever o que essas APIs fazem aqui mas para te dar uma ideia de que tipos de métodos e propriedades você verá bastante conforme for usando o DOM. Essas APIs são usadas nos exemplos mais extensos no capítulo de DOM Examples ao fim desse livro.
                Objetos Document e window são os objetos cujas interfaces você geralmente utiliza mais frequentemente em programação DOM. De forma simples, o objeto window representa algo como o browser, e o objeto document é a raiz de todo o documento em si. Element herda dessa interface Node genérica, e juntamente com essas duas interfaces fornecem muitos dos métodos e propriedades que você utiliza em elementos individuais. Esses elementos podem também ter interfaces específicas para lidar com o tipo de dado que esses elementos contêm, como no exemplo do objeto table na seção anterior.
                A seguir uma lista breve de APIs comuns em scripting de páginas web e XML usando o DOM.`,
                img: domImg5
            },
            {
                subtitle: "Testando a DOM API",
                text: `Esse documento fornece amostras para cada interface que você pode usar ao desenvolver. Em alguns casos, as amostras são páginas completas em HTML, com o acesso ao DOM em um elemento <script>, a interface (ex. botões) necessária para ativar o script num formulário, e os elementos HTML pelo qual o DOM opera listados também. Quando esse é o caso, você pode copiar e colar o exemplo em um novo documento HTML, salvar e rodar o exemplo pelo browser.
                Há alguns casos, porém, que os exemplos são mais concisos. Para rodar exemplos que apenas demonstram o relacionamento básico da interface para os elementos HTML, você pode criar uma página teste em que as interfaces podem ser fácilmente acessadas por scripts. A simples página web a seguir fornece um elemento <script> no header em que você pode colocar funções para testar a interface, alguns elementos HTML com atributos que você consegue buscar, definir ou manipular, e a interface web do usuário necessária para chamar essas funções pelo broswer.
                Você pode usar essa página teste ou criar uma similar para testar as interfaces DOM que quiser e ver como elas funcionam numa plataforma broswer. Você pode alterar os conteúdos da função test() como achar necessário, criar mais botões ou adicionar elementos se necessário.`,
                img: domImg6
            }
        ]
    },
    {
        title: "CSS",
        content: [
            {
                text: `CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.
                CSS é uma das principais linguagens da open web e é padronizada em navagadores web de acordo com as especificação da W3C. Desenvolvido em níveis, o CSS1 está atualmente obsoleto, o CSS2.1 é uma recomendação e o CSS3, agora dividido em pequenos módulos, está progredindo para a sua padronização.`
            }
        ]
    }
];

export default content;