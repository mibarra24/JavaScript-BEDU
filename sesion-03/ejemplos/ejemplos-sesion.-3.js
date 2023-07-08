//Ejemplo 1

const color1 = 'Red'
const num1 = 45

const colores = ["Red","Green","Blue"]

colores[0] = "Pink"
colores[3] = "Red"

console.log(colores)
console.log(colores.length)

const numbers = [1,2,3,4,5,6]
const double = []
const double2 = []

for(let i = 0; i < numbers.length; i++){
    double.push(numbers[i]*2)
}

for (const number of numbers)

console.log(double)
console.log(double2)

// Ejemplo 2
const john = {
    firstName : "John",
    lastName : "Doe",
    birthYear: "1994",
}

john.lastName = "Perez"

console.log(john.firstName)
console.log(john['firstName'])

const car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2023
  }
  
  const keys = Object.keys(car)
  console.log(keys)

  const pairs = []

  for(let i = 0; i < keys.length; i++) {
    pairs.push( [keys[i], car[keys[i]]] )
  }

  const pairs2 = []

  for (const key of keys) {
    pairs2.push([key, car[key]])
  }
  
  const pairs3 = []

  for (const property in car){
    pairs3.push([property, car[property]])
  }
  
  console.log(pairs)
  console.log(pairs2)
  console.log(pairs3)
  
  // [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]

  // Ejemplo 3

  
