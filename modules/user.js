const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema = new Schema({
    name:String,
    lastname:String,
    age:Number,
    email:{type:String, unique:true},
    isAdmin:{type:Boolean,default:false}
}
  );

const User = mongoose.model('User', userSchema); 
module.exports = User;
