var express = require('express');
var router = express.Router();
const pollyController = require('../controllers/pollyController')
const flashcardController = require('../controllers/flashcardController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Home Page' });
});

router.post('/flashcards', flashcardController.create )

router.get('/read', pollyController.read)

module.exports = router;
