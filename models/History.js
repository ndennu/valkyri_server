const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('History', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        authorize: Sequelize.BOOLEAN,
        user_id: Sequelize.INTEGER,
        place_id: Sequelize.INTEGER
    }, {
        underscored: true,
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: false,
        deletedAt: false,
        tableName: 'history' // Forcer l'utilisation du nom de la table specifier
    });
};