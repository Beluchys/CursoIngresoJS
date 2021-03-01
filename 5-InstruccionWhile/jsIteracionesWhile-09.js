/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta = true;
	//iniciar variables
	banderaDelPrimero="es el primero";

	do
	{
		numeroIngresado = prompt("Ingrese un Número");
		numeroIngresado = parseInt(numeroIngresado);

		respuesta=confirm("¿Desea continuar?");
	}while(respuesta);



	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN