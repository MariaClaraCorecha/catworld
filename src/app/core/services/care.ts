import { Injectable } from '@angular/core';

export interface Care {
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
export class CareService {

  private cares: Care[] = [
    {
      id: 'higiene',
      category: 'Higiene',
      icon: 'clean_hands',
      title: 'Higiene e limpeza',
      summary: 'Manter a higiene do seu gato é essencial para sua saúde e bem-estar. Escovação, banho e limpeza de ouvidos fazem parte da rotina.',
      content: `A higiene do gato começa pela escovação regular da pelagem. Gatos de pelo longo como o Persa precisam ser escovados diariamente para evitar nós e bolos de pelo. Já os de pelo curto podem ser escovados uma ou duas vezes por semana.

     O banho em gatos não é necessário com frequência — a maioria se limpa sozinha eficientemente. No entanto, algumas situações exigem banho: gatos que se sujaram muito, raças sem pelo como o Sphynx que acumula oleosidade na pele, ou gatos idosos que perdem a capacidade de se auto-limpar.


     A limpeza dos ouvidos deve ser feita mensalmente com cotonete e solução específica para gatos. Ouvidos sujos ou com odor forte podem indicar infecção por ácaros. As unhas devem ser aparadas a cada 2 a 3 semanas para evitar que se curvem e machuquem a pata do animal.

     A limpeza dos dentes é frequentemente negligenciada mas extremamente importante. Doenças gengivais afetam mais de 70% dos gatos com mais de 3 anos. O ideal é escovar os dentes do gato diariamente com escova e pasta específica para felinos.`,
      image: 'images/care/gato-banho.jpg',
      tips: [
        'Escove pelos longos diariamente e curtos 2x por semana',
        'Limpe os ouvidos mensalmente com solução própria',
        'Apare as unhas a cada 2 a 3 semanas',
        'Escove os dentes diariamente para evitar tártaro',
        'Use sempre produtos específicos para gatos'
      ]
    },
    {
      id: 'saude',
      category: 'Saúde',
      icon: 'vaccines',
      title: 'Vacinas e vermifugação',
      summary: 'Manter o calendário vacinal e a vermifugação em dia é a base da saúde preventiva do seu gato.',
      content: `As vacinas são a principal ferramenta de prevenção de doenças graves em gatos. A vacina V4 ou V5 protege contra rinotraqueíte, calicivirose, panleucopenia e, em algumas versões, clamidiose — doenças respiratórias e intestinais graves. A primeira dose deve ser aplicada entre 6 e 8 semanas de vida, com reforços anuais.

      O protocolo completo normalmente segue três doses: a primeira entre 6 e 8 semanas, a segunda entre 10 e 12 semanas e a terceira entre 14 e 16 semanas, sempre com intervalo mínimo de 3 a 4 semanas entre elas. Esse escalonamento existe porque os anticorpos maternos, presentes no leite da mãe, podem neutralizar a vacina se aplicada cedo demais — por isso pular doses ou atrasar o calendário reduz a proteção do filhote.

      A vacina contra leucemia felina (FeLV) é recomendada principalmente para gatos com acesso à rua ou contato com animais de origem desconhecida, já que o vírus se transmite pela saliva, em brigas e no compartilhamento de comedouros. Gatos estritamente domésticos e sem contato com outros animais têm risco bem menor e podem dispensá-la após avaliação do veterinário.

      A vacina antirrábica é obrigatória em muitos municípios brasileiros e deve ser aplicada a partir dos 3 meses de idade, com reforço anual. Mesmo gatos que não saem de casa devem ser vacinados, pois o vírus pode ser trazido para dentro do ambiente pelo tutor.

      É normal que o gato fique um pouco apático, com febre leve ou sem apetite nas primeiras 24 a 48 horas após a vacina — é apenas o sistema imunológico respondendo. Já inchaço no local que persiste por mais de duas semanas, vômitos, dificuldade para respirar ou inchaço no rosto exigem atendimento veterinário imediato, pois podem indicar reação alérgica.

      A vermifugação deve ser feita a cada 3 meses em gatos adultos e mensalmente em filhotes até os 6 meses. Existem vermífugos em pasta, comprimido e pipeta. Converse com o veterinário sobre o produto mais adequado para o seu animal.

      O controle de pulgas e carrapatos também é essencial — esses parasitas podem transmitir doenças graves e causar anemia em filhotes. Antipulgas em pipeta ou coleira são as formas mais práticas de prevenção.`,
      image: 'images/care/vacina.jpg',
      tips: [
        'Vacine com V4 ou V5 a partir de 6 a 8 semanas, em 3 doses',
        'Respeite o intervalo de 3 a 4 semanas entre as doses do filhote',
        'Considere a vacina de leucemia felina (FeLV) se o gato tiver acesso à rua',
        'Reforce a vacina antirrábica anualmente',
        'Vermifugue a cada 3 meses em adultos',
        'Observe o gato nas 48h após a vacina e procure o vet se notar inchaço persistente'
      ]
    },
    {
      id: 'castracao',
      category: 'Saúde',
      icon: 'medical_services',
      title: 'Castração',
      summary: 'A castração é o procedimento mais importante para a saúde e qualidade de vida do seu gato, trazendo benefícios físicos e comportamentais.',
      content: `A castração é recomendada por todos os médicos veterinários e é considerada um ato de responsabilidade do tutor. No macho, elimina o comportamento de marcação de território com urina, reduz a agressividade e o instinto de fugir em busca de fêmeas — o que reduz drasticamente acidentes e brigas.

       Em fêmeas, a castração elimina o cio — período em que a gata vocaliza intensamente, fica agitada e pode tentar escapar. Mais importante, reduz em até 90% o risco de tumores mamários se realizada antes do primeiro cio, e elimina completamente o risco de piometra, infecção uterina grave e potencialmente fatal.

      A idade ideal para castração é entre 4 e 6 meses, antes da puberdade. O procedimento é cirúrgico, realizado sob anestesia geral, e o gato geralmente se recupera completamente em 7 a 10 dias.

      Antes da cirurgia, o veterinário costuma pedir exames de sangue pré-anestésicos para avaliar as funções renal e hepática do animal e garantir que ele suporte bem a anestesia. Também é necessário jejum alimentar de 8 a 12 horas antes do procedimento, conforme orientação do veterinário.

      No pós-operatório, o colar elizabetano é essencial para impedir que o gato lamba ou morda os pontos, o que poderia causar infecção ou abertura da ferida. O animal deve ficar em repouso, sem pular ou correr, por cerca de 7 a 10 dias, com a ferida observada diariamente — vermelhidão leve é normal, mas secreção, mau cheiro ou inchaço crescente exigem retorno ao veterinário. A recuperação da fêmea costuma ser um pouco mais longa que a do macho, já que a cirurgia envolve a cavidade abdominal, enquanto a castração do macho é mais simples e rápida.

      Um mito comum é que a castração engorda o gato. Na verdade, o que ocorre é uma redução do metabolismo basal — que pode ser compensada com ajuste na alimentação e estímulo à atividade física.

      Muitos municípios brasileiros oferecem campanhas de castração gratuita ou de baixo custo, incluindo unidades móveis conhecidas como castramóveis, voltadas principalmente a tutores de baixa renda e ao controle populacional de animais em situação de rua. Vale a pena consultar a prefeitura ou ONGs de proteção animal da sua cidade.`,
      image: 'images/care/dois-gatos.jpg',
      tips: [
        'Castre entre 4 e 6 meses de idade',
        'Reduz risco de tumores mamários em até 90% nas fêmeas',
        'Elimina marcação de território e comportamentos de cio',
        'Faça exames pré-anestésicos e respeite o jejum antes da cirurgia',
        'Use colar elizabetano e mantenha repouso no pós-operatório',
        'Ajuste a alimentação após a cirurgia',
        'Pesquise campanhas municipais de castração gratuita, como o castramóvel'
      ]
    },
    {
      id: 'ambiente',
      category: 'Bem-estar',
      icon: 'home',
      title: 'Ambiente e bem-estar',
      summary: 'Um ambiente enriquecido é tão importante quanto alimentação e saúde para a qualidade de vida do seu gato.',
      content: `Gatos são animais territoriais que precisam de um ambiente seguro, estimulante e previsível. A falta de enriquecimento ambiental é uma das principais causas de estresse, ansiedade e comportamentos destrutivos em gatos domésticos.

     Arranhadores são essenciais — gatos precisam arranhar para marcar território, fazer exercício e manter as unhas saudáveis. Oferecer arranhadores adequados protege seus móveis e satisfaz uma necessidade natural do animal.

     Locais elevados são muito valorizados pelos gatos — prateleiras, árvores para gatos e janelas com vista os fazem sentir seguros e no controle do ambiente. Caixas e tocas fechadas oferecem refúgio quando o gato quer privacidade.

     A caixa de areia deve ser limpa diariamente e posicionada longe do comedouro. A regra geral é ter uma caixa por gato mais uma extra. Gatos muito exigentes com a higiene da caixa podem desenvolver problemas urinários se o local não estiver adequado.

     Janelas teladas permitem que o gato observe o mundo exterior em segurança — um estímulo visual enorme para animais de interior.`,
      image: 'images/care/ambiente-bem-estar.jpg',
      tips: [
        'Ofereça arranhadores em diferentes texturas e alturas',
        'Crie locais elevados para o gato se sentir seguro',
        'Limpe a caixa de areia diariamente',
        'Instale telas de proteção nas janelas',
        'Mantenha rotina estável — gatos odeiam imprevisibilidade'
      ]
    },
    {
      id: 'veterinario',
      category: 'Saúde',
      icon: 'local_hospital',
      title: 'Visitas ao veterinário',
      summary: 'Consultas regulares ao veterinário permitem detectar problemas precocemente e manter o gato saudável por mais tempo.',
      content: `A consulta veterinária de rotina deve ser feita pelo menos uma vez ao ano em gatos adultos saudáveis e a cada 6 meses em gatos com mais de 7 anos — considerados idosos na medicina veterinária. Filhotes precisam de visitas mais frequentes para completar o calendário vacinal.

     Durante a consulta de rotina, o veterinário avalia peso, condição corporal, dentes, ouvidos, olhos, pelagem, coração e abdômen. Exames de sangue anuais a partir dos 7 anos são recomendados para detectar precocemente doenças renais, hepáticas e tireoidianas — muito comuns em gatos idosos.

     Gatos são especialistas em esconder dor e desconforto — comportamento herdado de seus ancestrais selvagens, que não podiam demonstrar fraqueza. Por isso, mudanças sutis de comportamento como isolamento, redução do apetite, menor atividade ou alterações no uso da caixa de areia devem ser investigadas.

     Emergências veterinárias incluem dificuldade respiratória, vômitos ou diarreia persistentes, incapacidade de urinar — especialmente grave em machos — traumas e convulsões. Nesses casos, procure atendimento imediato.`,
      image: 'images/care/veterinario-gato.jpg',
      tips: [
        'Consulta anual para adultos, semestral para idosos',
        'Exames de sangue anuais a partir dos 7 anos',
        'Observe mudanças sutis de comportamento',
        'Tenha sempre um veterinário de emergência de referência',
        'Acostume o gato ao transporte desde filhote'
      ]
    },
    {
      id: 'envenenamento',
      category: 'Saúde',
      icon: 'warning',
      title: 'Envenenamento e intoxicações',
      summary: 'Gatos são curiosos por natureza, o que os expõe a plantas, alimentos e produtos domésticos que podem ser fatais. Saber reconhecer e agir rápido salva vidas.',
      content: `Gatos exploram o ambiente com a boca, o que os torna especialmente vulneráveis a intoxicações por plantas, alimentos, medicamentos e produtos de limpeza comuns em qualquer casa. Muitos tutores não sabem que itens do dia a dia podem ser letais para um felino em quantidades mínimas.

      Entre as plantas, o lírio (Lilium) é uma das mais perigosas — todas as suas partes, incluindo o pólen e a água do vaso, podem causar insuficiência renal fatal em gatos mesmo em pequena exposição. Comigo-ninguém-pode, espada-de-são-jorge e azaleia também são tóxicas e devem ficar fora do alcance ou fora de casa.

      Entre alimentos e medicamentos, o paracetamol é extremamente tóxico para gatos mesmo em doses baixas, pois eles não conseguem metabolizá-lo — nunca administre medicamentos humanos sem orientação veterinária. Chocolate, cebola, alho, uvas e passas também são perigosos. Produtos de limpeza, venenos para ratos e anticongelante (etilenoglicol) — que tem sabor adocicado e atrai os gatos — completam a lista de riscos domésticos mais comuns.

      Os sinais de intoxicação incluem vômito, diarreia, salivação excessiva, tremores, convulsões, letargia, dificuldade para respirar e pupilas dilatadas. Esses sintomas podem aparecer minutos ou horas após a exposição, dependendo da substância.

      Diante de uma suspeita de envenenamento, o primeiro passo é ligar imediatamente para o veterinário ou um centro de controle de intoxicações — no Brasil, os Centros de Informação Toxicológica (CIATox) de cada estado atendem também casos envolvendo animais e podem orientar por telefone enquanto você se desloca. Descreva o que o gato ingeriu, a quantidade aproximada e o tempo desde a exposição, e leve a embalagem do produto ou um pedaço da planta suspeita para o atendimento — isso agiliza muito o diagnóstico e o tratamento correto.

      O carvão ativado é um dos tratamentos mais usados em casos de intoxicação, pois adsorve toxinas ainda no trato digestivo, reduzindo sua absorção pelo organismo. Porém, ele deve ser administrado exclusivamente por um veterinário: a dose e a via de administração precisam ser corretas, o carvão não funciona para todas as substâncias — é ineficaz ou até contraindicado em casos de ingestão de produtos corrosivos, derivados de petróleo e alguns metais — e a administração incorreta em casa pode causar aspiração para os pulmões, levando a uma pneumonia grave. Nunca tente aplicar carvão ativado por conta própria sem orientação veterinária direta.

      Para agir rápido quando o tempo é essencial, tenha previamente salvo no celular o contato de pelo menos uma clínica veterinária de emergência 24 horas perto de casa — pesquise isso antes de precisar, não durante a emergência. Muitas cidades também têm plantões de hospitais-escola de veterinária que atendem casos toxicológicos com mais estrutura.

      O que nunca fazer diante de uma suspeita de envenenamento: não induza o vômito por conta própria, pois substâncias corrosivas ou derivadas de petróleo causam ainda mais dano ao serem regurgitadas, e um gato com rebaixamento de consciência pode aspirar o vômito para os pulmões; não dê remédios caseiros como leite, sal, óleo ou água oxigenada — nenhum deles é seguro ou eficaz para gatos e podem até piorar o quadro; não espere para ver se os sintomas melhoram sozinhos, já que o dano a órgãos como rim e fígado pode ser silencioso nas primeiras horas; e não administre nenhum medicamento humano como tentativa de tratamento.

      Prevenção é a melhor proteção: guarde produtos de limpeza, medicamentos e venenos em armários fechados, pesquise a toxicidade de qualquer planta antes de trazê-la para casa, e tenha sempre salvo o contato de um veterinário de emergência disponível 24 horas.`,
      image: 'images/care/veneno.jpg',
      tips: [
        'Mantenha plantas tóxicas como lírios fora de casa — são fatais até pelo pólen',
        'Nunca dê medicamentos humanos ao gato, especialmente paracetamol',
        'Guarde produtos de limpeza, venenos e anticongelante fora do alcance',
        'Nunca induza vômito nem dê remédios caseiros como leite, sal ou óleo',
        'Carvão ativado só deve ser aplicado por um veterinário — nunca em casa',
        'Ligue para o veterinário ou o CIATox do seu estado e leve a embalagem do produto suspeito',
        'Salve com antecedência o contato de uma clínica veterinária de emergência 24h'
      ]
    },
    {
      id: 'estresse',
      category: 'Bem-estar',
      icon: 'self_improvement',
      title: 'Sinais de estresse',
      summary: 'Reconhecer os sinais de estresse no seu gato é fundamental para agir antes que o problema se torne sério.',
      content: `O estresse em gatos se manifesta de formas variadas e muitas vezes sutis. Os sinais mais comuns incluem esconder-se excessivamente, parar de usar a caixa de areia, arranhar móveis de forma compulsiva, vocalização excessiva, agressividade repentina e supergrooming — lamber tanto que causa peladas.

     As causas mais frequentes de estresse felino são mudanças no ambiente — como mudança de casa ou rearranjo de móveis — chegada de novos animais ou pessoas, rotina imprevisível, falta de estimulação mental e barulhos altos e constantes.

     A introdução de um novo gato deve ser feita de forma gradual e cuidadosa. O processo ideal leva de 2 a 4 semanas: primeiro o novo gato fica em um cômodo separado, depois há troca de cheiros através de roupas e cobertores, e só então o contato visual e físico supervisionado.

     Feromonas sintéticas — disponíveis em difusores elétricos, sprays e coleiras — imitam as feromonas naturais de bem-estar dos gatos e podem ajudar a reduzir o estresse em situações de mudança. Converse com o veterinário sobre o uso desses produtos.`,
      image: 'images/care/gatos-brigando.jpg',
      tips: [
        'Observe mudanças no uso da caixa de areia',
        'Mantenha rotina de alimentação e brincadeiras',
        'Introduza novos animais de forma gradual',
        'Use difusores de feromona em situações de estresse',
        'Crie zonas de refúgio onde o gato não seja perturbado'
      ]
    },
  ];

  getAll(): Care[] {
    return this.cares;
  }

  getById(id: string): Care | undefined {
    return this.cares.find(c => c.id === id);
  }
}
