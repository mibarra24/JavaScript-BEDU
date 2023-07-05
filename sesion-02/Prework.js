//**Con el ejemplo anterior podemos mostrar en consola una serie de números desde el 0 hasta el 50 utilizando el método console.log(). */

for(var i=0; i <=50; i++) {
    console.log(i);
}

//** Ahora vamos a mostrar en consola sólo los números impares menores que 50, para ello haremos uso de los conceptos vistos hasta ahora.

//** Para empezar debemos determinar si un número es par o impar, la mejor forma de hacerlo es usando el operador módulo, el cual nos da como resultado el residuo de una división. Si dividimos un número entero entre 2 y su residuo es igual a cero, entonces el número es par.*/

var residuo = 10 % 2;
console.log(residuo); 

var residuo = 7 % 2;
console.log(residuo);


//** Por último usaremos condicionales para determinar si debemos mostrar en consola el número o no. */

for (var i = 0; i <= 50; i++) {
    if( i % 2 !== 0) {
        console.log (i);
    }
} 