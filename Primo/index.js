// Função para verificar se um número é primo
function Primo(num) {

    // 0 e 1 não são primos
    if (num <= 1) {

      return false;

    }

    // Verifica se e divisivel por 2 até a raiz quadrada do número
    for (var i = 2; i <= Math.sqrt(num); i++) {

      if (num % i === 0) {

        return false;

      }
    }

    return true;

  }

     // Função para verificar se é primo ou não
  function NPrimo() {

    var num = parseInt(document.getElementById("numero").value); 
    var resultado = document.getElementById("resultado"); 

    if (Primo(num)) {
      resultado.innerHTML = num + " é primo.";

    }
    
    else {
      resultado.innerHTML = num + " não é primo.";

    }
  }


     // Função para listar todos os primos entre 1 e 1000
  function listarPrimos() {

    var primos = [];

    // Iterar por todos os primos de 1 a 1000
    for (var i = 1; i <= 1000; i++) {

      if (Primo(i)) {
        primos.push(i);

      }
    }

    var resultado = document.getElementById("resultado"); 
    resultado.innerHTML = primos.join(", ");

  }
