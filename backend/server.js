const express = require('express');
const path = require('path');
const cors = require('cors');
const sequelize = require('./db');
const routes = require('./routes/index');

const app = express();
app.use(cors());

sequelize
  .authenticate()
  .then((res) => console.log('Database is connected'))
  .catch((err) => {
  console.log('There was an error connecting to the database ', err);
  process.exit(1);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api', routes)

const server = app.listen(9000, () => {
    console.log(`Server is up and running on PORT:9000`)
});