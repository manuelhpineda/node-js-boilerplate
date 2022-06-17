import {Router} from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import swaggerDef from 'config/swaggerDef'
import { PORT } from 'config/constants'

const router = Router()

const swaggerSpec = swaggerJSDoc({
  ...swaggerDef,
  apis: ["**/v1/*.ts"]
})

router.use('/api-doc/v1', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
console.info(`Docs available at http://localhost:${PORT}/api-doc/v1`)

export default router
