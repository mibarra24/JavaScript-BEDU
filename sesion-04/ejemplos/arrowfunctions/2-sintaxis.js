// Sintaxis
// Lo primero que debemos tomar en cuenta es que las arrow functions son funciones anónimas. Significa que el primer paso es usar una expresión de función.

//* const firstNames = [ 'John', 'Jane', 'Mark'];

//const getFullNames = function(names) {
 // const fullNames = []
	
 // for(const name of names) {
 //   fullNames.push(`${name} Doe`)
 // }
  
 // return fullNames
//}

//const fullNames = getFullNames(firstNames)

//console.log(fullNames); 

//Ahora bien, para escribir un arrow function solo debemos quitar el keyword function y agregar lo que se conoce como _ fat arrow_ (=>) justo después de los paréntesis que contienen los parámetros de la función.

const firstNames = [ 'John', 'Jane', 'Mark'];

const getFullNames = (names) => {
  const fullNames = []
	
  for(const name of names) {
    fullNames.push(`${name} Doe`)
  }
  
  return fullNames
}

const fullNames = getFullNames(firstNames)

console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"]