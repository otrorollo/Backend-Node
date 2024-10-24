'use strict';

/**
 * Importando módulos en Node.js
 * 
 * Consejos:
 * - Usa 'const' para importar módulos, ya que no deberían ser reasignados
 * - La ruta './calculadora' es relativa al archivo actual
 * - Node.js cachea los módulos, por lo que múltiples requires del mismo módulo
 *   devolverán el mismo objeto
 */
const modulo = require('./calculadora')
const modulo2 = require('./calculadora')

// Desestructuración: otra forma de importar específicamente lo que necesitas
// const { suma } = require('./calculadora')

console.log(modulo)

// Comentarios útiles para depuración
// console.log(modulo.suma(2,6))
// console.log(modulo.nombre)

/**
 * Modificando propiedades del módulo importado
 * Precaución: Esto afectará a todas las importaciones de este módulo
 */
modulo.nombre = 'sharp'

// console.log(modulo2.nombre)
// console.log(suma(4, 5))