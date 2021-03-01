/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta = true;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;

	do
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado>=0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else if (numeroIngresado<0)
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		contador++;
		respuesta=confirm("¿Desea continuar?");

	}while(respuesta);


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN