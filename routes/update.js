var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();
/* GET create update page */
router.get('/update, horse_controlers.horse_update_Page');

module.exports = router;