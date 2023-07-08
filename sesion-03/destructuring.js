const colors = ["red", "green", "blue"]

const [x,y,z] = colors
console.log(x)

const person = {
    name : "Javier",
    apellido : "Enriquez",
    pais : "Mexico"
}

const {nombre: name, pais, edad = 26} = person
console.log(name)
console.log(person)