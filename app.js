require('dotenv').config()
const express = require('express')
const app = express()
const  router  = require('./routes/authRoutes')
const connectDB = require('./config/db')

app.use(express.json())
app.use('/', router)

const startServer = async () => {
    await connectDB()
    app.listen(process.env.PORT, async (req, res) => {
        console.log(`server is running on the port ${process.env.PORT}`);
    })
}

startServer()
