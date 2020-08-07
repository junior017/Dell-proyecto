var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');



router.post('/', function(req, res){
    let u = new usuario(
        {
            nombre: req.body.nombre,
            segundo_nombre: req.body.segundo_nombre,
            apellido: req.body.apellido,
            segundo_apellido: req.body.segundo_apellido,
            contrasenia: req.body.contrasenia,
            fecha_nacimiento: {
                dia:req.body.dia,
                mes:req.body.mes,
                año:req.body.anio

            }

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



router.get('/:id', function(req, res){
       usuario.find({_id:req.params.id}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

router.get('/', function(req, res){
    usuario.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});
router.put('/:id', function(req, res){
   usuario.update(
       {
           _id: req.params.id
       },
       {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        pais: req.body.pais
    }
   ).then(result=>{
    res.send(result);
    res.end();
}).catch(error=>{
    res.send(error);
    res.end();
});
});

router.delete('/:id', function(req, res){
    usuario.remove(
        {
            _id: req.params.id  
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;