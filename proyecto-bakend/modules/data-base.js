var mongoose = require('mongoose');

let bd = 'codereflex';
let port = '27017';
let host = 'localhost';

class Database{
    constructor(){
        this.conectar();
    }
    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${bd}`)
        .then(result=>console.log('se conecto a mongodb'))
        .catch(error=>console.log(error));
    }
} 

module.exports = new Database();