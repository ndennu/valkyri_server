module.exports = (api) => {
    api.actions = {
        access: require('./access')(api),
        levels: require('./levels')(api),
        users: require('./users')(api),
        places: require('./places')(api),
        histories: require('./histories')(api),
        auth: require('./auth')(api),
        faces: require('./faces')(api)
    };
};