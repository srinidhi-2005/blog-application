const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/blogDB")
        console.log("mongo DB is connected...")
    } catch(error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB