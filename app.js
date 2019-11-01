const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const util = require('util');
const stat = util.promisify(fs.stat);
const debug = require('debug')('app');
const dir = __dirname;
const app = express();
const port = 8001;

app.use(bodyParser.text());

async function start() {
  const editorPath = `${dir}/views/reveal-editor.html`;
  let revealPath = `${dir}/data/reveal.html`;
  let slidesPath = `${dir}/data/slides.md`;

  try {
    await stat(revealPath);
  } catch (err) {
    revealPath = `${dir}/views/reveal.html`;
  }

  try {
    await stat(slidesPath);
  } catch (err) {
    slidesPath = `${dir}/views/slides.md`;
  }

  debug('revealPath: %s ', revealPath);
  debug('slidesPath: %s ', slidesPath);

  app.get('/', function (req, res) {
    debug('GET /');
    res.sendFile(editorPath);
  });

  app.get('/reveal.html', function (req, res) {
    debug('GET /reveal.html');
    res.sendFile(revealPath);
  });

  app.put('/slides.md', function (req, res) {
    debug('PUT /slides.md');
    fs.writeFile(slidesPath, req.body, function (err) {
      if (err) throw err;
      res.sendFile(editorPath);
    });
  });

  app.get('/slides.md', function (req, res) {
    debug('GET /slides.md');
    res.sendFile(slidesPath);
  });

  app.use(express.static('.'));

  app.listen(port, function () {
    console.log('Listening on port ' + port);
  });
}

start().catch(err => {
  console.error(err.message, err.stack);
});

