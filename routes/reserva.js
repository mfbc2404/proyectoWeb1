var express = require('express');
var router = express.Router();

var Reserva = require('../models/disponibilidad');

// parqueadero
router.get('/reserva', function(req, res){
	res.render('reserva');
});


router.post('/reserva', function(req, res) {

    var errors = req.validationErrors();

	if(errors){
		res.render('reserva',{
			errors:errors
		});
	} else {
		

		Reserva.disminuirDisponibilidad(function(err, reserva){
			if(err) throw err;
			console.log(reserva);
		});

		req.flash('success_msg', 'Se ha reservado exitosamente');

		res.redirect('/');
	}
  });

module.exports = router;