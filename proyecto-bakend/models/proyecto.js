var mongoose = require('mongoose');
const usuario = require('./usuario');

var esquema = new mongoose.Schema({
    nombreProyecto: String,
    carpetas:Array,
    usuario: Array,
    fecha_actuallizacion:mongoose.SchemaTypes.Mixed

});

module.exports = mongoose.model('proyecto', esquema);