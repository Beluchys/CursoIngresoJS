/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var respuesta = true;
	contador=0;
	acumulador=0;

	do
		{
		numeroIngresado = prompt("Ingrese Número");
		numeroIngresado = parseInt(numeroIngresado);
		contador++;
		acumulador = acumulador + numeroIngresado;
		respuesta=confirm("¿Desea continuar?");
		}	while (respuesta);
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN