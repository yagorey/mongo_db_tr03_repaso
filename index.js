const express  = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const lanzarApp  =()=> {
  const app     = express()

  // TEMPLATE ENGINE - EJS
  app.set('view engine', 'ejs')

  // express body json
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // app static dir /public
  app.use(express.static('public'))

  // Routing
  const router = require('./app.routing')
  app.use(router)

  const port = process.env.PORT || 3000
  app.listen(port, () => console.log(`port ${port}!`))
}

const manejaError = (error) => {
  console.error(error)
}

const DB_HOST = process.env.MONGO_DB || ''
mongoose.connect(DB_HOST)
.then(lanzarApp)
.catch(manejaError)
