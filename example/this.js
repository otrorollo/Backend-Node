'use strict';

// crear una función para usarla como constructor de objetos
function Fruta(nombre) {
  // this contiene el objeto que se está creando, y que va a devolver new Fruta()
  this.nombre = nombre
  this.saluda = function() { console.log('Hola, soy', this.nombre)}
}
/*
Esta es una función constructora para crear objetos Fruta.
      -'this' dentro de la función se refiere al nuevo objeto que se está creando.
      -'nombre' es una propiedad que se asigna al objeto.
      -'saluda' es un método que se añade al objeto.
Anotación: Las funciones constructoras se usan con 'new' para crear objetos. 
Es una forma tradicional de crear "clases" en JavaScript antes de ES6.

*/


const limon = new Fruta('limon');
/* 
Crea una nueva instancia de Fruta llamada limon.
new crea un nuevo objeto y llama a Fruta con this apuntando a ese nuevo objeto.
Anotación: new es crucial aquí. Sin él, this apuntaría al objeto global (o sería undefined en modo estricto).
*/

// JS para determinar que tiene "this" hace esto:
// busca el primer punto a la izquierda de los parentesis de ejecución
// y lo que haya a la izquierda será lo use como "this"
// limon.saluda();
setTimeout(limon.saluda.bind(limon), 2000);

/*
setTimeout ejecuta una función después de un retraso (2000 ms en este caso).
.bind(limon) crea una nueva función donde this siempre será limon.
Anotación: Sin .bind(limon), this dentro de saluda sería el objeto global o undefined, no limon.
*/

// const saludoDelLimon = limon.saluda.bind(limon);
// saludoDelLimon();
/* 
Estas líneas también están comentadas.
Crean una nueva función saludoDelLimon con this fijado a limon.
Luego se podría llamar esta función sin perder el contexto de this.
Anotación general: Este código demuestra cómo el valor de this puede 
cambiar dependiendo de cómo se llama una función. .bind() es una forma de 
controlar el valor de this, lo cual es crucial en callbacks y funciones asíncronas.
*/