const mongoose=require("mongoose");
//create the schema
const userSchema=mongoose.Schema({
 username:String,
 password:String,
 phone:Number
})
const userData=mongoose.model('users',userSchema);
module.exports=userData;  