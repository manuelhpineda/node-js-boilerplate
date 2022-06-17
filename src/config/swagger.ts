import { Application } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

const port = process.env.PORT || 5000

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Customer API',
      version: '1.0.0',
    }
  },
  apis: ['**/routes/**/*.ts']
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

const swaggerDocs = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  console.info(`Docs available at http://localhost:${port}/api-docs`)
}

export default swaggerDocs
