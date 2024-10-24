'use strict';


function Persona(nombre) {
    this.nombre = nombre
    this.apellido = 'Perez'
  // this.saluda = function() { console.log('Hola soy', this.nombre)}
/* El método 'saluda' se ha comentado aquí para demostrar 
     cómo se puede definir en el prototipo en su lugar */
}
/* Creación de instancias de Persona */
const pepe = new Persona('Pepe');
const luis = new Persona('Luis');

/* Definición de métodos en el prototipo de Persona */


/* Definición del método 'saluda' en el prototipo de Persona.
/* Definición de métodos en el prototipo de Persona ---
   Esto permite que todas las instancias de Persona compartan
   una única copia del método, ahorrando memoria. */
Persona.prototype.saluda = function() { console.log('Hola soy', this.nombre)}

Persona.prototype.adios = function() { console.log('Adios soy', this.nombre)}

/* Llamada al método 'saluda' en las instancias.
   Aunque el método no está definido directamente en las instancias,
   pueden acceder a él a través del prototipo. */
pepe.saluda()
// luis.saluda()
// Herencia simple
// Quiero hacer un tipo de Objetos llamado Agente que herede de Persona
pepe.adios()
/* Resumen de la finalidad del método usado:
   El uso de prototipos en este código optimiza la memoria y mejora
   la eficiencia del programa. Al definir el método 'saluda' en el
   prototipo de Persona, todas las instancias de Persona comparten
   una única copia de este método, en lugar de tener cada instancia
   su propia copia. Esto reduce significativamente el uso de memoria,
   especialmente cuando se crean múltiples instancias de la misma "clase". */

   function Agente(nombre) {
    // heredar el constructor de las personas
    // ejecutar el constructor de las personas, pero con mi "this"
    Persona.call(this, nombre)
  }
/* Heredar las propiedades del prototipo de Persona */
/* Esto establece la cadena de prototipos para que Agente herede de Persona */
Object.setPrototypeOf(Agente.prototype, Persona.prototype)

/* Creación de una instancia de Agente */
const smith = new Agente('Smith')

/* Demostración de que smith puede usar los métodos heredados de Persona */
smith.saluda()
smith.adios()

/* Resumen de la herencia simple:
   1. Se crea un constructor Agente que llama al constructor de Persona.
   2. Se establece la cadena de prototipos para que Agente herede de Persona.
   3. Las instancias de Agente pueden usar los métodos definidos en Persona.prototype.
   Este enfoque permite crear una jerarquía de objetos, donde los objetos hijos
   (Agente) heredan propiedades y métodos de los objetos padres (Persona). */
   