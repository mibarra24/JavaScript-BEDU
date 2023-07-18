//Escribir una función que reciba un arreglo de 10 enteros entre 0 - 9, y retorne un string en forma de número telefónico.

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"

function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx'
    for (let num of numbers) {
      format = format.replace('x', num)
    }
    return format
  }
