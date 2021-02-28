/*
una agencia de viajes nos piden informar si hacemos viajes a lugares 
según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/


function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;

	switch (true) 
	{
		case (estacionIngresada == "Invierno"):
			if (destinoIngresado == "Bariloche") 
			{
				alert("Se viaja");
			}
			else
			{
				alert("No se viaja");
			}			
			break;
	}
	switch (true) 
	{
		case (estacionIngresada == "Verano"):
			if (destinoIngresado == "Cataratas" || destinoIngresado == "Mar del plata") 
			{
				alert("Se viaja");
			}
			else
			{
				alert("No se viaja");
			}			
			break;
	}
	switch (true) 
	{
		case (estacionIngresada == "Otoño"):
			alert("Se viaja");		
			break;
	}
	switch (true) 
	{
		case (estacionIngresada == "Primavera"):
			if (destinoIngresado != "Bariloche") 
			{
				alert("Se viaja");
			}
			else
			{
				alert("No se viaja");
			}			
			break;
	}

}//FIN DE LA FUNCIÓN