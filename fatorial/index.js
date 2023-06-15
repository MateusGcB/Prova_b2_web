

 //  calcular o fatorial
 function CFatorial(num) {

    if (num === 0 || num === 1) {

      return 1;

    }

    var fatorial = 1;

    for (var i = 2; i <= num; i++) {

      fatorial *= i;

    }

    return fatorial;
    
  }

  // exibe os fatoriais de 1 a 10
  function Fatoriais() {

    var resultado = document.getElementById("resultado"); 

    // Limpa o resultado anterior
    resultado.innerHTML = ""; 

    for (var i = 1; i <= 10; i++) {

      var fatorial = CFatorial(i);
      
      resultado.innerHTML += "Fatorial de " + i + ": " + fatorial + "<br>";

    }
  }
