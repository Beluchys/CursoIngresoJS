/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreInicial;
	var edadInicial;

	nombreInicial = document.getElementById("txtIdNombre").value;
	edadInicial = document.getElementById("txtIdEdad").value;

	alert("Usted se llama "+nombreInicial+" y tiene "+edadInicial+" años.");
}

