var express = require('express');
var route = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');



route.post('/', (req, res)=>{
    let use = {nombre: req.body.nombre, 
               contrasenia: req.body.contrasenia
    } 
    usuario.findOne({nombre: use.nombre}, (err, user)=>{
        if(err){
            res.status(500).send('error en la autenticacion')
        }else if(!user){
            res.status(500).send('el usuario no existe')
        }else{
    usuario.findOne({contrasenia: use.contrasenia}, (err, result)=>{
        if(err){
            res.status(500).send('error en la autenticacion')  
        }else if(result){
             res.status(200).send('usuario bien autenticado')
        }else{
            res.status(500).send('usuario o contraseña invalida')
                }
            })
        }
    })
})

module.exports = route;