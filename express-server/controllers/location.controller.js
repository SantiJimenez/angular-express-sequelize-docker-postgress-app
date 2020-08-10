const db = require("../models");
const Location = db.locations;

const Op = db.Sequelize.Op;

// Create and Save a new Location
exports.create = (req, res) => {
  console.log(req.body);
  if (!req.body.name) {
    res.status(400).send({
      // message: console.log(req.body),
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Location
  const location = {
    name: req.body.name,
    coor_x: req.body.coor_x,
    coor_y: req.body.coor_y,
    area_m2: req.body.area,
    parent_location: req.body.parent === "" ? null : req.body.parent,
  };

  // Save Location in the database
  Location.create(location)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Location.",
      });
    });
};

// Retrieve all Locations from the database.
exports.findAll = (req, res) => {
  Location.findAll()
    .then((data) => {
      res.send({
        data: data,
        message: "returning data",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
