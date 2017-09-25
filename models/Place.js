const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Place', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        number: Sequelize.INTEGER,
        level_number: Sequelize.INTEGER
    }, {
        tableName: 'place'
    });
};