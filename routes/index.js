var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("Loading Homepage...");
  	res.render('pages/index', { title: 'Express' });
});

router.post('/upload-file', function(req, res, next) {
	if (req.files) {
		res.send(req.files);
	} else {
		res.send("<h1>Nothing happnened</h1>");
	}
});

module.exports = router;
