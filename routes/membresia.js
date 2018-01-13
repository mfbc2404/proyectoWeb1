var express = require('express');
var router = express.Router();

// parqueadero
router.get('/membresia', function(req, res){
	res.render('membresia');
});

router.post('/membresia', function(req, res) {

    req.flash('success_msg', 'Se ha adquirido la membresia');

	res.redirect('/');
	
  });
module.exports = router;