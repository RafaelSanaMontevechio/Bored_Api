const init = () => {

    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');

    const routes = require('./routes');

    const app = express();

    /**View engine */
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs');

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(routes());

    return app;

}

module.exports = init