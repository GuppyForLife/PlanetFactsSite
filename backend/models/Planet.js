const sequelize = require('../db');
const { Sequelize } = require('sequelize');

const Planet = sequelize.define('planet' , {
    name: Sequelize.STRING,
    overviewContent: Sequelize.TEXT,
    overviewSource: Sequelize.STRING,
    structureContent: Sequelize.TEXT,
    structureSource: Sequelize.STRING,
    geologyContent: Sequelize.TEXT,
    geologySource: Sequelize.STRING,
    rotation: Sequelize.STRING,
    revolution: Sequelize.STRING,
    radius: Sequelize.STRING,
    temperature: Sequelize.STRING,
    imagesPlanet: Sequelize.STRING,
    imagesInternal: Sequelize.STRING,
    imagesGeology: Sequelize.STRING
});

module.exports = Planet;