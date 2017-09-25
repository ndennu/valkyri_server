const Sequelize = require('sequelize');

module.exports = (api) => {
    return api.sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        matricule: Sequelize.STRING,
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING,
        image_path: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        digicode: Sequelize.STRING,
        phone: Sequelize.STRING,
        level_number: Sequelize.INTEGER
    }, {
        timestamps: true,
        tableName: 'user' // Forcer l'utilisation du nom de la table specifier
    });
};