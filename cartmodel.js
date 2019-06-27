var Schema = require('mongoose').Schema;
var Mongoose = require('mongoose');
var cartschema = new Schema({
    productname:{required:true,type:String},
    productprice:{required:true,type:Number},
    productimage:{type:String},
    productdiscount:{type:Number},
    productdiscription:{type:String},
    productid:{type:Number,required:true},
    email:{type:String, required:true},
    quantity:{type:Number,default:1}  
})
module.exports = Mongoose.model('dhaneshcart',cartschema);