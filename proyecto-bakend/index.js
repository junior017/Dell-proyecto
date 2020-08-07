var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var testModule = require('./modules/test-module');
var usuariosRouter = require('./routes/usuarios-router');
var proyectoRouter = require('./routes/proyecto-router');
var loginUser = require('./routes/app')
var dataBase = require('./modules/data-base');
var app = express();

app.get('/', function(req, res){
    res.send('mostrar mensaje en linea');
})

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/usuario', usuariosRouter);
app.use('/proyecto', proyectoRouter);
app.use('/loguin', loginUser);
//app.use();


app.listen(4100, function(){
    console.log('servidor se a levantado!');
});