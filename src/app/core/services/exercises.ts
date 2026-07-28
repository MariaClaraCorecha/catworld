import { Injectable } from '@angular/core';

export interface Exercise {
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
export class ExercisesService {
  private exercises: Exercise[] = [
    {
      id: 'brincadeiras-diarias',
      category: 'Rotina',
      icon: 'sports_esports',
      image: 'images/exercises/brincadeiras_gatos.jpg',
      title: 'Brincadeiras diárias',
      summary:
        'Sessões curtas de brincadeira todos os dias imitam o ciclo de caça natural do gato e são essenciais para o bem-estar físico e mental.',
      content: `Na natureza, o gato gasta boa parte do dia caçando — perseguindo, espreitando e atacando presas. Gatos domésticos mantêm exatamente esse mesmo instinto, mesmo sem precisar caçar para comer, e sem uma saída para ele tendem a desenvolver tédio, ansiedade e comportamentos destrutivos.

     O ideal são duas a três sessões de 10 a 15 minutos por dia, preferencialmente perto do início da manhã e do fim da tarde, quando o gato é naturalmente mais ativo. Varas com penas, ratinhos de brinquedo e bolinhas que imitam o movimento de uma presa funcionam melhor do que brinquedos parados.

     É importante deixar o gato "vencer a caça" periodicamente — permitir que ele capture o brinquedo de tempos em tempos. Brincar sem esse desfecho pode gerar frustração, já que o ciclo natural de caça, captura e satisfação fica incompleto.

     Gatos filhotes e jovens precisam de mais sessões e por mais tempo, enquanto gatos idosos se beneficiam de brincadeiras mais curtas e de menor impacto, respeitando as articulações.`,
      tips: [
        'Reserve 2 a 3 sessões curtas de brincadeira por dia',
        'Use brinquedos que imitam o movimento de presas reais',
        'Deixe o gato capturar o brinquedo ao final da brincadeira',
        'Brinque nos horários de maior atividade: manhã e final de tarde',
        'Adapte a intensidade à idade e à condição física do gato',
      ],
    },
    {
      id: 'arranhadores',
      category: 'Ambiente',
      icon: 'texture',
      image: 'images/exercises/arranhadores_gatos.jpg',
      title: 'Arranhadores e escalada',
      summary:
        'Arranhar e escalar são comportamentos naturais que ajudam o gato a se exercitar, marcar território e manter as unhas saudáveis.',
      content: `Arranhar não é birra nem falta de educação — é uma necessidade fisiológica e comportamental do gato. O ato remove a camada externa desgastada das unhas, alonga a musculatura das patas e do dorso e deixa marcas de cheiro através de glândulas presentes nas patas, uma forma importante de comunicação territorial.

     Sem um arranhador adequado, o gato vai procurar a superfície disponível mais parecida — geralmente sofás, tapetes ou batentes de porta. Por isso, oferecer opções atrativas é mais eficaz do que tentar impedir o comportamento.

     Arranhadores verticais devem ter pelo menos a altura do gato totalmente esticado, permitindo o alongamento completo do corpo. Já os horizontais agradam gatos que preferem arranhar deitados. O material também importa: sisal, papelão corrugado e madeira crua costumam ser mais atrativos que carpete.

     Árvores para gatos com múltiplos níveis combinam arranhador, esconderijo e plataforma de observação em altura — um ambiente rico que estimula escalada, salto e exploração vertical, todos exercícios naturais para a espécie.`,
      tips: [
        'Ofereça arranhadores verticais com altura suficiente para o gato se esticar todo',
        'Posicione arranhadores perto de onde o gato dorme ou passa mais tempo',
        'Teste diferentes materiais: sisal, papelão e madeira',
        'Invista em uma árvore para gatos com múltiplos níveis, se houver espaço',
        'Nunca puna o gato por arranhar — redirecione para o local certo',
      ],
    },
    {
      id: 'brinquedos-interativos',
      category: 'Estímulo mental',
      icon: 'toys',
      image: 'images/exercises/binquedos_gatos.jpg',
      title: 'Brinquedos interativos e enriquecimento',
      summary:
        'Comedouros-quebra-cabeça e brinquedos automáticos mantêm o gato ativo fisicamente e mentalmente estimulado, mesmo quando o tutor não está por perto.',
      content: `O enriquecimento ambiental vai além da brincadeira supervisionada — envolve criar um ambiente que desafie o gato a pensar e se movimentar mesmo sozinho. Comedouros do tipo quebra-cabeça, por exemplo, exigem que o gato manipule o objeto para liberar a comida, transformando a refeição em um exercício mental e físico.

     Essa abordagem é especialmente útil para gatos que comem rápido demais ou que passam longas horas sozinhos em casa. Além de gastar energia, o esforço mental envolvido reduz o tédio e comportamentos indesejados associados a ele, como miados excessivos e destruição de objetos.

     Brinquedos automáticos, como bolinhas que se movem sozinhas ou lasers com temporizador, podem complementar a rotina, mas nunca devem substituir completamente a interação com o tutor. É importante ainda garantir que toda brincadeira com laser termine com um brinquedo físico que o gato possa realmente capturar, evitando frustração.

     Rotativas de brinquedos — guardar parte deles e trocar periodicamente os que ficam disponíveis — também ajudam a manter o interesse do gato, já que a novidade é um forte estímulo para a espécie.`,
      tips: [
        'Use comedouros-quebra-cabeça para tornar a refeição mais estimulante',
        'Alterne os brinquedos disponíveis a cada uma ou duas semanas',
        'Finalize brincadeiras com laser oferecendo um brinquedo físico para capturar',
        'Combine brinquedos automáticos com momentos de brincadeira supervisionada',
        'Observe o gato para identificar quais tipos de brinquedo ele prefere',
      ],
    },
    {
      id: 'sedentarismo-obesidade',
      category: 'Saúde',
      icon: 'monitor_weight',
      image: 'images/exercises/gato_gordo_sendetarismo.jpg',
      title: 'Sedentarismo e obesidade',
      summary:
        'Gatos de apartamento têm alto risco de sedentarismo. A falta de exercício é uma das principais causas de obesidade e diabetes felina.',
      content: `A obesidade é uma das condições de saúde mais comuns em gatos domésticos, especialmente naqueles que vivem exclusivamente em apartamentos, sem acesso a área externa. Estima-se que mais de 50% dos gatos castrados estejam acima do peso ideal, o que aumenta significativamente o risco de diabetes tipo 2, problemas articulares e doenças cardíacas.

     Diferente dos cães, muitos gatos não compensam a falta de exercício por conta própria — sem estímulo, preferem dormir a maior parte do dia. Cabe ao tutor criar oportunidades de movimento ao longo da rotina, e não apenas depender de brincadeiras pontuais.

     Pequenas mudanças no ambiente fazem grande diferença: posicionar o comedouro em um cômodo diferente do bebedouro obriga o gato a caminhar entre eles; usar comedouros elevados ou quebra-cabeças aumenta o gasto calórico da refeição; e prateleiras ou nichos na parede incentivam saltos e escalada ao longo do dia.

     Monitorar o peso regularmente, idealmente na mesma balança e no mesmo horário, ajuda a identificar ganho de peso precocemente. Qualquer mudança na rotina alimentar ou de exercício de um gato obeso deve ser acompanhada por um médico-veterinário, já que a perda de peso rápida demais pode ser perigosa para felinos.`,
      tips: [
        'Separe fisicamente o comedouro do bebedouro para incentivar caminhada',
        'Use comedouros elevados ou quebra-cabeças para retardar a refeição',
        'Instale prateleiras ou nichos que incentivem saltos e escalada',
        'Pese o gato regularmente para acompanhar variações',
        'Nunca inicie uma dieta de emagrecimento sem orientação veterinária',
      ],
    },
    {
      id: 'exercicio-gatos-idosos',
      category: 'Fases da vida',
      icon: 'elderly',
      image: 'images/exercises/gato_idoso.jpg',
      title: 'Exercício para gatos idosos',
      summary:
        'Gatos idosos continuam precisando de estímulo físico, mas em intensidade e formato adaptados às limitações da idade.',
      content: `Assim como acontece com humanos, o envelhecimento reduz a disposição física do gato, mas não elimina a necessidade de movimento. Pelo contrário: a atividade regular ajuda a manter a massa muscular, a mobilidade articular e até a função cognitiva em gatos sênior.

     Artrite é extremamente comum em gatos com mais de 10 anos, mas costuma passar despercebida porque o gato raramente manca de forma óbvia — os sinais são mais sutis, como relutância em saltar para lugares altos ou usar menos a caixa de areia com bordas altas. Adaptar o ambiente, com rampas e caixas de areia de entrada baixa, ajuda a manter o gato ativo com conforto.

     As brincadeiras para gatos idosos devem ser mais curtas e de menor impacto: mover um brinquedo lentamente pelo chão em vez de fazê-lo saltar, por exemplo. O objetivo é manter o interesse e o movimento suave, sem forçar saltos ou corridas intensas.

     Consultas veterinárias regulares são importantes para avaliar a mobilidade e identificar dor articular precocemente, já que gatos escondem sinais de dor por instinto de sobrevivência.`,
      tips: [
        'Ofereça rampas ou degraus para lugares altos que o gato já frequentava',
        'Prefira brincadeiras curtas e de baixo impacto',
        'Use caixas de areia com entrada baixa para facilitar o acesso',
        'Observe sinais sutis de dor, como relutância em saltar',
        'Faça check-ups veterinários regulares para avaliar a mobilidade',
      ],
    },
    {
      id: 'gatos-externos-seguranca',
      category: 'Ambiente',
      icon: 'park',
      image: 'images/exercises/gato_natureza.jpg',
      title: 'Acesso seguro ao ambiente externo',
      summary:
        'Solários (catios) e passeios guiados permitem que o gato exercite o corpo e os sentidos ao ar livre com segurança.',
      content: `O ambiente externo oferece estímulos que nenhum brinquedo consegue replicar completamente: cheiros, texturas, sons e a possibilidade de observar pássaros e insetos. Mas o acesso livre à rua expõe o gato a riscos sérios, como atropelamentos, brigas, doenças e envenenamento.

     Os catios — solários telados instalados em janelas, varandas ou quintais — são uma solução cada vez mais popular para conciliar segurança e enriquecimento. Eles permitem que o gato tome sol, sinta o vento e observe o ambiente externo sem risco de fuga ou acidentes.

     Passeios guiados com peitoral e guia também são possíveis para gatos habituados desde filhotes, embora exijam paciência: diferente dos cães, gatos precisam de um período de adaptação ao equipamento em ambiente seguro antes de sair de casa.

     Independentemente do método escolhido, qualquer exposição ao ambiente externo deve vir acompanhada de vacinação em dia e proteção contra parasitas, já que o contato com outros animais aumenta a exposição a doenças.`,
      tips: [
        'Considere instalar um catio para acesso seguro ao ar livre',
        'Habitue o gato ao peitoral dentro de casa antes de tentar passeios externos',
        'Mantenha vacinação e vermifugação em dia antes de qualquer exposição externa',
        'Nunca deixe o gato solto sem supervisão em área externa',
        'Ofereça vasos de grama para gatos ou plantas próprias como alternativa segura',
      ],
    },
  ];

  getAll(): Exercise[] {
    return this.exercises;
  }

  getById(id: string): Exercise | undefined {
    return this.exercises.find((e) => e.id === id);
  }
}
