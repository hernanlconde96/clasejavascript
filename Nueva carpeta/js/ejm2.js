var nom, anio, edad, dia;
nom=prompt("nombre: ");
anio=parseInt(prompt("año de nacimineto: "));
edad = 2024-anio;
if (edad>=18) {
    document.write(nom+" eres mayor de edad");
    
}
else{
    document.write(nom+" eres menor de edad");

}
dia=parseInt (prompt("ingrese el numero de dia entre 1 y 7"));
switch (dia) {
    case 1: alert("lunes");break;
    case 2: alert("martes");break;
    case 3: alert("miercoles");break;
    case 4: alert("jueves");break;
    case 5: alert("viernes");break;
    case 6: alert("sabado");break;
    case 7: alert("domingo");break;
    default: alert("fuera de rango");
}




