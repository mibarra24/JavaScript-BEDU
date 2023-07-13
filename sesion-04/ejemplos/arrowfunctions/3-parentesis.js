//Parentesis
//Adicionalmente, cuando contamos con un único parámetro los paréntesis pueden ser eliminados.

const firstNames = [ 'John', 'Jane', 'Mark'];

const getFullNames = names => {
  const fullNames = []
	
  for(const name of names) {
    fullNames.push(`${name} Doe`)
  }
  
  return fullNames
}

const fullNames = getFullNames(firstNames)

console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"]
