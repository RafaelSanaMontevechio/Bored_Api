const axios = require('axios');

const activities = [];


/**
 * função que busca uma atividade aleatória 
 */
const getActivity = async () => {
    try {
        const activity = await axios.get('http://www.boredapi.com/api/activity/');
        return activity.data;
    } catch (error) {
        console.log(error);
    }
}

/**
 * função que traz uma atividade de acordo com o typo informado
 * 
 * @param type 
 */
const getActivityByType = async (type) => {
    try {
        const activity = await axios.get(`http://www.boredapi.com/api/activity?type=${type}`);
        return activity.data;
    } catch (error) {
        console.log(error);
    }
}

/**
 * salva a atividade
 * 
 * @param type 
 * @param activity 
 */
const saveActivity = (type, activity) => {
    var activity = {
        type: type,
        activity: activity
    }
    activities.push(activity);
}

/**
 * retorna todas as atividades salvas
 */
const getFavoriteActivities = () => {
    return activities;
}


/**
 * deleta uma atividade
 * 
 * @param activity 
 */
const deleteOne = (activity) => {
    activities.splice(activities.indexOf(activity), 1);
}

module.exports = {
    getActivity,
    getActivityByType,
    saveActivity,
    getFavoriteActivities,
    deleteOne
}