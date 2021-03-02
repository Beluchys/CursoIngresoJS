// al presionar el botón repetir el pedido de número hasta que ingresemos el 9.

function mostrar()
{
	for (let numeroPedido ;    ; )
	{
		numeroPedido = prompt("Ingrese un número");
		numeroPedido = parseInt(numeroPedido);
		if (numeroPedido == 9)
		{
			break;
		}
		alert("El numero ingresado es "+numeroPedido);
	}

}//FIN DE LA FUNCIÓN