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

      A vacina antirrábica é obrigatória em muitos municípios brasileiros e deve ser aplicada a partir dos 3 meses de idade, com reforço anual. Mesmo gatos que não saem de casa devem ser vacinados, pois o vírus pode ser trazido para dentro do ambiente pelo tutor.

      A vermifugação deve ser feita a cada 3 meses em gatos adultos e mensalmente em filhotes até os 6 meses. Existem vermífugos em pasta, comprimido e pipeta. Converse com o veterinário sobre o produto mais adequado para o seu animal.

      O controle de pulgas e carrapatos também é essencial — esses parasitas podem transmitir doenças graves e causar anemia em filhotes. Antipulgas em pipeta ou coleira são as formas mais práticas de prevenção.`,
      image: 'images/care/vacina.jpg',
      tips: [
        'Vacine com V4 ou V5 a partir de 6 a 8 semanas',
        'Reforce a vacina antirrábica anualmente',
        'Vermifugue a cada 3 meses em adultos',
        'Use antipulgas preventivo mensalmente',
        'Faça check-up veterinário ao menos uma vez por ano'
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

      Um mito comum é que a castração engorda o gato. Na verdade, o que ocorre é uma redução do metabolismo basal — que pode ser compensada com ajuste na alimentação e estímulo à atividade física.`,
      image: 'images/care/dois-gatos.jpg',
      tips: [
        'Castre entre 4 e 6 meses de idade',
        'Reduz risco de tumores mamários em até 90% nas fêmeas',
        'Elimina marcação de território e comportamentos de cio',
        'Ajuste a alimentação após a cirurgia',
        'Recuperação completa em 7 a 10 dias'
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
