// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();


// CONTROLLER
const buttonsController= require("./controllers/buttonsController")

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/buttons", buttonsController);

app.get("/", (req, res) => {
    res.send("TypeTalk")
})

// EXPORT
module.exports = app;