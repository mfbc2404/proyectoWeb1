var mongoose = require('mongoose');

// Disponibilidad Schema
var DisponibilidadSchema = mongoose.Schema({
	numeroParqueaderos: {
		type: Number,
		
	},
	parqueaderosDisponibles: {
		type: Number
	}
});

var Disponibilidad = module.exports = mongoose.model('Disponibilidad', DisponibilidadSchema);

module.exports.getDisponibilidad = function(numeroParqueaderos, callback){
	var query = {numeroParqueaderos: numeroParqueaderos};
	Disponibilidad.find(callback);
}



module.exports.disminuirDisponibilidad = function(parqueaderosDisponibles, callback){
	//Disponibilidad.update({parqueaderosDisponibles:parqueaderosDisponibles},{$set:{parqueaderosDisponibles:parqueaderosDisponibles-1}})
}

module.exports.aumentarDisponibilidad = function(parqueaderosDisponibles, callback){
	//Disponibilidad.update({parqueaderosDisponibles:parqueaderosDisponibles},{$set:{parqueaderosDisponibles:parqueaderosDisponibles+1}})
}


module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}