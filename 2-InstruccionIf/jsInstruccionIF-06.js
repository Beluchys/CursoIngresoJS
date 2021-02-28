/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/


function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada >=13 && edadIngresada <=17) 
	{
		alert("La persona es un Adolescente");
	}
	else if (edadIngresada >=18) 
	{
		alert("La persona es mayor de Edad");	
	}
	else if (edadIngresada <=12) 
	{
		alert("La persona es un Niño");	
	}
}