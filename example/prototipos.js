'use strict';


function Persona(nombre) {
    this.nombre = nombre
  // this.saluda = function() { console.log('Hola soy', this.nombre)}
/* El método 'saluda' se ha comentado aquí para demostrar 
     cómo se puede definir en el prototipo en su lugar */
}
/* Creación de instancias de Persona */
const pepe = new Persona('Pepe');
const luis = new Persona('Luis');

/* Definición del método 'saluda' en el prototipo de Persona.
   Esto permite que todas las instancias de Persona compartan
   una única copia del método, ahorrando memoria. */
Persona.prototype.saluda = function() { console.log('Hola soy', this.nombre)}

/* Llamada al método 'saluda' en las instancias.
   Aunque el método no está definido directamente en las instancias,
   pueden acceder a él a través del prototipo. */
pepe.saluda()
luis.saluda()
/* Resumen de la finalidad del método usado:
   El uso de prototipos en este código optimiza la memoria y mejora
   la eficiencia del programa. Al definir el método 'saluda' en el
   prototipo de Persona, todas las instancias de Persona comparten
   una única copia de este método, en lugar de tener cada instancia
   su propia copia. Esto reduce significativamente el uso de memoria,
   especialmente cuando se crean múltiples instancias de la misma "clase". */