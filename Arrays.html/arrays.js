//let numero = [10,"Teste",30,"ABC"];
//console.log(`posição zero: ${numero[0]}`);
//console.log(`primeira posição: ${numero[1]}`);
//console.log(`segunda posição: ${numero[2]}`);
//console.log(`terceira posição: ${numero[3]}`);
//console.log(`quarta posição: ${numero[4]}`);
//let numInicial = 0;
//let numFinal = 1000;

function GerarParagrafo(){

    const inputQtd = document.querySelector("#quant");
    const divP = document.querySelector("#paragrafo");

    const qtd = inputQtd.value;
    divP.innerHTML ="";
    for(let i=0;i<inputQtd.value;i++)
    {
        divP.innerHTML += `<p>${i}<p/>`;
    }
}