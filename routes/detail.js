var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();
/* GET detail horse page */
router.get('/detail', horse_controlers.horse_view_one_Page);

module.exports = router;