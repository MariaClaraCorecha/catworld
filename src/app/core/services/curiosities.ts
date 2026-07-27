import { Injectable } from '@angular/core';

export interface Curiosity {
  id: string;
  category: string;
  icon: string;
  title: string;
  summary: string;
  content: string;
  tips: string[];
}

@Injectable({ providedIn: 'root' })
export class CuriositiesService {
  private curiosities: Curiosity[] = [
    {
      id: 'ronronar',
      category: 'Comportamento',
      icon: 'graphic_eq',
      title: 'Por que os gatos ronronam?',
      summary:
        'O ronronar vai muito além de expressar conforto — envolve uma frequência sonora com possíveis efeitos terapêuticos.',
      content: `O ronronar é produzido pela vibração rápida da laringe do gato, combinada com o movimento do diafragma, gerando um som contínuo tanto ao inspirar quanto ao expirar. A maioria dos gatos ronrona em frequências entre 25 e 150 Hz.

     Embora associemos o ronronar ao prazer, gatos também ronronam quando estão doloridos, estressados ou até morrendo. Uma hipótese estudada por pesquisadores é que essa faixa de frequência estimula a regeneração óssea e a cicatrização de tecidos, funcionando como uma espécie de autocura acústica.

     Filhotes começam a ronronar com apenas alguns dias de vida, ainda antes de abrir os olhos, como forma de se comunicar com a mãe durante a amamentação. É um dos primeiros comportamentos sociais desenvolvidos pela espécie.

     Curiosamente, nem todos os felinos ronronam — grandes felinos como leões e tigres não têm essa capacidade, enquanto gatos domésticos, gatos-do-mato e alguns outros pequenos felinos sim, uma diferença ligada à estrutura óssea da laringe.`,
      tips: [
        'Ronronar nem sempre significa felicidade — pode indicar dor ou estresse',
        'Filhotes ronronam desde os primeiros dias de vida',
        'A frequência do ronronar pode ajudar na cicatrização de tecidos',
        'Grandes felinos como leões não conseguem ronronar',
        'Observe o contexto: postura corporal ajuda a interpretar o motivo do ronronar',
      ],
    },
    {
      id: 'bigodes',
      category: 'Anatomia',
      icon: 'straighten',
      title: 'A função real dos bigodes',
      summary:
        'Os bigodes do gato são órgãos sensoriais sofisticados, essenciais para orientação espacial e percepção do ambiente.',
      content: `Os bigodes, tecnicamente chamados de vibrissas, não são apenas pelos decorativos — são estruturas profundamente enraizadas, conectadas a terminações nervosas sensíveis ao mínimo movimento de ar. Eles permitem que o gato "sinta" objetos e correntes de ar mesmo sem tocá-los diretamente.

     A largura da distância entre os bigodes é aproximadamente igual à largura do corpo do gato, funcionando como uma régua natural que ajuda o animal a avaliar se cabe por um determinado espaço antes de se arriscar a atravessá-lo.

     Além do focinho, gatos também têm vibrissas acima dos olhos, nas bochechas e na parte de trás das patas dianteiras. As das patas ajudam a sentir a superfície e a posição de uma presa capturada, mesmo no escuro.

     Cortar os bigodes de um gato não causa dor física, já que não têm terminações nervosas na própria haste, mas compromete temporariamente sua percepção espacial, deixando-o desorientado e mais estressado — por isso nunca devem ser aparados.`,
      tips: [
        'Nunca corte os bigodes do gato — isso prejudica sua orientação espacial',
        'A largura dos bigodes indica ao gato se ele cabe em um espaço',
        'Vibrissas também existem nas patas dianteiras, não só no rosto',
        'Bigodes caem e crescem naturalmente, como qualquer outro pelo',
        'Um gato com os bigodes para trás pode estar assustado ou na defensiva',
      ],
    },
    {
      id: 'sono-felino',
      category: 'Comportamento',
      icon: 'bedtime',
      title: 'Por que os gatos dormem tanto',
      summary:
        'Gatos passam entre 12 e 16 horas por dia dormindo — um hábito herdado diretamente de seus ancestrais caçadores.',
      content: `Um gato adulto pode dormir entre 12 e 16 horas por dia, e filhotes ou gatos idosos podem passar até 20 horas dormindo. Esse padrão está diretamente ligado ao comportamento de caça: como predadores que gastam grande quantidade de energia em explosões curtas e intensas ao caçar, os felinos evoluíram para economizar energia no restante do tempo.

     Nem todo esse período é sono profundo. Grande parte é composta de cochilos leves, nos quais o gato permanece parcialmente alerta a sons e movimentos ao redor — uma característica que permite reagir rapidamente a uma ameaça ou oportunidade de caça, mesmo "descansando".

     Gatos são naturalmente crepusculares, ou seja, mais ativos ao amanhecer e ao entardecer, horários em que suas presas naturais como roedores também costumam estar ativas. Isso explica por que muitos tutores relatam picos de energia do gato de madrugada ou no início da manhã.

     Mudanças bruscas no padrão de sono — dormir muito mais ou muito menos que o habitual — podem ser sinal de dor, doença ou problemas de saúde e merecem atenção veterinária.`,
      tips: [
        'De 12 a 16 horas de sono por dia é considerado normal para um gato adulto',
        'Gatos são naturalmente mais ativos ao amanhecer e ao entardecer',
        'Boa parte do "sono" do gato é, na verdade, cochilo leve e alerta',
        'Brincar antes de dormir ajuda a reduzir picos de energia noturnos',
        'Mudanças bruscas no padrão de sono merecem avaliação veterinária',
      ],
    },
    {
      id: 'visao-noturna',
      category: 'Anatomia',
      icon: 'visibility',
      title: 'A visão noturna dos gatos',
      summary:
        'Gatos enxergam em condições de pouquíssima luz graças a uma camada refletora única atrás da retina.',
      content: `Os gatos possuem uma estrutura chamada tapetum lucidum, uma camada de tecido refletor localizada atrás da retina. Ela reflete a luz que passa pelos fotorreceptores de volta para eles, dando uma "segunda chance" de captar fótons e ampliando drasticamente a sensibilidade visual em ambientes escuros — é essa mesma estrutura que faz os olhos do gato "brilharem" quando iluminados à noite.

     Estima-se que os gatos precisem de apenas um sexto da luz necessária para os humanos enxergarem uma cena com nitidez semelhante. Em compensação, sua visão de cores é limitada: enxergam principalmente tons de azul e verde, com dificuldade para distinguir vermelhos.

     A visão periférica do gato também é excepcional, com um campo visual de cerca de 200 graus, contra aproximadamente 180 graus dos humanos — útil para detectar movimento ao redor sem precisar virar a cabeça.

     Em compensação a tanta sensibilidade à luz e ao movimento, os gatos têm dificuldade em enxergar objetos muito próximos ao nariz e também não distinguem bem detalhes finos e estáticos a longas distâncias, dependendo mais do olfato e dos bigodes nessas situações.`,
      tips: [
        'O brilho dos olhos do gato no escuro vem do tapetum lucidum',
        'Gatos enxergam bem com muito pouca luz, mas não no escuro total',
        'A visão de cores do gato é limitada, com dificuldade para o vermelho',
        'O campo de visão periférica do gato é mais amplo que o humano',
        'Gatos enxergam mal objetos muito próximos do nariz',
      ],
    },
    {
      id: 'paladar-doce',
      category: 'Anatomia',
      icon: 'restaurant',
      title: 'Gatos não sentem o sabor doce',
      summary:
        'Uma mutação genética faz com que os gatos sejam a única grande família de mamíferos incapaz de detectar o sabor doce.',
      content: `Diferente de praticamente todos os outros mamíferos estudados, os gatos carecem de um receptor funcional para o sabor doce. O gene responsável por codificar parte desse receptor está presente, mas é não funcional em felinos — uma mutação que provavelmente ocorreu bem cedo na evolução da família Felidae.

     Isso faz sentido do ponto de vista evolutivo: como carnívoros obrigatórios, os ancestrais dos gatos não dependiam de frutas ou vegetais açucarados como fonte de energia, tornando a detecção de doçura irrelevante para a sobrevivência da espécie.

     Em compensação, os gatos têm receptores especialmente desenvolvidos para detectar aminoácidos e nucleotídeos presentes na carne — compostos ligados ao sabor "umami" — o que explica a preferência natural por alimentos ricos em proteína animal.

     Isso também ajuda a explicar por que alguns gatos parecem "gostar" de sobremesas: na maioria dos casos, o interesse está relacionado à gordura, à textura cremosa ou ao cheiro do alimento, e não ao açúcar em si.`,
      tips: [
        'Gatos não conseguem detectar biologicamente o sabor doce',
        'O interesse por doces geralmente vem da gordura ou textura, não do açúcar',
        'Gatos têm receptores muito sensíveis para sabores de proteína animal',
        'Isso reforça por que a dieta do gato deve ser baseada em proteína, não carboidrato',
        'Evite oferecer doces ao gato — muitos contêm ingredientes tóxicos como xilitol',
      ],
    },
    {
      id: 'preferencia-de-pata',
      category: 'Comportamento',
      icon: 'pan_tool',
      title: 'Gatos têm pata dominante',
      summary:
        'Assim como humanos são destros ou canhotos, estudos mostram que gatos também preferem usar uma das patas dianteiras.',
      content: `Pesquisas observando gatos em tarefas como pegar comida de um pote estreito ou descer escadas identificaram uma preferência consistente por uma das patas dianteiras em grande parte dos indivíduos, de forma parecida com a lateralidade em humanos.

     Um padrão interessante encontrado em alguns estudos é a diferença por sexo: fêmeas tendem a apresentar preferência pela pata direita com mais frequência, enquanto machos tendem a preferir a pata esquerda — embora a amostra de estudos ainda seja limitada para generalizar com certeza.

     Essa lateralidade parece estar ligada à organização dos hemisférios cerebrais, de forma similar ao que ocorre em humanos e outros mamíferos, e pode até estar associada a diferenças na forma como o animal lida com situações estressantes.

     Você pode observar essa preferência em casa prestando atenção em qual pata o gato usa primeiro para descer de um móvel alto, tocar um brinquedo ou tentar alcançar um objeto — a maioria mostra uma preferência clara depois de algumas repetições observadas.`,
      tips: [
        'Observe qual pata seu gato usa primeiro ao pegar objetos ou brinquedos',
        'A preferência de pata pode variar entre machos e fêmeas',
        'Esse comportamento está ligado à organização do cérebro do gato',
        'Nem todo gato apresenta uma preferência de pata clara e consistente',
        'É um comportamento natural, sem nenhuma implicação de saúde',
      ],
    },
  ];

  getAll(): Curiosity[] {
    return this.curiosities;
  }

  getById(id: string): Curiosity | undefined {
    return this.curiosities.find((c) => c.id === id);
  }
}
