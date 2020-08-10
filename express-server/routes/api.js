const express = require("express");
const router = express.Router();

const locations = require("../controllers/location.controller.js");

// /_ GET api listing. _/;
// router.get("/", (req, res) => {
//   res.send("api works");
// });

// Create a new Location
router.post("/", locations.create);

// Retrieve all Locations
router.get("/", locations.findAll);

module.exports = router;
