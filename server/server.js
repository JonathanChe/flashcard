require('dotenv').config();
const express = require('express');
const db = require('./postgresql/db');

const port = process.env.PORT || 7777;

// intialize server
const app = express();

// start server
app.listen(port, () => console.log(`listening on port ${port}`));
