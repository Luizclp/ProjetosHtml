function Salvar(){
    const nomeAluno = (prompt("Nome aluno"));
    const nota1 = (prompt("Nota 1 bimestre"));
    const nota2 = (prompt("Nota 2 bimestre"));
    const peri = (prompt("Periodo do aluno"));
    const Turma = (prompt("Turma do aluno"));
    let media = nota1 + nota2 /2;

    let aluno ={
    "nome":nomeAluno,
    "nota1Bim":Number(nota1),
    "nota2Bim":Number(nota2),
    "media":Number(media),
    "turma":(Turma),
    "periodo":Number(peri),
    "aprovado":true
};
console.log(aluno);

}