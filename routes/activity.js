const express = require('express');

const activityController = require('../controllers/activity');

const activityRouter = () => {
    const router = express.Router();
    router.get('/index', activityController.activity);
    router.get('/random', activityController.getActivity);
    router.post('/index', activityController.getActivityByType);
    router.get('/save/:type/:activity', activityController.saveActivity);
    router.get('/favorites', activityController.getFavoriteActivities);
    router.get('/delete/:activity', activityController.deleteActivity);
    return router;
}

module.exports = activityRouter
