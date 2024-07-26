const express = require('express')
const app = express()
const pgp = require('pg-promise')()
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
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

app.use(cors())
app.use(bodyParser.json())

app.post('/register', async (req, res) => {
    const {email, password, firstName, lastName, address} = req.body
    const validQuery = `SELECT * FROM users WHERE email = $1`
    const insertQuery = `INSERT INTO users (email, password, first_name, last_name, address) VALUES ($1, $2, $3, $4, $5) RETURNING *`
    try {
        const valid = await db.oneOrNone(validQuery, [email])
        if (!valid){
            const insert = await db.oneOrNone(insertQuery, [email, password, firstName, lastName, address])
            console.log(insert)
            if (insert) {
                res.json({"message": "success"})
            } else {
                res.json({"message": "user exists"})
            }
        } else {
            res.json({"message": "user exists"})
        }
    } catch (e) {
        res.status(400).json(e)
    }
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const query = 'SELECT * FROM users WHERE email=$1'
    try {
        user = await db.oneOrNone(query, [email])
        if (user){
            if (password == user.password) {
                return res.send({message: "success", id: user.user_id})
            }
        }
        res.status(401).json({"message": "user not found or incorrect password"})
    } catch (e) {
        res.status(400).json(e)
    }
})

app.post('/dashboard', async (req, res) => {
    const {user_id, date} = req.body
    const pastQuery = `SELECT * FROM prescriptions_users pu FULL JOIN prescriptions p ON p.prescription_id = pu._prescription_id WHERE pu._user_id=$1 and pu.end_date < $2 ORDER BY pu.end_date DESC`
    const futureQuery = `SELECT * FROM prescriptions_users pu FULL JOIN prescriptions p ON p.prescription_id = pu._prescription_id WHERE pu._user_id=$1 and pu.start_date > $2 ORDER BY pu.start_date ASC`
    const currentQuery = `SELECT * FROM prescriptions_users pu FULL JOIN prescriptions p ON p.prescription_id = pu._prescription_id WHERE pu._user_id=$1 and pu.start_date <= $2 AND pu.end_date >= $2 ORDER BY pu.start_date ASC`
    try {
        past = await db.manyOrNone(pastQuery, [user_id, date])
        future = await db.manyOrNone(futureQuery, [user_id, date])
        current = await db.manyOrNone(currentQuery, [user_id, date])
        res.json({user_id: user_id, "past": past, "current": current, "future": future})
    } catch (e) {
        res.status(400).json({"message": "error"})
    }
})



module.exports = app.listen(8000);
console.log('Server is listening on port 3000');