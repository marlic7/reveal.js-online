var express = require('express')
var app = express()
var http = require('http').Server(app)

app.get('/', function(req, res){

  res.sendFile(__dirname + '/templates/index.html')
})

app.use(express.static('.'));

http.listen(80, function(){
  console.log('Listening on port 80')
})