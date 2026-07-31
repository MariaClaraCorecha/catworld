import { Injectable } from '@angular/core';

export type QuizCategory =
  | 'racas'
  | 'historia'
  | 'cuidados'
  | 'alimentacao'
  | 'exercicios'
  | 'doencas'
  | 'curiosidades';

export interface QuizQuestion {
  id: string;
  category: QuizCategory;
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

export const QUIZ_STORAGE_KEY = 'catworld_quiz_answers';

const CATEGORY_INFO: Record<QuizCategory, { label: string; icon: string }> = {
  racas: { label: 'Raças', icon: 'pets' },
  historia: { label: 'História', icon: 'history_edu' },
  cuidados: { label: 'Cuidados', icon: 'medical_services' },
  alimentacao: { label: 'Alimentação', icon: 'restaurant' },
  exercicios: { label: 'Exercícios', icon: 'directions_run' },
  doencas: { label: 'Doenças', icon: 'local_hospital' },
  curiosidades: { label: 'Curiosidades', icon: 'auto_awesome' },
};

@Injectable({ providedIn: 'root' })
export class QuizService {
  private questions: QuizQuestion[] = [
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
      id: 'sphynx',
      category: 'racas',
      question: 'Qual raça de gato é conhecida por não ter pelos?',
      options: ['Persa', 'Sphynx', 'Maine Coon', 'Siamês'],
      correctIndex: 1,
      explanation:
        'O Sphynx é uma raça caracterizada pela ausência de pelagem, exigindo cuidados especiais com a pele.',
    },
    {
      id: 'manx',
      category: 'racas',
      question: 'Qual raça de gato é conhecida por nascer sem cauda ou com cauda bem curta?',
      options: ['Manx', 'Bengal', 'Ragdoll', 'Angorá'],
      correctIndex: 0,
      explanation:
        'A raça Manx apresenta uma mutação genética que resulta em cauda ausente ou muito curta.',
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
      options: [
        'Orelhas dobradas para frente',
        'Ausência total de pelos',
        'Pernas muito curtas',
        'Cauda extremamente longa',
      ],
      correctIndex: 0,
      explanation:
        'O Scottish Fold é conhecido por suas orelhas dobradas, resultado de uma mutação genética identificada pela primeira vez em uma gata chamada Susie, na Escócia, em 1961.',
    },
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
      options: [
        'Não traz benefício algum',
        'Reduz a formação de bolas de pelo',
        'Faz o gato engordar',
        'Estimula o crescimento de pulgas',
      ],
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
      options: [
        'Somente na fase adulta',
        'Entre 6 e 8 semanas de vida',
        'Apenas após 1 ano de idade',
        'Não existe vacina específica para gatos',
      ],
      correctIndex: 1,
      explanation:
        'O esquema vacinal V4/V5 costuma começar entre 6 e 8 semanas de vida, com reforços até cerca de 14 a 16 semanas.',
    },
    {
      id: 'brincadeiras',
      category: 'exercicios',
      question: 'Por que é importante estimular o gato com brincadeiras diárias?',
      options: [
        'Apenas para gastar energia do tutor',
        'Promove saúde física e mental do gato',
        'Não tem efeito real no gato',
        'Serve só para gatos filhotes',
      ],
      correctIndex: 1,
      explanation:
        'Brincadeiras estimulam o instinto de caça, previnem obesidade e ajudam no bem-estar mental do gato, mesmo na fase adulta.',
    },
    {
      id: 'brinquedo-caca',
      category: 'exercicios',
      question: 'Qual tipo de brinquedo estimula melhor o instinto de caça do gato?',
      options: [
        'Bola de futebol grande',
        'Varinha com pena ou ponteiro de luz',
        'Almofada macia',
        'Sino sozinho, parado no chão',
      ],
      correctIndex: 1,
      explanation:
        'Brinquedos que simulam movimento de presas, como varinhas com penas ou ponteiros de luz, despertam o instinto natural de caça.',
    },
    {
      id: 'arranhador-altura',
      category: 'exercicios',
      question: 'Qual deve ser a altura mínima recomendada para um arranhador vertical?',
      options: [
        'Não importa a altura',
        'A altura do gato totalmente esticado',
        'Metade da altura do gato',
        'Apenas 10 cm de altura',
      ],
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
      options: [
        'Perda total de apetite',
        'Relutância em pular ou saltar',
        'Aumento da agilidade',
        'Nenhum sintoma visível',
      ],
      correctIndex: 1,
      explanation:
        'A artrose é comum em gatos acima de 10 anos, mas raramente causa manqueira óbvia — o sinal mais comum é a relutância em pular ou saltar.',
    },
    {
      id: 'flutd',
      category: 'doencas',
      question: 'A sigla FLUTD está relacionada a problemas em qual sistema do gato?',
      options: ['Sistema urinário', 'Sistema respiratório', 'Sistema nervoso', 'Sistema digestivo'],
      correctIndex: 0,
      explanation:
        'FLUTD (Doença do Trato Urinário Inferior Felino) é um conjunto de problemas comuns no sistema urinário dos gatos.',
    },
    {
      id: 'checkup-veterinario',
      category: 'doencas',
      question: 'Com que frequência um gato saudável deve visitar o veterinário?',
      options: [
        'Nunca, se ele parece saudável',
        'Pelo menos uma vez ao ano',
        'Somente em emergências',
        'A cada 5 anos',
      ],
      correctIndex: 1,
      explanation:
        'Check-ups anuais ajudam a identificar problemas de saúde precocemente, mesmo quando o gato aparenta estar bem.',
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
  ];

  getAll(): QuizQuestion[] {
    return this.questions;
  }

  getBadges(answers: Record<string, number | null | undefined>): QuizBadge[] {
    const answered = this.questions.filter((q) => answers[q.id] != null);
    if (!answered.length) return [];

    const badges: QuizBadge[] = [];

    const correctCount = answered.filter((q) => answers[q.id] === q.correctIndex).length;
    const overallRatio = correctCount / answered.length;

    if (overallRatio === 1) {
      badges.push({ id: 'especialista-felino', label: 'Especialista Felino', icon: 'workspace_premium' });
    } else if (overallRatio >= 0.6) {
      badges.push({ id: 'amante-gatos', label: 'Amante de Gatos', icon: 'favorite' });
    } else {
      badges.push({ id: 'aprendiz-felino', label: 'Aprendiz Felino', icon: 'school' });
    }

    (Object.keys(CATEGORY_INFO) as QuizCategory[]).forEach((category) => {
      const categoryQuestions = answered.filter((q) => q.category === category);
      if (!categoryQuestions.length) return;

      const categoryCorrect = categoryQuestions.filter(
        (q) => answers[q.id] === q.correctIndex,
      ).length;
      const categoryRatio = categoryCorrect / categoryQuestions.length;

      if (categoryRatio >= 0.9) {
        const { label, icon } = CATEGORY_INFO[category];
        badges.push({
          id: `especialista-${category}`,
          label: `Especialista em ${label}`,
          icon,
        });
      }
    });

    return badges;
  }
}
