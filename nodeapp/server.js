import express from 'express'
import http from 'node:http'

const app = express()

app.get('/', (req, res, next) => {
    res.send('Hola')
})

//create http server
const server = http.createServer(app)

server.on('listening', () => { console.log('Servidor arrancado')}) //Importante en minusculas listening
server.listen(3000)