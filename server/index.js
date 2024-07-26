const express = require('express')
const app = express()
const pgp = require('pg-promise')()
const bodyParser = require('body-parser')
const session = require('express-session')
// const bcrypt = require('bcrypt')

const dbConfig = {
    host: 'db',
    port: 5432,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
}

const db = pgp(dbConfig);

db.connect()
  .then(obj => {
    console.log('Database connection successful');
    obj.done(); 
  })
  .catch(error => {
    console.log('ERROR:', error.message || error);
  });

  app.use(bodyParser.json())

  app.get('/', (req, res) => {
    res.json({"status": true})
  })

module.exports = app.listen(3000);
console.log('Server is listening on port 3000');