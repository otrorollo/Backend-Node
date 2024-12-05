import Agent from '../models/Agent.js'

export function index(req, res, next) {
  res.render('new-agent')
}
export async function postNew(req, res, next) {
  try {
    const { name, age } = req.body
    // TODO validaciones
    // creo una nueva instancia del modelo agente en memoria
    const agent = new Agent({ name, age })
    // Guarda el nuevo agente en la base de datos
    await agent.save()
    // Redirige al usuario a la página principal tras la creación exitosa
    res.redirect('/')
  } catch (err) {
    // Pasa cualquier error al siguiente middleware
    next(err)
  }
}