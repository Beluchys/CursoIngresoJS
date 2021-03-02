/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.*/


function mostrar()
{

	let numeroIngresado;
	let contadorPares =0;
// Pedir un numero
	numeroIngresado = prompt("Ingrese un Número");
	numeroIngresado = parseInt(numeroIngresado);
// tengo que hacer que una variable tome los valores desde el 1 hasta el número ingresado
	for (let contador = 1; contador <= numeroIngresado; contador++) 
	{
		if (contador % 2 == 0) 
		{
			contadorPares++;
			console.log(contador);
			alert(contador);
		}
	}
	console.log("La cantidad de numeros pares es "+contadorPares);
	alert("La cantidad de número pares es "+contadorPares);
}//FIN DE LA FUNCIÓN