var d = document.getElementById("Dibujo");
var lienzo = d.getContext("2d");
var lineas = 20;
var l = 0;
var xi, yf;

while(l < lineas)
{
    xi = 200 - (l*10);
    yf = xi;
    dibujarLinea("blue", xi, 0, 200, yf);
    l = l + 1;
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}