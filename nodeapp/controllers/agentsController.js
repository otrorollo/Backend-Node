import createError from 'http-errors'
import Agent from '../models/Agent.js'

export function index(req, res, next) {
  res.render('new-agent')
}
export async function postNew(req, res, next) {
  try {
    //Obtiene el ID del usuario de la sesión actual
    const userId = req.session.userId
    const { name, age } = req.body
    // TODO validaciones
    // Creo una nueva instancia de Agent asignando el userId como propietario
    const agent = new Agent({
      name,
      age,
      owner: userId
    })
    // Guarda el nuevo agente en la base de datos
    await agent.save()
    // Redirige al usuario a la página principal tras la creación exitosa
    res.redirect('/')
  } catch (err) {
    // Pasa cualquier error al siguiente middleware
    next(err)
  }
}
export async function deleteAgent(req, res, next) {
  const userId = req.session.userId
  const agentId = req.params.agentId
  // validar que el elemento que queremos borrar es propietario del usuario logado!!!!!
  const agent = await Agent.findOne({ _id: agentId }) // Busca el agente por su ID
  
  // Verifica si el agente existe
  if (!agent) {
    console.warn(`WARNING - el usuario ${userId} está intentando eliminar un agente inexistente`)
    return next(createError(404, 'Not found'))
  } 
  // Verifica si el usuario actual es el propietario del agente
  if (agent.owner.toString() !== userId) {
    console.warn(`WARNING - el usuario ${userId} está intentando eliminar un agente de otro usuario`)
    return next(createError(401, 'Not authorized'))
  }
  // Elimina el agente
  await Agent.deleteOne({ _id: agentId })
  res.redirect('/')
}