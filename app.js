require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

app.listen(process.env.PORT, async (req,res) => {
    console.log(`server is running on the port ${process.env.PORT}`);
})
