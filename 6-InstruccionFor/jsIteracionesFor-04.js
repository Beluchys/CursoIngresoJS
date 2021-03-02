/*al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/

function mostrar()
{
	
	for(let contador=0 ; contador<5 ; contador++)
	{
		alert(contador);
		if(contador ==3)
		{
			break;
		}
	}
}//FIN DE LA FUNCIÓN