var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("Loading Homepage...");
  	res.render('pages/index', { title: 'Express' });
});

router.post('/upload-file', function(req, res, next) {
	if (req.files) {
		var file = req.files.filename;
		var filename = file.name;
		file.mv("./upload/" + filename, function(err) {
			if (err) {
				// Error
				console.log("Error");
				res.send("Error: " + err);
			} else {
				// Do nothing
				console.log("Success");
				res.send("Success");
			}
		});
	} else {
		res.send("<h1>Nothing happnened</h1>");
	}
});

module.exports = router;
