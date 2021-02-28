/*
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var precioInicial = 15000;
	var aumento;
	var descuento;
	var precioFinal;

	switch (true) 
	{
		case (estacionIngresada == "Invierno"):
			if (destinoIngresado=="Bariloche")
			{
				aumento = 0.20;
				precioFinal = precioInicial + (precioInicial * aumento);
				alert("La tarifa es "+precioFinal);
			}
			else if (destinoIngresado=="Cataratas" || destinoIngresado=="Cordoba")
			{
				descuento=0.10;
				precioFinal = precioInicial - (precioInicial * descuento);
				alert("La tarifa es "+precioFinal);
			}
			else
			{
				descuento=0.20;
				precioFinal = precioInicial - (precioInicial*descuento);
				alert("La tarifa es "+precioFinal);
			}
			break;
	}
	switch (true) 
	{
		case (estacionIngresada == "Verano"):
			if (destinoIngresado=="Bariloche")
			{
				descuento = 0.20;
				precioFinal = precioInicial - (precioInicial * descuento);
				alert("La tarifa es "+precioFinal);
			}
			else if (destinoIngresado=="Cataratas" || destinoIngresado=="Cordoba")
			{
				aumento=0.10;
				precioFinal = precioInicial + (precioInicial * aumento);
				alert("La tarifa es "+precioFinal);
			}
			else
			{
				aumento=0.20;
				precioFinal = precioInicial + (precioInicial * aumento);
				alert("La tarifa es "+precioFinal);
			}
			break;
	}
	switch (true) 
	{
		case (estacionIngresada == "Otoño" || estacionIngresada == "Primavera"):
			if (destinoIngresado=="Bariloche" || destinoIngresado=="Cataratas" || destinoIngresado=="Mar del plata"  )
			{
				aumento = 0.10;
				precioFinal = precioInicial + (precioInicial * aumento);
				alert("La tarifa es "+precioFinal);
			}
			else
			{
				alert("La tarifa es "+precioInicial);
			}
			break;
	}
}