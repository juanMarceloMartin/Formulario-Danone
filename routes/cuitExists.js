const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/", (req, res) => res.send("emails"));

router.get("/:cuit", (req, res) => {
  return User.findOne({
    where: { cuit: req.params.cuit },
  })
    .then((phone) => res.send(phone))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;