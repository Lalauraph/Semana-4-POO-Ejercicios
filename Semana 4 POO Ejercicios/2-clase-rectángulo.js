//Ejercicio 2: Clase Rectángulo
//Crea una clase Rectángulo con propiedades ancho y alto.
//Agrega métodos para:

//Calcular el área.
//Calcular el perímetro.
//Verificar si es un cuadrado.

class Rectangle {
constructor (height, width){
this.height = height;
this.width = width;
}

calculateArea () {
    return this.height * this.width
}

calculatePerimeter (){
  return 2 * (this.height*this.width)  
}

isAsquare (){
    return this.height === this.width
}

}

const rectangle1 = new Rectangle (5,8)
console.log(rectangle1.calculateArea())
console.log(rectangle1.calculatePerimeter())
console.log(rectangle1.isAsquare())