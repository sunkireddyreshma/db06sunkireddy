var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();
/* GET create horse page */
router.get('/create', horse_controlers.horse_create_Page);

module.exports = router;