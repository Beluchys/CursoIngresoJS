/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/



function mostrar()
{
	let notaRandom;
	let maximo = 10;
	let minimo = 1;

	notaRandom = Math.round(Math.random () * (maximo - minimo) + minimo);

	if (notaRandom >=9) 
	{
		alert("Su nota es "+notaRandom+". Excelente");
	}
	else if (notaRandom >= 4 && notaRandom <= 8) 
	{
		alert("Su nota es "+notaRandom+". Aprobó");
	} 
	else
	{
		alert("Su nota es "+notaRandom+". Vamos, la proxima se puede!")
	}
}