# Backend-Node

Apuntes de clase 

Primera toma de contacto - Lo subo todo en un primer commit

## 'use strict';

Esto activa el modo estricto en JavaScript.
Propósito: Ayuda a prevenir errores comunes y hace que el código sea más seguro y optimizable.
En el package.json al poner type: module , ya quedaria como estricto y no haria falta mencionarlo en el js.

## "Azúcar sintáctico":

Este término se refiere a características del lenguaje que hacen el código más fácil de leer o expresar.
No añaden nuevas funcionalidades, sino que proporcionan una sintaxis más clara o concisa para hacer lo mismo.
En JavaScript moderno, la palabra clave class y extends son ejemplos de azúcar sintáctico para la herencia basada en prototipos.

## modulos
Para mayor comprensión:
cómo funcionan los módulos en Node.js:
### Exportación en calculadora.js:
javascript

`module.exports = {
  suma(a, b) { return a + b },
  resta(a, b) { return a - b },
  nombre: 'casio',
  // ...
}`

Aquí, module.exports es un objeto especial en Node.js. Todo lo que asignes a module.exports será lo que el módulo exporte.
### Importación en index.js:
javascript
`
const modulo = require('./calculadora')`

`require('./calculadora')` importa todo lo que fue exportado por calculadora.js.
modulo es simplemente una variable local en index.js. 
Puedes nombrarla como quieras, no tiene que coincidir con module.exports.

### Acceso al contenido del módulo:
Cuando haces const modulo = require('./calculadora'), modulo se convierte en una referencia al objeto que fue asignado a module.exports en calculadora.js.
### Un solo módulo por archivo:
Cada archivo en Node.js es considerado un módulo separado. calculadora.js es un solo módulo que exporta un objeto con múltiples propiedades y métodos.
### Múltiples exportaciones:
Aunque calculadora.js es un solo módulo, puede exportar múltiples elementos dentro de su objeto module.exports. Cada propiedad o método en ese objeto se convierte en una exportación individual del módulo.
### Flexibilidad en la importación:
Puedes importar todo el módulo como hiciste con const modulo = require('./calculadora'), o puedes desestructurar para importar elementos específicos:
javascript
const { suma, resta } = require('./calculadora')

#### En resumen:
 module.exports en calculadora.js define lo que el módulo exporta, y require('./calculadora') en index.js importa esas exportaciones. El nombre modulo en index.js es arbitrario y podría ser cualquier nombre válido de variable.

 # Patrón Singleton en el Módulo calculadora.js

El patrón **Singleton** en el contexto de un módulo como `calculadora.js` se refiere a la idea de que solo debe haber una instancia de ese módulo en toda la aplicación. Aquí te explico cómo se relaciona y por qué es útil:

## ¿Qué es un Singleton?

- **Definición**: Un Singleton es un patrón de diseño que asegura que una clase tenga una única instancia y proporciona un punto de acceso global a esa instancia.
- **Uso**: Se utiliza cuando necesitas controlar el acceso a un recurso compartido, como una configuración o una conexión a una base de datos.

## Aplicación en calculadora.js

- **Módulo Único**: En Node.js, cada archivo se considera un módulo. Cuando importas `calculadora.js` en otro archivo (como `index.js`), estás accediendo a la misma instancia del módulo cada vez que lo requieres.
  
- **Exportaciones**: Al usar `module.exports`, puedes definir qué funciones y propiedades estarán disponibles para otros módulos. Esto significa que puedes tener un conjunto de operaciones (como suma y resta) accesibles desde cualquier parte de tu aplicación sin crear múltiples instancias.

## Ejemplo Práctico

- Cuando haces `const modulo = require('./calculadora')`, obtienes acceso a las funciones y propiedades definidas en `calculadora.js`.
  
- Si cambias alguna propiedad, como `modulo.nombre`, ese cambio se reflejará en todas las importaciones del módulo, ya que todas apuntan a la misma instancia.

## Ventajas del Singleton en Módulos

- **Consistencia**: Al tener una única instancia, aseguras que todos los módulos que importan `calculadora.js` trabajen con los mismos datos y funciones.
  
- **Eficiencia**: Evitas la sobrecarga de crear múltiples instancias del mismo módulo, lo que puede ser innecesario y consumir recursos.
  
- **Facilidad de Uso**: Proporciona una forma sencilla de acceder a funcionalidades comunes sin necesidad de instanciar objetos repetidamente.

## Conclusión

En resumen, el patrón Singleton aplicado al módulo `calculadora.js` asegura que tengas una única fuente de verdad para las operaciones matemáticas definidas en ese módulo. Esto no solo mejora la organización del código, sino que también facilita el mantenimiento y la escalabilidad de tu aplicación al evitar inconsistencias entre diferentes instancias del mismo módulo.