function CalcularMedia(){
    const htmlnome = document.querySelector("#txtNome");
    const htmlNota1 = document.querySelector("#ntBim1");
    const htmlNota2 = document.querySelector("#ntBim2");
    const htmlResul = document.querySelector("#resultado");

    const nota1 = Number(htmlNota1.value);
    const nota2 = Number(htmlNota2.value);
    const media = (nota1 + nota2)/2;
    const aprovado = media >= mediaMininaApro;
    let situacao = "Aprovado";
    let situacaoClasse = "texto-Verde";

    const sutiacao = "Aprovado";
    if(aprovado == false){
        situacao ="Reprovado";
        situacaoClasse = "Texto-Verde";
    }

    const textoSituacao = `Média: ${media} Situação: ${situacao}`;

}