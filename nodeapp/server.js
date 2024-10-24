import http from 'node:http'; // Importa el módulo HTTP de Node.js
import express from 'express'; // Importa el framework Express para crear aplicaciones web
import debugLib from 'debug'; // Importa la librería de depuración

/**
 * Se importan los módulos necesarios: http, express, y debug. 
 * Esto permite crear un servidor HTTP, manejar rutas y habilitar mensajes de depuración
 */

const debug = debugLib('nodeapp:server');
// Inicializa la librería de depuración con un prefijo específico

const port = process.env.PORT || 3000;
// Establece el puerto en el que el servidor escuchará, usando una variable de entorno o 3000 por defecto

const app = express(); // Crea una instancia de la aplicación Express

app.get('/', (req, res, next) => {
    res.send('Hola'); // Define una ruta que responde con "Hola" cuando se accede a la raíz
}); //app.get('/', ...): Establece una ruta para manejar solicitudes GET a la raíz (/). 
// Cuando se accede a esta ruta,responde con "Hola".

//create http server
const server = http.createServer(app);  // Crea un servidor HTTP utilizando la instancia de Express

// Muestra un mensaje en la consola cuando el servidor comienza a escuchar en el puerto especificado
server.on('listening', () => { debug('Servidor arrancado en puerto ${port}')}); 
server.listen(port)// Inicia el servidor para que escuche en el puerto definido