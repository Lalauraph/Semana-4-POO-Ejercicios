    //Crea una clase CuentaBancaria con propiedades titular y saldo.
    //Agrega métodos para:

    //Depositar dinero.
    //Retirar dinero (validando que haya fondos).
    //Mostrar el saldo actual.


    //clase cuenta bancaria con propiedades  tip: poner las clases con la primera letra mayúscula
        class CuentaBancaria {
            constructor(titular, saldo){
            this.titular=titular;
            this.saldo=saldo;
            }

        //métodos


        //poner return para que no aparezca undefinde
        saldoActual(){
        return `El saldo es ${this.saldo} pesos`
        }

       depositarDinero (dinero){

       this.saldo = this.saldo + dinero  //this.saldo += dinero 
       console.log(`Usted ha depositado ${dinero}`)
       console.log(this.mostrarSaldo())
       }


       retirarDinero(dineroARetirar){
        this.saldo -= dineroARetirar
        console.log(this.mostrarSaldo())
        return dineroARetirar
       }

}

        //crear una instancia a partir del molde para mostrar saldo
        const cuentaDeLaura = new CuentaBancaria ("Laura", 50000)  //const para que no se modifique en el futuro
        console.info(cuentaDeLaura.mostrarSaldo())  //console.info --> mostrar información
        cuentaDeLaura.depositarDinero(10000)
        cuentaDeLaura.retirarDinero(1)

        //MIRAR CODIGO COMPLETO EN DISCDORD