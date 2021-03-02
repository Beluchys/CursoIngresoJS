/*
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/


function mostrar()
{
	let numeroIngresado;
	let	contadorDivisores =0;

	numeroIngresado = prompt("Ingrese un Número");
	numeroIngresado = parseInt(numeroIngresado);

	for (let contador = 1; contador <= numeroIngresado; contador++) 
	{
		if (numeroIngresado % contador == 0) 
		{
			contadorDivisores++;
		}
	}
	if (contadorDivisores == 2)
	{
		alert(numeroIngresado+" Es un número Primo");
	}else
	{
		alert(numeroIngresado+" El número no es primo")
	}
}//FIN DE LA FUNCIÓN