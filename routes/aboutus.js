var express = require('express');

var bodyparser = require('body-parser');
var router = express.Router();
router.use(bodyparser.json());

router.route('/').get((req,res,next) => {
  res.statusCode= 200;
  res.setHeader('Content-Type','text/plain');
  res.write('We know about coding.');
  res.end();
});

module.exports = router;
