import session from 'express-session'
import MongoStore from 'connect-mongo'

const { MONGO_URI, SESSION_SECRET } = process.env
const INACTIVITY_EXPIRATION_2_DAYS = 1000 * 60 * 60 * 24 * 2

/**
 * Configura el middleware de sesión
 * @constant {Object} middleware - Configuración del middleware de sesión para su gestión
 */

export const middleware = session({
  name: 'nodeapp-session',
  secret: 'kasdu7ads76sd76ds76ds765ds765dsf',
  saveUninitialized: true,
  resave: false,
  // configuracion del almacenamiento de las sesiones q se guardan en MongoDB
  cookie: { maxAge: INACTIVITY_EXPIRATION_2_DAYS },
  store: MongoStore.create({
    mongoUrl: MONGO_URI
  })
})

/**
 * Hace disponible la sesión en las vistas
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 * @param {Function} next - Función next de Express
 */
export function useSessionInViews(req, res, next) {
  res.locals.session = req.session
  next()
}

export function isLoggedIn(req, res, next) {
  // Verifica si el ID de usuario está presente en la sesión
  if (!req.session.userId) {
    // Si no está autenticado, redirige a la página de login
    res.redirect('/login')
    return
  }
  // Si está autenticado, continúa con la siguiente función middleware o ruta
  next()
}