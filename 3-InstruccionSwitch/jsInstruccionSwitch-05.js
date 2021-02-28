/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".*/


function mostrar()
{
	var horaDelDia =txtIdHora.value;
	switch (true) 
	{
		case (horaDelDia >= 7 && horaDelDia <=11):
			alert("Es de mañana");
			break;
	}
}//FIN DE LA FUNCIÓN