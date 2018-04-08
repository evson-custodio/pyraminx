const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const consign = require('consign');

module.exports = () => {
    const app = express();

    consign({cwd: 'app'}).include('controllers').then('routes').into(app);

    app.use(favicon('public/favicon.png'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(express.static('public/'));

    app.use('/libs', app.routes.libs);
    app.use('/three', app.routes.three);
    app.use('/objects', app.routes.objects);

    return app;
}