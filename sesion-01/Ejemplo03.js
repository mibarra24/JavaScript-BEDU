//** Practicar el orden de precedencia de los operadores en JavaScript.*/

var a = 5;
var b = 10;
var c = 15;

a + b * c;  // 155

(a + b) * c;  // 255

b / a * c;  // 30

b / (a * c);  // 0.1333

a - b + c;  // 10

a - (b + c);  // -20