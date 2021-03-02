/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/



function mostrar()
{
	var repeticiones;
	

	repeticiones = prompt("Ingrese la cantidad de Repeticiones");

	for(let contador=1 ; contador <= repeticiones ; contador++)
	{
		alert("Hola UTN FRA "+contador);
	}
}//FIN DE LA FUNCIÓN