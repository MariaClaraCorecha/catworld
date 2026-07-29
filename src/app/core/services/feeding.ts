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

     A quantidade diária deve seguir as recomendações do fabricante ajustadas pelo veterinário, levando em conta o peso, idade e nível de atividade do animal. Gatos castrados tendem a ganhar peso mais facilmente e podem precisar de rações com restrição calórica.

     Entender o rótulo ajuda a comparar rações com mais segurança. A tabela de níveis garantidos indica os percentuais mínimos de proteína bruta e gordura e os máximos de fibra e umidade — quanto maior o percentual mínimo de proteína e menor o de fibra, geralmente melhor a qualidade. "Farinha de vísceras" ou "subprodutos" sem espécie identificada, corantes artificiais e conservantes como BHA/BHT são sinais de receita inferior.

     O debate sobre ração "grain-free" (sem grãos) é mais complexo do que parece: a ausência de grãos não torna a ração automaticamente melhor — o que importa é a qualidade e a origem dos ingredientes, não apenas a exclusão de um grupo específico. Gatos digerem cereais bem processados sem problema; o alerta vale para rações que substituem grãos por excesso de amidos de leguminosas de baixa qualidade nutricional.

     A troca de ração deve ser feita ao longo de 7 a 10 dias, misturando gradualmente mais ração nova e menos da antiga a cada dia, para evitar vômitos e diarreia por adaptação digestiva brusca. Depois de aberto, o pacote deve ser bem fechado, guardado em local fresco e seco, longe de luz e calor, e consumido em até 4 a 6 semanas — a gordura da ração oxida com o tempo e perde palatabilidade e qualidade nutricional.

     Deixar ração seca disponível o dia todo (alimentação livre) facilita o ganho de peso, já que é um alimento calórico e concentrado. Prefira porções medidas em horários fixos, e considere comedouros lentos ou brinquedos de busca alimentar para gatos que comem rápido demais ou precisam de estímulo mental durante a refeição.`,
      image: 'images/feeding/racao-seca.jpg',
      tips: [
        'Escolha rações com proteína animal identificada como primeiro ingrediente',
        'Prefira rações super-premium ou premium',
        'Siga a quantidade recomendada pelo fabricante e veterinário',
        'Troque de ração gradualmente, ao longo de 7 a 10 dias',
        'Guarde a ração bem fechada e consuma em até 4 a 6 semanas após abrir',
        'Prefira porções medidas em horários fixos em vez de alimentação livre',
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

     O leite e derivados são frequentemente oferecidos a gatos, mas a maioria dos adultos é intolerante à lactose e pode desenvolver diarreia e desconforto digestivo. O xilitol, adoçante presente em chicletes e alguns alimentos diet, causa queda brusca de glicose e pode ser fatal.

     Ossos cozidos de frango, peixe ou outras carnes racham em lascas afiadas e podem perfurar o esôfago, o estômago ou o intestino do gato, além de representar risco de engasgo. Massa de pão crua contendo fermento é outro perigo pouco conhecido: no calor e umidade do estômago, o fermento continua a crescer e libera álcool durante a fermentação, podendo causar distensão abdominal grave e intoxicação alcoólica.

     Bebidas alcoólicas de qualquer tipo são extremamente tóxicas para gatos mesmo em quantidades mínimas, podendo causar depressão do sistema nervoso central, parada respiratória e morte — o pequeno porte do animal faz com que a dose tóxica seja muito menor que a de um cão ou humano. Atum enlatado para consumo humano, embora não seja tóxico, não deve ser oferecido com frequência: tem excesso de sódio, desequilíbrio nutricional para a dieta felina e pode conter níveis de mercúrio preocupantes com o consumo repetido.

     Sempre desconfie de pratos temperados, mesmo que pareçam inofensivos — molhos, caldos e temperos prontos frequentemente contêm cebola ou alho em pó escondidos na composição. Na dúvida sobre um alimento, a regra mais segura é simplesmente não oferecer.`,
      image: 'images/feeding/cebola-alho.jpg',
      tips: [
        'Nunca ofereça cebola, alho ou derivados',
        'Chocolate é altamente tóxico — mantenha fora do alcance',
        'Evite uvas, passas e abacate',
        'Leite pode causar diarreia em gatos adultos',
        'Nunca dê ossos cozidos nem massa de pão crua com fermento',
        'Bebida alcoólica é fatal para gatos mesmo em quantidade mínima',
        'Desconfie de temperos e molhos prontos — podem conter cebola/alho em pó',
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
