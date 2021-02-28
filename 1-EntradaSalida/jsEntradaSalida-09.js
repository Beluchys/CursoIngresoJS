/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoInicial;
	var aumento = 0.10;
	var porcentaje;
	var sueldoConAumento;

	sueldoInicial = document.getElementById("txtIdSueldo").value;

	sueldoInicial = parseInt(sueldoInicial);

	porcentaje = sueldoInicial * aumento;
	sueldoConAumento = sueldoInicial + porcentaje;

	document.getElementById("txtIdResultado").value = sueldoConAumento;
}
