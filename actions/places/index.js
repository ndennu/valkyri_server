module.exports = (api) => {
    return {
        create: require('./create')(api),
        listOne: require('./listOne')(api),
        listAll: require('./listAll')(api),
        update: require('./update')(api),
        remove: require('./remove')(api)
    };
};