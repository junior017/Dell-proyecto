var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombreProyecto: String
});

module.exports = mongoose.model('proyecto', esquema);