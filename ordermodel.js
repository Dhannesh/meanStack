var Schema = require('mongoose').Schema;
var Mongoose = require('mongoose');
var orderschema = new Schema({
    id:{type:Number,required:true},
    pending:{type:Boolean,default:true},
    completed:{type:Boolean, default:false},
    email:{type:String,required:true},
    totalprice:{type:Number,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String},
    mode:{type:String,default:'cash'},
    add1:{type:String,required:true},
    street:{type:String,required:true},
    mobile:{type:String, required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    pincode:{type:Number,required:true},
    items:{type:Array,required:true}

})
module.exports = Mongoose.model('dhaneshorder',orderschema);