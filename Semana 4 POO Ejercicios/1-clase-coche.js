//Crea una clase Coche con propiedades marca, modelo y año.
//Agrega métodos para:

//Mostrar la información del coche.
//Determinar si es antiguo (antes del año 2000).
//Verificar si es de lujo (ejemplo: "Mercedes", "BMW", "Audi").

//clase car con propiedades
class Car {
    constructor (brand,model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    }

    //métodos:

    //mostrar info del coche
    showInfo(){
        console.log (`${this.marca} ${this.brand} ${this.year}`)
    }

//determinar si es antiguo --> antes del año 2000

    isOld(){
        if (this.year < 2000 ) {
            console.log ("This car is old")
        } else  {
            console.log ("This car is not old")
        }
    }


//verificar si es de lujo
    isLuxurious (){
        const luxuriousBrands = ["Mercedes", "BMW", "Audi"]
        return luxuriousBrands.includes (this.brand)
    }
}

const car1 = new Car ("BMW", "X5", 1999)
car1.showInfo();

console.log (car1.isOld())
console.log(car1.isLuxurious())
