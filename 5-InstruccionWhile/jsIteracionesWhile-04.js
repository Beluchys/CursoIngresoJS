/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado);

	while (numeroIngresado <0 || numeroIngresado >9)
	{
		alert("Número incorrecto; ingresar uno entre el 0 y el 9");
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	}
	alert("Número correcto, "+numeroIngresado);
	
}//FIN DE LA FUNCIÓN