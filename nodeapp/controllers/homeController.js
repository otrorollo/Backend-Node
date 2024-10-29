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

export function paranInRouteExample(req, res, next) {
    /** Extrae el parámetro 'num' de la URL */
    const num = req.params.num
    /** Envía una respuesta con el número recibido */
    res.send('Received ' + num)
    }