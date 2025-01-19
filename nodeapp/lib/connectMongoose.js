import mongoose from 'mongoose'

const { MONGO_URI } = process.env

/** Manejador de eventos para errores de conexión */
mongoose.connection.on('error', err => {
    console.log('Error de conexión', err)
})

/** 
 * Función para conectar a MongoDB
 * @returns {Promise} Promesa de conexión a MongoDB
 */
export default function connectMongoose() {
    return mongoose.connect(MONGO_URI)
        .then(mongoose => mongoose.connection)
}

// export default async function connectMongoose() {
//   await mongoose.connect(MONGO_URI)
//   return mongoose.connection
// }