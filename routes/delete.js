var express = require('express');
const horse_controlers= require('../controllers/horse');
var router = express.Router();
/* GET create horse page */
router.get('/delete', horse_controlers.horse_delete_Page);

module.exports = router;