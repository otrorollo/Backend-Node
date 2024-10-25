//me lo traigo de server - el import el const app y app.get 

import express from 'express'; // Importa el framework Express para crear aplicaciones web 

const app = express(); // Crea una instancia de la aplicación Express


app.get('/', (req, res, next) => {
    res.send('Hola'); // Define una ruta que responde con "Hola" cuando se accede a la raíz
}); //app.get('/', ...): Establece una ruta para manejar solicitudes GET a la raíz (/). 
// Cuando se accede a esta ruta,responde con "Hola".


export default app