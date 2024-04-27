const mongoose=require("../config/mongoose")


const userSchema =new mongoose.Schema({
    email: String,
    password: String,
    School_name:String,
    School_code:String,
    school_about:String,
   
   
 });

 const userSchema1 =new mongoose.Schema({
    studentName: String,
    amount: Number,
    paid: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
 });

 const userSchema2 =new mongoose.Schema({
    name: String,
    role: String,
    department: String
 });

 const AdminModel =mongoose.model("AdminUser",userSchema)
 const AdminFee =mongoose.model("AdminFee",userSchema1)
 const AdminStaff =mongoose.model("AdminStaff",userSchema2)

 module.exports = {AdminModel,AdminFee,AdminStaff}