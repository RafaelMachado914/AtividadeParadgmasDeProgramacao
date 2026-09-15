<h1> Objetivo</h1>

Em grupos de 3 estudantes, desenvolver um programa para realizar o 
cadastro e a análise das notas de uma turma.
O sistema deverá permitir o armazenamento das informações dos alunos, 
realizar cálculos estatísticos, identificar situações de aprovação e reprovação e 
apresentar os resultados de forma organizada.
O programa deverá ser desenvolvido utilizando uma das linguagens de 
programação indicadas pelo professor.
<h2> Requisitos do sistema</h2>
<h3>Etapa 1 — Cadastro dos alunos</h3>
O programa deverá: <br>
<br>
1. Solicitar a quantidade de alunos da turma. <br>
2. Validar a quantidade informada, não permitindo valores menores ou iguais a 
zero. <br>
3. Para cada aluno, solicitar: <br>
• nome; <br>
• nota final. <br>
4. Considerar que a nota deverá estar entre 0,0 e 10,0. <br>
5. Validar as notas, impedindo valores menores que 0 ou maiores que 10. <br>
6. Caso seja informada uma nota inválida, o programa deverá solicitar uma nova 
nota. <br>
7. Armazenar as informações em uma estrutura de dados adequada à linguagem 
utilizada.  <br>

<h2>Situação dos alunos </h2>
Para cada aluno, o programa deverá determinar sua situação acadêmica.
Considere: <br>
 <br>
• Aprovado: nota maior ou igual a 6,0;  <br>
• Reprovado: nota menor que 6,0.  <br>
 <br>
O programa deverá ser capaz de apresentar, para cada aluno:  <br>
 <br>
Nome: João <br>
Nota: 8,5  <br>
Situação: Aprovado <br>
<h2> Estatísticas da turma </h2>
O sistema deverá calcular e apresentar:  <br>
 <br>
1. Quantidade total de alunos;  <br>
2. Média da turma;  <br>
3. Maior nota;  <br>
4. Menor nota;  <br> 
5. Mediana das notas;  <br>
6. Amplitude das notas; <br>
7. Quantidade de alunos aprovados; <br>
8. Quantidade de alunos reprovados; <br>
9. Percentual de aprovação; <br>
10.Percentual de reprovação. <br>
<h2>Alunos acima da média</h2> 
O programa deverá identificar e apresentar quais alunos obtiveram nota 
superior à média da turma.  <br>
<h3>Exemplo: </h3>
Média da turma: 7,2  <br>
Alunos acima da média:  <br>
Ana     - 8,5  <br>
Carlos  - 9,0  <br>
Pedro   - 7,8 <br>
<h2> Classificação de desempenho </h2>
O programa deverá classificar o desempenho dos alunos de acordo com a nota:  <br>
Faixa de 
nota  <br>
9,0 a 10,0  <br>
7,0 a 8,9  <br>
6,0 a 6,9  <br>
0,0 a 5,9  <br>
Classificação  <br>
Excelente  <br>
Bom  <br> 
Regular  <br>
Reprovado  <br> 
A classificação deverá ser apresentada juntamente com a situação do aluno. <br>
<h3>Exemplo:</h3>
Ana <br>
Nota: 9,2 <br>
Situação: Aprovado <br>
Desempenho: Excelente <br>
<h2> Distribuição das notas </h2>
O programa deverá apresentar a quantidade de alunos em cada faixa: <br>
• 0,0 a 2,9; <br>
• 3,0 a 4,9; <br>
• 5,0 a 5,9; <br>
• 6,0 a 7,9; <br>
• 8,0 a 10,0. <br>
<h3>Exemplo:</h3>
DISTRIBUIÇÃO DAS NOTAS  <br>
0,0 – 2,9   : 1 aluno <br>
3,0 – 4,9   : 2 alunos <br>
5,0 – 5,9   : 3 alunos <br>
6,0 – 7,9   : 8 alunos <br>
8,0 – 10,0  : 6 alunos <br>
<h2> Ranking da turma </h2>
O sistema deverá apresentar os alunos ordenados da maior para a menor nota.  <br>
<h3>Exemplo: </h3>
RANKING DA TURMA  <br>
1º - Ana       9,8 <br>
2º - Pedro     9,3 <br>
3º - Carlos    8,7 <br>
4º - João      7,5 <br>
5º - Maria     6,8 <br>
Além disso, o programa deverá apresentar os três alunos com as maiores notas.  <br>
<h2> Menu principal </h2>
O sistema deverá possuir um menu de opções para facilitar sua utilização.
Sugestão: <br> <br>
======================================== <br>
       SISTEMA DE ANÁLISE DE NOTAS  <br>
========================================  <br>
1 - Cadastrar alunos  <br>
2 - Listar alunos  <br>
3 - Exibir estatísticas da turma  <br>
4 - Mostrar alunos acima da média  <br>
5 - Mostrar distribuição das notas  <br>
6 - Mostrar ranking da turma  <br>
7 - Sair  <br>
Digite uma opção:  <br>
 <br>
O menu deverá continuar sendo apresentado até que o usuário escolha a opção Sair.   <br>
<h2> Validação e tratamento de erros </h2>
O sistema deverá tratar entradas inválidas.
<h3>Exemplos:</h3>
• quantidade de alunos menor ou igual a zero; <br>
• nota menor que 0; <br>
• nota maior que 10; <br>
• opção de menu inexistente; <br>
• tentativa de consultar aluno que não existe; <br>
• tentativa de alterar nota de aluno inexistente. <br> <br>
O programa não deverá simplesmente encerrar sua execução diante de 
uma entrada inválida. Sempre que possível, deverá informar o erro e solicitar uma 
nova entrada. <br>
<h3> Apresentação dos resultados</h3>
Ao final das operações, os resultados deverão ser apresentados de maneira 
organizada, clara e legível. <br>
Exemplo de relatório: <br> <br>
======================================== <br>
          RELATÓRIO DA TURMA <br>
======================================== <br>
Total de alunos:       20 <br>
Média:                  7,35 <br>
Mediana:                7,50 <br>
Maior nota:             9,80 <br>
Menor nota:             3,20 <br>
Amplitude:              6,60 <br>
Aprovados:              16 <br>
Reprovados:              4 <br>
<br>
Percentual de aprovação: 80,00% <br>
Percentual de reprovação: 20,00%--------------------------------------- <br>
<br>
ALUNOS ACIMA DA MÉDIA--------------------------------------- <br>
Ana       9,80 <br>
Pedro     8,50 <br>
Carlos    8,20--------------------------------------- <br>
<br>
TOP 3 DA TURMA--------------------------------------- <br>
1º Ana       9,80 <br>
2º Pedro     9,30 <br>
3º Carlos    8,70 <br>
======================================== <br> <br>
<h2> Requisitos técnicos</h2>
O trabalho deverá: <br> <br>
• utilizar adequadamente variáveis e tipos de dados; <br>
• utilizar estruturas condicionais; <br>
• utilizar estruturas de repetição; <br>
• utilizar uma estrutura de dados para armazenar os alunos; <br>
• utilizar funções/métodos para organizar o código; <br>
• realizar validação das entradas; <br>
• apresentar mensagens claras ao usuário; <br>
• possuir código organizado e indentado; <br>
• utilizar nomes significativos para variáveis, funções e estruturas; <br>
• evitar repetição desnecessária de código. <br>
