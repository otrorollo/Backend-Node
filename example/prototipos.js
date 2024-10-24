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
    Persona.call(this, nombre) //super
  }
/**Esta línea es equivalente a usar super(nombre) en las clases modernas de JavaScript.
call es un método que permite llamar a una función con un this específico y argumentos.
En este caso, estamos llamando al constructor de Persona con el this de Agente y pasando el argumento nombre.
Esto asegura que el constructor de Persona se ejecute en el contexto del nuevo objeto Agente, inicializando sus propiedades. */
/* Heredar las propiedades del prototipo de Persona */
/* Esto establece la cadena de prototipos para que Agente herede de Persona 
class Persona {
  constructor(nombre) {
    this.nombre = nombre
    this.apellido = 'Perez'
  }

  saluda() {
    console.log('Hola soy', this.nombre)
  }
}

class Agente extends Persona {
  constructor(nombre) {
    super(nombre)
  }
}
Aquí está la explicación:
class Persona: Define la clase base.
class Agente extends Persona:
extends indica que Agente hereda de Persona.
Esto es equivalente a Object.setPrototypeOf(Agente.prototype, Persona.prototype) en el enfoque de prototipos.
constructor(nombre):
Es equivalente a la función Agente(nombre) en el enfoque de prototipos.
super(nombre):
Llama al constructor de la clase padre (Persona).
Es equivalente a Persona.call(this, nombre) en el enfoque de prototipos.
La clase Agente hereda automáticamente el método saluda() de Persona.
La palabra clave extends simplifica significativamente la implementación de la herencia. 
Hace que el código sea más legible y fácil de entender, ocultando los detalles complejos de la 
manipulación de prototipos que vimos en el archivo original.
Esta sintaxis de clases es "azúcar sintáctico" sobre el sistema de prototipos de JavaScript, 
lo que significa que internamente JavaScript sigue usando prototipos, pero nos proporciona una 
forma más clara y familiar de escribir código orientado a objetos.

*/
Object.setPrototypeOf(Agente.prototype, Persona.prototype)

/**En la sintaxis de clases modernas, esto se logra automáticamente con class Agente extends Persona. 
 * En el PDF, aparece referenciado el extends 
 * 
 * */
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

// Herencia múltiple

// Quiero que los agentes hereden tanto de las personas como de los superheroes
/* Definimos una nueva "clase" Superheroe */
function Superheroe() {
    this.vuela = function() { console.log(this.nombre, 'vuela')}
  }
  
  /* Implementamos herencia múltiple usando Object.assign */
  /* Esto copia todas las propiedades de una nueva instancia de Superheroe al prototipo de Agente */
  Object.assign(Agente.prototype, new Superheroe())
  
  /* Ahora smith, siendo un Agente, también tiene acceso al método 'vuela' */
  smith.vuela()
  
  /* Imprimimos smith para ver su estructura */
  console.log(smith)
  
  /* Imprimimos el prototipo de Agente para ver las propiedades heredadas */
  console.log(Agente.prototype)
  
  /* Verificamos la cadena de prototipos usando instanceof */
  console.log(smith instanceof Persona)    // true: smith es una instancia de Persona
  console.log(smith instanceof Agente)     // true: smith es una instancia de Agente
  console.log(smith instanceof Superheroe) // false: técnicamente, smith no es una instancia directa de Superheroe
  
  /* Resumen de herencia múltiple:
     1. Se crea una nueva "clase" Superheroe con un método 'vuela'.
     2. Se usa Object.assign para copiar propiedades de Superheroe al prototipo de Agente.
     3. Esto permite que las instancias de Agente (como smith) accedan a métodos de Superheroe.
     4. La verificación con instanceof muestra las limitaciones de este enfoque de herencia múltiple. */

/**
 * aclaración:
 * Este código demuestra una forma de implementar herencia múltiple en JavaScript, 
 * aunque tiene algunas limitaciones. El uso de Object.assign permite copiar propiedades 
 * de una clase a otra, pero no establece una verdadera relación de herencia en términos 
 * de la cadena de prototipos. Esto se refleja en el resultado de instanceof Superheroe, que es false.
Es importante notar que este enfoque de herencia múltiple es una simulación y tiene sus 
limitaciones. En JavaScript moderno, se prefieren otros patrones como la composición o el uso 
de mixins para lograr funcionalidad similar a la herencia múltiple de una manera más flexible y mantenible.
 */