var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();
// GET request for one horse.
router.get('/horses/:id', horse_controlers.horse_detail);
/* GET create costume page */
router.get('/create', horse_controlers.horse_create_Page);
module.exports = router;