const path = require('path');
const fs = require('fs').promises;
const db = require('./db');
const Planet = require('./models/Planet');

const seed = async () => {
  await db.sync({ force: true }); // clear out database + tables

  const planetSeedPath = path.join(
    __dirname,
    '/data/data.json'
  ); //gets the path to userData.json

  //asynchronously reads the content in this file
  const planetBuffer = await fs.readFile(planetSeedPath);

  // First we convert the data from buffer into a string, then we parse the JSON so it converts from string -> object
  const planetsData = JSON.parse(String(planetBuffer));

  //creates Show and puts it into our Show table
  const PlanetsPromise = planetsData.map((planet) => Planet.create(planet));
  // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
  await Promise.all(PlanetsPromise);

  console.log('Planets imported into database!')
};

seed();