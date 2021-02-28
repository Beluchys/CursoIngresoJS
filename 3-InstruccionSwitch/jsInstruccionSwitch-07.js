/*Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/


function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado) 
	{
		case "Bariloche":
			alert("Sur");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Oeste");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
	}

}