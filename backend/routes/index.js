const express = require('express');
const { getAllPlanets } = require('../controllers/index');

const router = express.Router();

router.get('*/planets', getAllPlanets);//get all planets

module.exports = router;