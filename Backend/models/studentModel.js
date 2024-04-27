const mongoose=require("../config/mongoose")
const userSchema =new mongoose.Schema({
    UserName: String,
    email: String,
    password: String, 
 });
 const studentModel =mongoose.model("StudentUsers",userSchema)
 module.exports = studentModel