import { Router } from 'express'
import morgan from 'morgan'

export default () => {
  const routes = Router()

  routes.get('/', (req, res) => {
    res.send('Hello World!')
  })

  return routes
}
