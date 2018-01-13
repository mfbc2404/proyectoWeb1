var mongoose = require('mongoose');
var express = require('express');


// parqueadero Schema
var parqueaderoSchema = mongoose.Schema({
	nombreParqueadero: {
		type: String,
		index:true
	}
});



var Parqueadero = module.exports = mongoose.model('Parqueadero', parqueaderoSchema);

