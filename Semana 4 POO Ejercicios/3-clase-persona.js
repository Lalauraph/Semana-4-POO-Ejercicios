    //Crea una clase Persona con propiedades nombre, edad y profesión.
    //Incluye métodos para:

    //Presentarse mostrando todos sus datos.
    //Verificar si es mayor de edad.

    class Someone {
            constructor (name,age,profession){
        this.name = name;
        this.age = age;
        this.profession = profession;
            }

    presentation(){
        console.log(`Hello my name is ${this.name}, i am ${this.age} and i am a ${this.profession}`)
    }

    isAnAdult (){
        if (this.age >= 18) {
            console.log ("Is an adult")
        }
        else {
            console.log ("Is not an adult")
        }
    }

    }

    const person1 = new Person ("Ana", 19, "designer")
    person1.presentation()
    console.log(person1.isAnAdult())
    