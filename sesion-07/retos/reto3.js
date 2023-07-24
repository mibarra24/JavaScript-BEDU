//Crear una función de alto orden loop que será similar a un for.

//Recibe tres argumentos: start, una función test, una función update y una función body.

//El ciclo empieza en start y termina cuando test retorne false.
//En cada iteración se ejecuta la función body dándole como argumento el valor actual de start actual.
//Al final de cada ciclo se ejecuta la función update.

function loop(start, test, update, body) {
    for(let value = start; test(value); value = update(value)) {
        body(value);
    }  }
  
  const test = function(n) {
    return n > 0;
  }
  
  const update = function(n) {
    return n - 1;
  }
  
  loop(3, test, update, console.log);
  // 3
  // 2
  // 1