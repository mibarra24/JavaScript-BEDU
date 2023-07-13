//Cuando escribimos return estamos definiendo explícitamente lo que debe retornar la función. Muchas veces las funciones solo retornan un valor sin hacer alguna otra operación antes. Cuando este es el caso podemos omitir el return pues el arrow function asume que se va a retornar lo que sigue después del fat arrow.

const logName = (name) => console.log(`Hello ${name}!`);

logName('John Doe'); // Hello John Doe!