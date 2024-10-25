//me lo traigo de server - el import el const app y app.get 

import express from 'express'; // Importa el framework Express para crear aplicaciones web 

const app = express(); // Crea una instancia de la aplicación Express


//app.get('/', ...): Establece una ruta para manejar solicitudes GET a la raíz (/). 

app.get('/', (req, res, next) => {
// Esta ruta lanza un error intencionalmente para demostrar el manejo de errores.
    throw new Error('fatal'),  // Lanza un error intencionalmente; el siguiente código no se ejecutará.

    // Cuando se accede a esta ruta,responde con "Hola".
    res.send('Hola'); // Define una ruta que responde con "Hola" cuando se accede a la raíz
    // Esta línea no se alcanzará debido al error lanzado.
}); 

// error handler:  Se conoce como "Error Handling Middleware".
/**En Express.js: un Middleware es una función que tiene acceso al objeto de solicitud (req), al objeto de respuesta (res), y a la siguiente función de middleware en el ciclo de solicitud-respuesta de la aplicación (next).
El manejador de errores es un Middleware especial que toma cuatro argumentos en lugar de tres: (err, req, res, next). */
// error handler
/**
 * Middleware de manejo de errores.
 * Este es un tipo especial de middleware que toma cuatro argumentos en lugar de tres.
 * Express reconoce que es un manejador de errores por la presencia de estos cuatro argumentos.
 * Se utiliza para capturar y procesar errores que ocurren durante la ejecución de la aplicación.
 */
app.use((err, req, res, next) => {
    res.send('Ocurrió un error: ' + err.message) // Envía un mensaje de error al cliente.
    })


/* Exporta la aplicación Express configurada */
export default app