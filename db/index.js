// module.exports = require('mongoose').connect('mongodb://localhost:27017/socialNetwork_db')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetwork_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose.connection
