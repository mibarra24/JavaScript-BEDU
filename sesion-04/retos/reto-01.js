
//Crear una función power que recibe dos argumentos base y exponent. La función debe retornar el resultado de elevar base a la potencia exponent

function power(base, exponent){
    let result = 1;

    for(var i = 0; i < exponent; i++) {
        result *= base; 
    }

    return result;
}

console.log(power(8,3));
