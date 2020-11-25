const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/", (req, res) => res.send("emails"));

router.get("/:email", (req, res) => {
  return User.findOne({
    where: { mail: req.params.email },
  })
    .then((email) => res.send(email))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
