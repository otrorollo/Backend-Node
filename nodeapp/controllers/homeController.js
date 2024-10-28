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
export function index(req, res, next) {
    res.render('home', { /** Renderiza la vista 'home' con datos dinámicos */
        appName: 'NodeApp' 
    })
}