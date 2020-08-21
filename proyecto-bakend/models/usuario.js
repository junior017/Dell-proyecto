var mongoose = require('mongoose');
const brcrypt = require('bcryptjs')
var esquema = new mongoose.Schema({
    nombre: String,
    segundo_nombre: String,
    apellido: String,
    segundo_apellido: String,
    correo:String,
    contrasenia: String,
    fecha_nacimiento: mongoose.SchemaTypes.Mixed
});

//funcion de encriptacion al crear o actualisar usuario
esquema.pre('save', function(next){
    brcrypt.genSalt(10).then(salts=>{
        brcrypt.hash(this.contrasenia, salts).then(hash=>{
            this.contrasenia = hash;
            next();
        })
    }).catch(error=> next(error));
});

module.exports = mongoose.model('usuarios', esquema);
