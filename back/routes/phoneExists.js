const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/", (req, res) => res.send("emails"));

router.get("/:phone", (req, res) => {
  return User.findOne({
    where: { phone: req.params.phone },
  })
    .then((phone) => res.send(phone))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;