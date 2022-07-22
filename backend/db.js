const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Planet_Facts_DB', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;