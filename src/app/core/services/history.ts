import { Injectable } from '@angular/core';

export interface HistoryCard {
  id: string;
  period: string;
  year: string;
  title: string;
  summary: string; // texto curto para o card
  content: string; // texto longo para a página de detalhe
  image: string;
  imageCaption?: string;
}

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private cards: HistoryCard[] = [
    {
      id: 'egito-antigo',
      period: 'Egito Antigo',
      year: '4.000 a.C.',
      title: 'Os gatos como divindades',
      summary:
        'No Egito Antigo, os gatos eram considerados sagrados e associados à deusa Bastet, protetora do lar e da fertilidade.',
      content: `
        No Egito Antigo, os gatos ocupavam um lugar único entre os animais — eram considerados manifestações terrestres de Bastet, 
        a deusa com cabeça de gato que protegia o lar, a fertilidade e as crianças. 
        
        Os egípcios acreditavam que os olhos dos gatos refletiam a luz do sol mesmo à noite, simbolizando a capacidade 
        de enxergar além do visível. Por isso, eram guardados nos templos como animais sagrados, recebendo comida, 
        cuidados e até joias.

        Matar um gato, mesmo que acidentalmente, era punido com a morte. Quando um gato morria naturalmente, 
        toda a família entrava em luto, raspando as sobrancelhas como sinal de pesar. Os gatos eram mumificados 
        com o mesmo cuidado reservado à realeza, envoltos em linho e enterrados em sarcófagos de bronze ou madeira 
        junto com ratinhos mumificados para o além.

        Estima-se que mais de 300 mil gatos mumificados foram encontrados em necrópoles egípcias. A cidade de Bubástis 
        era o principal centro de culto à Bastet, atraindo peregrinos de todo o Egito para o grande festival anual 
        em honra da deusa, descrito pelo historiador grego Heródoto como a celebração mais animada do país.
      `,
      image: 'images/history/egito-cat.jpg',
      imageCaption: 'Representação de Bastet, a deusa egípcia com cabeça de gato',
    },
    {
      id: 'grecia-roma',
      period: 'Grécia e Roma',
      year: '500 a.C.',
      title: 'Guardiões dos celeiros',
      summary:
        'Gregos e romanos valorizavam os gatos pelo papel prático de caçadores de ratos e roedores nos celeiros e navios.',
      content: `
        Enquanto os egípcios veneravam os gatos como divindades, gregos e romanos os valorizavam de forma muito mais pragmática — 
        como trabalhadores eficientes. Os gatos chegaram à Grécia por volta do século V a.C., provavelmente trazidos por 
        comerciantes fenícios que os usavam nos navios para controlar pragas.

        Na Grécia, os gatos eram vistos como animais raros e exóticos no início, mas rapidamente ganharam espaço nos lares 
        como caçadores de camundongos. O poeta Aristófanes os menciona em suas comédias como animais domésticos comuns.

        Em Roma, os gatos se tornaram símbolo da Libertas — a deusa da liberdade — por sua natureza independente e 
        resistência à domesticação total. Eram os únicos animais permitidos dentro dos templos romanos, pois 
        os romanos acreditavam que afastavam os maus espíritos.

        Com a expansão do Império Romano, os gatos foram levados para todas as províncias — da Britânia ao Oriente Médio — 
        espalhando-se por toda a Europa muito antes da Idade Média. Escavações arqueológicas em sítios romanos por 
        toda a Europa encontraram ossos de gatos, confirmando sua presença generalizada.
      `,
      image: 'images/history/celeiro-cat.jpg',
      imageCaption: 'Mosaico romano retratando um gato caçando, século I d.C.',
    },
    {
      id: 'idade-media',
      period: 'Idade Média',
      year: '500 d.C.',
      title: 'Perseguição e superstição',
      summary:
        'Na Europa medieval, os gatos foram associados à bruxaria e ao diabo pela Igreja Católica, sendo perseguidos em massa.',
      content: `
        O período mais sombrio da história dos gatos na Europa começou com a ascensão da Igreja Católica ao poder político. 
        Em 1233, o Papa Gregório IX emitiu a bula papal "Vox in Rama", associando oficialmente os gatos pretos ao diabo 
        e à heresia. A partir daí, os gatos — especialmente os de pelagem escura — tornaram-se alvos de perseguição sistemática.

        Acreditava-se que bruxas se transformavam em gatos à noite, ou que os mantinham como "familiares" — espíritos 
        demoníacos em forma animal. Durante os séculos seguintes, milhares de gatos foram queimados em praças públicas, 
        frequentemente junto com as pessoas acusadas de bruxaria.

        A cruel ironia histórica: ao eliminar os gatos, os europeus removeram o principal predador dos ratos. 
        As populações de roedores explodiram, e com elas as pulgas carregando a Yersinia pestis — a bactéria 
        responsável pela Peste Negra. Entre 1347 e 1351, a epidemia matou entre 30% e 60% da população europeia, 
        cerca de 25 milhões de pessoas. Historiadores debatem até hoje o papel indireto da perseguição aos gatos 
        na magnitude da catástrofe.

        Apenas no século XVII os gatos começaram a se reabilitar na Europa, quando sua utilidade no controle de 
        pragas finalmente superou o peso das superstições.
      `,
      image: 'images/history/black-cat.jpg',
      imageCaption: 'Iluminura medieval representando gatos em contexto doméstico',
    },
    {
      id: 'japao-feudal',
      period: 'Japão Feudal',
      year: '700 d.C.',
      title: 'O Maneki-neko e a boa sorte',
      summary:
        'No Japão, os gatos eram criados nos templos budistas e deram origem ao famoso Maneki-neko, símbolo de prosperidade.',
      content: `
        Enquanto a Europa perseguia seus gatos, no Japão os felinos eram tratados com reverência e cuidado. 
        Chegaram às ilhas japonesas por volta do século VI d.C., trazidos da China junto com manuscritos budistas 
        que precisavam ser protegidos dos ratos durante a longa travessia marítima.

        O imperador Ichijō ficou tão encantado com os gatos que decretou que apenas a nobreza poderia tê-los 
        como animais de estimação. Por séculos, gatos foram mantidos em palácio presos por cordas de seda — 
        o que ironicamente causou infestações de ratos nos celeiros imperiais até que a proibição foi levantada.

        A lenda do Maneki-neko — o "gato da sorte" — tem várias versões, mas a mais famosa conta a história 
        de um gato que acenou para um samurai durante uma tempestade, fazendo-o entrar num templo momentos 
        antes de um raio cair no local onde ele estava. Em gratidão, o samurai enriqueceu o templo, 
        e a estátua do gato com a pata levantada tornou-se símbolo eterno de boa fortuna.

        Os gatos também são centrais na mitologia japonesa como o Nekomata — um gato ancião com cauda dupla 
        e poderes sobrenaturais — e o Bakeneko, um gato fantasma. Longe de serem vistos com medo, 
        essas criaturas eram tratadas com respeito, pois se acreditava que um gato bem tratado traria 
        bênçãos à família.
      `,
      image: 'images/history/manekineko.jpg',
      imageCaption: 'Maneki-neko tradicional — o gato da sorte japonês',
    },
    {
      id: 'navegacoes',
      period: 'Era das Navegações',
      year: '1.400 d.C.',
      title: 'Navegadores e exploradores',
      summary:
        'Durante as grandes navegações, gatos eram companheiros indispensáveis nos navios e foram espalhados por todos os continentes.',
      content: `
        Os gatos foram, sem exagero, um dos fatores que tornaram possível a Era das Navegações. 
        Em navios de madeira que podiam passar meses no mar, ratos e camundongos eram uma ameaça existencial — 
        destruíam reservas de alimentos, roíam cabos e transmitiam doenças. Os gatos eram a solução mais eficaz.

        Cada grande navio europeu dos séculos XV e XVI carregava pelo menos um gato. Registros históricos da 
        Marinha Britânica mostram que gatos eram oficialmente alistados como membros da tripulação, 
        com direito a ração diária. A Royal Navy só aboliu oficialmente os "gatos de navio" em 1975.

        Com as expedições de Colombo, Vasco da Gama, Cabral e Magalhães, os gatos chegaram às Américas, 
        à África Subsaariana, à Oceania e ao extremo oriente — completando sua conquista de todos os 
        continentes habitados. É por isso que geneticamente os gatos domésticos do mundo inteiro são 
        surpreendentemente similares: todos descendem das mesmas populações embarcadas nos navios europeus.

        No Brasil, os primeiros gatos chegaram com a frota de Pedro Álvares Cabral em 1500. 
        Documentos da expedição mencionam gatos a bordo, e pinturas do período colonial já os 
        mostram integrados ao cotidiano das casas brasileiras.
      `,
      image: 'images/history/explorador-cat.jpg',
      imageCaption:
        'Réplica de nau portuguesa do século XV — os gatos eram membros essenciais da tripulação',
    },
    {
      id: 'seculo-xix',
      period: 'Século XIX',
      year: '1.800 d.C.',
      title: 'Os gatos entram para a arte',
      summary:
        'Com o romantismo e o simbolismo, os gatos tornaram-se musas de pintores e escritores renomados.',
      content: `
        O século XIX marcou a reabilitação cultural definitiva dos gatos na Europa. Após séculos de perseguição 
        e desconfiança, os gatos tornaram-se símbolos do refinamento burguês e da sensibilidade artística.

        Charles Baudelaire transformou os gatos em figuras poéticas centrais, dedicando-lhes três poemas 
        em "As Flores do Mal" (1857). Para ele, os gatos reuniam a elegância do aristocrata e o mistério 
        do ocultista. Victor Hugo tinha uma gatinha chamada Chanoine que aparece em vários de seus escritos. 
        Edgar Allan Poe usou o gato como símbolo de culpa e loucura em "O Gato Preto" (1843).

        Nas artes visuais, pintores como Théophile Steinlen e o japonês Hiroshige criaram imagens icônicas 
        de gatos que definiram o imaginário felino moderno. A primeira grande exposição de gatos da história 
        aconteceu no Crystal Palace, em Londres, em 13 de julho de 1871, organizada por Harrison Weir. 
        Foram 160 gatos de 25 raças diferentes — o evento foi um sucesso estrondoso e deu início 
        ao movimento de criação formal de raças.

        Foi também no século XIX que surgiram os primeiros clubes de criadores e os primeiros padrões 
        raciais escritos, transformando os gatos de animais de utilidade em animais de companhia 
        e competição — uma mudança cultural que moldou nossa relação com eles até hoje.
      `,
      image: 'images/history/arte-cat.jpg',
      imageCaption: 'Cartaz art nouveau de Théophile Steinlen, 1896',
    },
    {
      id: 'seculo-xx',
      period: 'Século XX',
      year: '1.900 d.C.',
      title: 'Do cinema ao espaço',
      summary:
        'Os gatos conquistaram o cinema, os quadrinhos e até o espaço, tornando-se ícones da cultura pop mundial.',
      content: `
        O século XX foi o século em que os gatos conquistaram a cultura de massa de forma irreversível. 
        Em 1919, o Gato Félix se tornou o primeiro personagem animado a fazer sucesso mundial — 
        décadas antes do Mickey Mouse. Sua imagem era reproduzida em brinquedos, cerâmicas e até 
        transmissões experimentais de televisão nos anos 1920 e 30.

        Em 1940, a dupla Tom e Jerry da MGM redefiniu a animação e o relacionamento gato-rato 
        para gerações de crianças. O Gato do Chapéu de Alice no País das Maravilhas, 
        o Gato de Cheshire, tornou-se um dos personagens mais filosóficos da literatura infantil. 
        Em 1974, Hello Kitty nasceu no Japão e hoje é uma das marcas mais valiosas do planeta.

        No espaço, em 18 de outubro de 1963, a gatinha Félicette — apelidada de "Astrocat" — 
        foi lançada ao espaço pela agência espacial francesa CNES a bordo do foguete Véronique AG1. 
        Ela sobreviveu ao voo e retornou à Terra com segurança, tornando-se o único felino 
        a sobreviver a uma missão espacial. Uma estátua em sua homenagem foi inaugurada 
        em Paris em 2019.

        Na música, os Beatles cantaram sobre gatos, David Bowie incorporou a estética felina 
        em seu personagem Ziggy Stardust, e o musical "Cats" de Andrew Lloyd Webber 
        tornou-se um dos espetáculos mais longos da história da Broadway.
      `,
      image: 'images/history/cinema-cat.jpg',
      imageCaption: 'Félicette, a primeira gata astronauta, em 1963',
    },
    {
      id: 'era-digital',
      period: 'Era Digital',
      year: '2000 — hoje',
      title: 'Os reis da internet',
      summary:
        'Os gatos dominaram a internet, tornando-se os animais mais fotografados e filmados da história.',
      content: `
        Se há um animal que define a cultura digital, é o gato. A internet e os gatos pareciam feitos um para o outro 
        desde o início: em 1996, um dos primeiros memes da web era uma foto de um gato. Em 2006, 
        quando o YouTube tinha apenas um ano de vida, vídeos de gatos já dominavam as visualizações.

        O Grumpy Cat — cujo nome real era Tardar Sauce — tornou-se em 2012 um fenômeno global. 
        Sua expressão perpetuamente mal-humorada gerou milhões de memes, um livro, um filme 
        e uma fortuna estimada em 100 milhões de dólares para sua dona antes de sua morte em 2019.

        O Nyan Cat, um gif animado de 2011 mostrando um gato com corpo de pop-tart voando pelo espaço 
        deixando um rastro de arco-íris, foi vendido como NFT em 2021 por 300 ETH — 
        cerca de 590 mil dólares na época.

        Hoje, estima-se que existam mais de 3,8 bilhões de imagens de gatos na internet. 
        Um estudo da Universidade de Indiana descobriu que assistir a vídeos de gatos online 
        aumenta os níveis de energia e emoções positivas e reduz sentimentos negativos — 
        dando uma justificativa científica para o que todos já fazíamos de qualquer jeito.

        Com mais de 600 milhões de gatos domésticos no mundo — cerca de um gato para cada 
        13 pessoas — e uma presença cultural que atravessa 10.000 anos de história humana, 
        os gatos provaram ser muito mais do que animais de estimação: são companheiros 
        permanentes da civilização.
      `,
      image: 'images/history/internet-cat.jpg',
      imageCaption: 'Os gatos dominaram a internet como nenhum outro animal',
    },
  ];

  getAll(): HistoryCard[] {
    return this.cards;
  }

  getById(id: string): HistoryCard | undefined {
    return this.cards.find((c) => c.id === id);
  }
}
