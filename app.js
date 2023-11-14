const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const sitcomRoutes = require('./routers/sitcoms')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/sitcoms', sitcomRoutes)

app.get('/', (req, res) => {
  res.send({
    message: "welcome",
    description: "sitcoms api",
    endpoints: [
      "GET    /"
    ]
  })
})

module.exports = app
