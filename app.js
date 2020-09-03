
const express = require("express");
const app = express()
const mongoose = require("mongoose");
// Install and setup mongoose:
const port = 3000

require("dotenv").config({ path: ".env" });
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.error("Database connection error");
    });

app.listen(port, () => {
    console.log(` is runing .....
    Example app listening at http://localhost:${port}`)
})
