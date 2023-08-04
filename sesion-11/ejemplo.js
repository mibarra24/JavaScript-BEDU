//SYNC
function foo() {
    setTimeout(() => {
        return "Hola"
    }, 5000)
}

var saludo = foo()

console.log(saludo)

//CALLBACK

function fooC (callback){
    setTimeout(() => {
        callback("hola")
    },5000)
}

fooC(x => console.log(x))
console.log("Sigo esperando")

//PROMESAS

function fooP(){
    //console.log("Antes del return")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log("Antes del resolve")
            reject("La promesa se rompio")
        }, 2000)
    })
}

fooP()
.then(value => console.log(value))
.catch(error => console.log(error))

//ASYNC AWAIT

async function fooA(){
    return Promise.rejectet(new Error("Hola Async Await"))
}

 async function bar(){
    try {
        let saludo = await fooA()
        console.log("Esto no es un error", saludo)
    } catch (e) {
        console.log("Esto es un error", e)
    }
 }
 
 bar()