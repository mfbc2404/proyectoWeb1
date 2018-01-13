var express = require('express');
var router = express.Router();

var Disp = require('../models/disponibilidad');

// parqueadero
router.get('/parqueaderos', function(req, res){
	res.render('parqueaderos');
});

router.post('/parqueaderos', function(req, res) {

    var errors = req.validationErrors();

	if(errors){
		res.render('parqueaderos',{
			errors:errors
		});
	} else {
		

		Disp.getDisponibilidad(function(err, disp){
			if(err) throw err;
			console.log(disp);
		});


		res.redirect('/consultaDisponibilidad/consultaDisponibilidad');
	}
  });

module.exports = router;