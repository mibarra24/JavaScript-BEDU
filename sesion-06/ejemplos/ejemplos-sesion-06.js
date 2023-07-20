//Ejemplo 1: creando objeto
const Person = function(name, birthYear, job){
    // Atributos
        this.name = name
        this.birthYear = birthYear
        this.job = job
    // Atributo
        this.calculateAge = () => 2023 - this.birthYear
    }
    
    const john = new Person("John", 1990, "Developer")
    const jane = new Person("Jane", 1995, "Designer")
    
    console.log(john)
    console.log(jane)
    
    console.log(john.calculateAge())
    console.log(jane.calculateAge())

//Ejemplo 2: Herencia

    const Medico = function(name, birthYear, job) {
        Person.call(name, birthYear, job)
        this.operar = () => {console.log("estoy operando")}
        this.habla = () => {console.log("Hola, soy medico")}
    }
    
    const Desarrollador = function(name, birthYear, job, skills) {
        Person.call(name, birthYear, job)
        this.skills = skills
        this.programar = () => {console.log("estoy programando")}
        this.habla = () => {console.log("Hola, soy desarrollador")}
    }


    const juan = new Desarrollador("Juan", 1998, "Developer", "javascript")
    const maria = new Medico("Maria", "2000", "Cirujano", "Pediatria")

    console.log(juan)
    juan.habla()
    maria.habla()

 // Ejemplo 3: Heredando metodos

   