/**
 * Controlador para la página de inicio de sesión
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 * @param {Function} next - Función next de Express
 */

export function index(req, res, next) {
  res.render('login')
}