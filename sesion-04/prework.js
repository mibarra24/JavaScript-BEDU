//Funciones


function myFunction(parameter1, parameter2) {
    // Código a ejecutar
  }
  
//A esta sintaxis se le conoce como declaración de función. Para ejecutarla o llamarla sólo es necesario escribir el nombre de la función seguido paréntesis con los argumentos, o bien pueden ir vacíos si la función no espera recibir algún argumento.


myFunction(arg1, arg2);

//Normalmente las funciones retornan un valor después de haber realizado todas las operaciones necesarias. Para ello se usa la palabra reservada return al final de la función. En cuanto se llegue a esa línea se termina la ejecución de dicha función.


function addNumbers(a, b) {
    return a + b
  }

//El valor que toda función retorne puede ser asignado a una variable para ser usado posteriormente.

// En JavaScript hay otra sintaxis para las funciones que se conoce como expresión de función. Estas normalmente son funciones anónimas (la función como tal no tiene nombre) asignadas a una variable. La forma de llamar o ejecutar estas funciones es la misma a la declaración de funciones.


const addNumbers = function(a, b) {
    return a + b
  }
  
  const result = addNumbers(5, 8);
  
  console.log( result ); // 13

 // A veces es necesario que la expresión de la función no sea anónima. Por ejemplo, en una función recursiva donde es necesario hacer referencia a sí misma.

 
 const factorial = function fac(number) {
    return number < 2 ? 1 : number * fac(number - 1)
  }
  
  console.log(factorial(5)); // 120

  //Otra sintaxis que usamos con las expresiones de funciones es la de los arrow functions.


 