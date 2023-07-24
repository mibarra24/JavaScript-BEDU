// Ejemplo 1: Mutando Objetos

const car = {
    brand: "Nissan",
    model: "Sentra",
    year: 2020
}

function addColor(car, color) {
    const carN = Object.assign({}, car, {color: color})
    return carN 
}

const newCar = addColor(car, "Black")

console.log(car)
console.log(newCar)

//En lugar de alterar una variable, se crea un nuevo objeto
//Ejercicio 2: creando funciones puras

var x = 4

function foo(a,b){
    x =x + a 
    return x * b
}

console.log(foo(2,5))
console.log(foo(2,5))

//Ejemplo repo:


const cart = [
    {
        item:'Laptop',
        quantity: 1
    }
]

function addItemToCart (item, quantity) {
    cart.push({
        item: item,
        quantity: quantity
    })
}

function addItemToCart(cart, item, quantity){
    const newCart = cart.map(function(element){
        return element;
    });

    newCart.push({
        item: item,
        quantity: quantity
    })

    return newCart
}

cart = addItemToCart(cart, 'Phone', 1);

console.log(cart);