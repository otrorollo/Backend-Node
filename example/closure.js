
'use strict';
/* 
Un closure es una función que tiene acceso al ámbito léxico en el que fue creada,
incluso después de que la función externa haya terminado de ejecutarse.
*/

function creaVehiculo(nombre) {
/* 
   * 'numRuedas' es una variable local de creaVehiculo.
   * Normalmente, esta variable dejaría de existir cuando creaVehiculo termine de ejecutarse.
   * Sin embargo, debido al closure, las funciones internas seguirán teniendo acceso a ella.
   */

const numRuedas = 4;
/* 
   * Este objeto retornado contiene dos métodos que forman un closure.
   * Ambos métodos tienen acceso a las variables 'nombre' y 'numRuedas',
   * incluso después de que creaVehiculo haya terminado su ejecución.
   */

return {
    saluda: function() { console.log('Hola soy', nombre, 'y tengo', numRuedas, 'ruedas')},
/* 
     * Esta función 'saluda' es un closure. Tiene acceso a 'nombre' y 'numRuedas'
     * del ámbito de creaVehiculo, formando así un closure.
     */

    setNumRuedas: function(valor) { numRuedas = valor }
    }
/* 
     * Esta función 'setNumRuedas' también es un closure.
     * Sin embargo, hay un error aquí: no se puede reasignar 'numRuedas' porque es una constante.
     * Para que funcione, 'numRuedas' debería ser declarada con 'let' en lugar de 'const'.
     */

}
/* 
 * Aquí creamos dos instancias diferentes de vehículos.
 * Cada una tendrá su propio closure con sus propios valores para 'nombre' y 'numRuedas'.
 */
const seat = creaVehiculo('Seat Ibiza')
const opel = creaVehiculo('Opel Astra')
// seat.saluda()
/* 
 * Estos setTimeout demuestran cómo los closures mantienen acceso a sus variables
 * incluso después de que la función creadora (creaVehiculo) haya terminado.
 * Sin embargo, hay un problema potencial aquí con el valor de 'this'.
 */
setTimeout(seat.saluda, 2000)
setTimeout(opel.saluda, 2000)

/* 
 * NOTA: En los setTimeout, el método 'saluda' se pasa como callback.
 * Esto puede causar que 'this' no se refiera al objeto del vehículo dentro de 'saluda'.
 * Para solucionarlo, se podría usar una función flecha o .bind():
 * setTimeout(() => seat.saluda(), 2000)
 * o
 * setTimeout(seat.saluda.bind(seat), 2000)
 */