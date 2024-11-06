import readline from 'node:readline'
import connectMongoose from './lib/connectMongoose.js'
import Agent from './models/Agent.js'
const connection = await connectMongoose()
console.log('Connected to MongoDB:', connection.name)
const questionResponse = await ask('Are you sure you want to empty the database and create initial data?')
if (questionResponse.toLowerCase() !== 'yes') {
  console.log('Operation aborted.')
  process.exit()
}
await initAgents()
async function initAgents() {
  // delete all agents
  const deleteResult = await Agent.deleteMany()
  console.log(`Deleted ${deleteResult.deletedCount} agents.`)
  // create initial agents
  const insertResult = await Agent.insertMany([
    { name: 'Smith', age: 31 },
    { name: 'Brown', age: 42 },
    { name: 'Jones', age: 23 }
  ])
  console.log(`Created ${insertResult.length} agents.`)
}
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