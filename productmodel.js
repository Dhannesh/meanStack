var Schema = require('mongoose').Schema;
var Mongoose = require('mongoose');
var productschema = new Schema({
    productname:{required:true,type:String},
    productprice:{required:true,type:Number},
    productimage:{type:String},
    productdiscount:{type:Number},
    productdiscription:{type:String},
    productid:{type:Number}  
})
module.exports = Mongoose.model('product',productschema);