import { Injectable } from '@angular/core';

export interface Disease {
  id: string;
  category: string;
  icon: string;
  image?: string;
  title: string;
  summary: string;
  content: string;
  tips: string[];
}

@Injectable({ providedIn: 'root' })
export class DiseasesService {
  private diseases: Disease[] = [
    {
      id: 'doenca-renal-cronica',
      category: 'Doenças renais',
      icon: 'water_drop',
      title: 'Doença renal crônica',
      summary:
        'A doença renal crônica é uma das condições mais comuns em gatos idosos, reduzindo aos poucos a capacidade dos rins de filtrar toxinas do sangue.',
      content: `A doença renal crônica (DRC) afeta uma parcela muito grande de gatos idosos — estima-se que mais de 30% dos gatos com mais de 10 anos tenham algum grau da doença. Os rins perdem a capacidade de filtrar toxinas e concentrar a urina de forma gradual e irreversível, o que exige diagnóstico precoce para retardar sua progressão.

      Os sinais mais comuns incluem sede excessiva, aumento do volume de urina, perda de peso mesmo comendo normalmente, letargia, hálito com cheiro forte (urêmico) e vômitos ocasionais. Como os sintomas aparecem apenas quando uma parte significativa da função renal já foi perdida, exames de sangue e urina de rotina são essenciais para detectar a doença antes dos sinais clínicos.

      O diagnóstico e o acompanhamento são feitos através de exames de creatinina, ureia, SDMA (um marcador mais sensível e precoce) e densidade urinária. Com base nesses valores, a doença é classificada em estágios (padrão IRIS), o que orienta o tratamento e o prognóstico.

      Não existe cura para a DRC, mas o manejo correto pode prolongar significativamente a qualidade e o tempo de vida do gato. O tratamento inclui dieta renal com restrição de fósforo e proteína de alta qualidade, estímulo à hidratação, medicamentos para controlar fósforo e pressão arterial, e em casos mais avançados, fluidoterapia subcutânea regular.`,
      tips: [
        'Faça exames de sangue e urina anuais a partir dos 7 anos',
        'Observe sede e volume de urina aumentados',
        'Use ração renal específica assim que diagnosticado',
        'Estimule a hidratação com ração úmida e fontes de água',
        'Siga à risca o acompanhamento veterinário periódico',
      ],
    },
    {
      id: 'diabetes-felina',
      category: 'Doenças metabólicas',
      icon: 'monitor_weight',
      title: 'Diabetes felina',
      summary:
        'A obesidade é o principal fator de risco para diabetes em gatos. Diagnóstico precoce e dieta adequada podem até reverter o quadro.',
      content: `A diabetes mellitus felina ocorre quando o corpo do gato não produz insulina suficiente ou não consegue utilizá-la corretamente, resultando em níveis elevados de glicose no sangue. A obesidade é, de longe, o principal fator de risco — gatos acima do peso ideal têm chance muito maior de desenvolver a doença.

      Os sinais mais característicos são sede e urina em excesso, aumento do apetite acompanhado de perda de peso, fraqueza nas patas traseiras (uma postura plantígrada característica) e letargia. Esses sintomas costumam ser confundidos com o envelhecimento normal do gato, atrasando o diagnóstico.

      O diagnóstico é feito por exames de glicemia e frutosamina, que mede a média de glicose nas últimas semanas e evita erros causados pelo estresse do próprio exame, que pode elevar temporariamente a glicose de gatos saudáveis.

      O tratamento padrão envolve aplicações de insulina em horários fixos, combinadas com dieta baixa em carboidratos e alta em proteína. Diferente de cães, gatos diagnosticados precocemente e bem manejados podem entrar em remissão — quando a produção natural de insulina se normaliza e a aplicação deixa de ser necessária, sempre sob acompanhamento veterinário.`,
      tips: [
        'Mantenha o peso ideal do gato — obesidade é o maior fator de risco',
        'Fique atento a sede, urina e apetite excessivos com perda de peso',
        'Aplique insulina sempre nos mesmos horários, se prescrita',
        'Prefira dieta baixa em carboidratos e alta em proteína',
        'Monitore a glicemia conforme orientação veterinária — remissão é possível',
      ],
    },
    {
      id: 'flutd-cistite',
      category: 'Doenças urinárias',
      icon: 'warning',
      title: 'Doença do trato urinário inferior (FLUTD)',
      summary:
        'A FLUTD causa dor e dificuldade para urinar, e pode evoluir para uma obstrução — uma emergência que ameaça a vida, especialmente em machos.',
      content: `FLUTD é o termo usado para um conjunto de condições que afetam a bexiga e a uretra dos gatos, sendo a cistite idiopática felina a causa mais comum. Diferente do que se pensa, na maioria dos casos não há infecção bacteriana — o estresse é o principal gatilho, o que torna o manejo ambiental tão importante quanto o tratamento médico.

      Os sinais incluem dificuldade ou dor ao urinar, tentativas frequentes e improdutivas na caixa de areia, sangue na urina, lambedura excessiva da região genital e urinar fora da caixa — muitas vezes interpretado erroneamente como birra, quando na verdade é um pedido de socorro.

      A obstrução uretral é a forma mais grave da doença e uma emergência veterinária real, especialmente em machos castrados, cuja uretra é naturalmente mais estreita. Um gato que fica muito tempo na caixa sem conseguir urinar, ou que vocaliza de dor durante o esforço, deve ser levado ao veterinário imediatamente — a obstrução completa pode ser fatal em menos de 48 horas.

      O tratamento combina manejo do estresse ambiental (enriquecimento, rotina estável, feromônios sintéticos), aumento da ingestão de água, dieta urinária específica e, em casos de obstrução, cateterismo de urgência para desobstruir a uretra.`,
      tips: [
        'Gato que força para urinar sem sucesso é uma emergência — vá ao veterinário na hora',
        'Reduza o estresse ambiental: rotina estável e caixas de areia limpas',
        'Aumente a ingestão de água com ração úmida e fontes',
        'Use dieta urinária se recomendada pelo veterinário',
        'Obstrução é mais grave em machos castrados — fique atento',
      ],
    },
    {
      id: 'gripe-felina',
      category: 'Doenças respiratórias',
      icon: 'local_hospital',
      title: 'Complexo respiratório felino (gripe felina)',
      summary:
        'Altamente contagiosa entre gatos, a gripe felina é causada principalmente por herpesvírus e calicivírus, e é prevenível por vacina.',
      content: `O complexo respiratório felino, popularmente chamado de "gripe felina", é causado principalmente pelo herpesvírus felino tipo 1 e pelo calicivírus felino. É extremamente contagioso entre gatos, se espalhando com facilidade em ambientes com muitos animais, como abrigos e gatis.

      Os sinais incluem espirros frequentes, secreção nasal e ocular, conjuntivite, úlceras na boca (mais associadas ao calicivírus) e perda de apetite — muitas vezes porque o gato perde o olfato temporariamente e não sente mais o cheiro da comida, um estímulo essencial para que ele queira comer.

      O tratamento é majoritariamente de suporte: manter o gato hidratado e alimentado (aquecer a comida ajuda a realçar o cheiro), limpar secreções nasais e oculares regularmente, e usar nebulização para aliviar a congestão. Casos graves podem exigir antibióticos para infecções bacterianas secundárias e antivirais específicos.

      Um detalhe importante é que o herpesvírus felino permanece latente no organismo após a infecção inicial, podendo reativar em momentos de estresse ao longo da vida do gato, com sintomas mais leves. A vacina V4/V5 protege contra as formas mais graves da doença, embora não elimine totalmente o risco de infecção.`,
      tips: [
        'Mantenha a vacina V4/V5 em dia — reduz a gravidade da doença',
        'Aqueça a comida para estimular o olfato e o apetite durante a gripe',
        'Limpe secreções nasais e oculares com frequência',
        'Isole gatos doentes de outros animais durante o tratamento',
        'Fique atento a recaídas em momentos de estresse — o vírus fica latente',
      ],
    },
    {
      id: 'hipertireoidismo',
      category: 'Doenças hormonais',
      icon: 'medical_services',
      title: 'Hipertireoidismo',
      summary:
        'Comum em gatos com mais de 10 anos, o hipertireoidismo acelera o metabolismo e pode mascarar problemas renais se não for bem investigado.',
      content: `O hipertireoidismo é uma das doenças hormonais mais comuns em gatos idosos, geralmente causado por um tumor benigno na glândula tireoide que passa a produzir hormônio em excesso, acelerando o metabolismo do animal.

      Os sinais clássicos incluem perda de peso apesar do apetite aumentado, hiperatividade ou agitação incomum, frequência cardíaca elevada, pelagem em pior estado e, em alguns casos, vômitos ou diarreia. Por acelerar o metabolismo, o hipertireoidismo pode inicialmente "esconder" uma doença renal crônica coexistente, que só se manifesta claramente depois que o tratamento normaliza o metabolismo.

      O diagnóstico é feito por exame de sangue medindo o hormônio T4 total, e o acompanhamento da função renal antes e depois do tratamento é essencial exatamente por essa relação entre as duas doenças.

      Existem várias opções de tratamento: medicação oral diária (metimazol) para controlar a produção hormonal, dieta terapêutica com restrição de iodo, iodo radioativo — considerado o tratamento definitivo, pois destroi o tecido tireoidiano em excesso sem cirurgia — e, em casos selecionados, remoção cirúrgica da tireoide.`,
      tips: [
        'Suspeite de hipertireoidismo em gatos idosos que emagrecem comendo bem',
        'Faça exame de T4 total em check-ups após os 10 anos',
        'Avalie a função renal antes e depois de iniciar o tratamento',
        'Considere iodo radioativo como opção de tratamento definitivo',
        'Não interrompa a medicação sem orientação veterinária',
      ],
    },
    {
      id: 'fiv-felv',
      category: 'Doenças infecciosas',
      icon: 'dangerous',
      title: 'FIV e FeLV (imunodeficiência e leucemia felina)',
      summary:
        'FIV e FeLV são retrovírus que enfraquecem o sistema imunológico do gato, mas um diagnóstico positivo não é uma sentença — muitos gatos vivem anos com qualidade de vida.',
      content: `FIV (vírus da imunodeficiência felina) e FeLV (vírus da leucemia felina) são retrovírus que comprometem o sistema imunológico do gato, tornando-o mais vulnerável a infecções oportunistas. Embora frequentemente citados juntos, são vírus diferentes, com formas de transmissão e prognósticos distintos.

      O FIV se transmite principalmente por mordidas profundas durante brigas, sendo mais comum em machos não castrados que vivem soltos na rua. O FeLV se transmite por contato próximo e prolongado — compartilhamento de comedouros, grooming mútuo — e também de mãe para filhote durante a gestação ou amamentação, o que o torna mais contagioso em convivência doméstica próxima.

      Testar gatos resgatados ou de origem desconhecida antes de apresentá-los a outros gatos da casa é uma medida de prevenção fundamental, já que um gato pode ser portador sem apresentar sintomas por anos.

      Um diagnóstico positivo não significa sentença de morte: com bons cuidados — ambiente interno e seguro, alimentação de qualidade, vacinação e desparasitação em dia e exames veterinários semestrais para detectar problemas precocemente — muitos gatos FIV ou FeLV positivos vivem anos com boa qualidade de vida. Não existe cura, mas o manejo cuidadoso faz enorme diferença no tempo e na qualidade de vida do animal.`,
      tips: [
        'Teste gatos resgatados antes de apresentá-los a outros gatos da casa',
        'Castre gatos machos para reduzir brigas e risco de transmissão de FIV',
        'Mantenha gatos positivos exclusivamente dentro de casa',
        'Faça exames veterinários semestrais para detecção precoce de problemas',
        'Um diagnóstico positivo não impede uma vida longa e de qualidade',
      ],
    },
    {
      id: 'doenca-periodontal',
      category: 'Saúde bucal',
      icon: 'clean_hands',
      title: 'Doença periodontal',
      summary:
        'Mais de 70% dos gatos adultos têm algum grau de doença periodontal — uma fonte silenciosa de dor crônica e risco para outros órgãos.',
      content: `A doença periodontal é uma das condições mais subdiagnosticadas em gatos, afetando mais de 70% dos animais com mais de 3 anos. Começa com o acúmulo de placa bacteriana, que se calcifica em tártaro e inflama as gengivas (gengivite), podendo evoluir para perda óssea e dos dentes se não tratada.

      Gatos raramente demonstram dor de forma óbvia, então os sinais costumam ser sutis: mau hálito persistente, dificuldade ou relutância em mastigar alimentos duros, babar mais que o normal, e gengivas vermelhas ou sangrando ao toque. Uma condição específica dos felinos, a lesão reabsortiva dental, também é comum e extremamente dolorosa, mesmo sem sinais visíveis de tártaro.

      Além do desconforto local, bactérias da boca inflamada podem entrar na corrente sanguínea e afetar órgãos distantes, como coração, rins e fígado — tornando a saúde bucal parte importante da saúde geral do gato, não apenas um detalhe estético.

      A prevenção envolve escovação dentária regular com pasta própria para gatos, alimentos e petiscos formulados para reduzir o acúmulo de tártaro, e limpezas dentárias profissionais periódicas feitas pelo veterinário sob anestesia, que permitem avaliar e tratar problemas abaixo da linha da gengiva, invisíveis a olho nu.`,
      tips: [
        'Escove os dentes do gato regularmente com pasta específica felina',
        'Observe mau hálito, dificuldade para mastigar e babar excessivo',
        'Ofereça petiscos e rações formuladas para reduzir tártaro',
        'Faça limpezas dentárias profissionais periódicas com o veterinário',
        'Não ignore sinais bucais — afetam também coração, rins e fígado',
      ],
    },
  ];

  getAll(): Disease[] {
    return this.diseases;
  }

  getById(id: string): Disease | undefined {
    return this.diseases.find((d) => d.id === id);
  }
}
