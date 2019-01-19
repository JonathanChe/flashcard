require('dotenv').config();
const express = require('express');
const db = require('./postgresql/db');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 7777;

// intialize server
const app = express();

app.use(express.static('dist'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// cors
app.use(cors());

// add new cards
app.post('/addCard', (req, res) => {
  const { word, type, definition, sentence } = req.body;
  const date = new Date();
  db.one('INSERT INTO "Cards"("word", "type", "definition", "sentence", "timestamp") VALUES($1, $2, $3, $4, $5) RETURNING *', [word, type, definition, sentence, date])
    .then(data => console.log('successfully created card'))
    .catch(err => console.error('error creating card ', err));
});

app.get('/addCard', (req, res) => {
  db.query('SELECT * FROM "Cards"')
    .then(data => res.json(data))
    .catch(err => console.error('Error fetching all cards ', err));
});

app.put('/deleteCard', (req, res) => {
  const { data: { id } } = req.body;
  console.log('checking id ', id);
  db.query(`DELETE FROM "Cards" WHERE "_cardID" =${id}`)
    .then(res => console.log('success'))
    .catch(err => console.error('Error deleting ', err));
});

// start server
app.listen(port, () => console.log(`listening on port ${port}`));
