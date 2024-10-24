'use strict';

// crear una función para usarla como constructor de objetos
function Fruta(nombre) {
  // this contiene el objeto que se está creando, y que va a devolver new Fruta()
    this.nombre = nombre
    this.saluda = function() { console.log('Hola, soy', this.nombre)}
}

const limon = new Fruta('limon');

console.log(limon);

limon.saluda();