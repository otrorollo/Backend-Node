import mongoose, { Schema } from 'mongoose';

// definir el esquema de los agentes
const agentSchema = new Schema({
    name: { type: String, unique: true },
    age: { type: Number, min: 18, max: 150 }
}, {
    // collection: 'agentes' // para forzar el nombre de la colección y evitar pluralización
})
 // creamos el modelo de Agente
const Agent = mongoose.model('Agent', agentSchema)

export default Agent