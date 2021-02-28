//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive


function mostrar()
{
	 let numero;
	 let maximo = 10;
	 let minimo = 1;

	 numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	 alert(numero);
}