var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send('Error: Artist slug required.');	
});

router.get('/:artist', function(req, res) {
	res.send(JSON.stringify(req.params));
});

module.exports = router;