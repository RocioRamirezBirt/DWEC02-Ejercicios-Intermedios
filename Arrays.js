'use strict';
//------------------ARRAYS -----------------------------//

// consultar en https://www.w3schools.com/js/js_arrays.asp

// CREAR UN ARRAY
const coches = ['Saab','Volvo','BMW'];
const frutas = new Array('Platano','Naranja','Mango')

//ACCEDER A UN ARRAY
let x = coches[1];
console.log(x);

// RECORRER A UN ARRAY

for (let i=0; i< coches.length; i++){
    console.log(coches[i]);
}
 
//PROPIEDADES Y METODOS PRINCIPALES

//devuelve el numero de elementos
coches.length

//ordena el array
coches.sort()

//le da la vuelta al array
coches.reverse();

//añadir elementos al final del array
coches.push('audi')

//añadir al principio del array
coches.unshift('mercedes')
//console.log(coches)

//borrar elemento
coches.pop('audi');
//console.log(coches)

//borrar elemento primero
coches.shift()
console.log(coches)

//convertir el array a string
coches.toString

//INDICES

//devuelve el indice donde aparece el elemento
coches.push('Audi');
console.log(coches.indexOf('Audi'));

// devuelve true o false si el array tiene el elemento indicado
console.log(coches.includes('Mercedes'));