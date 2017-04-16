var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* targetSearch */
router.get('/targetSearch', function(req, res, next){
	res.sendFile(path.join(path.dirname(__dirname), 'public/output/pages/targetSearch.html'));
	// res.render('index', {title: 'targetSearch'});
});

router.get('/clueManage', function(req, res, next){
	res.sendFile(path.join(path.dirname(__dirname), '/public/output/pages/clueManage.html'));
	// res.render('index', {title: 'clueManage'});
});

module.exports = router;
