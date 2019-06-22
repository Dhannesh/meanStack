var express = require('express');
var Mongoose = require('mongoose');
var BodyParser = require('body-parser');
var server = express();
var UserController = require('./usercontroller'); 
var ProductController = require('./productcontroller');
var Cors = require('cors');
var path = require('path')

// const MONGOURL = "mongodb://localhost:27017/coerproject1";
const MONGOURL= "mongodb://test:test1234@ds117729.mlab.com:17729/coerproject"
const PORT = process.env.PORT || 7000;

server.use(Cors());
server.use(BodyParser.json());
server.use(express.static(__dirname + '/dist/ang1'));

server.listen(PORT,function(){
    console.log('Server is running at port ',PORT);
    Mongoose.connect(MONGOURL,function(error){
        console.log('Error in connection= ',error);
    })
    server.get('/',function(req,res){
        res.sendFile('./dist/ang1/index.html')
    })
    server.post('/api/signup',UserController.signup);
    server.post('/api/login',UserController.login);
    server.post('/api/forgotPassword',UserController.forgotPassword);
    server.post('/api/changePassword',UserController.changePassword);
    server.post('/api/remove',UserController.deleteAccount);

    server.post('/api/addProduct',ProductController.addProduct);
    server.get('/api/allproducts',ProductController.allProducts);
    server.get('/api/getproduct/:id',ProductController.getProduct);
    server.get('/*',function(req,res){
        res.sendFile(path.join(__dirname + 'dist/ang1/index.html'));
    })

})