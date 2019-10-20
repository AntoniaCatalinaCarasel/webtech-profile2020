const express = require('express')
const app = express()
 
app.use('/', express.static('frontend'))
 
app.get('/hello', function (req, res) {
  res.send('Hello World')
})
 
app.listen(8080)