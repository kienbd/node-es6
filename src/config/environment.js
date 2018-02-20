import config from './config.json'
/*
 * required: PORT, MONGODB_URI
 *
 */
const env = process.env.NODE_ENV || 'development'

if (env === 'development' || env === 'test') {
  const envConfig = config[env]

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key]
  })

}

console.log(`*** ${env} ***`)
