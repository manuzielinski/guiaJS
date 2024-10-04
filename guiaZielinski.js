// ejercicio numero 1

let lado;
lado = prompt("ingrese el lado del cuadrado");

document.write(lado * 4);

// ejercicio numero 2

let number12;
let number22;
let number32;
let number42;

number1 = parseFloat(prompt("Ingrese el primer número:"));
number2 = parseFloat(prompt("Ingrese el segundo número:"));
number3 = parseFloat(prompt("Ingrese el tercer número:"));
number4 = parseFloat(prompt("Ingrese el cuarto número:"));

document.write(number1 + number2);
document.write("<br>");
document.write(number3 * number4);

// ejercicio numero 3

let number1;
let number2;
let number3;
let number4;

number1 = parseFloat(prompt("ingrese1"));
number2 = parseFloat(prompt("ingrese2"));
number3 = parseFloat(prompt("ingrese3"));
number4 = parseFloat(prompt("ingrese4"));

document.write(number1 + number2 + number3 + number4);
document.write("<br>");
document.write(number1 * number2 * number3 * number4);

// ejercicio numero 4

let precioArticulo;
let cantidadArticulos;

cantidadArticulos = prompt("ingrese la cantidad de articulos que desea llevar");
precioArticulo = prompt("ingrese el precio del articulo");

let totalPagar = precioArticulo * cantidadArticulos;

document.write(`El total a pagar es: $${totalPagar}`);

// ejercicios de Estructuras condicionales simples, ejercicio 1

let nota1;
let nota2;
let nota3;

nota1 = parseInt(prompt("ingrese la primer nota"));
nota2 = parseInt(prompt("ingrese la segunda nota"));
nota3 = parseInt(prompt("ingrese la tercer nota"));

let promedio = (nota1 + nota2 + nota3) / 3;

document.write("la nota es: " + promedio);

if (promedio >= 7) {
    document.write("<br>El alumno ha promocionado");
}

// ejercicio 2

let clave1;
let clave2;

clave1 = prompt("ingrese clave 1");
clave2 = prompt("ingrese clave 2");

if(clave1 == clave2) {
    document.write("las claves son iguales! :/");
}else {
    document.write("las claves son diferentes! :)");
}


// Estructuras condicionales compuestas, ejercicio 1

let numberr1;
let numberr2;

numberr1 = prompt("ingrese numero 1");
numberr2 = prompt("ingrese numero 2");

if (numberr1 < numberr2) {
    document.write(numberr1 + numberr2);
    document.write(`la diferencia entre el number1 y el number2 es: ` + (numberr1 - numberr2));
}else {
    document.write(`el producto es: `+ (numberr1 * numberr2));
    document.write(`<br>la division del segundo por el primero es: ` + (numberr1/numberr2));
}

//ejercicio 2

let notas1;
let notas2;
let notas3;

notas1 = Number(prompt("ingrese la nota1"));
notas2 = Number(prompt("ingrese la nota2"));
notas3 = Number(prompt("ingrese la nota3"));

let promedio2 = (notas1 + notas2 + notas3) / 3;

if(promedio2 >= 4) {
    document.write("el alumno ha aprobado");
}else {
    document.write("el alumno ha reprobado");
}




