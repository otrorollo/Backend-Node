import User from '../models/User.js'

/**
 * Controlador para la página de inicio de sesión
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 * @param {Function} next - Función next de Express
 */

export function index(req, res, next) {
  res.locals.error = ''
  res.locals.email = ''
  res.render('login')
}

export async function postLogin(req, res, next) {
  try{
    const { email, password } = req.body

    // buscar el usuario en la base de datos
    const user = await User.findOne({ email: email.toLowerCase() })
    console.log(user)

    // si no lo encuentro, o la contraseña no coincide --> error
    if (!user || !(await user.comparePassword(password))) {
      res.locals.error = 'Invalid credentials'
      res.locals.email = email
      res.render('login')
      return
    }

    //Sí el usuario existe y la contraseña coincide --> Apunta en su sesion que está logeado. 
    /**
       * Guarda la información del usuario en la sesión tras un login exitoso
       * @param {Object} req - Objeto de solicitud Express
       * @param {Object} user - Usuario autenticado
       */
    req.session.userId = user._id
    req.session.userName = user.email

    //redirect a la home
    res.redirect('/')
    } catch (error) {
    next(error)
    }
}

export function logout(req, res, next) {
   // Regenera la sesión para eliminar los datos de la sesión actual
  req.session.regenerate(err => {
    if (err) return next(err)
      // Redirige al usuario a la página de inicio después del cierre de sesión
    res.redirect('/')
  })
}