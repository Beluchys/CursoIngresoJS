/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24
si esta entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".*/



function mostrar()
{
	var horaDelDia =txtIdHora.value;
	switch (true) 
	{
		case (horaDelDia >=7 && horaDelDia <=11):
			alert("Es de mañana."); 
			break;
		case (horaDelDia >=12 && horaDelDia <=19):
			alert("Es de tarde."); 
			break;
		case (horaDelDia >=20 && horaDelDia <=24):
			alert("Es de noche."); 
			break;
		case (horaDelDia >=0 && horaDelDia <=6):
			alert("Es de noche."); 
			break;
		default:
			alert("La hora no existe.");
			break;
	}
}//FIN DE LA FUNCIÓN