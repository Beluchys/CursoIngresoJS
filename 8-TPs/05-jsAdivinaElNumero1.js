/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;
var numeroIngresado;
var numeroMax = 100;
var numeroMin = 1;
var contador = 0;
var respuesta = true;


function comenzar()
{
  //Genero numero secreto
  numeroSecreto = Math.round(Math.random ()* (numeroMax - numeroMin) + numeroMin);
  numeroSecreto = parseInt(numeroSecreto);
  console.log(numeroSecreto);
}
function verificar()
{
  numeroIngresado = document.getElementById("txtIdNumero").value;
  numeroIngresado = parseInt(numeroIngresado);
do {
  contador++;
  if (numeroIngresado == numeroSecreto) 
{
  alert("Usted Gano en "+contador+" aciertos");
  break;
}
  else if(numeroIngresado < numeroSecreto)
      {
        alert("Falta para llegar al número secreto");
break;
      }else
      {
        alert("Se paso del número secreto");
        break;
      }
} while (respuesta);

txtIdIntentos.value= contador;
}