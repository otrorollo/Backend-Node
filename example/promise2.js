'use strict';

var ingredientes = ['sal','pimienta','conejo','gambas'];

/**
 * Función que simula echar un ingrediente
 * @param {string} string - Nombre del ingrediente
 * @returns {Promise} Una promesa que se resuelve inmediatamente con el ingrediente
 */
function echar(string) {
  return new Promise((resolve, reject) => {
    console.log('echo', string)
    resolve(string)
  })
}

// Creamos un array de promesas mapeando cada ingrediente a la función echar
var promisedTexts = ingredientes.map(echar)

// Usamos Promise.all para esperar a que todas las promesas se resuelvan
Promise.all(promisedTexts).then(resultados => {
  console.log(resultados)
})