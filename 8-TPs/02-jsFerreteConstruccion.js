/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y 
el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y 
se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let resultadoFinal;
    let hilos =3;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    resultadoFinal=((largo + ancho)*2)*hilos;

    alert("Se debe comprar "+resultadoFinal+" metros de alambre.")
}
function Circulo () 
{
    let radio;
    let resultadoFinal;
    let hilos = 3;
    let circunferencia;

    radio = parseInt(document.getElementById("txtIdRadio").value);

    circunferencia = (radio*2) * 3.14;
    resultadoFinal = circunferencia*hilos;

    alert("Se debe comprar "+resultadoFinal+" metros de alambre.")
}
function Materiales () 
{
    let largo;
    let ancho;
    let metroCuadrado;
    let cemento = 2;
    let cal = 3;
    let resultadoCemento;
    let resultadoCal;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    metroCuadrado = largo * ancho;
    resultadoCal = metroCuadrado * cal;
    resultadoCemento = metroCuadrado * cemento;

    alert("Se debe comprar "+resultadoCal+" bolsas de cal y "+resultadoCemento+" bolsas de cemento.")
}