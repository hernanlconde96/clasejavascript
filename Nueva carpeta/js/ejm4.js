var x,d,s;
x=parseInt(prompt("x:"));
s=0;
while (x!=0) {
    d=(x%10);
    x=parseInt(x/10);
    s=s+d;
}
document.write("<br>LA SUMA DE LOS DIGITOS ES: "+s);