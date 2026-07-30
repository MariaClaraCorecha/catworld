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

      if (categoryCorrect === categoryQuestions.length) {
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
