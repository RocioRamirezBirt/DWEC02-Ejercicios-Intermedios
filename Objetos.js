'use strict'

//--------OBJETOS-----------------------------------
// https://www.w3schools.com/js/js_objects.asp

//CREAR UN OBJETO
const persona = {
    nombre: 'Rocio',
    apellido: 'Ramirez',
    edad: 43
}

/* console.log(typeof(persona)); */


//-----------LEER PROPIEDADES ---> GET //
//console.log(persona.apellido);



//-----------ESCRIBIR  PROPIEDADES ---> SET //
persona.apellido = 'Cazares';
console.log(persona.apellido);



// METODOS------------>

const persona2 = {
    nombre: 'Sara',
    apellido: 'Ramirez',
    edad: 45,
    nombreCompleto: function() {  // METODOS ES USAR UNA FUNCION DENTRO DE UN OBJETO
        return this.nombre + " " + this.apellido
    }
}

console.log(persona2.nombreCompleto())

//CLASES -------------------->
class Coche {
    //CONSTRUCTOR
    constructor(nombre, anio){
        this.nombre = nombre;
        this.anio = anio;
    }

    //METODOS

    fecha() {
        let fecha = new Date()
        return fecha.getFullYear()
    }
}

var coche = new Coche('Audi', 2014)
console.log(coche.fecha())