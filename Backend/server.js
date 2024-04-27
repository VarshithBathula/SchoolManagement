const express = require("express")
const server = express()
const cors =require("cors")

const StudentRouter =require( "./Router/StudentRouter")
const TeacherRouter = require("./Router/TeacherRouter")
const ParentRouter =require("./Router/ParentRouter")
const AdminRouter =require("./Router/AdminRouter")



server.use(express.json())
server.use(cors())





server.use("/StudentUsers",StudentRouter)
server.use("/TeacherUsers",TeacherRouter)
server.use("/ParentUsers",ParentRouter)
server.use("/AdminUsers",AdminRouter)






port = 3002;
server.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})
