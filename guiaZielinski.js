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

// ejercicio 3


let i = 0;
let sueldosMayores = 0;
let sueldosMenores = 0;
let totalSueldos = 0;
while (i < 5) {
    let sueldos = Number(prompt("ingrese los sueldos de los empleados (entre 100 y 500)"));
    if (sueldos < 100 && sueldos > 500) {
        document.write("los sueldos eran entre 100 y 500 burroo");
    }else if (sueldos <= 300) {
        sueldosMenores++;
        i++;
    }else {
        notasMenores++;
        i++;
    }
    totalSueldos += sueldos;
}

document.write("La cantidad de empleados con sueldos menores a 300 es: " + sueldosMenores);
document.write("<br>La cantidad de empleados con sueldos mayores a 300 es: " + sueldosMayores);
document.write("<br>La cantidad total que gasta la empresa en sus empleados es: " + totalSueldos);


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

// ejercicio 3

let numero;

numero = prompt("ingrese el numero");

if (numero > 1 && numero < 99) {
    if (numero >= 10 ) {
        document.write("el numero contiene dos digitos");
    }else {
    document.write("el numero no es valido");
    }
}

// ejercicio 1 navidad

let dia;
let mes;
let ano;

dia = prompt("ingrese el dia");
mes = prompt("ingrese el mes");
ano = prompt("ingrese el ano");

if (dia == 25 && mes == 12) {
    document.write('el dia corresponde a navidad');
}else {
    document.write('el dia no corresponde a navidad');
}

// ejercicio 2 valores

let valor11;
let valor22;
let valor33;

valor11 = Number(prompt("ingrese el primer valor"));
valor22 = Number(prompt("ingrese el segundo valor"));
valor33 = Number(prompt("ingrese el tercer valor"));

if (valor11 == valor22 && valor22 == valor33) {
    suma = valor11 + valor22;
    multiplicacion = suma * valor33;
    document.write(`el valor de la suma es: ${suma}`);
    document.write(`<br>el valor de la multiplicacion es: ${multiplicacion}`);
}else {
    document.write("los valores no son iguales");
}

// ejercicio 3

let valor112;
let valor222;
let valor332;

valor112 = Number(prompt("ingrese el primer valor"));
valor222 = Number(prompt("ingrese el segundo valor"));
valor332 = Number(prompt("ingrese el tercer valor"));

if(valor112 <= 10 || valor222 <= 10 || valor332 <= 10) {
    document.write("Los valores o alguno de estos es menor a 10");
}else {
    document.write("Los valores son mayores o iguales a 10"); 
}

// ejercicio 4

let x= prompt("ingrese el primer valor");
let y = prompt("ingrese el segundo valor");


if (x < 0 && y > 0) {
    document.write('se encuentra en el primer cuadrante');
}else if (x > 0 && y > 0) {
    document.write('se encuentra en el segundo cuadrante');
}else if (x < 0 && y < 0) {
    document.write('se encuentra en el tercer cuadrante');
}else if (x > 0 && y < 0) {
    document.write('se encuentra en el cuarto cuadrante');
}

// ejercicio 5

let sueldo = Number(prompt("ingrese el sueldo"));
let antiguedad = Number(prompt("antiguedad"));

if (sueldo < 500 && antiguedad >= 10) {
    let porcentaje = (20 / 100) * sueldo;
    document.write("se le orotgo un aumento del 20%, el total ahora es: " + (porcentaje + sueldo));
}else if (sueldo < 500 && antiguedad < 10) {
    let porcentaje = (5 / 100) * sueldo;
    document.write("se le otorgo un aumento del 5%, el total ahora es: " + (porcentaje + sueldo));
}else {
    document.write("su sueldo es de: " + sueldo);
}



// ejercicio 4


let i = 0;
let terminos = 0;
while (i < 20) {
    terminos += 5;
    i++;
    document.write("<br>" + terminos)
}

// ejercicio 5


let terminoss = 0;
while (terminoss < 1500) {
    terminoss += 10;
    document.write(" " + terminoss)
}

// ejercicio 6
let elementos1 = [];
let elementos2 = [];
let contador;

for (let i = 0; i < 3; i++) {
    let nuevoElemento = prompt("ingrese los elementos");
    contador = nuevoElemento;
    elementos1.push(nuevoElemento);
}

for (let i = 0; i < 3; i++) {
    let nuevoElemento2 = prompt("ingrese los elementos 2");
    contador2 += nuevoElemento2;
    elementos2.push(nuevoElemento2);
}


document.write(elementos1);
document.write("<br>" + elementos2);

if(contador > contador2) {
    document.write("<br> Lista 1 mayor");
} else if (contador < contador2) {
    document.write("<br> Lista 2 mayor");
} else {
    document.write("<br> Listas iguales");
}

// ejercicio 7

for (let i = 0; i < 5; i++) {
    let elementos = Number(prompt("ingrese 5 elementos"));
    if (elementos % 2 != 0) {
        document.write("el numero es impar: " + elementos + "<br>");
    } else {
        document.write("el numero es par: " + elementos + "<br>");
    }
}


// ejercicios estructuras repetitivas DO WHILE 1

let acumulador = 0;
let numero = 0;

while (numero != 9999) {
    numero = Number(prompt("ingrese los valores"));

    if (numero === 9999) {
        break;
    }
    acumulador += numero;
    document.write("la suma de los valores es: " + acumulador);

    if (acumulador === 0) {
        document.write("<br>el valor es 0");
    } else if (acumulador < 0) {
        document.write("<br>el valor es negativo");
    } else {
        document.write("<br>el valor es positivo");
    }
} 



// ejercicios estructuras repetitivas DO WHILE 2

let numeroCuenta;
let numeroCliete;
let saldoActual = 0;

do {
    numeroCuenta = Number(prompt("ingrese su numero de cuenta"));
    
    if (numeroCuenta < 0 ) {
        break;
    }

    numeroCliente = Number(prompt("ingrese su numero de cliente"));
    saldoActual = Number(prompt("ingrese su saldo"));

    if (saldoActual === 0) {
        document.write("Estado de la cuenta: nulo");
    } else if (saldoActual > 0) {
        document.write("Estado de la cuenta: acteedor");
    } else {
        document.write("Estado de la cuenta: deudor");
    }

} while (numero > 0);




// ejercicio 1 bucle for

let altura;
let base;
var contadorSuperficie = 0;

for (i = 0; i < 3; i++) {
    altura = Number(prompt("alturas: "));
    base = Number(prompt("base: "));

    let superficie = base * altura;

    document.write("<br>la altura es: " + altura);
    document.write("<br>la base es: " + base);
    document.write("<br>la superficie es: " + superficie);

    if (superficie > 12) {
        contadorSuperficie ++;
    }
    
    document.write("<br>");
}

document.write("<br>La cantidad de triangulos con una superficie mayor a 12 es: " + contadorSuperficie);


// ejercicio 2 bucle for

for (let i = 0; i < 10; i++) {
    valores = Number(prompt("Ingrese 10 valores: "));

    if (i >= 5) {
        document.write(valores);
    }
}


// ejercicio 3 for

for (var i = 0; i < 11; i++) {
    document.write("<br>" + 5 * i);
}


// ejercicio 4 for
let valor = Number(prompt("ingrese un valor del 1 al 10"));

for (var i = 0; i < 13; i++) {

    document.write("<br>" + valor * i);
}


// ejercicio 5 for

var contadorEquilatero = 0;
var contadorIsosceles = 0;
var contadorEscaleno = 0;

for (let i = 0; i < 4; i++) {
    let lado1 = Number(prompt("ingrese lado 1: "));
    let lado2 = Number(prompt("ingrese lado 2: "));
    let lado3 = Number(prompt("ingrese lado 3: "));

    if (lado1 === lado2 && lado3 === lado1) {
        contadorEquilatero ++;
    } else if (lado1 === lado2 || lado3 === lado1 || lado2 === lado3) {
        contadorIsosceles ++;
    } else {
        contadorEscaleno ++;
    }
}

document.write("El número de triángulos equiláteros es: " + contadorEquilatero + "<br>");

document.write("El número de triángulos isósceles es: " + contadorIsosceles + "<br>");

document.write("El número de triángulos escalenos es: " + contadorEscaleno + "<br>");


// ejercicio 6 for

var puntos = Number(prompt("ingrese la cantidad de puntos que desea analizar: "));

for (var i = 0; i < puntos; i++) {
    let x = Number(prompt("ingrese el punto en x: "));
    let y = Number(prompt("ingrese el punto en y: "));

    if (x < 0 && y > 0) {
        document.write("<br>El punto se encuentra en el primer cuadrante: ");
    } else if (x > 0 && y > 0) {
        document.write("<br>El punto se encuentra en el segundo cuadrante: ");
    } else if (x < 0 && y < 0) {
        document.write("<br>El punto se encuentra en el tercer cuadrante: ");
    } else {
        document.write("<br>El punto se encuentra en el cuarto cuadrante: ");
    }

}




