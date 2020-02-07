const init = () => {
    const router = require('express').Router();

    const home = require('../controllers/home');
    const activity = require('./activity');

    router.get('/', home.getIndex);

    router.use('/activity', activity());

    return router;

}

module.exports = init
