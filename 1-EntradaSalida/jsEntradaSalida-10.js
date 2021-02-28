/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeInicial;
	var descuento25 = 0.75;
	var importeConDescuento;

	importeInicial = document.getElementById("txtIdImporte").value;

	importeInicial = parseInt(importeInicial);

	importeConDescuento = importeInicial * descuento25;

	document.getElementById("txtIdResultado").value = importeConDescuento; 

}
