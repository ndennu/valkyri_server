const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('AuthToken', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_user: Sequelize.INTEGER
    }, {
        timestamps: true,
        tableName: 'auth_token' // Forcer l'utilisation du nom de la table specifier
    });
};