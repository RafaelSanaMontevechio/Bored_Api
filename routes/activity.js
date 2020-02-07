const activityRouter = () => {
    const router = require('express').Router();

    const activityController = require('../controllers/activity');

    router.get('/index', activityController.activity);
    router.get('/random', activityController.getActivity);
    router.post('/index', activityController.getActivityByType);
    router.get('/save/:type/:activity', activityController.saveActivity);
    router.get('/favorites', activityController.getFavoriteActivities);
    router.get('/delete/:activity', activityController.deleteActivity);
    return router;
}

module.exports = activityRouter
