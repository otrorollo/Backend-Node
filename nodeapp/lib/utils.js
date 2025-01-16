// Utilidades para manejar rutas de archivos en diferentes entornos de Node.js

/*
Introducción: 
El manejo de rutas de archivos y directorios es una tarea fundamental en el desarrollo de aplicaciones Node.js. Sin embargo, la forma de acceder a estas rutas ha evolucionado con el tiempo, especialmente con la introducción de ECMAScript Modules (ESM) en Node.js. Esta evolución ha creado la necesidad de adaptar nuestro código para que sea compatible con diferentes versiones de Node.js y sistemas de módulos.
Explicación extendida:
CommonJS vs ESM:
CommonJS es el sistema de módulos original de Node.js, que utiliza require() para importar módulos y module.exports para exportarlos.
ESM es el sistema de módulos estándar de JavaScript, que utiliza import y export para manejar módulos.
La variable __dirname:
En CommonJS, __dirname es una variable global que proporciona la ruta del directorio del archivo actual.
En ESM, __dirname no está disponible por defecto, lo que requiere una solución alternativa.
Evolución en Node.js:
Versiones anteriores a 20.11: No había una solución nativa para __dirname en ESM.
Versión 20.11 y superiores: Introducen import.meta.dirname como una solución nativa.
Soluciones para diferentes escenarios:
a) Para CommonJS:
// __dirname está disponible globalmente
b) Para ESM en Node.js 20.11+:
// import.meta.dirname
export const __dirname = import.meta.dirname;
c) Para ESM en versiones anteriores a 20.11:
// import { dirname } from 'node:path'
// import { fileURLToPath } from 'node:url'
// export const __filename = fileURLToPath(import.meta.url)
// export const __dirname = dirname(__filename)
Motivos y uso:
Compatibilidad: Este enfoque permite escribir código que funcione en diferentes versiones de Node.js y con distintos sistemas de módulos.
Portabilidad: Facilita la migración de proyectos de CommonJS a ESM.
Mantenibilidad: Proporciona una solución unificada para manejar rutas de archivos en diferentes entornos.
Flexibilidad: Permite a los desarrolladores elegir la solución más adecuada según la versión de Node.js y el sistema de módulos que estén utilizando.
Uso práctico:
En proyectos que utilizan ESM, puedes importar __dirname de este módulo de utilidades.
Esto te permite usar __dirname de manera consistente en todo tu proyecto, independientemente de la versión de Node.js o el sistema de módulos.
	*/

//-----------------------------------------------------------------------------------------------------------

// En CommonJS, __dirname está disponible globalmente
// __dirname

// Para ESM en Node.js 20.11 o superior
// import.meta.dirname proporciona la ruta del directorio actual
export const __dirname = import.meta.dirname;

// Para ESM en versiones de Node.js anteriores a 20.11
// Descomenta y usa este código si estás en una versión anterior
/*
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Obtiene la ruta completa del archivo actual
export const __filename = fileURLToPath(import.meta.url);

// Obtiene el directorio del archivo actual
export const __dirname = dirname(__filename);
*/

// Nota: Asegúrate de usar la versión adecuada según tu entorno de Node.js
