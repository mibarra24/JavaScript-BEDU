//window.addEventListener(
    //"click", //Evento
    // function(){ // Handler
    //console.log("Ouch!!")
//})

const button = document.getElementById("but");
//const button2 = document.querySelector("button")

button.addEventListener(
    "click", //Evento
    () => { //Handler
        console.log("Se dio click al boton")
    })

const but2 = document.getElementById("but2")

function one() {
    console.log("Le dimos click al otro boton")
    but2.removeEventListener("click", once)
}

but2.addEventListener("click", once)