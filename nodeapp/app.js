//me lo traigo de server - el import el const app y app.get 

import express from 'express'; // Importa el framework Express para crear aplicaciones web 

import createError from 'http-errors' // Importa el módulo http-errors para crear errores HTTP

import logger from 'morgan' // Importa el módulo morgan para logging de solicitudes HTTP

import * as homeController from './controllers/homeController.js' // Importa el controlador de la página de inicio

//-------------------------------------------------------------------------------------------------------------

const app = express(); // Crea una instancia de la aplicación Express

//-------------------------------------------------------------------------------------------------------------

app.locals.appName = 'NodeApp'/** Define una variable global para la aplicación */

/** Configura el directorio de vistas */
app.set('views', 'views') // views folder
app.set('view engine', 'ejs') /** Establece EJS como el motor de plantillas */

/**
 * Configura el middleware morgan para logging de solicitudes HTTP.
 * El modo 'dev' proporciona logs concisos y coloreados.
 */
app.use(logger('dev'))

app.use(express.json()) // Middleware para parsear el body que venga en formato JSON
app.use(express.urlencoded({ extended: false })) //Middleware para  parsear el body que venga urlencoded (formularios)
// La opción 'extended: false' utiliza la librería querystring para el parseo

app.use(express.static('public')) //Configura el middleware para servir archivos estáticos desde la carpeta 'public'


//-------------------------------------------------------------------------------------------------------------

/**
 * Application routes: Definición de rutas de la aplicación
 */

app.get('/', homeController.index)
/** 
 * Ruta para demostrar parámetros en la URL
 * El :num en la ruta captura cualquier valor en esa posición
 */
app.get('/param_in_route/:num?', homeController.paranInRouteExample)
//El :num? en la ruta hace que el parámetro 'num' sea opcional
// Esto permite que la ruta funcione con o sin el parámetro


/**
 * Ruta para demostrar múltiples parámetros en la URL
 * Captura tres parámetros: product, size y color
 */
app.get('/param_in_route_multiple/:product/size/:size([0-9]+)/color/:color', 
//El parámetro 'size' ahora incluye una expresión regular para validación

    homeController.paranInRouteMultipleExample)

/**
 * Ruta para demostrar parámetros en la query string de la URL
 * Ejemplo de uso: /param_in_query?size=S&color=blue
 */
app.get('/param_in_query', homeController.paramInQuery)   
app.post('/create-example', homeController.createExample)  //Ruta POST para crear un ejemplo
// Utiliza el controlador createExample de homeController
/**
 * Ruta para demostrar la validación de parámetros de consulta
 * Utiliza middleware de validación antes de ejecutar el controlador principal
 */
app.get('/validate-query-example',
    homeController.validateQueryExampleValidations,
    homeController.validateQueryExample
)


//-------------------------------------------------------------------------------------------------------------
/**  Dia 28 Lunes: se borran estas lineas
app.get('/user', (req, res, next) => {
    console.log('petición a /user')
    next()
    })

/**
   * Define una segunda ruta GET para '/user'.
   * Esta ruta envía una respuesta al cliente.

app.get('/user', (req, res, next) => {
    res.send('2222')
    })
hasta aqui */

    /**
   * Middleware para manejar rutas no encontradas (404).
   * Crea un error 404 y lo pasa al manejador de errores.
   */
app.use((req, res, next) => {
    next(createError(404))
})


//-------------------------------------------------------------------------------------------------------------
// error handler:  Se conoce como "Error Handling Middleware".

/**En Express.js: un Middleware es una función que tiene acceso al objeto de solicitud (req), al objeto de respuesta (res), y a la siguiente función de middleware en el ciclo de solicitud-respuesta de la aplicación (next).
El manejador de errores es un Middleware especial que toma cuatro argumentos en lugar de tres: (err, req, res, next). */
// error handler
/**
 * Middleware de manejo de errores.
 * Este es un tipo especial de middleware que toma cuatro argumentos en lugar de tres.
 * Express reconoce que es un manejador de errores por la presencia de estos cuatro argumentos.
 * Se utiliza para capturar y procesar errores que ocurren durante la ejecución de la aplicación.
 */
/* app.use((err, req, res, next) => {
    res.send('Ocurrió un error: ' + err.message) 
    }) // Envía un mensaje de error al cliente. 
    // se borra para añadir otras...*/

    //Procesa los errores capturados y envía una respuesta al cliente.
app.use((err, req, res, next) => {
    /**
 * Manejador de errores mejorado para errores de validación
 * Formatea los errores de validación para una respuesta más clara
 */
if (err.array) {
    
    err.message = 'Invalid request: ' + err.array()
        .map(e => `${e.location} ${e.type} ${e.path} ${e.msg}`)
        .join(', ')
    err.status = 422
}


    /** Establece el código de estado de la respuesta */
    res.status(err.status || 500)
   // res.send('Ocurrió un error: ' + err.message)  //quitamos esta linea en clase Lunes dia 28.
// set locals, only providing error in development
/** Establece variables locales para la vista de error */
res.locals.message = err.message

 /** Muestra detalles del error solo en modo desarrollo */
res.locals.error = process.env.NODEAPP_ENV === 'development' ? err : {}
// render error view
res.render('error')

})
    

//-------------------------------------------------------------------------------------------------------------
/* Exporta la aplicación Express configurada */
export default app