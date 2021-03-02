/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o 
“FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  
el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar 
un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidadLamparas;
    let marca;
    let precio = 35;
    let descuento;
    let precioConDesc;
    let ingresosBrutos;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;  


    if (cantidadLamparas >=6)
    {
        descuento = 0.50;
    }
    else if (cantidadLamparas == 5)
    {
        if (marca == "ArgentinaLuz")
        {
            descuento = 0.60; //descuento del 40%
        }else {
            descuento = 0.70; //descuento del 30%
        }
    }
    else if (cantidadLamparas == 4)
    {
        if(marca == "ArgentinaLuz" || marca =="FelipeLamparas")
        {
            descuento = 0.75; //descuento del 25%
        }else {
            descuento = 0.80; //descuento del 20%
        }
    }
    else if (cantidadLamparas == 3)
    {
        if(marca == "ArgentinaLuz")
        {
            descuento = 0.85; //descuento del 15%
        }else if (marca == "FelipeLamparas")
        {
            descuento = 0.90; //descuento del 10%
        }else{
            descuento = 0.95; //descuento del 5%
        }

    }else{
        descuento = 1; //sin descuento
    }

    precioConDesc = (cantidadLamparas * precio) * descuento;
    if(precioConDesc > 120)
    {
        ingresosBrutos = precioConDesc * 0.10;
        console.log(ingresosBrutos);
        alert("Usted va a pagar "+ingresosBrutos+" de IIBB");
        precioConDesc = precioConDesc + ingresosBrutos;
    }
    txtIdprecioDescuento.value = precioConDesc;
}
