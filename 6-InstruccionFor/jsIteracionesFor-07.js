/*al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.*/


function mostrar()
{

	let numeroIngresado;
	let	contadorDivisores =0;
// Pedir un numero
	numeroIngresado = prompt("Ingrese un Número");
	numeroIngresado = parseInt(numeroIngresado);
// tengo que hacer que una variable tome los valores desde el 1 hasta el número ingresado
	for (let contador = 1; contador <= numeroIngresado; contador++) 
	{
		if (numeroIngresado % contador == 0) 
		{
			contadorDivisores++;
			console.log(contador);
			alert(contador);
		}
	}
	console.log("La cantidad de numeros pares es "+contadorDivisores);
	alert("La cantidad de número pares es "+contadorPares);
}//FIN DE LA FUNCIÓN