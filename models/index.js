const Sequelize = require('sequelize');

module.exports = (api) => {
    api.sequelize =  new Sequelize(
        api.settings.db.sql.database,
        api.settings.db.sql.dbUser,
        api.settings.db.sql.dbUserPassword,
        api.settings.db.sql.sequelizeParamSetting
    );

    let user = require('./User')(api);
    let history = require('./History')(api);
    let place = require('./Place')(api);
    let access = require('./Access')(api);
    let level = require('./Level')(api);
    let authToken = require('./AuthToken')(api);

    api.models = {
        User: user,
        History: history,
        Place: place,
        Access : access,
        Level : level,
        AuthToken: authToken
    };

    history.belongsTo(user);
    history.belongsTo(place);
};