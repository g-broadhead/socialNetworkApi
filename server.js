const express = require('express')
const { join } = require('path')
const db = require('./db/index.js')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

// require('./db')
//   .then(() => app.listen(3000))
//   .catch(err => console.log(err))

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API Server Listening on Port ${PORT}!`)
  })
})
