import { Router } from 'express'

import docsRoute from './docs'

const router = Router()

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', (req, res) => {
  res.send('hello world')
})

router.use(docsRoute)

export default router
