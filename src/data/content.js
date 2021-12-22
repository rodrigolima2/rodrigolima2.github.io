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
                subtitle: "React.createContext",
                text: `const MyContext = React.createContext(defaultValue);`
            },
            {
                text: `Cria um objeto Contexto (context). Quando o React renderiza um componente que assina este objeto Contexto (context), este vai ler o valor atual do Provider superior na árvore que estiver mais próximo.
                O argumento defaultValue (valor padrão) é usado apenas quando o componente não corresponder com um Provider acima dele na árvore. Este valor padrão pode ser útil para testar componentes isoladamente, sem envolvê-los. Observação: passando undefined como um valor de Provider não faz com que os componentes consumidores do Provider usem defaultValue.`
            },
            {
                subtitle: "Context.Provider",
                text: `<MyContext.Provider value={/* some value */}>`
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
                subtitle: "Class.contextType",
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
                subtitle: "Context.Consumer",
                img: reactContextImg8
            },
            {
                text: `Um componente React que assina mudanças de contexto. Usar este componente permite você assinar a um contexto por um function component.
                Requer uma function as a child. A função recebe o valor atual do contexto e retorna um nó React. O argumento value passado para a função será igual ao value da prop do Provider do contexto mais próximo acíma na árvore. Se não houver um Provider para este contexto acima, o argumento value será igual a defaultValue que foi passado ao criar o contexto com createContext().
                Nota:
                Para mais informações sobre o padrão “function as a child” veja, render props.`
            },
            {
                subtitle: "Context.displayName",
                text: `O objeto Context aceita uma propriedade string displayName. React DevTools usa essa string para determinar o que exibir para o contexto.
                Por exemplo, o seguinte componente aparecerá como MyDisplayName no DevTools:`,
                img: reactContextImg9
            },
            {
                subtitle: "Exemplos"
            },
            {
                subtitle: "Contexto Dinâmico",
                text: `Um exemplo mais complexo com valores dinâmicos para o tema:`
            },
            {
                subtitle: "theme-context.js",
                img: reactContextImg10
            },
            {
                subtitle: "themed-button.js",
                img: reactContextImg11
            },
            {
                subtitle: "app.js",
                img: reactContextImg12
            },
            {
                subtitle: "Atualizando o Contexto de um componente aninhado",
                text: `Geralmente é necessário atualizar o contexto de um componente que está aninhado em algum lugar da árvore de componentes. Neste caso, você pode passar uma função para o contexto, permitindo assim que consumidores possam atualizar o contexto.`
            },
            {
                subtitle: "theme-context.js",
                img: reactContextImg13
            },
            {
                subtitle: "theme-toggler-button.js",
                img: reactContextImg14
            },
            {
                subtitle: "app.js",
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
    }
];

export default content;