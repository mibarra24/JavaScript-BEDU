/*Ejemplo 1*/

const time = 13;
let greeting;

if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20) {
  greeting = "Good evening";
}

console.log(greeting) // Good afternoon

/*Ejemplo 2*/

const day = 2;
let text;

switch (day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    break;
  default:
    text = "Error";

}

console.log(text); // Tuesday


/* Ejemplo 3 */
//ensemos que queremos repetir un texto 5 veces y que aparezca en consola:

console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

//Excelente, funcionará y se reflejarán en la consola.

//Ahora bien, si te dijera que queremos repetirlo 200 veces, entonces copiar y pegar cada línea se volvería ineficiente ( aparte de odiar al que te dio la instrucción).

//¿Qué podemos hacer?

for(let i = 0; i<=200; i++){
  console.log("Hello World");
}