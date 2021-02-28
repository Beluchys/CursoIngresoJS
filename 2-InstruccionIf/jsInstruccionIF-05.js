//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada <=12 || edadIngresada >=18) 
	{
		alert("La persona NO ES ADOLESCENTE");
	}
}