require('dotenv').config({ path: '../../.env' });
const initOptions = require('./initOptions');
const pgp = require('pg-promise')(initOptions);

const connection = process.env.PG_URI;
const db = pgp(connection);
db.connect();

module.exports = db;
