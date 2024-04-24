const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollNum:{
        type:Number,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    role:{
        type:String,
        default:"Teacher"
    },
    school:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'admin',
        required:true,
    },
    teacherSubject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'sclass',
        reuired:true,
    },
    attendance:[{
        date:{
            type:Date,
            required:true,
        },
        presentCount:{
            type:String,
        },
        absentCount:{
            type:String,
        }
    }]
},{timestamps:true});
module.exports = mongoose.model("teacher",teacherSchema)