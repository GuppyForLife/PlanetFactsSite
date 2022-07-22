const express = require('express');
const { getAllPlanets, getSinglePlanet } = require('../controllers/index');

const router = express.Router();

router.get('*/planets', getAllPlanets);//get all planets
router.get('/planets/:id', getSinglePlanet);// get single planet by ID

module.exports = router;