const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const server = app.listen(9000, () => {
    console.log(`Server is up and running on PORT:9000`)
});