/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables
	var numeroIngresado; 
	var respuesta = true;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var acumuladorNegativos=0;
	var acumuladorPositivos=0;
	var diferencia;


	do
	{ //primero --> Codigo dentro del bucle - pedír numeros
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		// analizar el signo del número y actuar en consecuencia

		if(numeroIngresado < 0) //Negativos
		{
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
			contadorNegativos++;
		}
		else if(numeroIngresado == 0) //ceros
		{
			contadorCeros++;
		}
		else //positivos
		{
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			contadorPositivos++;
		}
			
		if (numeroIngresado % 2 == 0) //saber si es par
		{
			contadorPares++;
		}
		respuesta=confirm("¿Desea Continuar?");
	}while(respuesta);

	// hacer los calculos con los datos obtenido dentro del bucle
	promedioPositivos = acumuladorPositivos /contadorPositivos;
	promedioNegativos = acumuladorNegativos /contadorNegativos;
	diferencia = contadorPositivos - contadorNegativos;

	document.write("la suma de los negativos es :"+acumuladorNegativos);

	document.write("la suma de los positivos es :"+acumuladorPositivos);
		
	document.write("la cantidad de los positivos es :"+contadorPositivos);

	document.write("la cantudad de los negativos es :"+contadorNegativos);

	document.write("la cantidad de ceros es :"+contadorCeros);

	document.write("la cantidad de numero pares es :"+contadorPares);

	document.write("El promedio de los positivos es :"+promedioPositivos);
	
	document.write("El promedio de los negativos es :"+promedioNegativos);
	
	document.write("la diferencia entre positivo y negativo es :"+diferencia);
}//FIN DE LA FUNCIÓN
