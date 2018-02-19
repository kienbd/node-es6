/* Lib files */
import express from 'express'

/* Import config files */
import './config/environment'
import routes from './config/routes'
import middleware from './middlewares'

const app = express()

app.use(middleware())
app.use(routes())


/* Starting app */
console.log(`Starting server at port ${process.env.PORT}`)
app.listen(process.env.PORT)
export default app
