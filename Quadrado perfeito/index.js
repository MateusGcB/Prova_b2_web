


function VQPerfeito() {
          
    //Obtem o numero digitado
    var numero = parseInt(document.getElementById("numero").value);
    
    // Chamar função para verificar 
    var resultado = ÈQPerfeito(numero);
    
    // Exibi o resultado
    if (resultado) {
        
        document.getElementById("resultado").innerHTML = "O número " + numero + " é um quadrado perfeito.";

    } 
    
    else {

        document.getElementById("resultado").innerHTML = "O número " + numero + " não é um quadrado perfeito.";

    }

}




function ÈQPerfeito(numero) {

    // Confere se nao é negativo
    if (numero < 0) {

        return false;

    }
    
    //Calcular a raiz quadrada e ve se é um numero inteiro
    var raizQuadrada = Math.sqrt(numero);
    return raizQuadrada === Math.floor(raizQuadrada);

}
