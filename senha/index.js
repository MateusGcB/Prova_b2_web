





// ver se uma senha é válida
function vSenha() {

    var senha = document.getElementById("senha").value; // Obter a senha do campo de entrada

    var resultado = document.getElementById("resultado"); // Elemento para exibir o resultado


    
    // Regras para uma senha válida
    var tamanhoMinimo = senha.length >= 8;

    var temLetraMaiuscula = /[A-Z]/.test(senha);

    var temLetraMinuscula = /[a-z]/.test(senha);

    var temNumero = /[0-9]/.test(senha);



    // Verificar se a senha é valida
    if (tamanhoMinimo && temLetraMaiuscula && temLetraMinuscula && temNumero) {

      resultado.innerHTML = "válida.";

    } 
    
    else {

      resultado.innerHTML = "inválida.";

    }
  }
