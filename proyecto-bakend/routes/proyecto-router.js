var express = require('express');
var router = express.Router();
var proyecto = require('../models/proyecto');

router.post('/', function(req, res){
    let u = new proyecto(
        {
            nombre: req.body.nombreProyecto
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

router.get('/', function(req, res){
    proyecto.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});
module.exports = router;