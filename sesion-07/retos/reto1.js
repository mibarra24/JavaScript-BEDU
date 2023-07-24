//Crear una función flatten que recibe un arreglo de arreglos y retorna un nuevo arreglo con todos los elementos del arreglo original.

function flatten(arrays) {
    return arrays.reduce(function(flat,current){
        return flat.concat(current);
    },[]);
  }
  
  const arrays = [[1, 2, 3], [4, 5], [6]];
  const array = flatten(arrays);
  
  console.log(array); // [1, 2, 3, 4, 5, 6]
