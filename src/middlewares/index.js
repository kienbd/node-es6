import { Router } from 'express'
import morgan from 'morgan'

export default () => {
  const routes = Router()

  routes.use(morgan('dev'))

  return routes
}
