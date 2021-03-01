/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado !="m" && sexoIngresado !="f") 
	{
		alert("Sexo incorrecto; ingrese (f ó m)");
		sexoIngresado = prompt("ingrese f ó m .");
	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN