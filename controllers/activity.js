const api = require('../lib/bored-api');

const activity = (req, res) => {
    res.render('activity-info', {
        activity
    });
}

const getActivity = async (req, res) => {
    const activity = await api.getActivity();
    res.render('activity-info', {
        activity
    });
}

const getActivityByType = async (req, res) => {
    const activity = await api.getActivityByType(req.body.type);
    res.render('activity-info', {
        activity
    });
}

const saveActivity = (req, res) => {
    const { type, activity } = req.params;
    api.saveActivity(type, activity);
    res.redirect('/activity/index');
}

const getFavoriteActivities = (req, res) => {
    const activities = api.getFavoriteActivities();
    res.render('favorite', {
        activities
    });
}

const deleteActivity = (req, res) => {
    api.deleteOne(req.params.activity);
    res.redirect('/activity/favorites');
}

module.exports = {
    activity,
    getActivity,
    getActivityByType,
    saveActivity,
    getFavoriteActivities,
    deleteActivity
}