/**
 * Created by apple on 12/05/2017.
 */
const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Access', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        h1: Sequelize.TIME,
        h2: Sequelize.TIME,
        place_id: Sequelize.INTEGER,
        level_number: Sequelize.INTEGER
    }, {
        timestamps: false,
        tableName: 'access' // Forcer l'utilisation du nom de la table specifier
    });
};