/**
 * Entendiendo module.exports en Node.js
 * 
 * Puntos clave:
 * - module.exports inicialmente es un objeto vacío
 * - Puedes asignar propiedades a él o reemplazarlo completamente
 * - El valor final de module.exports es lo que se exporta
 * - Ten cuidado al mezclar asignaciones de propiedades y asignación directa
 */

console.log(module.exports)

// module.exports = 42
// module.exports = 43

/**
 * Asignando propiedades a module.exports
 * Este enfoque permite exportar múltiples elementos
 */
module.exports.apellido = 'perez'

/**
 * Reemplazando module.exports con un objeto
 * Esta es una forma común de exportar múltiples funciones y valores
 * Consejo: Usa nombres descriptivos para tus funciones y propiedades
 */
module.exports = {
    suma(a, b) { return a + b},
    resta(a, b) { return a - b},
    nombre: 'casio',
    objeto2: {},
    objeto3: {}
}
/*
Objetos vacíos objeto2 y objeto3:
Propósito: Reservar espacio para futuras implementaciones
Uso: Podrían utilizarse más adelante para añadir más funcionalidad

    objeto2: {},
    objeto3: {}
    }

En resumen, este módulo calculadora.js crea una especie de "calculadora" simple 
que otros archivos pueden importar y utilizar. Proporciona funciones básicas como suma y resta,
y también incluye algunas propiedades adicionales. Es un ejemplo práctico de cómo estructurar 
y exportar funcionalidad en módulos de Node.js, lo cual es fundamental para crear aplicaciones organizadas y mantenibles. */