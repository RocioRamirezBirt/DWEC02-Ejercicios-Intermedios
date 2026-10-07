'use strict'

//----------------------------JSON---------------/

/*
    Los datos vienen expresados como pares clave/valor
    cada par se separa con comas



    - Tipos de datos
    -JSON
    -funciones
    -fechas
    -undefined
    
*/

// CONVERTIR JSON A OBJETO JS

let datos;
datos = '{"empleado":{"nombre":"Sara","edad":30,"ciudad":"Orduna","comercial":true,"clientes":["Bar Kirruli","Restaurante Agape","Cafeteria Nervion"],"genero":null}}'

console.log(datos);
//console.log(typeof(datos));

var objetoParseado = JSON.parse(datos) //convierte a un objeto con sus atributos
//console.log(objetoParseado)
//console.log(typeof(objetoParseado));
//console.log(objetoParseado.empleado.nombre); // acceder a una propiedad

//----------------------------------------------------------------------------------------

// CONVERTIR OBJETO JS A JSON

var miJSON = JSON.stringify(objetoParseado)
console.log(typeof(miJSON));



