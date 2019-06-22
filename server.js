var express = require('express');
var Mongoose = require('mongoose');
var BodyParser = require('body-parser');
var server = express();
var UserController = require('./usercontroller'); 
var ProductController = require('./productcontroller');
var Cors = require('cors');
// const MONGOURL = "mongodb://localhost:27017/coerproject1";
const MONGOURL= "mongodb://test:test1234@ds117729.mlab.com:17729/coerproject"
const PORT = 7000  || process.env.PORT;

server.use(Cors());
server.use(BodyParser.json());

server.listen(PORT,function(){
    console.log('Server is running at port ',PORT);
    Mongoose.connect(MONGOURL,function(error){
        console.log('Error in connection= ',error);
    })
    server.post('/signup',UserController.signup);
    server.post('/login',UserController.login);
    server.post('/forgotPassword',UserController.forgotPassword);
    server.post('/changePassword',UserController.changePassword);
    server.post('/remove',UserController.deleteAccount);

    server.post('/addProduct',ProductController.addProduct);
    server.get('/allproducts',ProductController.allProducts);
    server.get('/getproduct/:id',ProductController.getProduct);

})