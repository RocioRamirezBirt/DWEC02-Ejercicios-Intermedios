/* 
Para iterar sobre arrays, objetos y colecciones se utiliza estructuras iterativas. 
* El bucle forEach es ideal para recorrer arrays
* El bucle for-in te permite iterar sobre las propiedades de un objeto. 
* El bucle for-of, por otro lado, es útil para recorrer elementos de estructuras como arrays o strings,  
permitiéndote manipular datos de manera eficiente en diversos escenarios. 
Verás también una de las maneras en las que se pueden recorrer las estructuras de datos con formato JSON.
*/

'use strict'

//-----------------------------RECORRER ARRAYS Y OTRAS FORMAS-----------------------

let frutas = ['manzana','pera','platano','naranja'];

// FOR EACH

console.log('------------FOR EACH----------');
frutas.forEach(funcionRecorrer); //con una funcion que pinte todos los elementos

function funcionRecorrer (valor) {
    console.log(valor);
}

// MAP 

console.log('------------MAP----------');
//otra forma de recorrer un array
const numeros = [4,45,9,2,6]
const numeros2 = numeros.map(multiplicar)

function multiplicar(value, index, array) {
    return value * 2;
}

console.log(numeros2)


console.log('------------FOR IN----------');
//FOR IN la que mas se suele utilizar

let datos; //json
datos = '{"empleado":{"nombre":"Sara","edad":30,"ciudad":"Orduna","comercial":true,"clientes":["Bar Kirruli","Restaurante Agape","Cafeteria Nervion"],"genero":null}}'

var objetoParseado = JSON.parse(datos); //convierte a un objeto con sus atributos

let texto = ``;

for(let propiedad in objetoParseado.empleado) {
    console.log(objetoParseado.empleado[propiedad]);
}

console.log('------------FOR OF----------');
//FOR OF

let lenguaje = 'Javascript'

for(let x of lenguaje) {
    console.log(x)
}