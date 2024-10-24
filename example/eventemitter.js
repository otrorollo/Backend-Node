'use strict';

// Importamos el módulo 'events' de Node.js
const EventEmitter = require('node:events');

// Creamos una nueva instancia de EventEmitter
const emisor = new EventEmitter();

/* Configuramos un listener para el evento 'llamada de telefono'
   Este listener se ejecutará cada vez que se emita el evento */
emisor.on('llamada de telefono', function(quienLlama) {
  // Si quien llama es 'hermana', el listener termina sin hacer nada
  if (quienLlama === 'hermana') {
    return
  }
  // En caso contrario, imprime 'ring ring'
  console.log('ring ring')
})

/* Configuramos otro listener para el mismo evento
   Este listener se ejecutará solo una vez */
emisor.once('llamada de telefono', function() {
  console.log('brr brr')
})

/* Emitimos el evento 'llamada de telefono' tres veces
   Pasamos 'hermana' como argumento en cada emisión */
emisor.emit('llamada de telefono', 'hermana')
emisor.emit('llamada de telefono', 'hermana')
emisor.emit('llamada de telefono', 'hermana')

/* Explicación del comportamiento:
   1. El primer listener (on) no imprimirá nada porque quien llama es 'hermana'.
   2. El segundo listener (once) se ejecutará solo en la primera emisión, imprimiendo 'brr brr'.
   3. Las siguientes emisiones no producirán ninguna salida visible.

   Este ejemplo demuestra cómo los Event Emitters en Node.js permiten:
   - Crear y manejar eventos personalizados
   - Adjuntar múltiples listeners a un evento
   - Pasar datos al emitir eventos
   - Controlar la frecuencia de ejecución de los listeners (on vs once)
*/

/**
 * Explicación del Código

 * Importación y Creación:
        *  Se importa el módulo events y se crea una instancia de EventEmitter, que es una clase que permite crear 
        * y manejar eventos personalizados.
 * Listeners: 
 * Se definen dos listeners para el evento 'llamada de telefono'. 
        * El primero (on) se ejecuta cada vez que se emite el evento, pero solo actúa si quien llama no es 'hermana'. 
        * El segundo (once) se ejecuta solo la primera vez que se emite el evento, independientemente del argumento.
 * Emisión del Evento: 
 *      El evento 'llamada de telefono' se emite tres veces con 'hermana' como argumento. Debido a las condiciones en los listeners, solo el segundo listener imprime un mensaje una vez.
 * Uso Práctico: 
 *      Este patrón es útil para gestionar eventos en aplicaciones Node.js, permitiendo una comunicación 
 *      eficiente entre diferentes partes del sistema.
 * Resumen
 * El uso de EventEmitter en Node.js facilita la creación y gestión de eventos personalizados. Los métodos on y once 
 *      permiten definir cómo y cuándo deben ejecutarse los listeners, ofreciendo flexibilidad para manejar eventos 
 *      recurrentes o únicos.
 *
 */