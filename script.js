const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(mensagem) {
  return new Promise(resolve => {
    rl.question(mensagem, resposta => {
      resolve(resposta);
    });
  });
}
class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
}

// Ta pronto arrumado
async function cadastrarAlunos() {
  console.log("");
  console.log("=== Cadastro de alunos ===");

  let quantidade = parseInt(await perguntar("Quantos alunos deseja cadastrar?"));
  while (isNaN(quantidade) || quantidade <= 0) { 
    console.log("Quantidade inválida. Informe um valor maior que zero."); 
    quantidade = parseInt(await perguntar("Digite novamente a quantidade de alunos:")); 
  }

  let alunos = [];
  for (let i = 0; i < quantidade; i++) {
    let nome = await perguntar(`Digite o nome do aluno ${i + 1}: `);

    let nota = parseFloat(await perguntar(`Digite a nota do aluno ${i + 1}: `));

    while (isNaN(nota) || nota < 0 || nota > 10) { 
      console.log("Nota inválida. A nota deve estar entre 0 e 10."); 
      nota = parseFloat(await perguntar(`Digite novamente a nota do aluno ${i + 1}:`)); 
    }
    alunos.push(new Aluno(nome, nota));
  }
  return alunos;
}

// Ta pronto
function listarAlunos(alunos) {
  console.log("");
  console.log("Lista de alunos:");
  for (let i = 0; i < alunos.length; i++) {
    console.log(` ${alunos[i].nome} - ${alunos[i].nota}`);
  }
  classificacaoDesempenho(alunos);
}

// pronto falta revisar
function exibirEstatisticas(alunos) {
  console.log("");
  console.log("Quantidade de alunos:");
  console.log(alunos.length);

  console.log("");
  console.log("Media de notas da turma:");
  let totalNotas = 0;
  for (let i = 0; i < alunos.length; i++) {
    totalNotas += alunos[i].nota;
  }
  let mediaNotas = totalNotas / alunos.length;
  console.log(mediaNotas);

  console.log("");
  console.log("Maior nota:");
  let maiorNota = alunos[0].nota;
  for (let i = 1; i < alunos.length; i++) {
    if (alunos[i].nota > maiorNota) {
      maiorNota = alunos[i].nota;
    }
  }
  console.log(maiorNota);

  console.log("");
  console.log("Menor nota:");
  let menorNota = alunos[0].nota;
  for (let i = 1; i < alunos.length; i++) {
    if (alunos[i].nota < menorNota) {
      menorNota = alunos[i].nota;
    }
  }
  console.log(menorNota);

  console.log("");
  console.log("Mediana das notas:");
  alunos.sort((a, b) => a.nota - b.nota);
  let mediana;
  if (alunos.length % 2 === 0) {
    mediana =
      (alunos[alunos.length / 2 - 1].nota + alunos[alunos.length / 2].nota) / 2;
  } else {
    mediana = alunos[Math.floor(alunos.length / 2)].nota;
  }
  console.log(mediana);

  let amplitude = maiorNota - menorNota;
  console.log(`Amplitude das notas: ${amplitude}`);

  let aprovados = 0;
  let reprovados = 0;

  for (let aluno of alunos) {
    if (aluno.nota > 6) {
      aprovados++;
    } else {
      reprovados++;
    }
  }

  console.log(`Quantidade de aprovados: ${aprovados}`);
  console.log(`Quantidade de reprovados: ${reprovados}`);

  let percentualAprovacao = (aprovados / alunos.length) * 100;
  console.log(`Percentual de aprovação: ${percentualAprovacao.toFixed(2)}%`);

  let percentualReprovacao = (reprovados / alunos.length) * 100;
  console.log(`Percentual de reprovação: ${percentualReprovacao.toFixed(2)}%`);

}

// Ta pronto
function mostrarAlunosAcimaDaMedia(alunos) {
  console.log("");
  console.log("Media de notas da turma:");
  let mediaNotas = 0;
  for (let i = 0; i < alunos.length; i++) {
    mediaNotas += alunos[i].nota;
  }
  mediaNotas /= alunos.length;
  console.log(mediaNotas);
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota > mediaNotas) {
      console.log(`${alunos[i].nome} ${alunos[i].nota}`);
      console.log("Aprovado");
    }
  }
}

// Ta pronto
function classificacaoDesempenho(alunos) {
    for (let aluno of alunos) {
    let desempenho;

    if (aluno.nota >= 9) {
      desempenho = "Excelente";
    } else if (aluno.nota >= 7) {
      desempenho = "Bom";
    } else if (aluno.nota >= 6) {
      desempenho = "Regular";
    } else {
      desempenho = "Reprovado";
    }

    let situacao;

    if (aluno.nota > 6) {
      situacao = "Aprovado";
    } else {
      situacao = "Reprovado";
    }

    console.log("");
    console.log(`Aluno: ${aluno.nome}`);
    console.log(`Nota: ${aluno.nota}`);
    console.log(`Situação: ${situacao}`);
    console.log(`Desempenho: ${desempenho}`);
  }
}

// Ta pronto
function mostrarDistribuicaoDasNotas(alunos) {

  let faixa1 = 0;
  let faixa2 = 0;
  let faixa3 = 0;
  let faixa4 = 0;
  let faixa5 = 0;

  for (let aluno of alunos) {
    if (aluno.nota < 3) {
      faixa1++;
    } else if (aluno.nota < 5) {
      faixa2++;
    } else if (aluno.nota < 6) {
      faixa3++;
    } else if (aluno.nota < 8) {
      faixa4++;
    } else {
      faixa5++;
    }
  }

  console.log("");
  console.log("=== DISTRIBUIÇÃO DAS NOTAS ===");
  console.log(`0,0 – 2,9 : ${faixa1} aluno(s)`);
  console.log(`3,0 – 4,9 : ${faixa2} aluno(s)`);
  console.log(`5,0 – 5,9 : ${faixa3} aluno(s)`);
  console.log(`6,0 – 7,9 : ${faixa4} aluno(s)`);
  console.log(`8,0 – 10,0 : ${faixa5} aluno(s)`);

}

// Ta pronto
function mostrarRankingDaTurma(alunos) {
  console.log("");
  console.log("Ranking da turma:");
  alunos.sort((a, b) => b.nota - a.nota);
  for (let i = 0; i < alunos.length; i++) {
    console.log(`${i + 1} - ${alunos[i].nome} - ${alunos[i].nota}`);
    console.log("");
  }

  // Três alunos com as maiores notas
  console.log("");
  console.log("=== TOP 3 ALUNOS ===");

  let limite = Math.min(3, alunos.length);

  for (let i = 0; i < limite; i++) {
    console.log(`${i + 1}º - ${alunos[i].nome} ${alunos[i].nota}`);
  }

}

async function Principal() {
  let alunos = [];

  let opcao;

  do {
    console.log("");
    console.log("SISTEMA DE ANALISE DE NOTAS");
    console.log("-------------------------------");
    console.log("");
    console.log("1 - Cadastrar alunos");
    console.log("2 - Listar alunos");
    console.log("3 - Exibir estatísticas da turma");
    console.log("4 - Mostrar alunos acima da media");
    console.log("5 - Mostrar distribuicao das notas");
    console.log("6 - Mostrar ranking da turma");
    console.log("7 - Sair");

    opcao = await perguntar("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        alunos = await cadastrarAlunos();
        break;

      case "2":
        listarAlunos(alunos);
        break;

      case "3":
        exibirEstatisticas(alunos);
        break;

      case "4":
        mostrarAlunosAcimaDaMedia(alunos);
        break;

      case "5":
        mostrarDistribuicaoDasNotas(alunos);
        break;

      case "6":
        mostrarRankingDaTurma(alunos);
        break;

      case "7":
        console.log("Saindo do sistema...");
        break;

      default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }

  } while (opcao !== "7");

  rl.close();

}

console.log("Iniciando programa...");
Principal();
