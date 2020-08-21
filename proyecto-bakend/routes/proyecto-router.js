var express = require('express');
var rout = express.Router();
var proyecto = require('../models/proyecto');

rout.post('/', function(req, res){
    let u = new proyecto(
        {
            nombreProyecto: req.body.nombreProyecto,
            carpetas:{
                nombreCarpeta1: req.body.nombreCarpeta,
                nombreCarpeta2: req.body.nombreCarpeta2,
                nombreCarpeta3: req.body.nombreCarpeta3,
                nombreCarpeta4: req.body.nombreCarpeta4
            },
            usuario: {
                nombre:req.body.nombre,
                id: req.body.id
            },
            fecha_actuallizacion: req.body.fecha_actuallizacion
        }
    );
    u.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    }); 
});

rout.get('/', function(req, res){
    proyecto.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

rout.get('/:id/usuario', function(req, res){
    proyecto.find({_id:req.params.id},
        {usuario:true}).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});


module.exports = rout;