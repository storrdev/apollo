var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	var db = req.db;
	var collection = db.get('artists');
	collection.find({}, {}, function(e, docs) {
		res.render('artistlist', {
			"artists" : docs
		});
	});	
});

router.get('/:artist', function(req, res) {
	var db = req.db;
	var collection = db.get('artists');
	collection.find({}, {}, function(e, docs) {
		res.render('artistpage', {
			""
		})
	};)
});

router.get('/single-list.html', function(req, res) {
	res.render('singleList', {});
});

module.exports = router;