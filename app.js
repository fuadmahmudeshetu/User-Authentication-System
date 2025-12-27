require('dotenv').config()
const express = require('express')
const app = express()
const { register } = require('./controller/auth')

app.use(express.json())

app.post('/register', register)

app.listen(process.env.PORT, async (req,res) => {
    console.log(`server is running on the port ${process.env.PORT}`);
})
