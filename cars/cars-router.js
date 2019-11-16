const express = require("express");

const db = require("../data/db-config.js");

const router = express.Router();

// get
router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

// get by id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  db("cars")
    .where({ id })
    .then(car => {
      if (car[0]) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ message: "invalid id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve car" });
    });
});

// post
router.post("/", validateData, (req, res) => {
  const newCar = req.body;

  db("cars")
    .insert(newCar)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data", error: err });
    });
});

// put
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db("cars")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count) {
        res.status(200).json({ updated: count });
      } else {
        res.status(404).json({ message: "invalid id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Could not change data" });
    });
});

// delete
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db("cars")
    .where({ id })
    .del()
    .then(count => {
      if (count) {
        res.status(200).json({ deleted: count });
      } else {
        res.status(404).json({ message: "invalid id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Could not delete car" });
    });
});

// middleware
function validateData(req, res, next) {
  const { vin, make, model, mileage } = req.body;
  const body = req.body;

  if (Object.entries(body).length === 0) {
    res.status(400).json({ message: "missing user data" });
  }
  if (!vin || !make || !model || !mileage) {
    res.status(400).json({ message: "Missing a required field" });
  } else {
    next();
  }
}
module.exports = router;
