/*Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value; 
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada >=18) 
	{
		alert("Es mayor de edad");	
	}

}