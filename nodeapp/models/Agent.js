import mongoose, { Schema } from 'mongoose';

// definir el esquema de los agentes
const agentSchema = new Schema({
    name: { type: String, unique: true },
    age: { type: Number, min: 18, max: 150 },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    avatar: String //en este caso que sea tipo string quiere decir que guardará la ruta de la imagen
}, {
    // collection: 'agentes' // para forzar el nombre de la colección y evitar pluralización
})
 // creamos el modelo de Agente
const Agent = mongoose.model('Agent', agentSchema)

export default Agent