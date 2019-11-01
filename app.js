const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const debug = require('debug')('app');
const dir = __dirname;
const app = express();
const port = 8001;

const editorPath = `${dir}/views/reveal-editor.html`;
const revealPath = `${dir}/data/reveal.html`;
const slidesPath = `${dir}/data/slides.md`;
const imagesPath = `${dir}/data/images`;

app.use(bodyParser.text());

try {
    fs.statSync(revealPath);
} catch (err) {
    fs.copyFileSync(`${dir}/views/reveal.html`, revealPath);
    debug('file reveal.html copied to: %s', revealPath);
}

try {
    fs.statSync(slidesPath);
} catch (err) {
    fs.copyFileSync(`${dir}/views/slides.md`, slidesPath);
    debug('file slides.md copied to: %s', slidesPath);
}

try {
    fs.statSync(imagesPath);
} catch (err) {
    fs.mkdirSync(imagesPath);
    debug('directory images created: %s', imagesPath);
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
    console.log('Listening on http://localhost:' + port);
});

