//Crear un function constructor Triangle con tres parámetros a, b y c. Cada uno representa un lado del triángulo.
//Agregar el método getPerimeter al prototype de Triangle, el cual retorna el perímetro del triángulo.

const Triangle = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
  }

  const triangle = new Triangle(1, 2, 3);
  
  console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
  console.log(triangle.getPerimeter()); // 6

  