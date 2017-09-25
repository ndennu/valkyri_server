const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('Level', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING,
        number: Sequelize.INTEGER,
    }, {
        timestamps: false,
        tableName: 'level' // Forcer l'utilisation du nom de la table specifier
    });
};
