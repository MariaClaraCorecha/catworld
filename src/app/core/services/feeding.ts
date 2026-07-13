import { Injectable } from '@angular/core';

export interface Feeding {
  id: string;
  category: string;
  icon: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  tips: string[];
}

@Injectable({ providedIn: 'root' })
export class FeedingService {

  private feedings: Feeding[] = [
    {
      id: 'racao-seca',
      category: 'Alimentação',
      icon: 'restaurant',
      title: 'Ração seca',
      summary: 'A ração seca é a forma mais prática e econômica de alimentar seu gato, mas é preciso saber escolher a qualidade certa.',
      content: `A ração seca é o alimento mais utilizado pelos tutores de gatos no mundo. Sua praticidade — pode ficar no comedouro por horas sem estragar — e custo-benefício a tornam a opção mais popular. No entanto, nem toda ração seca é igual, e a escolha correta faz enorme diferença na saúde do animal.

     As rações são classificadas em quatro categorias: econômica, standard, premium e super-premium. As econômicas usam ingredientes de baixa qualidade e alto teor de cereais, exigindo que o gato coma mais para obter os nutrientes necessários. As super-premium têm proteína animal como primeiro ingrediente, menor quantidade de carboidratos e maior digestibilidade.

     Gatos são carnívoros obrigatórios — precisam de proteína animal para sobreviver. Ao escolher uma ração, o primeiro ingrediente da lista deve ser sempre uma proteína animal identificada: frango, salmão, atum. Ingredientes como "farinha de carne" sem identificação de origem são sinais de qualidade inferior.

     A quantidade diária deve seguir as recomendações do fabricante ajustadas pelo veterinário, levando em conta o peso, idade e nível de atividade do animal. Gatos castrados tendem a ganhar peso mais facilmente e podem precisar de rações com restrição calórica.`,
      image: 'images/feeding/racao-seca.jpg',
      tips: [
        'Escolha rações com proteína animal identificada como primeiro ingrediente',
        'Prefira rações super-premium ou premium',
        'Siga a quantidade recomendada pelo fabricante e veterinário',
        'Troque de ração gradualmente para evitar problemas digestivos',
        'Mantenha água fresca sempre disponível ao lado da ração seca'
      ]
    },
    {
      id: 'racao-umida',
      category: 'Alimentação',
      icon: 'soup_kitchen',
      title: 'Ração úmida e sachê',
      summary: 'A ração úmida tem alto teor de água e proteína, sendo especialmente benéfica para a saúde renal e urinária dos gatos.',
      content: `A ração úmida — patê, sachê ou lata — tem entre 70% e 80% de água em sua composição, o que a torna extremamente benéfica para gatos que bebem pouca água. Gatos têm baixo instinto de sede herdado de seus ancestrais do deserto, que obtinham a maior parte de sua hidratação através das presas. Isso os torna propensos a problemas urinários e renais quando alimentados exclusivamente com ração seca.

     A ração úmida geralmente tem maior teor de proteína animal e menor quantidade de carboidratos que a seca. Isso a torna mais próxima da dieta natural do gato e muito palatável — gatos com apetite reduzido frequentemente aceitam melhor o alimento úmido.

     A combinação de ração seca e úmida é considerada por muitos veterinários nutricionistas como a abordagem ideal: a seca oferece praticidade e ajuda na saúde dental, enquanto a úmida garante hidratação e proteína de alta qualidade.

      Uma vez aberta, a ração úmida deve ser consumida em até 30 minutos em temperatura ambiente ou armazenada na geladeira por no máximo 24 horas. Nunca deixe ração úmida no comedouro por horas — ela estraga rapidamente e pode causar problemas gastrointestinais.`,
      image: 'images/feeding/gato-sache.jpg',
      tips: [
        'Ofereça ração úmida ao menos uma vez ao dia para hidratação',
        'Combine ração seca e úmida para dieta balanceada',
        'Descarte ração úmida não consumida após 30 minutos',
        'Armazene sachês abertos na geladeira por no máximo 24 horas',
        'Aqueça levemente a ração úmida gelada antes de servir'
      ]
    },
    {
      id: 'hidratacao',
      category: 'Hidratação',
      icon: 'water_drop',
      title: 'Hidratação adequada',
      summary: 'Gatos naturalmente bebem pouca água. Garantir hidratação adequada é essencial para prevenir doenças renais e urinárias.',
      content: `A hidratação é um dos aspectos mais negligenciados na saúde dos gatos domésticos. Por serem descendentes de felinos do deserto, gatos têm um instinto de sede pouco desenvolvido e tendem a não beber água suficiente quando alimentados exclusivamente com ração seca.

     A quantidade ideal de água para um gato é de aproximadamente 50 ml por kg de peso corporal por dia. Um gato de 4 kg deve ingerir cerca de 200 ml de água diariamente — incluindo a água presente nos alimentos.

     Muitos gatos preferem água corrente à água parada. Bebedouros com fonte circulante são muito eficazes para estimular o consumo de água — o movimento atrai a atenção do gato e a água mais oxigenada tem sabor mais agradável. Além disso, gatos frequentemente preferem que o bebedouro fique distante do comedouro, pois no ambiente selvagem água próxima a presas pode estar contaminada.

      A cor da urina é um indicador simples de hidratação: amarelo claro indica boa hidratação, amarelo escuro sugere que o animal precisa beber mais. Gatos com histórico de problemas urinários ou renais devem ter hidratação monitorada de perto pelo veterinário.`,
      image: 'images/feeding/gato-bebendo-agua.jpg',
      tips: [
        'Use bebedouro com fonte circulante para estimular consumo',
        'Posicione o bebedouro longe do comedouro',
        'Troque a água pelo menos duas vezes ao dia',
        'Ofereça ração úmida para complementar a hidratação',
        'Monitore a cor da urina como indicador de hidratação'
      ]
    },
    {
      id: 'alimentos-proibidos',
      category: 'Segurança',
      icon: 'dangerous',
      title: 'Alimentos proibidos',
      summary: 'Vários alimentos comuns na dieta humana são tóxicos para gatos e podem causar desde intoxicação leve até a morte.',
      content: `Conhecer os alimentos proibidos para gatos pode salvar a vida do seu animal. Muitos tutores oferecem comida "da mesa" sem saber que alguns alimentos extremamente comuns são tóxicos para felinos.

     A cebola e o alho — em qualquer forma, crus, cozidos ou em pó — contêm compostos que destroem os glóbulos vermelhos dos gatos, causando anemia hemolítica. Mesmo pequenas quantidades acumuladas ao longo do tempo podem ser perigosas.

     O chocolate contém teobromina, que gatos não conseguem metabolizar. Causa vômitos, diarreia, tremores, convulsões e pode ser fatal. Quanto mais amargo o chocolate, mais perigoso.

     A cafeína — presente em café, chá, refrigerantes e energéticos — causa taquicardia, tremores e convulsões. As uvas e passas podem causar insuficiência renal aguda mesmo em pequenas quantidades, embora o mecanismo exato ainda não seja completamente compreendido.

     O leite e derivados são frequentemente oferecidos a gatos, mas a maioria dos adultos é intolerante à lactose e pode desenvolver diarreia e desconforto digestivo. O xilitol, adoçante presente em chicletes e alguns alimentos diet, causa queda brusca de glicose e pode ser fatal.`,
      image: 'images/feeding/cebola-alho.jpg',
      tips: [
        'Nunca ofereça cebola, alho ou derivados',
        'Chocolate é altamente tóxico — mantenha fora do alcance',
        'Evite uvas, passas e abacate',
        'Leite pode causar diarreia em gatos adultos',
        'Em caso de ingestão acidental ligue imediatamente ao veterinário'
      ]
    },
    {
      id: 'filhotes',
      category: 'Fases da vida',
      icon: 'child_care',
      title: 'Alimentação de filhotes',
      summary: 'Filhotes têm necessidades nutricionais muito diferentes dos adultos. A alimentação correta nos primeiros meses define a saúde por toda a vida.',
      content: `Os primeiros meses de vida são críticos para o desenvolvimento do gato. Até as 4 semanas, filhotes devem ser alimentados exclusivamente com leite materno ou, na ausência da mãe, com leite específico para felinos — nunca leite de vaca ou leite humano, que causam diarreia grave.

      Entre 4 e 8 semanas ocorre o desmame gradual. A introdução de alimentos sólidos deve começar com ração úmida ou ração seca amolecida em água morna, oferecida em pequenas quantidades várias vezes ao dia. A transição deve ser feita lentamente para que o sistema digestivo se adapte.

     Filhotes têm metabolismo muito acelerado e precisam de muito mais calorias por kg de peso do que adultos. Rações formuladas para filhotes têm maior concentração de proteínas, gorduras, cálcio e fósforo — essenciais para o desenvolvimento ósseo e muscular. Nunca ofereça ração de adulto para filhotes, pois não atende suas necessidades nutricionais.

     Até os 6 meses, filhotes devem comer de 3 a 4 vezes ao dia. Após essa idade, 2 refeições diárias já são suficientes. O veterinário deve acompanhar o crescimento e ajustar a dieta conforme o desenvolvimento do animal.`,
      image: 'images/feeding/gato-bebe.jpg',
      tips: [
        'Use leite específico para felinos se não houver leite materno',
        'Inicie o desmame com ração úmida entre 4 e 8 semanas',
        'Use sempre ração formulada para filhotes',
        'Ofereça de 3 a 4 refeições por dia até os 6 meses',
        'Acompanhe o crescimento com o veterinário regularmente'
      ]
    },
    {
      id: 'idosos',
      category: 'Fases da vida',
      icon: 'elderly',
      title: 'Alimentação de gatos idosos',
      summary: 'Gatos com mais de 7 anos têm necessidades nutricionais específicas. A dieta certa pode prolongar e melhorar muito a qualidade de vida.',
      content: `Gatos são considerados idosos a partir dos 7 anos e sênior a partir dos 11 anos. Com o envelhecimento, o metabolismo muda significativamente: a capacidade de absorver proteínas diminui, os rins trabalham com menor eficiência e a mobilidade pode ser reduzida por artrite e outros problemas articulares.

     Ao contrário do que se pensava, gatos idosos precisam de mais proteína de alta qualidade, não menos — pois a digestibilidade proteica diminui com a idade. Rações para idosos formuladas com proteína animal de alta qualidade ajudam a manter a massa muscular, que tende a diminuir com o envelhecimento.

     A saúde renal é uma das maiores preocupações em gatos idosos — doença renal crônica afeta mais de 30% dos gatos com mais de 10 anos. Hidratação adequada é fundamental, e muitos veterinários recomendam aumentar significativamente a proporção de ração úmida na dieta de gatos idosos.

    Suplementos como ômega-3, glucosamina e condroitina podem ajudar na saúde articular. Antioxidantes como vitamina E e C podem beneficiar a função cognitiva. Sempre consulte o veterinário antes de iniciar qualquer suplementação.`,
      image: 'images/feeding/gato-adulto.jpg',
      tips: [
        'Use ração específica para gatos idosos ou sênior',
        'Aumente a proporção de ração úmida para hidratação',
        'Monitore o peso mensalmente',
        'Faça exames de sangue semestrais para função renal',
        'Consulte o veterinário sobre suplementação adequada'
      ]
    },
  ];

  getAll(): Feeding[] {
    return this.feedings;
  }

  getById(id: string): Feeding | undefined {
    return this.feedings.find(f => f.id === id);
  }
}
