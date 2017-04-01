var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* targetSearch */
router.get('/targetSearch', function(req, res, next){
	// res.sendFile(path.join(path.dirname(__dirname), 'public/javascripts/headBanner.js'));
	res.render('index', {title: 'targetSearch'});
});

module.exports = router;
