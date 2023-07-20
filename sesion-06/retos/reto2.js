// Crear un function constructor Group el cual crea una lista (arreglo) vacía.

// Agregar los siguientes métodos a Group:
// add: Agrega un nuevo valor al grupo solo si no existe.
// has: Retorna un booleano indicando si el valor es un miembro del grupo.
// from: Método estático que recibe un arreglo y crea un grupo con todos los elementos de dicho arreglo.

const Group = function(value) {
  this.members = [];
}

//add
Group.prototype.add = function(value) {
  if(!this.has(value)) {
    this.members.push(value);
  }
}

//has
Group.prototype.has = function(value){
  return this.members.includes(value);
}

//from
Group.from = function(collection) {
  const group = new Group();

  for(let i = 0; i <collection.length; i++){
    group.add(collection[i])
  }
  return group;
}
  const group = Group.from([1, 2, 3, 4, 5]);
  console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
  console.log(group.has(5)); // true
  console.log(group.has(10)); // false
  
  group.add(10);
  console.log(group.has(10)); // true
