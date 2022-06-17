import 'module-alias/register'
import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'

import { handleError } from 'middleware/errors'
import routes from './routes'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(compression())
app.use(helmet())
app.use(morgan('simple'))

app.use(routes)

app.use(handleError)

app.listen(port, () => {
  console.log(`⚡️ ️[server]: Server is running at http://localhost:${port}`)
})
