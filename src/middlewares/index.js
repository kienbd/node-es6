import { Router } from 'express'
import morgan from 'morgan'

export default () => {
  const routes = Router()

  if(process.env.NODE_ENV === 'development')
    routes.use(morgan('dev'))

  return routes
}
