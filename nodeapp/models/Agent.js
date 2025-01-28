import mongoose, { Schema } from 'mongoose';

// definir el esquema de los agentes
const agentSchema = new Schema({
    name: { type: String, unique: true },
    age: { type: Number, min: 18, max: 150, index: true }, //Campo para edad con validaciones
    owner: { type: Schema.Types.ObjectId, ref: 'User', index: true }, // Referencia al propietario del agente
    avatar: String //en este caso que sea tipo string quiere decir que guardará la ruta de la imagen
});
    // collection: 'agentes' // para forzar el nombre de la colección y evitar pluralización

// Definir la función estática `list` en el esquema
// return list of agents - 
agentSchema.statics.List = function(filter, limit, skip, sort, fields) { 
    const query = Agent.find(filter) // Crea una consulta con el filtro proporcionado
    query.limit(limit) // Aplica el límite a la consulta
    query.skip(skip)  // Omite un número específico de resultados
    query.sort(sort)  // Aplica ordenación a los resultados
    query.select(fields) // Selecciona los campos a mostrar
    return query.exec() // Ejecuta la consulta y retorna una promesa
};

// Crear el modelo `Agent` a partir del esquema
const Agent = mongoose.model('Agent', agentSchema)

export default Agent; //exporta el modelo Agent