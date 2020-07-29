var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Home Page' });
});

router.get('/test', function(req, res, next) {
  
  res.json({message: "hi there"})
})

module.exports = router;
