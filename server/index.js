require('dotenv').config()
const express =  require('express')
const massive = require('massive')
const cors = require('cors')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const port = SERVER_PORT
const ctrl = require('./controller')
const app = express()

app.use(cors());
app.use(express.json())



massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
    app.listen(port, console.log(`Server is running on port: ${port}`))
})


