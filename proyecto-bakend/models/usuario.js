var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    segundo_nombre: String,
    apellido: String,
    segundo_apellido: String,
    contrasenia: String,
    fecha_nacimiento: mongoose.SchemaTypes.Mixed
});

module.exports = mongoose.model('usuarios', esquema);
