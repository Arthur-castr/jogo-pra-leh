document.addEventListener("DOMContentLoaded", () => {
    const falas = {
      arthur: [
        "Oi, gatinha",
        "Como está esse sorriso?",
        "Amo o seu sorriso!",
        "to com saudades",
        "Se me olhar assim eu vou te beijar...",
        "Arthur Silva Ribeiro de Castro a seu dispor",
        "Faz esse bico não, meu solzinho",
        "Quer namorar comigo?",
        "eu sei que a gente já namora, kkkkk",
        "sem graça!!",
        "Cade a Ellen pra segurar vela?",
        "Espero que esteja gostando",
        "Se estiver brigada com ele, aposto que ele pediu desculpas de todo coração",
        "Um idiota as vezes, mas sempre vai ser verdadeiro e tentar melhorar",
        "Ele admira você, EU ADMIRO VOCÊ!",
        "Somos a mesma pessoa afinal, kkkkk",
        "até agora não mandou um capitulo para eu ler",
        "eu tenho uma memoria boa, sabia?",
        "Se estiver tendo um dia ruim, fala com ele! Alias vocês podem orar juntos",
        "O cara do lado certamente vai aprovar",
        "Ansioso por varias coisas e uma delas é viver com você",
        "para de apertar o meu peito!",
        "Quero cheirar seu sufaco",
        "beijão, minha cheirosa"
      ],
      jc: [
        "Peçam, e será dado; busquem, e encontrarão; batam, e a porta será aberta. Pois todo o que pede recebe; o que busca encontra; e àquele que bate, a porta será aberta.",
        "Como o Pai me amou, assim eu os amei; permaneçam no meu amor.",
        "Pois onde se reunirem dois ou três em meu nome, ali eu estou no meio deles.",
        "Eu sou a luz do mundo. Quem me segue, nunca andará em trevas, mas terá a luz da vida",
        "Para o homem é impossível, mas para Deus todas as coisas são possíveis",
        "Amem-se uns aos outros.",
        "Mas busquem em primeiro lugar o Reino de Deus e a sua justiça, e todas estas coisas lhes serão acrescentadas.",
        "Ame o seu próximo como a si mesmo",
        "Ninguém tem maior amor do que aquele que dá a vida pelos seus amigos.",
        "Eu sou o caminho, a verdade e a vida; ninguém vem ao Pai, se não por mim",
        "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso.",
        "Eu sou a ressurreição e a vida. Quem crê em mim, ainda que morra, viverá; e quem vive e crê em mim nunca morrerá.",
        "Ninguém pode servir a dois senhores.",
        "Eu estarei com vocês até o fim dos tempos.",
        "Felizes os que promovem a paz, porque serão chamados de filhos de Deus.",
        "Eis que estou à porta e bato. Se alguém ouvir a minha voz e abrir a porta, entrarei e cearei com ele, e ele comigo"


      ],
      salcicha: [
        "Au au",
        "Oi, mamãe! Au",
        "rhrhhr *rosnando*",
        "O papai te ama, sabia?",
        "Letícia me chama de bebê… Arthur me chama de funcionario. Quem tá certo? ",
        "Au au",
        "Tem lanche aí?",
        "Faça carinho, Humana!",
        "Desculpa, estou carente...",
        "Au au... mas com respeito, ok?",
        "Au au",
        "Oi, mamãe! Dormi só 9 horas hoje... tô exausto.",
        "Arthur, cadê meu salário? Trabalhei latindo o dia inteiro.",
        "me da um pedacinho...",
        "Qual vai ser meu nome?",
        "O Arthur quer que seja Neymar...",
        "au au",
        "Miau, errei fui muleque",
        "Sorria"

      ]
    };

    const indices = { arthur: 0, jc: 0, salcicha: 0 };

    const bonecos = document.querySelectorAll(".boneco1, .boneco2, .boneco3");
    const mensagemArea = document.getElementById("mensagem");

    bonecos.forEach(boneco => {
      boneco.addEventListener("click", () => {
        const id = boneco.id;
        const fala = falas[id][indices[id]];
        mensagemArea.innerText = fala || "…";
        indices[id]++;
        if (indices[id] >= falas[id].length) indices[id] = 0;
      });
    });
  });