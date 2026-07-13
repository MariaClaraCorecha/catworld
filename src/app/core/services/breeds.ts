import { Injectable } from '@angular/core';

export interface Breed {
  id: string;
  name: string;
  origin: string;
  lifespan: string;
  weight: string;
  temperament: string;
  summary: string;
  content: string;
  image: string;
  characteristics: {
    energy: number;
    affection: number;
    grooming: number;
    shedding: number;
    social: number;
  };
  facts: string[];
}

@Injectable({ providedIn: 'root' })
export class BreedsService {
  private breeds: Breed[] = [
    {
      id: 'persa',
      name: 'Persa',
      origin: 'Irã',
      lifespan: '12–17 anos',
      weight: '3–5 kg',
      temperament: 'Calmo, dócil e carinhoso',
      summary:
        'O Persa é um dos gatos mais antigos e populares do mundo, famoso pela pelagem longa e luxuosa e pelo temperamento tranquilo.',
      content: `O gato Persa é uma das raças mais antigas conhecidas, com registros que remontam ao século XVII na Pérsia (atual Irã). Chegou à Europa através de comerciantes italianos e rapidamente conquistou a aristocracia europeia, tornando-se símbolo de elegância e refinamento.

       O focinho achatado (braquicéfalo) é uma característica marcante da raça, mas também causa alguns problemas respiratórios que merecem atenção veterinária regular. Sua pelagem longa e densa exige escovação diária para evitar nós e banhos regulares.

      O Persa é um gato de interior por excelência. Não gosta de ambientes barulhentos e prefere a tranquilidade do lar. É extremamente leal ao seu tutor e pode se tornar ansioso se ficar sozinho por longos períodos.`,
      image: 'images/breeds/persa-cat.jpg',
      characteristics: { energy: 1, affection: 5, grooming: 5, shedding: 4, social: 3 },
      facts: [
        'A rainha Vitória tinha dois persas azuis',
        'É a raça mais popular em exposições felinas do mundo',
        'Pode ter mais de 80 cores de pelagem diferentes',
        'Ronrona com frequência mesmo quando está dormindo',
      ],
    },
    {
      id: 'siames',
      name: 'Siamês',
      origin: 'Tailândia',
      lifespan: '12–20 anos',
      weight: '3–5 kg',
      temperament: 'Vocal, social e inteligente',
      summary:
        'Um dos gatos mais antigos e reconhecíveis do mundo, o Siamês é famoso pela vocalização intensa e pelo vínculo profundo com seus tutores.',
      content: `O Siamês é uma das raças naturais mais antigas do mundo, originária do Siam — o atual reino da Tailândia. Manuscritos do século XIV já descrevem gatos de coloração similar aos Siameses modernos. Chegou ao Ocidente em 1884, quando o cônsul britânico em Bangkok recebeu um par como presente do rei tailandês.

       A característica mais marcante do Siamês é sua vocalização — produz sons graves e insistentes que podem parecer choro de bebê. Essa comunicação intensa reflete sua natureza altamente social: o Siamês precisa de atenção constante e sofre com solidão.

       Inteligente e curioso, o Siamês aprende truques facilmente e gosta de jogos de inteligência. Suas marcações escuras nas extremidades são resultado de uma mutação genética que afeta a produção de melanina em regiões mais frias do corpo.`,
      image: 'images/breeds/siames-cat.jpg',
      characteristics: { energy: 4, affection: 5, grooming: 1, shedding: 2, social: 5 },
      facts: [
        'Os filhotes nascem completamente brancos',
        'É uma das raças mais antigas reconhecidas oficialmente',
        'Apareceu no filme da Disney Os Aristogatas',
        'Pode aprender a buscar objetos como um cachorro',
      ],
    },
    {
      id: 'maine-coon',
      name: 'Maine Coon',
      origin: 'EUA',
      lifespan: '12–15 anos',
      weight: '5–9 kg',
      temperament: 'Brincalhão, gentil e inteligente',
      summary:
        'O maior gato doméstico do mundo, o Maine Coon é conhecido pelo tamanho imponente, pelagem espessa e personalidade de cachorro.',
      content: `O Maine Coon é a raça nativa dos Estados Unidos, originária do estado do Maine, onde foi reconhecido como animal símbolo estadual em 1985. Sua   origem exata é incerta — lendas falam de gatos trazidos pelos Vikings ao continente americano.

       É o maior gato doméstico do mundo em comprimento — machos podem chegar a 1 metro e pesar até 9 kg. Apesar do tamanho imponente, é conhecido como gentle giant pela personalidade dócil e brincalhona.

       Diferente de muitos gatos, o Maine Coon fascina-se por água. Sua pelagem espessa e levemente impermeável é adaptação natural ao clima frio do nordeste americano. Altamente inteligente, aprende comandos e pode ser ensinado a caminhar com coleira.`,
      image: 'images/breeds/mainecoon-cat.jpg',
      characteristics: { energy: 3, affection: 4, grooming: 4, shedding: 4, social: 4 },
      facts: [
        'O recorde mundial de comprimento pertence a um Maine Coon de 1,23 m',
        'Seus pés grandes funcionam como raquetes de neve naturais',
        'Demora até 4 anos para atingir o tamanho adulto',
        'É um dos poucos gatos que genuinamente gosta de água',
      ],
    },
    {
      id: 'bengal',
      name: 'Bengal',
      origin: 'EUA',
      lifespan: '12–16 anos',
      weight: '4–7 kg',
      temperament: 'Ativo, curioso e atlético',
      summary:
        'Com a aparência de um leopardo em miniatura, o Bengal é uma raça híbrida energética que precisa de muito estímulo físico e mental.',
      content: `O Bengal foi criado nos anos 1960 pela geneticista Jean Mill, que cruzou gatos domésticos com o gato-leopardo asiático. O objetivo era criar um gato com aparência selvagem mas temperamento doméstico. Levou várias gerações de cruzamentos seletivos para estabilizar a raça.

       A pelagem do Bengal é única entre os gatos domésticos — as manchas e rosetas têm brilho metálico visível à luz natural. Existem duas variações principais: o Bengal malhado e o marmorizado.

       É uma raça extremamente ativa que precisa de muito espaço e estimulação. Adora escalar, caçar e explorar — e tem uma relação peculiar com água. Precisa de brinquedos interativos e sessões de brincadeira diárias.`,
      image: 'images/breeds/bengal-cat.jpg',
      characteristics: { energy: 5, affection: 3, grooming: 2, shedding: 2, social: 3 },
      facts: [
        'Tem 12,5% de DNA de gato selvagem nas primeiras gerações',
        'É ilegal possuir Bengals de primeira geração em vários países',
        'Suas rosetas são únicas como impressões digitais humanas',
        'Pode aprender a abrir torneiras e portas',
      ],
    },
    {
      id: 'ragdoll',
      name: 'Ragdoll',
      origin: 'EUA',
      lifespan: '12–17 anos',
      weight: '5–9 kg',
      temperament: 'Dócil, relaxado e carinhoso',
      summary:
        'O Ragdoll fica literalmente mole quando pego no colo — daí o nome. É um dos gatos mais dóceis e tolerantes que existem.',
      content: `O Ragdoll foi desenvolvido nos anos 1960 por Ann Baker na Califórnia. A raça recebeu esse nome porque os gatos tendem a relaxar completamente o corpo quando pegos no colo — ficando moles como bonecas de pano.

       É um dos maiores gatos domésticos, rival do Maine Coon em tamanho. Machos podem pesar até 9 kg e levam de 3 a 4 anos para atingir o tamanho adulto. Todos os Ragdolls têm olhos azuis — é uma característica genética da raça.

       O temperamento do Ragdoll é excepcionalmente dócil — ideal para famílias com crianças pequenas por sua tolerância e paciência. Segue o tutor por toda a casa e gosta de dormir na cama.`,
      image: 'images/breeds/ragdoll-cat.jpg',
      characteristics: { energy: 2, affection: 5, grooming: 3, shedding: 3, social: 4 },
      facts: [
        'Todos os Ragdolls têm olhos azuis sem exceção',
        'Filhotes nascem completamente brancos',
        'É considerado o gato mais tolerante com crianças',
        'Não tem instinto de defesa desenvolvido',
      ],
    },
    {
      id: 'sphynx',
      name: 'Sphynx',
      origin: 'Canadá',
      lifespan: '12–16 anos',
      weight: '3–5 kg',
      temperament: 'Extrovertido, curioso e afetuoso',
      summary:
        'O Sphynx parece não ter pelo, mas tem uma camada de penugem extremamente fina. É quente ao toque e extremamente sociável.',
      content: `O Sphynx surgiu em 1966 em Toronto, Canadá, a partir de uma mutação genética natural. A ausência de pelo visível é causada por uma mutação recessiva no gene KRT71. Apesar da aparência, o Sphynx não é hipoalergênico — a alergia é causada pela proteína Fel d1 presente na saliva, não no pelo.

       A temperatura corporal do Sphynx é cerca de 4°C mais alta que a de outros gatos, compensando a falta de isolamento térmico. Por isso adoram se aconchegar sob cobertores e contra o corpo do tutor.

       São extremamente sociáveis e extrovertidos, se aproximando de qualquer visitante com curiosidade. Precisam de banhos semanais para remover o acúmulo de oleosidade na pele e são vulneráveis ao frio e à exposição solar.`,
      image: 'images/breeds/phynx-cat.jpg',
      characteristics: { energy: 4, affection: 5, grooming: 5, shedding: 1, social: 5 },
      facts: [
        'Precisa de banho semanal por falta de pelos',
        'Não é hipoalergênico — a proteína alergênica está na saliva',
        'Temperatura corporal 4°C maior que outros gatos',
        'Famoso por ser o gato do vilão em James Bond',
      ],
    },
  ];

  getAll(): Breed[] {
    return this.breeds;
  }

  getById(id: string): Breed | undefined {
    return this.breeds.find((b) => b.id === id);
  }
}
