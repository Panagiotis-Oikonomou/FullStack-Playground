const express = require("express");
const router = express.Router();
const secretSanta = require("../controllers/secretSantaController");

router.post("/", secretSanta.secretSanta);

module.exports = router;