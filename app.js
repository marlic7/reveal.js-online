var express = require('express')
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express()
var http = require('http').Server(app)
var editorPath = __dirname + '/reveal-editor.html'

app.use(bodyParser.text());
app.use(express.static('.'));

app.get('/', function (req, res) {
  res.sendFile(editorPath)
})

app.put('/slides.md', function (req, res) {
  fs.writeFile(req.path.slice(1), req.body, function (err) {
    if (err) throw err;
    res.sendFile(editorPath)
  });
})

http.listen(80, function () {
  console.log('Listening on port 80')
})