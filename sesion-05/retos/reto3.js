// Escribir una función que reciba un arreglo de n cantidad de enteros positivos que pueden no estar ordenados. La función debe retornar un nuevo arreglo con los elementos faltantes del primer arreglo.

findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]

function findMissingNumbers(numbers) {
    const sortedArray = numbers.sort((a, b) => a - b)
    let missing = []
    for (let i = numbers[0]; i < numbers[sortedArray.length - 1]; i++) {
      if (sortedArray.indexOf(i) < 0) {
        missing.push(i);
      }
    }
    return missing
  }
  