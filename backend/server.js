// imports
const express = require("express");
const cors = require("cors");

// express app usage
const app = express();
app.use(cors());
app.use(express.json());

// mongodb connection
const connectDB = require("./config/db")
connectDB()

// API routes
const blogRoutes = require("./routes/blogRoutes")
app.use("/api/blogs", blogRoutes)

// backend server listening through port 5000
const PORT = 5000
app.listen(PORT, () => {
    console.log("backend server is running on port", PORT)
})