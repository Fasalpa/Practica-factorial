let btnfactorial = document.getElementById("btnfactorial");
let spanNumero = document.getElementById("spanNumero");
let spanResultado = document.getElementById("spanResultado");

btnfactorial.addEventListener("click", function () {
  let numero = parseInt(prompt("Ingrese un número:"));

  if (numero < 0 || isNaN(numero)) {
    alert("Número no válido");
    return;
  }

  let resultado = 1;

  for (let i = 1; i <= numero; i++) {
    resultado = resultado * i;
  }

  // Mostrar en pantalla
  spanNumero.textContent = numero;
  spanResultado.textContent = resultado;
});