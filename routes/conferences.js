
const express = require("express");
const router = express.Router();
const ctrl = require('../controllers');

router.post('/conference_init', ctrl.conferences.conferenceInit);

module.exports = router;
