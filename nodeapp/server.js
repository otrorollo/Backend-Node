import http from 'node:http'; // Importa el módulo HTTP de Node.js

import debugLib from 'debug'; // Importa la librería de depuración

import app from './app.js'

/**
 * Se importan los módulos necesarios: http, express, y debug. 
 * Esto permite crear un servidor HTTP, manejar rutas y habilitar mensajes de depuración
 */

const debug = debugLib('nodeapp:server');
// Inicializa la librería de depuración con un prefijo específico

const port = process.env.PORT || 3000;
// Establece el puerto en el que el servidor escuchará, usando una variable de entorno o 3000 por defecto

//create http server
const server = http.createServer(app);  // Crea un servidor HTTP utilizando la instancia de Express

/**
 * Configura un manejador de eventos para errores del servidor.
 * Cuando ocurre un error, lo imprime en la consola.
 */
server.on('error', err => console.error(err))
// Muestra un mensaje en la consola cuando el servidor comienza a escuchar en el puerto especificado
server.on('listening', () => { debug('Servidor arrancado en puerto ${port}')}); 
server.listen(port)// Inicia el servidor para que escuche en el puerto definido