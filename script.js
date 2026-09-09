class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
}

// Ta pronto, mas tem que arrumar o input
function cadastrarAlunos() {
  console.log("");
  console.log("Quantos alunos deseja cadastrar?");
  let quantidade = parseInt(prompt("Digite a quantidade de alunos: "));
  let alunos = [];
  for (let i = 0; i < quantidade; i++) {
    let nome = prompt(`Digite o nome do aluno ${i + 1}: `);

    let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}: `));

    if (nota < 0 || nota > 10) {
      console.log("Nota inválida. A nota deve estar entre 0 e 10.");
      let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}: `));
    } else {
      alunos.push(new Aluno(nome, nota));
    }
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
}

// incompleto
function exibirEstatisticas(alunos) {
  console.log("");
  console.log("Quantidade de alunos:");
  console.log(alunos.length);

  console.log("");
  console.log("Media de notas:");
  let totalNotas = 0;
  for (let i = 0; i < alunos.length; i++) {
    totalNotas += alunos[i].nota;
  }
  console.log(totalNotas / alunos.length);

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
}

// Ta pronto
function mostrarAlunosAcimaDaMedia(alunos) {
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota > 6.0) {
      console.log("");
      console.log(alunos[i].nome);
      console.log(alunos[i].nota);
      console.log("Aprovado");
    }
  }
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
}

function Principal() {
  console.log("SISTEMA DE ANALISE DE NOTAS");
  console.log("-------------------------------");
  console.log("");
  console.log("1 - Cadastrar alunos");
  console.log("2 - Listar alunos");
  console.log("3 - Exibir estatísticas da turma");
  console.log("4 - Mostrar alunos acima da media ");
  console.log("5 - Mostrar distribuicao das notas ");
  console.log("6 - Mostrar ranking da turma");
  console.log("7 - Sair");

  let opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      let alunos = cadastrarAlunos();
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
      Principal();
      break;
  }
}
