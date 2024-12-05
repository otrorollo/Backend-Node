// Importaciones necesarias

import readline from 'node:readline'
import connectMongoose from './lib/connectMongoose.js'
import Agent from './models/Agent.js'
import User from './models/User.js' // Importamos el modelo de Usuario

// Conectar a la base de datos MongoDB
const connection = await connectMongoose()
console.log('Connected to MongoDB:', connection.name)

// Preguntar al usuario si está seguro de querer inicializar la base de datos
const questionResponse = await ask('Are you sure you want to empty the database and create initial data?')
if (questionResponse.toLowerCase() !== 'yes') {
  console.log('Operation aborted.')
  process.exit()
}

await initUsers() //// Se mueve la línea de inicialización de agentes después de la inicialización de usuarios
/**
 * La inicialización de agentes se mueve después de la de usuarios porque necesitamos
 * los IDs de los usuarios para asignarlos como propietarios de los agentes.
 */

// Inicializar los agentes en la base de datos
await initAgents()
/**
 * Función para inicializar la colección de agentes
 * - Elimina todos los agentes existentes
 * - Crea nuevos agentes con datos de prueba
 */
//--------------------------------------------------------------------------------
async function initAgents() {
  // delete all agents - Eliminar todos los agentes existentes
  const deleteResult = await Agent.deleteMany()
  console.log(`Deleted ${deleteResult.deletedCount} agents.`)

  //Busca los usuarios admin y user1 para usar sus IDs como propietarios de los agentes
  const [admin, user1] = await Promise.all([
    User.findOne({ email: 'admin@example.com' }),
    User.findOne({ email: 'user1@example.com' }),
  ])


  // create initial agents -  Crear agentes iniciales - se le asignan como propietarios
  const insertResult = await Agent.insertMany([
    { name: 'Smith', age: 31, owner:admin._id },
    { name: 'Brown', age: 42, owner: admin._id } ,
    { name: 'Jones', age: 23, owner: admin._id }
  ])
  console.log(`Created ${insertResult.length} agents.`)
}

//--------------------------------------------------------------------------------

connection.close() // Cerramos la conexión a la base de datos al finalizar

/**
 * Función asíncrona para inicializar usuarios de prueba en la base de datos
 */
async function initUsers() { //Define una función asíncrona para inicializar usuarios.
  // Eliminar todos los usuarios existentes
  const deleteResult = await User.deleteMany()
  console.log(`Deleted ${deleteResult.deletedCount} users.`) //Informa cuántos usuarios se eliminaron

  // Crear usuarios iniciales
  const insertResult = await User.insertMany([
    { 
      email: 'admin@example.com', 
      password: await User.hashPassword('1234') // Hashear la contraseña antes de guardarla
    },
    { 
      email: 'user1@example.com', 
      password: await User.hashPassword('1234') // Hashear la contraseña antes de guardarla
    },
  ])
  console.log(`Created ${insertResult.length} users.`) //Informa cuántos usuarios nuevos se crearon.
}

/**
 * Función auxiliar para hacer preguntas al usuario por consola
 * @param {string} questionText - Texto de la pregunta a mostrar
 * @returns {Promise<string>} - Promesa que se resuelve con la respuesta del usuario
 */

function ask(questionText) {
  return new Promise((resolve, reject) => {
    const consoleInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    consoleInterface.question(questionText, answer => {
      consoleInterface.close()
      resolve(answer)
    })
  })
}