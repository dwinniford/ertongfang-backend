var express = require('express');
var router = express.Router();
const pollyController = require('../controllers/pollyController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Home Page' });
});

router.get('/read', pollyController.read)

module.exports = router;
