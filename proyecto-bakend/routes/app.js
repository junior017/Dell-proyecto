var express = require('express');
var route = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const brcrypt = require('bcryptjs');
const router = require('./usuarios-router');
const SCRET_KEY = 'secretkey123456'


route.post('/', (req, res, next)=>{
    const use = {correo: req.body.correo, 
               contrasenia: req.body.contrasenia
    } 
    usuario.findOne({correo: use.correo}, (err, user)=>{
        if(err){
            res.status(500).send('error en la autenticacion');
        }
        if(!user){
            res.status(500).send('el usuario no existe')
        }else{ const token = jwt.sign({_id: use.id}, 'secretkey')
            usuario.findOne({contrasenia: use.contrasenia}, (err, match)=>{
                if(!match){
                    
                    res.status(500).send({message: 'contraseña erronea'})
                }else{
                    res.status(201).json({token})
                    //res.send({user})
                   
                }
            })
           
        }
    })
})


 function veryfi(req, res, next){
   if(!req.headers.authorization){
       return res.status(401).send('no autorizado');
   }
   const token = req.headers.authorization.split(' ')[1]
   if(token === 'null'){
    return res.status(401).send('no autorizado');
   }
   const data = jwt.verify(token, 'secretkey');
   next();
   console.log(token);
 }




module.exports = route;
