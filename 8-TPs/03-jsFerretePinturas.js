/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con 
un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let gradosF;
    let resultado;

    gradosF = parseInt (document.getElementById("txtIdTemperatura").value);

    resultado = (gradosF - 32) / 1.8;

    alert(gradosF+" son "+resultado+" grados Centigrados.");
}

function CentigradosFahrenheit () 
{
	let gradosC;
    let resultado;

    gradosC = parseInt(document.getElementById("txtIdTemperatura").value);

    resultado = (gradosC * 1.8) + 32;

    alert(gradosC+" son "+resultado+" grados Fahrenheit.")
}
