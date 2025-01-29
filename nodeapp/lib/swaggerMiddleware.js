import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.3', // version de openapi
    info: {
      title: 'NodeApp API',
      version: '0.1',
      description: 'API de NodeApp'
    }
  },
  apis: ['swagger.yaml'] //formato yaml o yml para la documentación
  //apis: ['controllers/api/**/*.js'] // Esto significa que se van a documentar todos los archivos que estén en la carpeta controllers/api y tengan extensión .js
}

const specification = swaggerJSDoc(options) // parsea el archivo yaml y lo convierte en un objeto

export default [swaggerUi.serve, swaggerUi.setup(specification)] //exporta el middleware de swagger