/**
 * Los comentarios son parte de un estilo de documentación llamado JSDoc
 * 
 * Controlador para la página de inicio index.js
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 * @param {Function} next - Función next de Express
 */
/* export function index(req, res, next) {
    res.send('Hola')
    }
/**
 * Esta función se ejecuta cuando alguien visita la ruta raíz ('/') de tu aplicación web.
req (request) contiene información sobre la solicitud HTTP que el cliente envió al servidor.
res (response) es un objeto que usas para enviar la respuesta al cliente.
next es una función que se usa para pasar el control al siguiente middleware, aunque no se usa en este ejemplo.
En este caso, la función simplemente envía 'Hola' como respuesta cuando alguien visita la página principal.
 *  */    
// GET /
export function index(req, res, next) {
 //   res.render('home', { /** Renderiza la vista 'home' con datos dinámicos */
    //     appName: 'NodeApp' 
    //  })
// }
//    res.locals.nombre = 'Javier' /** Define una variable local para esta respuesta específica */
//        res.render('home')
//}
const now = new Date()
  res.locals.nombre = '<script>alert("inyeccion de codigo")</script>' /** Ejemplo de inyección de código (será escapado por EJS) */
  res.locals.esPar = (now.getSeconds() % 2) === 0 /** Determina si el segundo actual es par */
  res.locals.segundoActual = now.getSeconds()   /** Obtiene el segundo actual */
  /** Array de usuarios para demostrar bucles en EJS */
    res.locals.users = [ 
    { name: 'Smith', age: 30 },
    { name: 'Brown', age: 42 },
    ]
    res.render('home')
}
// GET /param_in_route/44
export function paranInRouteExample(req, res, next) {
    /** Extrae el parámetro 'num' de la URL */
    const num = req.params.num
    /** Envía una respuesta con el número recibido */
    res.send('Received ' + num)
    }


// Manejador para la ruta con múltiples parámetros en la URL

export function paranInRouteMultipleExample(req, res, next) {
    /** Extrae los parámetros 'product', 'size' y 'color' de la URL */
    const product = req.params.product
    const size = req.params.size
    const color = req.params.color

    /** Envía una respuesta con los parámetros recibidos */
    res.send(`Received ${product} size ${size} color ${color}`)
}

// GET /param_in_query?size=S&color=blue
//xtrae los parámetros 'size' y 'color' de la query string
export function paramInQuery(req, res, next) {
    const size = req.query.size
    const color = req.query.color
    res.send(`Received size ${size} color ${color}`)
}
// POST /create-example
export function createExample(req, res, next) {
    /** Extrae el ítem del cuerpo de la solicitud */
    const item = req.body.item
    /** Envía una respuesta con el ítem recibido */
    res.send('Received ' + item)
}