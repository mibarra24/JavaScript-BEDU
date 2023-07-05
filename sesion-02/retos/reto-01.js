//* Vamos a empezar con el último código generado en el Ejemplo 01:/*

//* Nuestro código tiene una pequeña falla, el día solo tiene 24 horas y no se está tomando en cuenta el caso en el que time sea una hora inválida.

// Utilizando lo visto hasta el momento sobre operadores lógicos y condicionales, debes crear un nuevo mensaje que será usado cuando time sea una hora que no existe en el día.

const time = 25;
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20) {
  greeting = "Good evening";
} else (time >= 25); {
    greeting = "invalid time";
}
  

console.log(greeting) 

// Se agrego else (time >= 25); {greeting = "invalid time";}
