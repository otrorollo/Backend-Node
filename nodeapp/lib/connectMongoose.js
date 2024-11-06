import mongoose from 'mongoose'

/** Manejador de eventos para errores de conexión */
mongoose.connection.on('error', err => {
    console.log('Error de conexión', err)
} )

/** 
 * Función para conectar a MongoDB
 * @returns {Promise} Promesa de conexión a MongoDB
 */
export default function connectMongoose() {
    //devuelve una promesa
    return mongoose.connect('mongodb://127.0.0.1:27017/cursonode')
}