var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();
// GET request for one horse.
router.get('/horses/:id', horse_controlers.horse_detail);

module.exports = router;