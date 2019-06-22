var Schema = require('mongoose').Schema;
var Mongoose = require('mongoose');
var userschema = new Schema({
    name:{required:true,type:String},
    email:{required:true,unique:true, type:String},
    wallet:{type:Number,default:100},
    password:{required:true, type:String},
    profileimage:{type:String},
    id:{type:Number,unique:true,required:true},
    phone:{unique:true,type:Number,required:true},
    isverified:{type:Boolean, default:false},
    role:{type:String, default:'user'}
})

module.exports = Mongoose.model('user',userschema);