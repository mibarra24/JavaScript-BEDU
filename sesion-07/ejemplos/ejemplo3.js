// Sumar los digitos de un numero entero:

//Input: 12345

 //-- 1 + 2 + 3 + 4 + 5 = 15

//Output: 15

const num = 12345;

const str = num.toString();

const array = str.split('');

console.log(num);
console.log(str);
console.log(array);

//convertir elementos en enteros:
//const arrayOfNumbers = array.map(function(num) {
  //  return Number(num);
//})

// console.log(arrayOfNumbers)

//Cuando usemos una función como map() y queremos que retorne el resultado de otra función con el mismo argumento podemos simplificarlo de la siguiente manera:

const arrayOfNumbers = array.map(Number);
console.log(arrayOfNumbers)

//Por último debemos sumar todos los elementos de este arreglo. Ya vimos cómo podemos usar reduce para reducir a un único valor todos los elementos de un arreglo.

const sum = arrayOfNumbers.reduce(function(a,b) {
    return a + b;
}, 0);

console.log(sum);
//Todas estas funciones pueden ser encadenadas de la misma forma que hicimos con las primeras dos. El producto final dentro de una función sería:

function sumDigits(number) {
    return number
    .toString()
    .split('')
    .map(Number)
    .reduce(function(a,b){
        return a + b;
    }, 0)
}

console.log(sumDigits(12345));