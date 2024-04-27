const mongoose=require("../config/mongoose")

const userSchema =new mongoose.Schema({
   empid: String,
   password: String,
   name: String,
   schoolName: String,
   date: { type: Date, default: Date.now },

 });

 const userSchema1 = new mongoose.Schema({
    studentName: String,
    subject: String,
    score: Number
 });

 const userSchema2 = new mongoose.Schema({
    className: String,
    time: String,
    day: String
 });

 const TeacherModel =mongoose.model("TeacherUsers",userSchema)
 const TeacherGrade =mongoose.model("TeacherGrade",userSchema1)
 const TeacherSchedule =mongoose.model("TeacherSchedule",userSchema2)

 module.exports = {TeacherModel,TeacherGrade,TeacherSchedule}