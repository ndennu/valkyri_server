module.exports = (api) => {
    return {
        create: require('./create')(api),
        addProfileImage: require('./addProfileImage')(api),
        findAll: require('./findAll')(api),
        findAllWithRole: require('./findAllWithRole')(api),
        findOne: require('./findOne')(api),
        remove: require('./remove')(api),
        update: require('./update')(api),
        findImageByUserId: require('./findImageByUserId')(api)
    };
};