function fibonacci(num) {
  let a = 0;
  let b = 1;
  let c = 0;

  if (num === 0 || num === 1) {
      return true;
  }
  while (c < num) {
      c = a + b;
      a = b;
      b = c;
  }
  return c === num;
}

const numero = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci:"), 10);
fibonacci(numero)

if (fibonacci (numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}

function cont_a(str) {
  let contador = 0;
  let strMinuscula = str.toLowerCase();

  for (let i = 0; i < strMinuscula.length; i++) {
      if (strMinuscula[i] === 'a') {
          contador++;
      }
  }

  if (contador > 0) {
      console.log(`A letra 'a' aparece ${contador} vezes na string.`);
  } else {
      console.log("A letra 'a' não aparece na string.");
  }
}

const texto = prompt("Informe uma string para verificar a ocorrência da letra 'a':");
cont_a(texto);

// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}  // Ao final do processamento, qual será o valor da variável SOMA? -> 77

//4) Descubra a lógica e complete o próximo elemento:
//a) 1, 3, 5, 7, ___ 9
//b) 2, 4, 8, 16, 32, 64, ____ 128
//c) 0, 1, 4, 9, 16, 25, 36, ____ 49
//d) 4, 16, 36, 64, ____ 100
//e) 1, 1, 2, 3, 5, 8, ____ 13
//f) 2,10, 12, 16, 17, 18, 19, ____ 200 ;

 //5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

//Ligue o Interruptor 1 (I1) e o Interruptor 2 (I2) por 5 minutos. Depois, desligue o Interruptor 2 (I2) e deixe o Interruptor 1 (I1) ligado. Mantenha o Interruptor 3 (I3) desligado.

//Na primeira ida à sala das lâmpadas:
//A lâmpada acesa corresponde ao Interruptor 1 (I1).
//A lâmpada apagada, mas quente, corresponde ao Interruptor 2 (I2).
//A lâmpada apagada e fria corresponde ao Interruptor 3 (I3).
//Assim, você identificará qual interruptor controla cada lâmpada.
