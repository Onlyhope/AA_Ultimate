var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("Loading Homepage...");
  	res.render('pages/index', { title: 'Express' });
});

router.post('/upload-file', function(req, res, next) {
	if (req.files) {
		var file = req.files.inputFileName;
		var filename = file.name

		var loc = window.location.pathname;
		var dir = loc.substring(0, loc.lastIndexOf('/'));

		res.send('<p>Dir = ' + dir + '</p>\n'
			+ '<p>Loc = ' + loc + '</p>');

		// file.mv("../uploads/" + filename, function(err) {
		// 	if (err) {
		// 		// Error
		// 		console.log("Error");
		// 		res.send("App error: " + err);
		// 	} else {
		// 		// Do nothing
		// 		console.log("Success");
		// 		res.send("Success");
		// 	}
		// });
	} else {
		res.send("<h1>Nothing happnened</h1>");
	}
});

module.exports = router;
