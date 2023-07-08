//En el ejemplo 2 transformamos un objeto a un arreglo con los pares [key, value] por cada propiedad y valor del objeto.

const car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
  }
  
  const keys = Object.keys(car)
  const pairs = []
  
  for(let i = 0; i < keys.length; i++) {
    pairs.push( [keys[i], car[keys[i]]] )
  }
  
  console.log(pairs)
  
  // [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]

  //Para este reto vamos a realizar lo opuesto. Es decir, tomar un arreglo con pares [key, value] y crear un objeto con sus respectivas propiedades y valores.

  const car2 = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]

  const car2Obj = {};
  Object.create(car2Obj);

  for(var i = 0; i < car.length; i++) {
    car2Obj[car[i][0]] = car2[i][1];
  }

  console.log(car2Obj)


