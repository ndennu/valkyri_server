/**
 * Created by apple on 13/05/2017.
 */
module.exports = (api) => {
    return {
        create: require('./create')(api),
        getAll: require('./getAll')(api),
        getById: require('./getById')(api),
        update: require('./update')(api),
        delete: require('./delete')(api)
    };
};