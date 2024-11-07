// Importaciones necesarias

import readline from 'node:readline'
import connectMongoose from './lib/connectMongoose.js'
import Agent from './models/Agent.js'

// Conectar a la base de datos MongoDB
const connection = await connectMongoose()
console.log('Connected to MongoDB:', connection.name)

// Preguntar al usuario si está seguro de querer inicializar la base de datos
const questionResponse = await ask('Are you sure you want to empty the database and create initial data?')
if (questionResponse.toLowerCase() !== 'yes') {
  console.log('Operation aborted.')
  process.exit()
}

// Inicializar los agentes en la base de datos
await initAgents()
/**
 * Función para inicializar la colección de agentes
 * - Elimina todos los agentes existentes
 * - Crea nuevos agentes con datos de prueba
 */
async function initAgents() {
  // delete all agents - Eliminar todos los agentes existentes
  const deleteResult = await Agent.deleteMany()
  console.log(`Deleted ${deleteResult.deletedCount} agents.`)
  // create initial agents -  Crear agentes iniciales
  const insertResult = await Agent.insertMany([
    { name: 'Smith', age: 31 },
    { name: 'Brown', age: 42 },
    { name: 'Jones', age: 23 }
  ])
  console.log(`Created ${insertResult.length} agents.`)
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