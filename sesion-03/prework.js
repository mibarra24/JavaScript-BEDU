//Hasta ahora has trabajado con tipos de datos primarios (String, Number, Boolean). Ninguno de estos por sí solos es una buena opción para representar una colección de datos.

const color1 = 'Red'
const color2 = 'Blue'
const color3 = 'Green'

//En lugar de crear 3 variables por separado podemos hacer uso de arreglos.

const colors = ['Red', 'Blue', 'Green']

//Los arreglos están representados por corchetes y nos permiten agrupar n cantidad de valores, todos separados por coma. Los arreglos pueden contener distintos tipos de datos, es decir, no necesariamente deben ser todos string o todos number. Cada elemento de un arreglo cuenta con un identificador numérico llamado index que nos permite acceder al valor de dicho elemento.

//El primer elemento de un arreglo siempre tiene un index 0, y este va aumentando conforme se agregan más datos. Para poder leer o acceder a un elemento del arreglo colocamos el index dentro de corchetes.

console.log(colors[0]) //'Red'
console.log(colors[1]) //'Blue'
console.log(colors[2]) //'Green'
console.log(colors[3]) //'Undefined'

//En JavaScript no existen los arreglos asociativos cuyo índice puede ser un string, en su lugar utilizamos objetos. Los objetos en JavaScript están representados por corchetes, dentro tenemos pares de propiedad y valor. Al igual que los arreglos, el valor de una propiedad puede ser cualquier tipo de dato, incluso arreglos u otros objetos.

const john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990
}

//Los objetos normalmente son utilizados para almacenar información compleja como los datos personales de una persona de acuerdo al ejemplo anterior. Existen dos formas distintas para acceder a la información de un objeto, la primera es similar a los arreglos, mediante el uso de corchetes, sin embargo, se usa un string con el nombre de la propiedad en lugar de un índice numérico. La segunda es más sencilla, sólo se escribe el nombre del objeto seguido de un punto y el nombre de la propiedad.

console.log(john['lastName']) //Doe
console.log(john.firstName) //john

//Destructuring es extraer valores o propiedades de un arreglo u objeto.

console.log(red);
console.log(blue);
console.log(yellow);

//En este ejemplo estamos creando 3 variables (red, blue y yellow) y asignando los valores del arreglo colors. Esta asignación se hace basándose en el index del arreglo.

//Podemos lograr lo mismo con objetos.

const person = {
    firstName: 'John',
    lastName: 'Doe',
    country: 'Unknown'
  };
  
  const { firstName, lastName } = person;
  
  console.log(firstName, lastName); // John Doe
  
  //Las llaves del lado izquierdo del = no son un objeto. Esta es la sintaxis de object destructuring. Estamos creando dos nuevas variables firstName y lastName, después estamos extrayendo dos propiedades de person con el mismo nombre de las variables, el valor de esas propiedades es el que se asigna a las variables creadas.
  
  