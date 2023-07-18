//Completar la función pluck que extrae una lista de propiedades de un arreglo de objetos.

var singers = [
   { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
   { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
   { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];

  
  function pluck(list, propertyName) {
    const values = [];

    for (let i = 0; i < list.length; i++) {
        values.push(list[i][propertyName])
 }

    return values
}
  
  console.log( pluck(singers, 'name') );
 
  console.log( pluck(singers, 'band') );

  console.log( pluck(singers, 'born') );
 

  // Ejemplo propio:

  var footballers = [
    { name: 'Gavi', team: 'FC Barcelona', born: 2004},
    { name: 'Haaland', team: 'Manchester City', born: 2000},
    { name: 'Kvaratskhelia', team: 'SSC Napoli', born:2001}
  ];

  function pluck(list, propertyName) {
    const values = [];

    for (let i=0; i < list.length; i++){
        values.push(list[i][propertyName])
    }

    return values
  }

  console.log(pluck(footballers,'name'));

  console.log(pluck(footballers, 'team'));

  console.log(pluck(footballers, 'born'));