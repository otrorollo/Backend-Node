'use strict';

// crear una función para usarla como constructor de objetos
function Fruta(nombre) {
  // this contiene el objeto que se está creando, y que va a devolver new Fruta()
  this.nombre = nombre
  this.saluda = function() { console.log('Hola, soy', this.nombre)}
}
const limon = new Fruta('limon');
// JS para determinar que tiene "this" hace esto:
// busca el primer punto a la izquierda de los parentesis de ejecución
// y lo que haya a la izquierda será lo use como "this"
// limon.saluda();
setTimeout(limon.saluda.bind(limon), 2000);
// const saludoDelLimon = limon.saluda.bind(limon);
// saludoDelLimon();