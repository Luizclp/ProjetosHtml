function EscreverOlaUsuario(nomeUsuario) {
    console.log("Ola usuario: " + nomeUsuario);
    console.log(`Ola usuario ${nomeUsuario}`);
}

function SomarNumeros(v1,v2){
    const resultado = v1 + v2;
    return resultado;
}

function DividirNumeros(v1,v2){
    const resultado = v1 / v2;
    return resultado;
}

function SubtrairNumeros(v1,v2){
    const resultado = v1 - v2;
    return resultado;
}

function MultiplicarNumeros(v1,v2){
    const resultado = v1 * v2;
    return resultado;
}

function SolicitarValores(){
    let valor1 = 0;
    let valor2 = 0;

    valor1 = Number(prompt("Valor 1:"));
    valor2 = Number(prompt("Valor 2:"));

    SomarNumeros(valor1,valor2);

}