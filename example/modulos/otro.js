/**
 * Importando el mismo módulo en diferentes archivos
 * 
 * Nota: Este módulo compartirá el estado con otras importaciones del mismo módulo
 * Consejo: Ten cuidado con las modificaciones de estado en módulgit sos compartidos
 */

const modulo = require('./calculadora')

/**
 * Buenas prácticas:
 * - Mantén tus módulos pequeños y enfocados en una tarea específica
 * - Usa nombres descriptivos para tus variables y funciones
 * - Considera usar ES modules (import/export) para proyectos más modernos
 */