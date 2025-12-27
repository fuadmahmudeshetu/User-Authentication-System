const mongoose = require('mongoose')

const mongoDB = async () => {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)

    if (connectionInstance) {
        console.log(`Mongo Connected ${connectionInstance.env.host}`)
    }
}