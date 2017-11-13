var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("Loading Homepage...");
  	res.render('pages/index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	if (req.files) {
		console.log(req.files);
	}
});

module.exports = router;
