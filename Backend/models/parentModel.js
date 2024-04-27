const mongoose=require("../config/mongoose")
const userSchema =new mongoose.Schema({
    UserName: String,
    email: String,
    password: String, 
   
   
 });
 const ParentModel =mongoose.model("PatentsUsers",userSchema)
 module.exports = ParentModel