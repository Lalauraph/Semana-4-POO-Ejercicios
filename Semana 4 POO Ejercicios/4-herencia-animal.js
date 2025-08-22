//Crea una clase base Animal con un método hacerSonido().
//Luego, crea clases hijas Perro y Gato que sobrescriban 
//ese método con sonidos distintos.

class Animal {

makeAsound(){
console.log("animal sound")
}

}

//clases hijas

class Dog extends Animal {
    makeAsound (){
        console.log("guau guau")
    }
}

class Cat extends Animal {
    makeAsound(){
        console.log("miaw")
    }
}

const dog = new Dog
const cat = new Cat

dog.makeAsound()
cat.makeAsound()