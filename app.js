require('dotenv').config()
const express = require('express')
const app = express()
const { register } = require('./controller/auth')
const connectDB = require('./config/db')

app.use(express.json())

app.post('/register', register)


const startServer = async () => {
    await connectDB()
    app.listen(process.env.PORT, async (req,res) => {
        console.log(`server is running on the port ${process.env.PORT}`);
    })
}

startServer()
