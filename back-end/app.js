// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();


// CONTROLLER
const buttonsController= require("./controllers/buttonsController")
const usersController= require("./controllers/usersController")

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/buttons", buttonsController);
app.use("/users", usersController);

app.get("/", (req, res) => {
    res.send("TouchTalk")
})

// EXPORT
module.exports = app;