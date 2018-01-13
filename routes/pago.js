var express = require('express');
var router = express.Router();

var Pago = require('../models/disponibilidad');

// parqueadero
router.get('/pago', function(req, res){
	res.render('pago');
});

router.post('/pago', function(req, res) {
	var monto = req.body.monto;
    req.checkBody('monto', 'Monto es requerido').notEmpty();

    var errors = req.validationErrors();

	if(errors){
		res.render('pago',{
			errors:errors
		});
	} else {
		

		Pago.aumentarDisponibilidad(function(err, pago){
			if(err) throw err;
			console.log(pago);
		});

		req.flash('success_msg', 'Ha pagado exitosamente');

		res.redirect('/');
	}
  });

module.exports = router;