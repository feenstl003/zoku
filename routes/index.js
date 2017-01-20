var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
    var {path} = req
  res.render('index', { title: 'Express', path });
});

module.exports = router;
