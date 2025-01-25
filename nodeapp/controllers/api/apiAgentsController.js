import Agent from '../../models/Agent.js' //importa el modelo de agentes

export async function apiAgentList(req, res, next) {
  try {
    // http://localhost:3000/api/agents/?name=Jones&Age=23
    const filterAge = req.query.age // Filtra por edad
    const filterName = req.query.name //Filtra por nombre
    // http://localhost:3000/api/agents/?limit=2&skip=2
    const limit = req.query.limit // Define el límite de resultados
    const skip = req.query.skip // Define cuántos resultados omitir
    // http://localhost:3000/api/agents/?sort=age
    const sort = req.query.sort // Define el criterio de ordenación
    const fields = req.query.fields


    const filter = { } 
    if (filterAge) {
        filter.age = filterAge // Añade filtro de edad si está presente
    }
    if (filterName) {
        filter.name = filterName // Añade filtro de nombre si está presente
    }

  //BUSQUEDA DE AGENTES EN LA BASE DE DATOS

    //const agents = await Agent.List(filter, limit, skip, sort, fields)  //Estos parametros son los que se pasan a la función List del modelo Agent
    //funcionan de este modo: filter es el filtro de busqueda, 
    // limit es el número de resultados a mostrar, 
    // skip es el número de resultados a omitir y 
    // sort es el criterio de ordenación
    //La promesa se resuelve cuando se obtiene la lista de agentes
    //En este caso la promesa es la consulta a la base de datos
    /**porque se pone un await? porque la función es async, y el await espera a que se resuelva la promesa
    * para continuar con la ejecución del código
    */
    /*const agentCount = await Agent.countDocuments(filter)
    res.json({ 
      result: agents,
      count: agentCount
     }) //devuelve un json con la lista de agentes
    //http://localhost:3000/api/agents/?limit=2&skip=2&name=Jones
  } catch (error) { 
     next(error) //si hay un error, pasa al siguiente middleware
  }
}
*/


const [agents, agentCount] = await Promise.all([ //Se ejecutan las dos promesas de forma simultanea
  Agent.list(filter, limit, skip, sort, fields), 
  Agent.countDocuments(filter) //Cuenta el número de agentes que cumplen el filtro
])

res.json({ //Devuelve un json con la lista de agentes y el número de agentes que cumplen el filtro
  results: agents,
  count: agentCount
})

} catch (error) {
next(error)
}
}

export async function apiAgentGetOne(req, res, next) {
  try {
    const agentId = req.params.agentId

    const agent = await Agent.findById(agentId) 

    res.json({ result: agent }) 
  } catch (error) {
    next(error)
  }
}

export async function apiAgentNew(req, res, next) {
  try {
    const agentData = req.body
    // crea agente instanciando el modelo de agentes con los datos del body
    // Se instancia en memoria, no se guarda en la base de datos
    const agent = new Agent(agentData) 
    agent.avatar = req.file?.filename //añade la imagen

    //save agent to database 
    //guarda el agente en la base de datos
    const savedAgent = await agent.save() 

    res.status(201).json({ result: savedAgent }) //devuelve un json con el agente guardado
  } catch (error) {
    next(error)
  }
}

//Actualiza un agente
export async function apiAgentUpdate(req, res, next) { 
  try {
    const agentId = req.params.agentId
    const agentData = req.body
    agentData.avatar = req.file?.filename
    const updatedAgent = await Agent.findByIdAndUpdate(agentId, agentData, {
      new: true // para obtener el documento actualizado
    })
    res.status(201).json({ result: updatedAgent })
  } catch (error) {
    next(error)
  }
}