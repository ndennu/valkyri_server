module.exports = (api) => {
    return {
	create: require('./create')(api),
        identify: require('./identify')(api),
        findAll: require('./findAll')(api),
        findOne: require('./findOne')(api),
        remove: require('./remove')(api),
        update: require('./update')(api)
    };
};
