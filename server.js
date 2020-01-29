const express = require('express')
const app = express()
 
app.use('/', express.static('frontend'))
 
 
 
app.get('/hello', function (req, res) {
  res.send('Hello World')
})



app.get('/messages', function(request, response){
  var messages = [] //aratam ca e un array cu []
  var message={
      name: "Antonia",
      message:"Hello from the other side"
  } //obiect in JS
  messages.push(message)
  response.status(200).send(messages);
  
  
})

app.post('/messages', function(request, response){
  console.log(request.body)
  response.send('Data: '+ request.body)
  
})
 
app.listen(8080)