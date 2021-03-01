/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta = true;
	var flag = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un Número");
		numeroIngresado = parseInt(numeroIngresado);
		if(flag == 0)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flag = 1;
		}
		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		else if (numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
		}

		respuesta=confirm("¿Desea continuar?");
	}while(respuesta);

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN