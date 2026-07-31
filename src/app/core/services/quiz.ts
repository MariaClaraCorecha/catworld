import { Injectable } from '@angular/core';

export type QuizCategory =
  | 'racas'
  | 'historia'
  | 'cuidados'
  | 'alimentacao'
  | 'exercicios'
  | 'doencas'
  | 'curiosidades';

export type QuizId = QuizCategory | 'geral';

export interface QuizQuestion {
  id: string;
  category: QuizId;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizBadge {
  id: string;
  label: string;
  icon: string;
}

export interface QuizDefinition {
  id: QuizId;
  label: string;
  icon: string;
  description: string;
}

export const QUIZ_DEFINITIONS: QuizDefinition[] = [
  { id: 'racas', label: 'Raças', icon: 'pets', description: 'Teste seus conhecimentos sobre as raças de gatos.' },
  {
    id: 'historia',
    label: 'História',
    icon: 'history_edu',
    description: 'Uma viagem pela história dos gatos ao lado da humanidade.',
  },
  {
    id: 'cuidados',
    label: 'Cuidados',
    icon: 'medical_services',
    description: 'Cuidados essenciais para a saúde e o bem-estar do seu gato.',
  },
  {
    id: 'alimentacao',
    label: 'Alimentação',
    icon: 'restaurant',
    description: 'Tudo sobre a alimentação ideal para gatos.',
  },
  {
    id: 'exercicios',
    label: 'Exercícios',
    icon: 'directions_run',
    description: 'Estímulos e brincadeiras para manter seu gato ativo.',
  },
  {
    id: 'doencas',
    label: 'Doenças',
    icon: 'local_hospital',
    description: 'Doenças comuns e cuidados de saúde felina.',
  },
  {
    id: 'curiosidades',
    label: 'Curiosidades',
    icon: 'auto_awesome',
    description: 'Fatos curiosos e surpreendentes sobre os gatos.',
  },
  {
    id: 'geral',
    label: 'Quiz Geral',
    icon: 'quiz',
    description: 'Um pouco de tudo sobre o mundo felino.',
  },
];

@Injectable({ providedIn: 'root' })
export class QuizService {
  private questions: QuizQuestion[] = [
    // ---- curiosidades ----
    {
      id: 'ronronar',
      category: 'curiosidades',
      question: 'Por que os gatos ronronam?',
      options: [
        'Apenas quando estão felizes',
        'Pode indicar felicidade, dor ou estresse',
        'Só filhotes ronronam',
        'É um sinal de fome',
      ],
      correctIndex: 1,
      explanation:
        'O ronronar vai muito além do conforto: gatos também ronronam quando estão doloridos ou estressados, possivelmente como forma de autocura.',
    },
    {
      id: 'bigodes',
      category: 'curiosidades',
      question: 'Para que servem os bigodes (vibrissas) do gato?',
      options: [
        'Apenas decoração',
        'Ajudam a orientação espacial e a percepção do ambiente',
        'Servem para regular a temperatura corporal',
        'Não têm função conhecida',
      ],
      correctIndex: 1,
      explanation:
        'As vibrissas são órgãos sensoriais que ajudam o gato a perceber objetos, correntes de ar e a avaliar se cabe em um espaço.',
    },
    {
      id: 'sono',
      category: 'curiosidades',
      question: 'Em média, quantas horas por dia um gato adulto dorme?',
      options: ['4 a 6 horas', '8 a 10 horas', '12 a 16 horas', '20 a 22 horas'],
      correctIndex: 2,
      explanation:
        'Gatos são animais de hábitos crepusculares e passam boa parte do dia dormindo, entre 12 e 16 horas em média.',
    },
    {
      id: 'visao-noturna',
      category: 'curiosidades',
      question: 'O que permite aos gatos enxergarem bem no escuro?',
      options: [
        'Pupilas sempre dilatadas',
        'O tapetum lucidum, camada que reflete luz',
        'Ausência de retina',
        'Visão em infravermelho',
      ],
      correctIndex: 1,
      explanation:
        'O tapetum lucidum é uma camada refletora atrás da retina que amplia a luz captada, permitindo que os gatos enxerguem bem com pouca luminosidade.',
    },
    {
      id: 'paladar-doce',
      category: 'curiosidades',
      question: 'Por que os gatos não demonstram interesse por doces?',
      options: [
        'Eles preferem comida salgada',
        'Faltam-lhes receptores para o sabor doce',
        'Têm menos papilas gustativas que os humanos',
        'Só filhotes conseguem sentir sabor doce',
      ],
      correctIndex: 1,
      explanation:
        'Os gatos são a principal família de mamíferos sem o gene funcional para o receptor de sabor doce, por isso não sentem esse gosto.',
    },
    {
      id: 'ronronar-frequencia',
      category: 'curiosidades',
      question: 'Em qual faixa de frequência se encontra o ronronar de um gato?',
      options: ['Entre 5 e 20 Hz', 'Entre 25 e 150 Hz', 'Entre 300 e 500 Hz', 'Entre 1000 e 2000 Hz'],
      correctIndex: 1,
      explanation:
        'O ronronar dos gatos varia entre 25 e 150 Hz, uma faixa que alguns estudos associam a efeitos benéficos na cicatrização e no fortalecimento ósseo.',
    },
    {
      id: 'ronronar-grandes-felinos',
      category: 'curiosidades',
      question: 'Qual das opções abaixo NÃO consegue ronronar, diferente dos gatos domésticos?',
      options: ['Leão', 'Gato-do-mato-pequeno', 'Lince', 'Serval'],
      correctIndex: 0,
      explanation:
        'Leões e tigres não conseguem ronronar como os gatos domésticos, uma diferença ligada à estrutura da laringe desses grandes felinos.',
    },
    {
      id: 'ronronar-filhotes',
      category: 'curiosidades',
      question: 'A partir de quando os filhotes de gato começam a ronronar?',
      options: [
        'Somente após os 3 meses de idade',
        'Apenas quando já adultos',
        'Desde os primeiros dias de vida, antes de abrir os olhos',
        'Somente depois de aprenderem a caçar',
      ],
      correctIndex: 2,
      explanation:
        'Filhotes de gato ronronam desde os primeiros dias de vida, antes mesmo de abrirem os olhos, provavelmente como forma de comunicação com a mãe.',
    },
    {
      id: 'bigodes-regua',
      category: 'curiosidades',
      question: 'Para que serve a envergadura dos bigodes (vibrissas) de um gato?',
      options: [
        'Para captar sons de alta frequência',
        'Para funcionar como uma espécie de régua e avaliar se ele cabe em um espaço',
        'Para regular a temperatura corporal',
        'Para reforçar o equilíbrio ao saltar de grandes alturas',
      ],
      correctIndex: 1,
      explanation:
        'A envergadura dos bigodes corresponde aproximadamente à largura do corpo do gato, funcionando como uma régua natural para avaliar se ele cabe em um espaço apertado.',
    },
    {
      id: 'bigodes-patas',
      category: 'curiosidades',
      question: 'Além do rosto, em que outra parte do corpo os gatos também têm bigodes (vibrissas)?',
      options: ['Na cauda', 'Na barriga', 'Na parte de trás das patas dianteiras', 'Nas orelhas'],
      correctIndex: 2,
      explanation:
        'Os gatos também possuem vibrissas na parte de trás das patas dianteiras, o que ajuda a detectar movimentos e obstáculos durante a caça.',
    },
    {
      id: 'habitos-crepusculares',
      category: 'curiosidades',
      question: 'Como se classificam os hábitos de atividade típicos dos gatos?',
      options: ['Diurnos', 'Noturnos', 'Crepusculares', 'Hibernantes'],
      correctIndex: 2,
      explanation:
        'Gatos são animais de hábitos crepusculares, ou seja, tendem a ficar mais ativos ao amanhecer e ao entardecer.',
    },
    {
      id: 'campo-visao-periferico',
      category: 'curiosidades',
      question: 'Como se compara o campo de visão periférica de um gato ao de um humano?',
      options: [
        'É de cerca de 200°, contra cerca de 180° dos humanos',
        'É idêntico ao dos humanos, cerca de 180°',
        'É bem menor, de apenas 90°',
        'É de 360°, cobrindo toda a volta',
      ],
      correctIndex: 0,
      explanation:
        'O campo de visão periférica dos gatos chega a cerca de 200°, um pouco maior que os aproximadamente 180° dos seres humanos.',
    },
    {
      id: 'visao-de-perto',
      category: 'curiosidades',
      question: 'Como é a visão dos gatos para objetos muito próximos do rosto?',
      options: [
        'Extremamente nítida e detalhada',
        'Ruim, com dificuldade para enxergar detalhes estáticos finos',
        'Melhor do que a visão à distância',
        'Perfeita graças ao tapetum lucidum',
      ],
      correctIndex: 1,
      explanation:
        'Gatos enxergam mal objetos muito próximos do rosto e têm dificuldade com detalhes estáticos finos, compensando isso com os bigodes e o olfato.',
    },
    {
      id: 'paladar-receptores',
      category: 'curiosidades',
      question: 'Já que não sentem o sabor doce, para quais substâncias os gatos têm receptores de paladar voltados?',
      options: [
        'Apenas para sabores amargos',
        'Aminoácidos e nucleotídeos, ligados a sabores de carne',
        'Apenas para sabores ácidos',
        'Para açúcares complexos como a frutose',
      ],
      correctIndex: 1,
      explanation:
        'Em vez de receptores para o sabor doce, os gatos possuem receptores voltados para aminoácidos e nucleotídeos, compostos associados a sabores de carne e umami.',
    },
    {
      id: 'lateralidade-patas',
      category: 'curiosidades',
      question: 'O que os estudos sobre lateralidade indicam a respeito da preferência de pata dos gatos?',
      options: [
        'Todos os gatos usam preferencialmente a pata direita',
        'Gatos não têm nenhuma preferência de pata',
        'Cada gato tende a ter uma preferência individual, com fêmeas mais destras e machos mais canhotos',
        'A preferência de pata muda todos os dias de forma aleatória',
      ],
      correctIndex: 2,
      explanation:
        'Assim como ocorre com destros e canhotos entre humanos, gatos apresentam preferência individual por uma das patas, e alguns estudos apontam fêmeas mais destras e machos mais canhotos.',
    },

    // ---- historia ----
    {
      id: 'ancestral',
      category: 'historia',
      question: 'De qual espécie os gatos domésticos são descendentes?',
      options: ['Lince', 'Gato-selvagem-africano', 'Gato-do-mato', 'Lobo'],
      correctIndex: 1,
      explanation:
        'Os gatos domésticos descendem do gato-selvagem-africano (Felis silvestris lybica), domesticado há milhares de anos.',
    },
    {
      id: 'egito-sagrado',
      category: 'historia',
      question: 'Em qual civilização antiga os gatos eram considerados sagrados?',
      options: ['Roma', 'Grécia', 'Egito', 'Mesopotâmia'],
      correctIndex: 2,
      explanation:
        'No Egito Antigo os gatos eram associados à deusa Bastet e chegavam a ser mumificados como sinal de reverência.',
    },
    {
      id: 'peste-negra',
      category: 'historia',
      question: 'Qual foi uma possível consequência histórica da perseguição aos gatos na Idade Média?',
      options: [
        'Redução de doenças transmitidas por ratos',
        'Contribuição para o avanço da Peste Negra',
        'Aumento da população de gatos selvagens',
        'Nenhuma, gatos não eram perseguidos',
      ],
      correctIndex: 1,
      explanation:
        'Uma bula papal de 1233 associou gatos pretos ao demônio, levando a matanças que, segundo teorias históricas, ajudaram os ratos a se proliferar e agravaram a Peste Negra.',
    },
    {
      id: 'felicette',
      category: 'historia',
      question: 'O que foi a Félicette, em 1963?',
      options: [
        'A primeira gata a viajar ao espaço',
        'Uma raça de gato criada na França',
        'Um livro sobre gatos',
        'A primeira gata premiada em uma exposição',
      ],
      correctIndex: 0,
      explanation:
        'Félicette, apelidada de "Astrocat", foi lançada ao espaço pela agência espacial francesa (CNES) em 18 de outubro de 1963, sendo a única gata a sobreviver a uma missão espacial.',
    },
    {
      id: 'maneki-neko',
      category: 'historia',
      question: 'De qual cultura se origina a lenda do "gato da sorte" (Maneki-neko)?',
      options: ['Chinesa', 'Egípcia', 'Japonesa', 'Nórdica'],
      correctIndex: 2,
      explanation:
        'A lenda do Maneki-neko, o gato que acena trazendo sorte, tem origem no Japão feudal, época em que a posse de gatos era restrita à nobreza.',
    },
    {
      id: 'deus-li-shou',
      category: 'historia',
      question: 'Na China Antiga, por volta de 1100 a.C., o que os agricultores cultuavam para proteger as colheitas dos roedores?',
      options: ['O deus dos grãos Li Shou', "A deusa da lua Chang'e", 'O espírito do arroz Shennong', 'O imperador Fu Xi'],
      correctIndex: 0,
      explanation:
        'Segundo o livro clássico "Li Ji", os agricultores chineses cultuavam Li Shou, o deus dos grãos com forma de gato, para proteger as plantações contra roedores.',
    },
    {
      id: 'gatos-na-grecia',
      category: 'historia',
      question: 'Por volta do século V a.C., quem foi responsável por levar os gatos até a Grécia?',
      options: ['Comerciantes fenícios', 'Legionários romanos', 'Monges budistas', 'Exploradores vikings'],
      correctIndex: 0,
      explanation:
        'Os gatos chegaram à Grécia por volta do século V a.C., trazidos por comerciantes fenícios que navegavam pelo Mediterrâneo.',
    },
    {
      id: 'libertas-roma',
      category: 'historia',
      question: 'Na Roma Antiga, os gatos eram associados a qual deusa e tinham qual privilégio único?',
      options: [
        'A deusa Libertas, sendo os únicos animais permitidos nos templos',
        'A deusa Vênus, sendo proibidos de entrar em templos',
        'A deusa Minerva, sendo usados apenas em rituais militares',
        'A deusa Juno, sendo criados exclusivamente pela família imperial',
      ],
      correctIndex: 0,
      explanation:
        'Em Roma, os gatos simbolizavam a deusa Libertas e eram os únicos animais com permissão para circular livremente dentro dos templos.',
    },
    {
      id: 'carruagem-freyja',
      category: 'historia',
      question: 'Na mitologia nórdica, o que puxava a carruagem da deusa Freyja?',
      options: [
        'Dois grandes gatos cinzentos, um presente de Thor',
        'Dois lobos selvagens domesticados por Odin',
        'Um par de corvos sagrados',
        'Quatro cavalos alados',
      ],
      correctIndex: 0,
      explanation:
        'Segundo a mitologia nórdica, a carruagem de Freyja era puxada por dois grandes gatos cinzentos, presenteados a ela pelo deus Thor.',
    },
    {
      id: 'gatos-marinha-real',
      category: 'historia',
      question: 'Até que ano a Marinha Real Britânica alistou oficialmente gatos de navio, concedendo-lhes ração diária?',
      options: ['1975', '1901', '1945', '2000'],
      correctIndex: 0,
      explanation:
        'A prática de alistar oficialmente gatos de navio na Marinha Real Britânica, com direito a ração diária, só foi abolida em 1975.',
    },
    {
      id: 'gatos-frota-cabral',
      category: 'historia',
      question: 'Os primeiros gatos chegaram ao Brasil em qual contexto histórico?',
      options: [
        'Na frota de Cabral, em 1500',
        'Com os bandeirantes, no século XVII',
        'Na imigração europeia, no século XIX',
        'Com a corte portuguesa, em 1808',
      ],
      correctIndex: 0,
      explanation:
        'Durante a Era das Navegações, os primeiros gatos chegaram ao território brasileiro a bordo da frota de Pedro Álvares Cabral, em 1500.',
    },
    {
      id: 'baudelaire-flores-do-mal',
      category: 'historia',
      question: 'Qual poeta francês do século XIX dedicou três poemas a gatos em sua obra "As Flores do Mal" (1857)?',
      options: ['Charles Baudelaire', 'Victor Hugo', 'Arthur Rimbaud', 'Paul Verlaine'],
      correctIndex: 0,
      explanation: 'Charles Baudelaire escreveu três poemas sobre gatos em "As Flores do Mal", publicado em 1857.',
    },
    {
      id: 'poe-gato-preto',
      category: 'historia',
      question: 'Em 1843, Edgar Allan Poe publicou um conto de terror estrelado por um felino. Qual é o título dessa história?',
      options: ['"O Gato Preto"', '"O Corvo"', '"O Poço e o Pêndulo"', '"A Queda da Casa de Usher"'],
      correctIndex: 0,
      explanation:
        'Edgar Allan Poe escreveu "O Gato Preto" em 1843, um dos contos de terror mais famosos protagonizados por um gato.',
    },
    {
      id: 'exposicao-crystal-palace',
      category: 'historia',
      question: 'Em 13 de julho de 1871, o que aconteceu no Crystal Palace, em Londres, reunindo 160 gatos de 25 raças?',
      options: [
        'A primeira grande exposição de gatos',
        'O primeiro concurso internacional de cães',
        'A fundação da primeira associação felina do mundo',
        'A estreia de um circo dedicado a animais exóticos',
      ],
      correctIndex: 0,
      explanation:
        'A primeira grande exposição de gatos da história aconteceu no Crystal Palace, em Londres, em 13 de julho de 1871, reunindo 160 gatos de 25 raças diferentes.',
    },
    {
      id: 'felix-the-cat',
      category: 'historia',
      question: 'Lançado em 1919, qual personagem se tornou o primeiro desenho animado a alcançar fama mundial?',
      options: ['Felix the Cat', 'Mickey Mouse', 'Tom (de Tom e Jerry)', 'Garfield'],
      correctIndex: 0,
      explanation: 'Felix the Cat, criado em 1919, foi o primeiro personagem animado a conquistar fama em escala mundial.',
    },

    // ---- alimentacao ----
    {
      id: 'leite',
      category: 'alimentacao',
      question: 'É recomendado dar leite de vaca para gatos adultos?',
      options: [
        'Sim, todos os dias',
        'Não, a maioria é intolerante à lactose',
        'Sim, mas só à noite',
        'Só para gatos de pelo curto',
      ],
      correctIndex: 1,
      explanation:
        'A maioria dos gatos adultos perde a enzima que digere a lactose, e o leite pode causar diarreia e desconforto.',
    },
    {
      id: 'alimentos-toxicos',
      category: 'alimentacao',
      question: 'Qual desses alimentos é tóxico para os gatos?',
      options: ['Frango cozido', 'Cenoura', 'Chocolate', 'Arroz branco'],
      correctIndex: 2,
      explanation:
        'O chocolate contém teobromina, substância tóxica para os gatos e que pode causar sérios problemas de saúde.',
    },
    {
      id: 'hidratacao',
      category: 'alimentacao',
      question: 'Em média, quanta água um gato precisa consumir por dia?',
      options: [
        'Cerca de 5 ml por kg de peso',
        'Cerca de 50 ml por kg de peso',
        'Cerca de 500 ml por kg de peso',
        'Gatos não precisam beber água',
      ],
      correctIndex: 1,
      explanation:
        'Um gato precisa em média de cerca de 50 ml de água por kg de peso corporal ao dia — um gato de 4 kg precisa de aproximadamente 200 ml.',
    },
    {
      id: 'filhotes-leite',
      category: 'alimentacao',
      question: 'É seguro dar leite de vaca ou leite humano para filhotes de gato?',
      options: [
        'Sim, é o mais indicado',
        'Não, pode causar diarreia severa',
        'Só o leite humano é seguro',
        'Sim, mas apenas leite integral',
      ],
      correctIndex: 1,
      explanation:
        'Filhotes não devem receber leite de vaca nem leite humano, pois podem causar diarreia severa; o desmame deve ser feito com dietas apropriadas para filhotes.',
    },
    {
      id: 'alimentacao-idosos',
      category: 'alimentacao',
      question: 'Sobre a alimentação de gatos idosos, o que é recomendado?',
      options: [
        'Reduzir a quantidade de proteína',
        'Aumentar a quantidade de proteína de qualidade',
        'Eliminar proteína animal da dieta',
        'Manter exatamente a mesma dieta da fase adulta',
      ],
      correctIndex: 1,
      explanation:
        'Ao contrário do que muitos pensam, gatos idosos geralmente precisam de mais proteína de qualidade, não menos, para preservar a massa muscular.',
    },
    {
      id: 'racao-seca-proteina',
      category: 'alimentacao',
      question: 'Ao escolher uma ração seca de qualidade para o gato, o que deve aparecer como primeiro ingrediente na lista?',
      options: [
        'Uma proteína animal nomeada, como frango ou peixe',
        'Milho ou outro cereal',
        'Subprodutos vegetais',
        'Corantes e conservantes',
      ],
      correctIndex: 0,
      explanation:
        'Gatos são carnívoros obrigatórios, então o primeiro ingrediente da ração deve ser uma proteína animal identificada, como frango ou peixe, e não um cereal ou subproduto genérico.',
    },
    {
      id: 'troca-de-racao',
      category: 'alimentacao',
      question: 'Qual é a forma correta de trocar a ração do gato por uma nova marca ou sabor?',
      options: [
        'De uma vez, substituindo toda a ração antiga no mesmo dia',
        'Gradualmente, misturando as duas rações ao longo de 7 a 10 dias',
        'Somente durante um jejum de 24 horas',
        'Não é necessário nenhum cuidado especial',
      ],
      correctIndex: 1,
      explanation:
        'A troca de ração deve ser feita aos poucos, misturando a nova à antiga em proporções crescentes ao longo de 7 a 10 dias, para evitar problemas digestivos.',
    },
    {
      id: 'racao-seca-validade',
      category: 'alimentacao',
      question: 'Depois de aberto, por quanto tempo em média um pacote de ração seca mantém sua qualidade?',
      options: ['1 a 2 dias', '4 a 6 semanas', '6 meses', '1 ano'],
      correctIndex: 1,
      explanation:
        'Um pacote de ração seca aberto costuma durar de 4 a 6 semanas antes de perder qualidade nutricional e sabor, por isso é importante armazená-lo bem fechado.',
    },
    {
      id: 'racao-umida-agua',
      category: 'alimentacao',
      question: 'Por que a ração úmida é uma boa aliada da saúde urinária e da hidratação do gato?',
      options: [
        'Porque contém entre 70% e 80% de água em sua composição',
        'Porque tem mais sal do que a ração seca',
        'Porque não contém proteína animal',
        'Porque precisa ser diluída em água antes de servir',
      ],
      correctIndex: 0,
      explanation:
        'A ração úmida contém de 70% a 80% de água, o que ajuda a aumentar a ingestão hídrica do gato e favorece a saúde do trato urinário.',
    },
    {
      id: 'racao-umida-descarte',
      category: 'alimentacao',
      question: 'Se a ração úmida aberta for guardada na geladeira, em quanto tempo ela deve ser descartada?',
      options: ['Em até 30 minutos', 'Em até 24 horas', 'Em até 7 dias', 'Ela nunca precisa ser descartada'],
      correctIndex: 1,
      explanation:
        'Fora da geladeira, a ração úmida deve ser descartada após 30 minutos; se guardada refrigerada, pode ser consumida em até 24 horas.',
    },
    {
      id: 'cebola-alho',
      category: 'alimentacao',
      question: 'Por que cebola e alho são perigosos para os gatos?',
      options: [
        'Porque destroem os glóbulos vermelhos, podendo causar anemia hemolítica',
        'Porque causam apenas mau hálito',
        'Porque engordam o gato rapidamente',
        'Porque são apenas levemente indigestos',
      ],
      correctIndex: 0,
      explanation:
        'Compostos presentes na cebola e no alho destroem os glóbulos vermelhos do gato, podendo levar a um quadro de anemia hemolítica.',
    },
    {
      id: 'uvas-passas',
      category: 'alimentacao',
      question: 'Qual é o risco de dar uvas ou passas para um gato?',
      options: [
        'Podem causar insuficiência renal aguda',
        'Podem causar apenas diarreia leve',
        'Não oferecem nenhum risco',
        'Podem manchar o pelo do gato',
      ],
      correctIndex: 0,
      explanation:
        'Uvas e passas podem causar insuficiência renal aguda em gatos, mesmo em pequenas quantidades, por isso devem ser mantidas fora do alcance deles.',
    },
    {
      id: 'xilitol',
      category: 'alimentacao',
      question: 'O que o xilitol, um adoçante artificial comum em produtos industrializados, pode causar em um gato?',
      options: [
        'Uma queda fatal de açúcar no sangue (hipoglicemia)',
        'Aumento de energia e apetite',
        'Melhora na digestão',
        'Nenhum efeito, pois gatos não sentem o sabor doce',
      ],
      correctIndex: 0,
      explanation:
        'O xilitol provoca uma liberação de insulina que derruba rapidamente o açúcar no sangue do gato, causando uma hipoglicemia que pode ser fatal.',
    },
    {
      id: 'ossos-cozidos',
      category: 'alimentacao',
      question: 'Por que não se deve dar ossos cozidos para os gatos?',
      options: [
        'Porque podem lascar e causar perfurações ou obstruções no trato digestivo',
        'Porque os ossos cozidos são amargos para os gatos',
        'Porque atrapalham a absorção de cálcio',
        'Não há problema em dar ossos cozidos',
      ],
      correctIndex: 0,
      explanation:
        'Ao serem cozidos, os ossos ficam quebradiços e podem lascar em fragmentos pontiagudos, causando perfurações ou obstruções perigosas no trato digestivo do gato.',
    },
    {
      id: 'massa-pao-crua',
      category: 'alimentacao',
      question: 'Qual é o perigo de um gato ingerir massa de pão crua feita com fermento?',
      options: [
        'A massa pode fermentar no estômago e liberar álcool, que é fatal para o gato',
        'A massa apenas causa uma leve sonolência',
        'A massa endurece os dentes do gato',
        'Não há nenhum risco, desde que em pequena quantidade',
      ],
      correctIndex: 0,
      explanation:
        'O fermento presente na massa crua continua ativo no estômago quente do gato, fermentando e liberando álcool, que é fatal mesmo em pequenas quantidades.',
    },

    // ---- racas ----
    {
      id: 'sphynx',
      category: 'racas',
      question: 'Qual raça de gato é conhecida por não ter pelos?',
      options: ['Persa', 'Sphynx', 'Maine Coon', 'Siamês'],
      correctIndex: 1,
      explanation: 'O Sphynx é uma raça caracterizada pela ausência de pelagem, exigindo cuidados especiais com a pele.',
    },
    {
      id: 'manx',
      category: 'racas',
      question: 'Qual raça de gato é conhecida por nascer sem cauda ou com cauda bem curta?',
      options: ['Manx', 'Bengal', 'Ragdoll', 'Angorá'],
      correctIndex: 0,
      explanation: 'A raça Manx apresenta uma mutação genética que resulta em cauda ausente ou muito curta.',
    },
    {
      id: 'maine-coon',
      category: 'racas',
      question: 'Qual é uma característica marcante da raça Maine Coon?',
      options: [
        'É a menor raça de gato doméstico',
        'É uma das maiores raças domésticas e costuma gostar de água',
        'Não tem pelos',
        'Nasce sem cauda',
      ],
      correctIndex: 1,
      explanation:
        'O Maine Coon é considerado o maior gato doméstico do mundo em comprimento, podendo levar até 4 anos para atingir o tamanho adulto, e é conhecido por gostar de água.',
    },
    {
      id: 'bengal',
      category: 'racas',
      question: 'A raça Bengal foi criada a partir do cruzamento de gatos domésticos com qual animal?',
      options: ['Lince', 'Gato-leopardo-asiático', 'Gato-do-mato-brasileiro', 'Caracal'],
      correctIndex: 1,
      explanation:
        'O Bengal foi desenvolvido nos anos 1960 pela geneticista Jean Mill, cruzando gatos domésticos com o gato-leopardo-asiático, resultando em uma pelagem malhada característica.',
    },
    {
      id: 'scottish-fold',
      category: 'racas',
      question: 'O que caracteriza fisicamente a raça Scottish Fold?',
      options: ['Orelhas dobradas para frente', 'Ausência total de pelos', 'Pernas muito curtas', 'Cauda extremamente longa'],
      correctIndex: 0,
      explanation:
        'O Scottish Fold é conhecido por suas orelhas dobradas, resultado de uma mutação genética identificada pela primeira vez em uma gata chamada Susie, na Escócia, em 1961.',
    },
    {
      id: 'persa',
      category: 'racas',
      question: 'Qual monarca britânica tinha dois gatos persas azuis de estimação?',
      options: ['Rainha Vitória', 'Rainha Elizabeth II', 'Rei George III', 'Rainha Maria I'],
      correctIndex: 0,
      explanation:
        'A Rainha Vitória tinha dois persas azuis; a raça é a mais popular em exposições de gatos e pode ter mais de 80 variações de cor de pelagem.',
    },
    {
      id: 'siames',
      category: 'racas',
      question: 'De que cor nascem os filhotes de gato Siamês?',
      options: ['Completamente brancos', 'Já com as marcações escuras', 'Cinza uniforme', 'Malhados de preto e branco'],
      correctIndex: 0,
      explanation:
        'Os filhotes de Siamês nascem completamente brancos; as marcações escuras surgem depois por causa de uma mutação sensível à temperatura na melanina.',
    },
    {
      id: 'ragdoll',
      category: 'racas',
      question: 'Por que a raça Ragdoll recebeu esse nome?',
      options: [
        'Porque fica "molinha" e frouxa ao ser pega no colo',
        'Porque tem pelagem parecida com um pano',
        'Porque foi criada por um estúdio de brinquedos',
        'Porque adora brincar com bonecas de pano',
      ],
      correctIndex: 0,
      explanation:
        'O nome Ragdoll (boneca de pano) vem do fato de o gato ficar frouxo ao ser pego no colo; todos os Ragdolls têm olhos azuis e a raça é considerada uma das mais tolerantes com crianças.',
    },
    {
      id: 'abissinio',
      category: 'racas',
      question: 'A pelagem "ticked" (agouti) do gato Abissínio lembra qual representação histórica?',
      options: [
        'A arte egípcia antiga com gatos',
        'As tapeçarias medievais europeias',
        'As pinturas renascentistas italianas',
        'As cerâmicas gregas antigas',
      ],
      correctIndex: 0,
      explanation:
        'A pelagem "ticked" do Abissínio lembra a arte egípcia antiga com gatos; a raça foi exibida pela primeira vez na Inglaterra em 1871.',
    },
    {
      id: 'angora-turco',
      category: 'racas',
      question: 'O que costuma ocorrer com Angorás Turcos de pelagem branca?',
      options: [
        'Heterocromia (um olho azul, outro âmbar)',
        'Ausência total de bigodes',
        'Mudança de cor da pelagem conforme a estação',
        'Uma cauda anelada exclusiva da raça',
      ],
      correctIndex: 0,
      explanation:
        'Angorás Turcos brancos costumam apresentar heterocromia, com um olho azul e outro âmbar; a raça é considerada um tesouro nacional na Turquia.',
    },
    {
      id: 'birmanes',
      category: 'racas',
      question: 'Qual característica marcante identifica o Birmanês, conhecido como "Gato Sagrado da Birmânia"?',
      options: [
        '"Luvas" brancas simétricas nas quatro patas',
        'Cauda totalmente ausente',
        'Orelhas dobradas para frente',
        'Pelagem totalmente sem pelos',
      ],
      correctIndex: 0,
      explanation: 'O Birmanês possui "luvas" brancas simétricas nas quatro patas e quase foi extinto após a Segunda Guerra Mundial.',
    },
    {
      id: 'british-shorthair',
      category: 'racas',
      question: 'Qual personagem clássico teria sido inspirado pelo British Shorthair?',
      options: ['O Gato de Cheshire', 'O Gato de Botas', 'Garfield', 'Tom (de Tom e Jerry)'],
      correctIndex: 0,
      explanation:
        'O British Shorthair descende de gatos trazidos pelos romanos há cerca de 2.000 anos e serviu de inspiração para o Gato de Cheshire.',
    },
    {
      id: 'munchkin',
      category: 'racas',
      question: 'Como o gato Munchkin costuma se sentar por causa de suas pernas curtas?',
      options: [
        'Ereto, como um esquilo',
        'Sempre deitado de lado',
        'Com as patas dianteiras cruzadas',
        'Apoiado somente nas patas traseiras esticadas',
      ],
      correctIndex: 0,
      explanation:
        'A mutação de pernas curtas do Munchkin foi documentada pela primeira vez na França nos anos 1940 e reconhecida pela TICA em 1995; o gato costuma sentar-se ereto como um esquilo.',
    },
    {
      id: 'noruegues-da-floresta',
      category: 'racas',
      question: 'A qual mitologia o gato Norueguês da Floresta está tradicionalmente associado?',
      options: [
        'Mitologia nórdica, ligada à deusa Freyja',
        'Mitologia grega, ligada a Ártemis',
        'Mitologia egípcia, ligada a Bastet',
        'Mitologia romana, ligada a Diana',
      ],
      correctIndex: 0,
      explanation:
        'O Norueguês da Floresta está ligado à mitologia nórdica, sendo associado aos gatos que puxavam a carruagem da deusa Freyja; é o gato nacional da Noruega.',
    },
    {
      id: 'russo-azul',
      category: 'racas',
      question: 'Por que o gato Russo Azul parece estar sempre sorrindo?',
      options: [
        'Por causa da estrutura natural de sua boca',
        'Por causa de uma prega genética na pelagem',
        'Por causa do formato amendoado dos olhos',
        'Por causa de manchas na face que parecem um sorriso',
      ],
      correctIndex: 0,
      explanation:
        'O Russo Azul tem um "sorriso" natural devido à estrutura da boca; é popularmente (mas sem comprovação científica) associado a causar menos alergias.',
    },

    // ---- cuidados ----
    {
      id: 'caixa-areia',
      category: 'cuidados',
      question: 'Com que frequência a caixa de areia do gato deve ser limpa?',
      options: ['Uma vez por mês', 'Diariamente', 'Uma vez por semana', 'Apenas quando notar cheiro forte'],
      correctIndex: 1,
      explanation:
        'A limpeza diária da caixa de areia evita problemas de higiene e comportamento, já que gatos são muito sensíveis à limpeza do local.',
    },
    {
      id: 'escovar-pelo',
      category: 'cuidados',
      question: 'Qual é um benefício de escovar o pelo do gato regularmente?',
      options: ['Não traz benefício algum', 'Reduz a formação de bolas de pelo', 'Faz o gato engordar', 'Estimula o crescimento de pulgas'],
      correctIndex: 1,
      explanation:
        'Escovar regularmente remove pelos soltos, reduzindo a ingestão deles pelo gato e a formação de bolas de pelo.',
    },
    {
      id: 'castracao',
      category: 'cuidados',
      question: 'Qual é um dos principais benefícios da castração de gatas antes do primeiro cio?',
      options: [
        'Nenhum benefício comprovado',
        'Redução de até 90% no risco de tumor de mama',
        'Aumento do risco de doenças',
        'Só reduz o apetite',
      ],
      correctIndex: 1,
      explanation:
        'A castração de fêmeas antes do primeiro cio pode reduzir em até 90% o risco de tumores mamários, além de eliminar o risco de piometra.',
    },
    {
      id: 'plantas-toxicas',
      category: 'cuidados',
      question: 'Por que lírios (do gênero Lilium) são extremamente perigosos para gatos?',
      options: [
        'Causam apenas irritação leve na pele',
        'Mesmo o pólen ou a água do vaso podem causar insuficiência renal fatal',
        'Só são tóxicos se ingeridos em grande quantidade',
        'Não afetam gatos, apenas cães',
      ],
      correctIndex: 1,
      explanation:
        'Lírios são extremamente tóxicos para gatos — até o pólen ou a água onde a flor ficou podem causar insuficiência renal fatal, mesmo em pequenas quantidades.',
    },
    {
      id: 'vacinacao',
      category: 'cuidados',
      question: 'A vacina V4/V5 em gatos geralmente começa a ser aplicada em qual fase?',
      options: ['Somente na fase adulta', 'Entre 6 e 8 semanas de vida', 'Apenas após 1 ano de idade', 'Não existe vacina específica para gatos'],
      correctIndex: 1,
      explanation:
        'O esquema vacinal V4/V5 costuma começar entre 6 e 8 semanas de vida, com reforços até cerca de 14 a 16 semanas.',
    },
    {
      id: 'higiene-bucal',
      category: 'cuidados',
      question: 'Qual cuidado é recomendado para prevenir a doença periodontal, comum em mais de 70% dos gatos acima de 3 anos?',
      options: [
        'Nenhum cuidado é possível',
        'Escovar os dentes ou fazer limpezas dentárias regulares',
        'Apenas trocar a ração uma vez',
        'Evitar totalmente que o gato beba água',
      ],
      correctIndex: 1,
      explanation:
        'Como a doença periodontal afeta mais de 70% dos gatos com mais de 3 anos, escovar os dentes regularmente ou fazer limpezas dentárias é essencial para prevenir o problema.',
    },
    {
      id: 'limpeza-orelhas',
      category: 'cuidados',
      question: 'Qual é a frequência recomendada para limpar as orelhas do gato?',
      options: ['Diariamente', 'Mensalmente', 'Uma vez por ano', 'Nunca é necessário'],
      correctIndex: 1,
      explanation: 'Recomenda-se limpar as orelhas do gato mensalmente, ajudando a prevenir infecções e o acúmulo de cera.',
    },
    {
      id: 'corte-unhas',
      category: 'cuidados',
      question: 'Com que frequência as unhas do gato devem ser cortadas?',
      options: ['A cada 2-3 semanas', 'Uma vez por ano', 'A cada 6 meses', 'Nunca, elas se desgastam sozinhas'],
      correctIndex: 0,
      explanation:
        'As unhas do gato devem ser cortadas a cada 2 a 3 semanas para evitar que cresçam demais e causem desconforto ou machucados.',
    },
    {
      id: 'carinho-locais',
      category: 'cuidados',
      question: 'Quais áreas os gatos costumam preferir para receber carinho?',
      options: ['Barriga e patas', 'Cauda e patas', 'Cabeça, bochechas, queixo e base das orelhas', 'Qualquer lugar do corpo, sem preferência'],
      correctIndex: 2,
      explanation:
        'Gatos costumam preferir carinho na cabeça, bochechas, queixo e base das orelhas, áreas com glândulas de cheiro, enquanto barriga, patas e cauda geralmente devem ser evitadas.',
    },
    {
      id: 'piscar-devagar',
      category: 'cuidados',
      question: 'O que significa quando um gato pisca devagar para você?',
      options: ['Sinal de irritação', 'Sinal de sono profundo', "Um 'beijo de gato', demonstrando confiança", 'Sinal de dor'],
      correctIndex: 2,
      explanation: "Piscar devagar para o gato é considerado um 'beijo de gato', um sinal de confiança que pode ser retribuído da mesma forma.",
    },
    {
      id: 'vacina-felv',
      category: 'cuidados',
      question: 'Para quais gatos a vacina contra FeLV (leucemia felina) é especialmente recomendada?',
      options: ['Apenas gatos filhotes que nunca saem de casa', 'Gatos que têm acesso à rua', 'Somente gatos idosos', 'Não existe vacina contra FeLV'],
      correctIndex: 1,
      explanation:
        'A vacina contra FeLV é especialmente recomendada para gatos que têm acesso à rua, já que o contágio ocorre principalmente pelo contato com outros gatos.',
    },
    {
      id: 'vacina-antirrabica',
      category: 'cuidados',
      question: 'A partir de qual idade a vacina antirrábica é obrigatória em muitos municípios brasileiros?',
      options: ['1 mês', '3 meses', '1 ano', 'Não é obrigatória para gatos'],
      correctIndex: 1,
      explanation: 'Em muitos municípios brasileiros, a vacina antirrábica é obrigatória para gatos a partir dos 3 meses de idade.',
    },
    {
      id: 'vermifugacao',
      category: 'cuidados',
      question: 'Com que frequência gatos adultos devem ser vermifugados?',
      options: ['A cada 3 meses', 'Uma vez na vida', 'A cada 5 anos', 'Somente se tiverem sintomas'],
      correctIndex: 0,
      explanation: 'Gatos adultos devem ser vermifugados a cada 3 meses, mesmo que não apresentem sintomas visíveis de vermes.',
    },
    {
      id: 'sinais-estresse',
      category: 'cuidados',
      question: 'Quais são sinais comuns de estresse em gatos?',
      options: [
        'Aumento do apetite e sono profundo',
        'Esconder-se, evitar a caixa de areia e lamber-se excessivamente',
        'Ronronar mais alto que o normal',
        'Brincar mais do que o costume',
      ],
      correctIndex: 1,
      explanation:
        'Esconder-se, evitar a caixa de areia e lamber-se excessivamente (causando falhas no pelo) são sinais comuns de estresse em gatos.',
    },
    {
      id: 'introducao-novo-gato',
      category: 'cuidados',
      question: 'Quanto tempo costuma levar o processo ideal de apresentação de um novo gato na casa?',
      options: ['Alguns minutos', '1 dia', '2 a 4 semanas', '1 ano'],
      correctIndex: 2,
      explanation:
        'A apresentação de um novo gato deve ser um processo gradual, que costuma levar de 2 a 4 semanas para reduzir o estresse dos gatos envolvidos.',
    },

    // ---- exercicios ----
    {
      id: 'brincadeiras',
      category: 'exercicios',
      question: 'Por que é importante estimular o gato com brincadeiras diárias?',
      options: ['Apenas para gastar energia do tutor', 'Promove saúde física e mental do gato', 'Não tem efeito real no gato', 'Serve só para gatos filhotes'],
      correctIndex: 1,
      explanation:
        'Brincadeiras estimulam o instinto de caça, previnem obesidade e ajudam no bem-estar mental do gato, mesmo na fase adulta.',
    },
    {
      id: 'brinquedo-caca',
      category: 'exercicios',
      question: 'Qual tipo de brinquedo estimula melhor o instinto de caça do gato?',
      options: ['Bola de futebol grande', 'Varinha com pena ou ponteiro de luz', 'Almofada macia', 'Sino sozinho, parado no chão'],
      correctIndex: 1,
      explanation:
        'Brinquedos que simulam movimento de presas, como varinhas com penas ou ponteiros de luz, despertam o instinto natural de caça.',
    },
    {
      id: 'arranhador-altura',
      category: 'exercicios',
      question: 'Qual deve ser a altura mínima recomendada para um arranhador vertical?',
      options: ['Não importa a altura', 'A altura do gato totalmente esticado', 'Metade da altura do gato', 'Apenas 10 cm de altura'],
      correctIndex: 1,
      explanation:
        'Arranhadores verticais devem ter, no mínimo, a altura do gato totalmente esticado, permitindo que ele alongue bem os músculos ao arranhar.',
    },
    {
      id: 'obesidade-gatos',
      category: 'exercicios',
      question: 'Qual é a estimativa de gatos castrados com sobrepeso, segundo dados de saúde felina?',
      options: ['Menos de 10%', 'Cerca de 25%', 'Mais de 50%', 'Praticamente nenhum'],
      correctIndex: 2,
      explanation:
        'Estima-se que mais de 50% dos gatos castrados estejam acima do peso, o que aumenta o risco de diabetes tipo 2 e outros problemas de saúde.',
    },
    {
      id: 'exercicio-idosos',
      category: 'exercicios',
      question: 'Em gatos idosos com artrose, qual é um sinal mais comum do que o mancar evidente?',
      options: ['Perda total de apetite', 'Relutância em pular ou saltar', 'Aumento da agilidade', 'Nenhum sintoma visível'],
      correctIndex: 1,
      explanation:
        'A artrose é comum em gatos acima de 10 anos, mas raramente causa manqueira óbvia — o sinal mais comum é a relutância em pular ou saltar.',
    },
    {
      id: 'sessoes-brincadeira',
      category: 'exercicios',
      question: 'Quantas sessões de brincadeira por dia são recomendadas para um gato, e qual a duração ideal de cada uma?',
      options: ['1 sessão única de 1 hora', '2 a 3 sessões de 10 a 15 minutos', '5 sessões de 2 minutos', 'Não há necessidade de sessões diárias'],
      correctIndex: 1,
      explanation:
        'Recomenda-se de 2 a 3 sessões de brincadeira de 10 a 15 minutos por dia, o que ajuda a manter o gato ativo e mentalmente estimulado.',
    },
    {
      id: 'horario-brincadeira',
      category: 'exercicios',
      question: 'Qual é o horário mais indicado para as sessões de brincadeira com o gato?',
      options: ['Durante a madrugada', 'Apenas logo após as refeições', 'Pela manhã e no final da tarde', 'Somente à noite, antes de dormir'],
      correctIndex: 2,
      explanation:
        'O período da manhã e do final da tarde é o mais indicado, coincidindo com os horários em que os gatos costumam estar naturalmente mais ativos.',
    },
    {
      id: 'vencer-cacada',
      category: 'exercicios',
      question: 'Por que é recomendado deixar o gato "vencer a caçada" periodicamente durante a brincadeira?',
      options: ['Para economizar brinquedos', 'Para satisfazer o instinto de caça do gato', 'Para deixar o gato cansado mais rápido', 'Isso não influencia o comportamento do gato'],
      correctIndex: 1,
      explanation:
        'Permitir que o gato "capture" a presa de vez em quando satisfaz seu instinto de caça e torna a brincadeira mais gratificante.',
    },
    {
      id: 'arranhar-desgaste',
      category: 'exercicios',
      question: 'Além de marcar território, qual outra função importante o ato de arranhar tem para o gato?',
      options: ['Nenhuma, é apenas um hábito sem propósito', 'Ajudar na digestão', 'Desgastar as camadas antigas das unhas e alongar os músculos', 'Limpar as patas'],
      correctIndex: 2,
      explanation: 'Arranhar ajuda a remover as camadas antigas e desgastadas das unhas, além de proporcionar um bom alongamento muscular.',
    },
    {
      id: 'arranhar-territorio',
      category: 'exercicios',
      question: 'Como o comportamento de arranhar contribui para a marcação de território pelo gato?',
      options: ['Através do som produzido durante o arranhão', 'Através das glândulas de cheiro presentes nas patas', 'Através da saliva deixada nas garras', 'Através da urina espalhada durante o movimento'],
      correctIndex: 1,
      explanation: 'As patas dos gatos possuem glândulas de cheiro, e o ato de arranhar deixa esse odor na superfície, marcando o território.',
    },
    {
      id: 'comedouro-quebra-cabeca',
      category: 'exercicios',
      question: 'Qual é o principal benefício de usar comedouros do tipo "puzzle feeder" (quebra-cabeça) para o gato?',
      options: ['Deixar a comida com sabor diferente', 'Reduzir a quantidade de comida necessária', 'Transformar a hora da refeição em exercício mental e físico', 'Substituir totalmente as brincadeiras diárias'],
      correctIndex: 2,
      explanation: 'Os comedouros quebra-cabeça estimulam o gato a "trabalhar" pela comida, transformando a refeição em uma atividade de exercício mental e físico.',
    },
    {
      id: 'laser-brinquedo-fisico',
      category: 'exercicios',
      question: 'Como deve terminar uma sessão de brincadeira com ponteiro laser?',
      options: ['Desligando o laser de repente, sem aviso', 'Oferecendo um brinquedo físico para o gato "capturar"', 'Repetindo a sessão imediatamente', 'Não há necessidade de finalizar de forma especial'],
      correctIndex: 1,
      explanation: 'Como o gato nunca consegue "capturar" o ponto de luz, a sessão deve terminar com a oferta de um brinquedo físico para evitar frustração.',
    },
    {
      id: 'catio-seguranca',
      category: 'exercicios',
      question: 'Qual é a principal vantagem de um catio (varanda telada) para o gato?',
      options: ['Permitir que o gato aproveite o ambiente externo com segurança', 'Aumentar o consumo de ração', 'Eliminar a necessidade de brincadeiras internas', 'Evitar que o gato precise de arranhadores'],
      correctIndex: 0,
      explanation: 'O catio permite que o gato desfrute de estímulos do ambiente externo sem risco de fuga ou acidentes.',
    },
    {
      id: 'passeio-peitoral-possivel',
      category: 'exercicios',
      question: 'É possível passear com um gato usando peitoral (guia)?',
      options: ['Não, gatos nunca se adaptam a peitorais', 'Sim, é possível, desde que haja um processo de adaptação', 'Somente filhotes podem usar peitoral', 'Apenas gatos sem pelo podem usar peitoral'],
      correctIndex: 1,
      explanation: 'Passeios com peitoral são possíveis para gatos, mas exigem um processo gradual de habituação antes de sair de casa.',
    },
    {
      id: 'passeio-peitoral-habituacao',
      category: 'exercicios',
      question: 'O que deve ser feito antes de levar um gato para passear pela primeira vez usando peitoral?',
      options: ['Nada, o gato já sai preparado naturalmente', 'Um processo gradual de habituação ao peitoral dentro de casa', 'Apenas comprar o peitoral do tamanho certo', 'Levar o gato direto para uma área movimentada'],
      correctIndex: 1,
      explanation: 'Antes de sair de casa, é importante um processo gradual de habituação, para que o gato se acostume ao peitoral com tranquilidade.',
    },

    // ---- doencas ----
    {
      id: 'flutd',
      category: 'doencas',
      question: 'A sigla FLUTD está relacionada a problemas em qual sistema do gato?',
      options: ['Sistema urinário', 'Sistema respiratório', 'Sistema nervoso', 'Sistema digestivo'],
      correctIndex: 0,
      explanation: 'FLUTD (Doença do Trato Urinário Inferior Felino) é um conjunto de problemas comuns no sistema urinário dos gatos.',
    },
    {
      id: 'checkup-veterinario',
      category: 'doencas',
      question: 'Com que frequência um gato saudável deve visitar o veterinário?',
      options: ['Nunca, se ele parece saudável', 'Pelo menos uma vez ao ano', 'Somente em emergências', 'A cada 5 anos'],
      correctIndex: 1,
      explanation: 'Check-ups anuais ajudam a identificar problemas de saúde precocemente, mesmo quando o gato aparenta estar bem.',
    },
    {
      id: 'diabetes-felina',
      category: 'doencas',
      question: 'Qual é o principal fator de risco para diabetes felina?',
      options: ['Idade filhote', 'Obesidade', 'Pelagem longa', 'Castração'],
      correctIndex: 1,
      explanation:
        'A obesidade é o principal fator de risco para diabetes felina; sinais clássicos incluem sede e urina excessivas e aumento do apetite com perda de peso.',
    },
    {
      id: 'hipertireoidismo',
      category: 'doencas',
      question: 'O hipertireoidismo felino é mais comum em qual faixa etária e geralmente causado por quê?',
      options: [
        'Filhotes, por má alimentação',
        'Gatos acima de 10 anos, geralmente por um tumor benigno na tireoide',
        'Gatos jovens, por vacinação',
        'Não existe essa doença em gatos',
      ],
      correctIndex: 1,
      explanation:
        'O hipertireoidismo é comum em gatos acima de 10 anos e geralmente é causado por um tumor benigno na tireoide, levando a perda de peso apesar do apetite aumentado.',
    },
    {
      id: 'doenca-periodontal',
      category: 'doencas',
      question: 'A doença periodontal afeta aproximadamente qual porcentagem de gatos com mais de 3 anos?',
      options: ['Menos de 5%', 'Cerca de 20%', 'Mais de 70%', 'Não afeta gatos'],
      correctIndex: 2,
      explanation:
        'A doença periodontal afeta mais de 70% dos gatos com mais de 3 anos e pode causar dor mesmo sem tártaro visível, além de afetar coração, rins e fígado.',
    },
    {
      id: 'drc-prevalencia',
      category: 'doencas',
      question: 'Qual é a prevalência aproximada da doença renal crônica (DRC) em gatos acima de 10 anos?',
      options: ['Menos de 5%', 'Cerca de 15%', 'Mais de 30%', 'Quase 90%'],
      correctIndex: 2,
      explanation: 'A doença renal crônica afeta mais de 30% dos gatos acima de 10 anos, sendo uma das condições mais comuns em gatos idosos.',
    },
    {
      id: 'drc-diagnostico',
      category: 'doencas',
      question: 'Quais exames são utilizados para diagnosticar a doença renal crônica em gatos?',
      options: ['Apenas exame de fezes', 'Creatinina, ureia e SDMA', 'Somente ultrassom abdominal', 'Teste de glicemia em jejum'],
      correctIndex: 1,
      explanation: 'O diagnóstico da DRC é feito através de exames de sangue como creatinina, ureia e SDMA, que avaliam a função renal.',
    },
    {
      id: 'drc-estadiamento',
      category: 'doencas',
      question: 'Qual sistema é utilizado para estadiar (classificar os estágios) a doença renal crônica em gatos?',
      options: ['Sistema IRIS', 'Escala de Glasgow', 'Sistema TNM', 'Classificação de Apgar'],
      correctIndex: 0,
      explanation: 'A doença renal crônica é estadiada de acordo com o sistema IRIS, que ajuda a orientar o tratamento e o acompanhamento do paciente.',
    },
    {
      id: 'drc-tratamento',
      category: 'doencas',
      question: 'Qual é a abordagem padrão para o tratamento da doença renal crônica em gatos?',
      options: ['Cirurgia para remoção do rim afetado', 'Não há cura, o controle é feito principalmente com dieta renal específica', 'Antibióticos por via oral durante 30 dias', 'A doença se resolve sozinha com o tempo'],
      correctIndex: 1,
      explanation: 'A DRC não tem cura, mas pode ser controlada, geralmente com uma dieta renal específica que ajuda a reduzir a sobrecarga nos rins.',
    },
    {
      id: 'gripe-felina-causadores',
      category: 'doencas',
      question: 'Quais são os principais agentes causadores da gripe felina?',
      options: ['Herpesvírus felino tipo 1 e calicivírus felino', 'Apenas bactérias transmitidas pela água', 'Fungos presentes na areia sanitária', 'Parasitas intestinais'],
      correctIndex: 0,
      explanation: 'A gripe felina é causada principalmente pelo herpesvírus felino tipo 1 e pelo calicivírus felino, que afetam o sistema respiratório do gato.',
    },
    {
      id: 'gripe-felina-latencia',
      category: 'doencas',
      question: 'O que pode acontecer com o herpesvírus felino após a infecção inicial de um gato?',
      options: ['Ele é eliminado completamente do organismo em poucos dias', 'Ele pode ficar latente e reativar em momentos de estresse', 'Ele se transforma em FIV', 'Ele só afeta filhotes recém-nascidos'],
      correctIndex: 1,
      explanation: 'O herpesvírus felino pode permanecer latente no organismo do gato e reativar em situações de estresse, causando novos episódios da doença.',
    },
    {
      id: 'gripe-felina-vacina',
      category: 'doencas',
      question: 'Qual é o efeito da vacina V4/V5 em relação à gripe felina?',
      options: ['Elimina totalmente o risco de o gato contrair a doença', 'Não tem nenhum efeito sobre a gravidade da doença', 'Reduz a gravidade da doença, mas não elimina totalmente o risco', 'Só protege contra a FIV, não contra a gripe felina'],
      correctIndex: 2,
      explanation: 'A vacina V4/V5 reduz a gravidade da gripe felina, mas não elimina totalmente o risco de infecção pelos vírus envolvidos.',
    },
    {
      id: 'fiv-transmissao',
      category: 'doencas',
      question: 'Qual é a principal forma de transmissão do FIV (imunodeficiência felina) entre gatos?',
      options: ['Compartilhamento de comedouros', 'Mordidas profundas em brigas', 'Picadas de pulgas', 'Contato com fezes contaminadas'],
      correctIndex: 1,
      explanation: 'O FIV se espalha principalmente através de mordidas profundas durante brigas entre gatos, o que torna machos não castrados que vivem na rua mais vulneráveis.',
    },
    {
      id: 'felv-transmissao',
      category: 'doencas',
      question: 'Como o FeLV (leucemia felina) costuma ser transmitido entre gatos?',
      options: [
        'Somente por transfusão de sangue em clínicas veterinárias',
        'Por contato próximo e prolongado, como lambidas mútuas e comedouros compartilhados, além de mãe para filhote',
        'Exclusivamente pelo ar, a longas distâncias',
        'Apenas através de carrapatos',
      ],
      correctIndex: 1,
      explanation:
        'O FeLV se espalha por contato próximo e prolongado entre gatos, como compartilhamento de comedouros e lambidas mútuas, além de poder ser transmitido de mãe para filhote durante a gestação ou amamentação.',
    },
    {
      id: 'fiv-felv-diagnostico',
      category: 'doencas',
      question: 'O que significa, na prática, um gato receber um diagnóstico positivo para FIV ou FeLV?',
      options: [
        'Que ele terá poucas semanas de vida',
        'Que precisa ser eutanasiado imediatamente por segurança',
        'Que não é uma sentença de morte, podendo viver anos com qualidade de vida com acompanhamento veterinário adequado',
        'Que a doença não tem nenhum impacto na saúde do gato',
      ],
      correctIndex: 2,
      explanation:
        'Um resultado positivo para FIV ou FeLV não é uma sentença de morte — muitos gatos vivem anos com boa qualidade de vida quando recebem acompanhamento veterinário adequado.',
    },

    // ---- geral ----
    {
      id: 'geral-savannah',
      category: 'geral',
      question: 'A raça Savannah é resultado do cruzamento entre um gato doméstico e qual animal selvagem?',
      options: ['Serval', 'Lince', 'Caracal', 'Gato-do-mato'],
      correctIndex: 0,
      explanation:
        'O Savannah foi criado em 1986 cruzando gatos domésticos com o serval africano; a geração F1 pode ter até 50% de sangue selvagem e o gato consegue saltar mais de 2,5 m a partir do solo parado.',
    },
    {
      id: 'geral-lykoi',
      category: 'geral',
      question: 'Qual raça de gato é apelidada de "gato lobisomem" por sua aparência única?',
      options: ['Lykoi', 'Sphynx', 'Devon Rex', 'Munchkin'],
      correctIndex: 0,
      explanation:
        'O Lykoi é resultado de uma mutação natural descoberta em 2010 e reconhecida pela TICA em 2012, o que lhe rendeu o apelido de "gato lobisomem".',
    },
    {
      id: 'geral-mumias-egito',
      category: 'geral',
      question: 'Aproximadamente quantas múmias de gatos já foram encontradas em necrópoles do Egito Antigo?',
      options: ['Cerca de 300', 'Cerca de 3 mil', 'Cerca de 30 mil', 'Cerca de 300 mil'],
      correctIndex: 3,
      explanation:
        'Estima-se que cerca de 300 mil múmias de gatos tenham sido encontradas em necrópoles egípcias, reflexo da reverência que os antigos egípcios tinham pelos felinos.',
    },
    {
      id: 'geral-grumpy-cat',
      category: 'geral',
      question: 'Qual gato se tornou um fenômeno da internet a partir de 2012, chegando a acumular uma fortuna estimada em cerca de 100 milhões de dólares?',
      options: ['Grumpy Cat', 'Nyan Cat', 'Felix the Cat', 'Garfield'],
      correctIndex: 0,
      explanation:
        'Grumpy Cat (Tardar Sauce) virou um fenômeno da internet em 2012 e chegou a acumular uma fortuna estimada em cerca de 100 milhões de dólares.',
    },
    {
      id: 'geral-populacao-gatos',
      category: 'geral',
      question: 'Qual é a estimativa aproximada do número de gatos domésticos existentes no mundo atualmente?',
      options: ['60 milhões', '600 milhões', '6 bilhões', '60 mil'],
      correctIndex: 1,
      explanation: 'Estima-se que existam cerca de 600 milhões de gatos domésticos no mundo atualmente.',
    },
    {
      id: 'geral-chocolate',
      category: 'geral',
      question: 'Por que o chocolate é perigoso para os gatos?',
      options: [
        'Contém teobromina, substância tóxica que eles metabolizam muito lentamente',
        'Só causa uma leve alergia de pele',
        'Engorda o gato rapidamente, sem outros riscos',
        'Não é perigoso, apenas para cães',
      ],
      correctIndex: 0,
      explanation: 'O chocolate contém teobromina, substância que os gatos metabolizam muito lentamente e que pode causar sérios problemas de saúde.',
    },
    {
      id: 'geral-caixa-areia',
      category: 'geral',
      question: 'Por que a limpeza diária da caixa de areia é tão importante para os gatos?',
      options: [
        'Porque eles são muito sensíveis à limpeza do local e podem evitar usá-la se estiver suja',
        'Porque a areia estraga em poucas horas',
        'Não faz diferença nenhuma para o gato',
        'Só é importante em casas com mais de um gato',
      ],
      correctIndex: 0,
      explanation:
        'Gatos são muito sensíveis à limpeza da caixa de areia; se ela estiver suja, podem passar a evitá-la, o que causa problemas de comportamento ou de saúde.',
    },
    {
      id: 'geral-flutd-urgencia',
      category: 'geral',
      question: 'Por que problemas urinários como o FLUTD exigem atenção rápida em gatos machos, especialmente castrados?',
      options: [
        'Porque uma obstrução urinária pode se tornar fatal em poucas horas',
        'Porque só causam desconforto leve e passageiro',
        'Porque não afetam gatos castrados',
        'Porque se resolvem sozinhos em poucos dias',
      ],
      correctIndex: 0,
      explanation:
        'Em gatos machos, especialmente castrados, uma obstrução urinária associada ao FLUTD pode se tornar uma emergência fatal em poucas horas, exigindo atendimento veterinário imediato.',
    },
    {
      id: 'geral-brincadeira-diaria',
      category: 'geral',
      question: 'Além de gastar energia, qual é outro benefício importante das brincadeiras diárias para o gato?',
      options: [
        'Promover a saúde física e também o bem-estar mental do gato',
        'Nenhum, é apenas uma forma de entreter o tutor',
        'Fazer o gato dormir menos horas por dia',
        'Substituir totalmente a necessidade de alimentação balanceada',
      ],
      correctIndex: 0,
      explanation:
        'Brincadeiras diárias estimulam o instinto de caça, ajudam a prevenir a obesidade e contribuem para a saúde física e mental do gato, mesmo na fase adulta.',
    },
    {
      id: 'geral-ronronar-causas',
      category: 'geral',
      question: 'O ronronar de um gato indica sempre felicidade?',
      options: [
        'Não, também pode indicar dor ou estresse',
        'Sim, é sempre sinal de felicidade',
        'Não, só filhotes ronronam por felicidade',
        'Sim, mas apenas em gatos adultos',
      ],
      correctIndex: 0,
      explanation:
        'O ronronar vai muito além do conforto: gatos também ronronam quando estão doloridos ou estressados, possivelmente como forma de autocura.',
    },
  ];

  getQuizzes(): QuizDefinition[] {
    return QUIZ_DEFINITIONS;
  }

  getQuestions(quizId: QuizId): QuizQuestion[] {
    return this.questions.filter((q) => q.category === quizId);
  }

  storageKey(quizId: QuizId): string {
    return `catworld_quiz_${quizId}_answers`;
  }

  getSavedAnswers(quizId: QuizId): Record<string, number> | null {
    const saved = localStorage.getItem(this.storageKey(quizId));
    return saved ? JSON.parse(saved) : null;
  }

  saveAnswers(quizId: QuizId, answers: Record<string, number | null>): void {
    localStorage.setItem(this.storageKey(quizId), JSON.stringify(answers));
  }

  getBadge(quizId: QuizId, answers: Record<string, number | null | undefined>): QuizBadge | null {
    const questions = this.getQuestions(quizId);
    const answered = questions.filter((q) => answers[q.id] != null);
    if (!answered.length) return null;

    const correct = answered.filter((q) => answers[q.id] === q.correctIndex).length;
    const ratio = correct / answered.length;

    if (quizId === 'geral') {
      if (ratio === 1) return { id: 'especialista-felino', label: 'Especialista Felino', icon: 'workspace_premium' };
      if (ratio >= 0.6) return { id: 'amante-gatos', label: 'Amante de Gatos', icon: 'favorite' };
      return { id: 'aprendiz-felino', label: 'Aprendiz Felino', icon: 'school' };
    }

    if (ratio >= 0.9) {
      const definition = QUIZ_DEFINITIONS.find((d) => d.id === quizId)!;
      return {
        id: `especialista-${quizId}`,
        label: `Especialista em ${definition.label}`,
        icon: definition.icon,
      };
    }

    return null;
  }

  getAllEarnedBadges(): QuizBadge[] {
    return QUIZ_DEFINITIONS.map((def) => {
      const answers = this.getSavedAnswers(def.id);
      return answers ? this.getBadge(def.id, answers) : null;
    }).filter((badge): badge is QuizBadge => badge !== null);
  }
}
