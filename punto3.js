let currentyear= prompt ("Ingrese el año actual");
let birthyear= prompt("Ingrese año de nacimiento");
let age= (parseInt(currentyear)- parseInt(birthyear));
console.log("La edad de la persona es:"+ age);
if (age <18 ){ console.log ("No puede ingresar por que es menor de edad")}