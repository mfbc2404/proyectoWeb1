var express = require('express');
var router = express.Router();

// cosultaDisponibilidad
router.get('/consultaDisponibilidad', function(req, res){
	res.render('consultaDisponibilidad');
});



module.exports = router;