function SolicitarTexto() {
    var texto = "";
    console.log(prompt("Escreva alguma coisa: " + texto));

    if (texto == ""){

        console.log("Valido");
    }
    else{

        console.log("Invalido");
    }
    if (isNaN(texto) == false){
        console.log("É um número");
        const numero = Number(texto);
        if(number % 2 == 0){
            console.log("PAR");
        }
        else{
            console.log("IMPAR");
        }
    }
    else{
        console.log("Não é um número");
    }
}