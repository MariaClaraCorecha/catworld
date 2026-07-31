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
  icon: string;
  image?: string;
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
      icon: 'pets',
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
      icon: 'pets',
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
      icon: 'pets',
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
      icon: 'pets',
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
      icon: 'pets',
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
      icon: 'pets',
      image: 'images/breeds/phynx-cat.jpg',
      characteristics: { energy: 4, affection: 5, grooming: 5, shedding: 1, social: 5 },
      facts: [
        'Precisa de banho semanal por falta de pelos',
        'Não é hipoalergênico — a proteína alergênica está na saliva',
        'Temperatura corporal 4°C maior que outros gatos',
        'Famoso por ser o gato do vilão em James Bond',
      ],
    },
    {
      id: 'abissinio',
      name: 'Abissínio',
      origin: 'Etiópia',
      lifespan: '9–15 anos',
      weight: '3–5 kg',
      image: 'images/breeds/abissinio_gato.jpg',
      temperament: 'Ativo, curioso e brincalhão',
      summary:
        'Uma das raças mais antigas do mundo, o Abissínio tem pelagem ticada única e lembra os gatos retratados no antigo Egito.',
      content: `O nome Abissínio vem da antiga Abissínia, atual Etiópia, embora estudos genéticos sugiram que a raça possa ter origem no Sudeste Asiático ou na costa do Oceano Índico. Foi exibido pela primeira vez na Inglaterra em 1871 e rapidamente ganhou popularidade pela aparência exótica.

       Sua pelagem "ticada" (ou agouti) tem cada fio com múltiplas bandas de cor, criando um efeito parecido com o pelo de um coelho selvagem e lembrando visualmente os gatos esculpidos e pintados no Egito Antigo.

       É um gato extremamente ativo e atlético, sempre em busca do ponto mais alto do cômodo. Precisa de arranhadores e prateleiras para escalar, além de estímulo mental constante — o tédio pode levar a comportamentos destrutivos.`,
      icon: 'pets',
      characteristics: { energy: 5, affection: 4, grooming: 1, shedding: 2, social: 4 },
      facts: [
        'Sua pelagem ticada muda de tom conforme a luz incide sobre ela',
        'É frequentemente comparado aos gatos das pinturas do Egito Antigo',
        'Prefere lugares altos e adora escalar móveis e estantes',
        'É uma das raças de pelo curto mais antigas reconhecidas',
      ],
    },
    {
      id: 'angora-turco',
      name: 'Angorá Turco',
      origin: 'Turquia',
      image: 'images/breeds/angora_turco.jpg',
      lifespan: '12–18 anos',
      weight: '2,5–5 kg',
      temperament: 'Inteligente, ativo e independente',
      summary:
        'Originário da região de Ancara, o Angorá Turco é um dos gatos de pelo longo mais antigos do mundo, elegante e extremamente ágil.',
      content: `O Angorá Turco tem registros que remontam ao século XV na região de Ancara, na Turquia, onde é considerado um tesouro nacional. Foi uma das primeiras raças de pelo longo a chegar à Europa, influenciando o desenvolvimento de outras raças como o Persa.

       Sua pelagem é sedosa e de camada única, sem subpelo denso, o que exige bem menos manutenção do que outros gatos de pelo longo. Muitos indivíduos brancos apresentam heterocromia — um olho azul e outro âmbar — uma característica associada geneticamente à cor branca.

       É um gato inteligente, ativo e bastante independente, mas que forma vínculos fortes com sua família. O Zoológico de Ancara mantém até hoje um programa de preservação de exemplares brancos de olhos ímpares da raça.`,
      icon: 'pets',
      characteristics: { energy: 4, affection: 4, grooming: 3, shedding: 2, social: 4 },
      facts: [
        'É considerado um tesouro nacional na Turquia',
        'Muitos exemplares brancos têm heterocromia — olhos de cores diferentes',
        'Ajudou a originar outras raças de pelo longo, como o Persa',
        'Apesar do pelo longo, exige pouca escovação por não ter subpelo denso',
      ],
    },
    {
      id: 'birmanes',
      name: 'Birmanês',
      origin: 'Mianmar (Birmânia)',
      image: 'images/breeds/birmanês.jpg',
      lifespan: '12–16 anos',
      weight: '4–6 kg',
      temperament: 'Doce, calmo e sociável',
      summary:
        'Conhecido como o "Gato Sagrado da Birmânia", tem pelagem sedosa, olhos azuis intensos e "luvas" brancas nas patas.',
      content: `A lenda de origem do Birmanês conta que a raça descende de gatos-templo que guardavam uma estátua dourada de uma deusa na antiga Birmânia (atual Mianmar). Embora a origem exata seja incerta, a raça foi padronizada e desenvolvida na França no início do século XX.

       Sua característica mais marcante são as "luvas" brancas nas quatro patas, contrastando com o corpo em tons claros e as extremidades mais escuras, além dos olhos azul-safira intensos que mantém por toda a vida.

       Diferente do Persa, o Birmanês tem pelagem semi-longa com pouco subpelo, o que reduz bastante a formação de nós. É um gato doce, calmo e muito apegado à família, adaptando-se bem à vida em apartamento.`,
      icon: 'pets',
      characteristics: { energy: 2, affection: 5, grooming: 3, shedding: 3, social: 4 },
      facts: [
        'É chamado de "Gato Sagrado da Birmânia"',
        'Todas as patas têm "luvas" brancas simétricas',
        'Mantém os olhos azuis por toda a vida',
        'Foi quase extinto após a Segunda Guerra Mundial, restando poucos exemplares na Europa',
      ],
    },
    {
      id: 'british-shorthair',
      name: 'British Shorthair',
      origin: 'Reino Unido',
      image: 'images/breeds/british_shorthair.jpg',
      lifespan: '12–20 anos',
      weight: '4–8 kg',
      temperament: 'Calmo, independente e afetuoso',
      summary:
        'Com corpo robusto e rosto redondo, é uma das raças inglesas mais antigas, famosa pelo temperamento tranquilo e pelagem densa.',
      content: `O British Shorthair descende dos gatos domésticos comuns levados à Grã-Bretanha pelos romanos há quase dois mil anos, sendo uma das raças naturais mais antigas da Europa. Foi formalmente reconhecido como raça no final do século XIX.

       Seu rosto redondo, bochechas cheias e olhos grandes e arredondados serviram de inspiração para ilustrações clássicas, como o sorridente Gato de Cheshire de Alice no País das Maravilhas. A variação azul-acinzentada, chamada "British Blue", é a mais conhecida.

       É um gato independente e de baixa manutenção, confortável tanto sozinho quanto acompanhado, o que o torna ideal para tutores com rotina mais corrida. Apesar de reservado no início, desenvolve forte afeto pela família ao longo do tempo.`,
      icon: 'pets',
      characteristics: { energy: 2, affection: 4, grooming: 2, shedding: 3, social: 3 },
      facts: [
        'Descende de gatos trazidos pelos romanos há quase 2.000 anos',
        'Inspirou o Gato de Cheshire de Alice no País das Maravilhas',
        'A variação "British Blue" é a mais famosa da raça',
        'É extremamente independente e tolera bem ficar sozinho',
      ],
    },
    {
      id: 'munchkin',
      name: 'Munchkin',
      origin: 'EUA',
      lifespan: '12–15 anos',
      image: 'images/breeds/munchkin.jpg',
      weight: '2,5–4 kg',
      temperament: 'Brincalhão, sociável e curioso',
      summary:
        'Reconhecido pelas pernas curtas resultado de uma mutação natural, o Munchkin é ágil, brincalhão e não deixa a estatura atrapalhar a energia.',
      content: `A mutação genética que encurta as pernas do Munchkin foi documentada pela primeira vez na França nos anos 1940, mas a raça só foi estabelecida e registrada nos Estados Unidos nos anos 1990, sendo reconhecida pela TICA em 1995 em meio a debates sobre bem-estar animal.

       Apesar das pernas curtas, o Munchkin não tem a mobilidade comprometida — consegue correr, saltar e brincar praticamente como qualquer outro gato, embora não alcance alturas tão elevadas. É comum vê-lo sentado ereto sobre as patas traseiras, como um esquilo, para observar o ambiente.

       É extremamente sociável, brincalhão e curioso, adaptando-se bem a outros animais e crianças. Como em qualquer raça com mutação estrutural, recomenda-se acompanhamento veterinário da coluna e articulações ao longo da vida.`,
      icon: 'pets',
      characteristics: { energy: 4, affection: 4, grooming: 2, shedding: 2, social: 4 },
      facts: [
        'A mutação das pernas curtas foi documentada pela primeira vez na França, nos anos 1940',
        'Costuma sentar-se ereto sobre as patas traseiras, como um esquilo',
        'É apelidado de "gato salsicha" por causa do formato do corpo',
        'Seu reconhecimento como raça gerou debate sobre bem-estar animal',
      ],
    },
    {
      id: 'norueges-da-floresta',
      name: 'Norueguês da Floresta',
      origin: 'Noruega',
      lifespan: '14–16 anos',
      image: 'images/breeds/norueguêsdafloresta.jpg',
      weight: '4,5–9 kg',
      temperament: 'Independente, gentil e resistente',
      summary:
        'Adaptado aos invernos escandinavos, o Norueguês da Floresta tem pelagem dupla e impermeável e é um excelente escalador.',
      content: `Considerado uma raça natural, o Norueguês da Floresta é mencionado até em contos da mitologia nórdica, associado aos gatos que puxavam a carruagem da deusa Freyja. Sua pelagem dupla e resistente à água é uma adaptação direta aos rigorosos invernos escandinavos.

       Suas patas grandes e garras fortes fazem dele um dos melhores escaladores entre os gatos domésticos, capaz de descer árvores de cabeça para baixo, como um esquilo. A raça quase desapareceu durante a Segunda Guerra Mundial, sendo preservada graças a um clube de criadores fundado na Noruega.

       É um gato independente, mas gentil e afetuoso com a família, tolerando bem o frio e ambientes externos. Hoje é considerado o gato nacional da Noruega.`,
      icon: 'pets',
      characteristics: { energy: 3, affection: 4, grooming: 4, shedding: 4, social: 3 },
      facts: [
        'É mencionado em contos da mitologia nórdica',
        'Consegue descer árvores de cabeça para baixo',
        'Quase foi extinto durante a Segunda Guerra Mundial',
        'É considerado o gato nacional da Noruega',
      ],
    },
    {
      id: 'russo-azul',
      name: 'Russo Azul',
      origin: 'Rússia',
      lifespan: '15–20 anos',
      image: 'images/breeds/russoazul.jpg',
      weight: '3–5,5 kg',
      temperament: 'Reservado, leal e gentil',
      summary:
        'Com pelagem cinza-azulada brilhante e um "sorriso" natural, o Russo Azul é reservado com estranhos mas extremamente leal à família.',
      content: `O Russo Azul teria se originado no porto de Arkhangelsk, no norte da Rússia, sendo levado à Europa por marinheiros no século XIX. Também é conhecido pelos nomes "Azul de Arkhangelsk" e "Gato Azul da Rússia".

       Sua pelagem curta e densa em dupla camada tem um tom cinza-azulado com pontas prateadas, criando um brilho característico sob a luz. A estrutura da boca dá a impressão de um sorriso permanente, outra marca registrada da raça.

       É um gato reservado e cauteloso com estranhos, mas desenvolve laços profundos e leais com sua família, seguindo o tutor pela casa. É popularmente associado a pessoas alérgicas, embora não existam comprovações científicas definitivas sobre menor produção da proteína alergênica Fel d1.`,
      icon: 'pets',
      characteristics: { energy: 3, affection: 4, grooming: 2, shedding: 2, social: 2 },
      facts: [
        'Tem um "sorriso" natural por causa do formato da boca',
        'É popularmente (mas sem comprovação científica) associado a menos alergias',
        'Foi levado à Europa por marinheiros no século XIX',
        'É reservado com estranhos, mas extremamente leal à família',
      ],
    },
    {
      id: 'scottish-fold',
      name: 'Scottish Fold',
      origin: 'Reino Unido (Escócia)',
      lifespan: '11–14 anos',
      image: 'images/breeds/scottishfold.jpg',
      weight: '2,7–6 kg',
      temperament: 'Doce, adaptável e tranquilo',
      summary:
        'Famoso pelas orelhas dobradas para frente, resultado de uma mutação genética natural encontrada numa fazenda escocesa em 1961.',
      content: `A raça nasceu a partir de Susie, uma gata de fazenda encontrada na Escócia em 1961 com uma mutação natural nas orelhas, que ficam dobradas para frente em vez de eretas. A mutação afeta a cartilagem em todo o corpo, não apenas nas orelhas.

       Por causa desse efeito na cartilagem, o cruzamento entre dois Scottish Folds é desaconselhado e até proibido em alguns países, já que pode causar problemas ósseos e articulares (osteocondrodisplasia) nos filhotes. Por isso, a raça costuma ser cruzada com gatos de orelha reta.

       Seu rosto arredondado e olhos grandes dão uma expressão de coruja bastante característica. É um gato doce, tranquilo e adaptável, que costuma se dar bem com crianças e outros animais.`,
      icon: 'pets',
      characteristics: { energy: 2, affection: 4, grooming: 2, shedding: 3, social: 4 },
      facts: [
        'Toda a linhagem descende de uma única gata chamada Susie, encontrada em 1961',
        'A mutação das orelhas afeta a cartilagem em todo o corpo',
        'O cruzamento entre dois Scottish Folds é desaconselhado por questões de saúde',
        'Tem uma expressão facial frequentemente comparada à de uma coruja',
      ],
    },
    {
      id: 'somali',
      name: 'Somali',
      origin: 'Etiópia/EUA',
      lifespan: '11–16 anos',
      weight: '3,5–5,5 kg',
      image: 'images/breeds/somali.jpg',
      temperament: 'Ativo, curioso e afetuoso',
      summary:
        'Essencialmente um Abissínio de pelo longo, o Somali tem cauda felpuda e a mesma pelagem ticada e energia atlética da raça original.',
      content: `O Somali surgiu de uma mutação recessiva que ocasionalmente aparecia em ninhadas de Abissínios, resultando em filhotes de pelo mais longo. Durante décadas esses filhotes eram descartados dos programas de criação, até que criadores norte-americanos, nos anos 1960 e 1970, decidiram desenvolvê-los como raça própria.

       Mantém a mesma pelagem ticada (agouti) do Abissínio, mas com comprimento semi-longo, e uma cauda especialmente felpuda que lembra a de uma raposa — o que rendeu à raça o apelido de "gato-raposa".

       É tão ativo e ágil quanto o Abissínio, adorando escalar e explorar pontos altos da casa. Precisa de estímulo mental e físico constante, além de escovação semanal para manter a pelagem livre de nós.`,
      icon: 'pets',
      characteristics: { energy: 5, affection: 4, grooming: 3, shedding: 3, social: 4 },
      facts: [
        'É apelidado de "gato-raposa" por causa da cauda felpuda',
        'Surgiu de uma mutação recessiva em ninhadas de Abissínios',
        'Durante décadas, filhotes de pelo longo eram descartados dos criadouros',
        'Compartilha a energia e agilidade do Abissínio',
      ],
    },
    {
      id: 'van-turco',
      name: 'Van Turco',
      origin: 'Turquia',
      lifespan: '12–17 anos',
      image: 'images/breeds/vanturco.jpg',
      weight: '3,5–9 kg',
      temperament: 'Independente, enérgico e adora água',
      summary:
        'Originário da região do Lago Van, é famoso por ser um dos poucos gatos que realmente gosta de nadar.',
      content: `O Van Turco é originário da região montanhosa ao redor do Lago Van, no leste da Turquia, onde é considerado um tesouro nacional protegido. Sua pelagem semi-longa e de camada única tem propriedades repelentes à água, adaptação ao clima da região.

       A raça é famosa — e uma exceção entre os felinos — por genuinamente gostar de nadar e brincar na água, o que rendeu o apelido de "gato nadador". O padrão de coloração clássico da raça, chamado "Van", tem o corpo predominantemente branco com manchas coloridas restritas à cabeça e à cauda.

       Alguns exemplares apresentam heterocromia, com um olho azul e outro âmbar. É um gato independente e enérgico, que se apega fortemente à família, mas mantém uma postura própria e decidida.`,
      icon: 'pets',
      characteristics: { energy: 5, affection: 4, grooming: 3, shedding: 3, social: 3 },
      facts: [
        'É conhecido como o "gato nadador" por gostar genuinamente de água',
        'É considerado um tesouro nacional protegido na Turquia',
        'O padrão de cor "Van" tem manchas só na cabeça e na cauda',
        'Alguns exemplares têm heterocromia — um olho de cada cor',
      ],
    },
    {
      id: 'devon-rex',
      name: 'Devon Rex',
      origin: 'Reino Unido',
      lifespan: '9–15 anos',
      image: 'images/breeds/devonrex.jpg',
      weight: '2–4 kg',
      temperament: 'Travesso, extrovertido e afetuoso',
      summary:
        'Com orelhas enormes e pelagem ondulada, o Devon Rex tem uma aparência de duende e um comportamento quase canino.',
      content: `O Devon Rex surgiu em 1960 no condado de Devon, na Inglaterra, a partir de uma mutação genética espontânea diferente da que originou o Cornish Rex, apesar da aparência semelhante entre as duas raças.

       Sua pelagem curta e ondulada tem poucos pelos-guarda, o que pode deixar áreas com pelo mais ralo. Combinada às orelhas grandes e ao rosto de queixo marcado, dá à raça uma aparência de duende, rendendo o apelido de "gato-alien" ou "gato-duende".

       É extremamente ligado às pessoas, gostando de ficar nos ombros do tutor e participando de tudo em casa. Seu comportamento brincalhão lembra o de um cão ou de um macaco — muitos aprendem a buscar objetos e abrir portas.`,
      icon: 'pets',
      characteristics: { energy: 5, affection: 5, grooming: 2, shedding: 1, social: 5 },
      facts: [
        'É apelidado de "gato-duende" ou "gato-alien" por causa da aparência',
        'Surgiu de uma mutação diferente da que originou o Cornish Rex',
        'Gosta de ficar nos ombros do tutor',
        'Muitos aprendem truques como buscar objetos, quase como um cão',
      ],
    },
    {
      id: 'exotico-de-pelo-curto',
      name: 'Exótico de Pelo Curto',
      origin: 'EUA',
      lifespan: '12–15 anos',
      image: 'images/breeds/exoticodepelocurto.jpg',
      weight: '3,5–6,5 kg',
      temperament: 'Calmo, afetuoso e tranquilo',
      summary:
        'Conhecido como o "Persa de manutenção fácil", tem o mesmo corpo robusto e rosto achatado, mas com pelagem curta e densa.',
      content: `O Exótico de Pelo Curto foi desenvolvido nos Estados Unidos entre as décadas de 1950 e 1960, a partir do cruzamento de Persas com American Shorthairs, inicialmente para introduzir a coloração prateada. O resultado manteve o corpo robusto e o rosto achatado do Persa, mas com pelo curto.

       Por isso é apelidado de "o Persa da pessoa preguiçosa" — tem a mesma aparência fofa e volumosa, mas sem exigir a escovação diária característica da raça original. Como herda a estrutura facial braquicéfala do Persa, também pode apresentar problemas respiratórios e lacrimejamento excessivo.

       É um gato calmo, afetuoso e de baixa energia, que se contenta em observar o movimento da casa do sofá. Sua popularidade cresceu bastante após ser associado à aparência do gato de tirinha Garfield.`,
      icon: 'pets',
      characteristics: { energy: 1, affection: 5, grooming: 2, shedding: 3, social: 3 },
      facts: [
        'É chamado de "o Persa da pessoa preguiçosa"',
        'Surgiu do cruzamento entre Persas e American Shorthairs',
        'Herda os mesmos riscos respiratórios do Persa por causa do focinho achatado',
        'Ficou popular por sua semelhança com o gato Garfield',
      ],
    },
    {
      id: 'savannah',
      name: 'Savannah',
      origin: 'EUA',
      lifespan: '12–20 anos',
      weight: '5–11 kg',
      temperament: 'Enérgico, curioso e leal',
      summary:
        'Fruto do cruzamento entre gato doméstico e serval africano, o Savannah é um dos maiores gatos domésticos e tem comportamento que lembra o de um cão.',
      content: `O Savannah surgiu em 1986 nos Estados Unidos, a partir do cruzamento entre um serval africano — um felino selvagem de médio porte — e um gato doméstico. A raça foi reconhecida pela TICA como experimental em 2001 e alcançou o status de campeã em 2012.

       Savannahs são classificados por geração (F1 a F5 ou mais), indicando a proximidade genética com o serval original: exemplares F1 chegam a ter até 50% de sangue selvagem, sendo os maiores, mais caros e menos previsíveis no temperamento, enquanto gerações mais distantes (F4, F5) são menores e mais parecidas com um gato doméstico comum no comportamento.

       É um dos gatos domésticos mais altos e ágeis que existem, capaz de saltar mais de 2,5 metros de altura a partir do chão parado. Extremamente curioso e ativo, muitos aprendem a andar de guia, buscar objetos e até gostam de água — comportamentos incomuns entre felinos e que lembram bastante um cão.`,
      icon: 'pets',
      image: 'images/breeds/savannah.jpg',
      characteristics: { energy: 5, affection: 4, grooming: 1, shedding: 2, social: 4 },
      facts: [
        'Consegue saltar mais de 2,5 metros de altura a partir do chão parado',
        'Gerações F1 podem ter até 50% de sangue de serval africano',
        'A posse de gerações iniciais (F1 a F3) é restrita ou proibida em alguns países e estados dos EUA',
        'Diferente da maioria dos gatos, costuma gostar de brincar com água',
      ],
    },
    {
      id: 'khao-manee',
      name: 'Khao Manee',
      origin: 'Tailândia',
      lifespan: '10–12 anos',
      image: 'images/breeds/khaomanee.jpg',
      weight: '3–4,5 kg',
      temperament: 'Alerta, sociável e afetuoso',
      summary:
        'Com pelagem branca imaculada e olhos que costumam ser de cores diferentes, o Khao Manee é uma raça tailandesa rara considerada símbolo de sorte.',
      content: `O Khao Manee ("Pedra Branca", em tailandês) é mencionado em manuscritos tailandeses antigos, como o Tamra Maew, que remontam ao século XIV. Durante séculos foi mantido quase exclusivamente pela realeza e nobreza da Tailândia, sendo considerado um amuleto vivo de boa sorte.

       Sua característica mais marcante é a pelagem totalmente branca combinada, na maioria dos exemplares, com heterocromia — um olho azul e outro dourado ou verde. É uma raça naturalmente rara mesmo em seu país de origem, e só começou a ser exportada e criada fora da Tailândia a partir da década de 1990.

       É um gato alerta, curioso e muito ligado à família, gostando de participar ativamente do dia a dia da casa. Costuma ser bastante vocal e sociável, adaptando-se bem a outros animais e crianças.`,
      icon: 'pets',
      characteristics: { energy: 4, affection: 4, grooming: 2, shedding: 2, social: 4 },
      facts: [
        'Seu nome significa "Pedra Branca" em tailandês',
        'É tradicionalmente considerado um amuleto de boa sorte na Tailândia',
        'Muitos exemplares têm heterocromia — um olho de cada cor',
        'Já foi mantido quase exclusivamente pela realeza tailandesa',
      ],
    },
    {
      id: 'manx',
      name: 'Manx',
      origin: 'Ilha de Man (Reino Unido)',
      lifespan: '9–13 anos',
      image: 'images/breeds/manx.jpg',
      weight: '3,5–5,5 kg',
      temperament: 'Sociável, brincalhão e leal',
      summary:
        'Originário da Ilha de Man, o Manx é conhecido pela mutação que resulta em cauda ausente ou muito curta e por um andar peculiar de coelho.',
      content: `O Manx é uma raça natural originária da Ilha de Man, uma pequena ilha entre a Inglaterra e a Irlanda. A ausência de cauda é resultado de uma mutação genética espontânea que se isolou na população local ao longo de séculos, sem cruzamento com gatos de fora da ilha.

       A mutação afeta a coluna vertebral e pode variar em grau — do "rumpy" (sem cauda alguma) ao "longy" (cauda quase do tamanho normal), passando por variações intermediárias. Por afetar a coluna, o cruzamento entre dois Manx "rumpy" pode trazer complicações genéticas, por isso criadores costumam cruzá-los com exemplares de cauda mais longa.

       As patas traseiras mais compridas que as dianteiras dão ao Manx um jeito de caminhar saltitante, parecido com o de um coelho. É um gato sociável, brincalhão e muito apegado à família, adaptando-se bem a crianças e outros animais.`,
      icon: 'pets',
      characteristics: { energy: 3, affection: 4, grooming: 2, shedding: 3, social: 4 },
      facts: [
        'Pode nascer completamente sem cauda ou com cauda bem curta',
        'O grau de cauda varia entre "rumpy" (sem cauda) e "longy" (cauda quase normal)',
        'Seu andar saltitante lembra o de um coelho',
        'É uma raça natural e isolada, originária da Ilha de Man',
      ],
    },
    {
      id: 'lykoi',
      name: 'Lykoi',
      origin: 'EUA',
      lifespan: '12–15 anos',
      image: 'images/breeds/lykoi.jpg',
      weight: '2–4,5 kg',
      temperament: 'Curioso, ativo e independente',
      summary:
        'Conhecido como "gato-lobo" pela aparência selvagem e pelagem rala e irregular, o Lykoi é uma raça recente resultado de uma mutação natural.',
      content: `O Lykoi surgiu nos Estados Unidos em 2010, a partir de uma mutação genética natural encontrada em gatos de pelo curto comuns. O nome vem do grego "lykos" (lobo), referência direta à aparência que lembra um lobisomem em miniatura. A raça foi reconhecida pela TICA em 2012.

       A mutação afeta os folículos capilares, resultando em uma pelagem rala, irregular e sem subpelo em grande parte do corpo, com áreas de pele visível ao redor dos olhos, focinho e patas. Diferente do Sphynx, o Lykoi não é resultado de seleção para ausência de pelo, mas de uma mutação espontânea distinta.

       Apesar da aparência selvagem, é um gato curioso, ativo e afetuoso com a família, embora mantenha um lado independente e um forte instinto de caça. Por ter pouca proteção de pelo, é sensível a temperaturas extremas e exige cuidados especiais com a pele.`,
      icon: 'pets',
      characteristics: { energy: 4, affection: 3, grooming: 3, shedding: 1, social: 3 },
      facts: [
        'É apelidado de "gato-lobo" por causa da aparência que lembra um lobisomem',
        'Surgiu de uma mutação genética natural documentada em 2010',
        'Foi reconhecido como raça pela TICA em 2012',
        'Tem forte instinto de caça, mesmo sendo um gato de estimação',
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
