require('dotenv').config()

const mongoose = require('mongoose');
const MONGO_URI = `mongodb+srv://backend-sandbox:${process.env.MONGODB_PASSWORD}@cluster0.vqflr.mongodb.net/sample_training?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, () => {
    console.log("Connected successfully to DB")
})