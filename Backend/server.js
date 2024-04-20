const express= require("express")
const server = express()
const cors = require('cors');
const multer = require("multer")
const fs = require("fs");
const path = require('path');
server.use(cors());


server.use(express.static(path.join(__dirname, "uploads")));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix =Date.now();
        cb(null, uniqueSuffix +file.originalname);
    }
});
const upload = multer({ storage: storage });

server.use(express.json())
const mongo_url = "mongodb://localhost:27017/assests"
const mongoose =require("mongoose")
mongoose.connect(mongo_url)
.then(()=>console.log("mongodb connection established "))
.catch((err)=>console.log(err));




const adminSchema = new mongoose.Schema({
    name: String,
    fees: Number,
    schoolCode: Number,
    address: String,  
    image: String,
});
const adminModel = mongoose.model("admin",adminSchema)




server.get("/admin/:name", async (req, res) => {
    try {
        const item = await adminModel.findOne({ name: name });
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: "Admin not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

server.put("/admin/:name",async(req,res)=>{
    let name = req.params.name
    let {fees,schoolCode,address} = req.body;
    let ind =await adminModel.findOneAndUpdate({name:name},{fees,schoolCode,address});
    if(ind){
        res.json(ind);
    }
    else{
        res.status(404).send("id not found")
    }
});

server.post("/admin", upload.single('image'),async(req,res)=>{
    let {name,fees,schoolCode,address} = req.body;
    const imagename = `http://localhost:3004/uploads/${req.file.filename}`;
    let schoolAdmin =adminModel({name:name,fees:fees,schoolCode:schoolCode,address:address,image:imagename})
    const nameAlreadyExist = await adminModel.findOne({name:req.body.name});
    if(nameAlreadyExist){
        res.status(500).send("User already Exists")
    }
    else{
    schoolAdmin.save()
    res.status(200).json({schoolAdmin});
    }
})



server.post("/image", upload.single('file'), async (req, res) => {
  try {
    const imagename = `http://localhost:3004/uploads/${req.file.filename}`;

    let newUser = new adminModel({ image: imagename });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


server.delete("/:name",async (req,res)=>{
    try{
    const School = req.params.name;

    let s = await adminModel.findOneAndDelete( {name:School});
    
    if(s != null) res.json(s);
    else res.status(404).send("No such student found");
    }
    catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


server.listen(3004,()=>{
    console.log("Server has Started");
});




            // If item is not found, send appropriate message
        // If any error occurs during query execution, send error response
    // let existingUser = await adminModel.findOne({ name:School});
// const bcrypt = require("bcrypt")
// const secretKey="secretKey123";
// const jwt = require('jsonwebtoken');
// server.get("/admin/:name",async(req,res)=>{
//     const name = req.params.name
//     const item = adminModel.findOne({name:name});
//     res.json(item)
// });
// function authenticator(req,res,next){
//     const token = req.headers.authorization.split(" ")[1];
//     console.log(token);
//    userisVaild = jwt.verify(token,secretKey);
//    if( userisVaild )
//         next();
//     else
//         next(new Error("Not a Vaild user"));       
// }



// const userSchema =new mongoose.Schema({
//     name: String,
//     pswd: String, 
   
// });
// const studentModel =mongoose.model("student",userSchema)
// let s = await SchoolModel.findOneAndUpdate({School_name:School},{School_name,School_fees,basic_details,image:imagename},{new:true})
// server.post("/signup", async(req,res)=>{
//     let {name,pswd} = req.body;

//     const alreadyExist = await studentModel.findOne({name:req.body.name}); 
//     if(alreadyExist)
//     res.status(500).send(" User already Exists")
// else{

//     const hashedPassword = await bcrypt.hash(pswd, 10); 
//     let student= studentModel({name:name,pswd: hashedPassword});
//     student.save();
//     const token = jwt.sign({name :student.name}, secretKey, { expiresIn: '1h' });


//     res.status(200).json({ token,student });
// }})


// server.use(authenticator);


// server.get("/api",(req,res)=>{res.send("authorization successful! ")})


// server.post('/login', async (req, res) => {
   
//     const student = await studentModel.findOne({name:req.body.name}); //http://localhost:3002/student/login
//     if (!student) {
//     return res.status(404).send('Student not found');
//     }
//     try {
//         const passwordMatch = await bcrypt.compare( req.body.pswd,student.pswd);

//         if (passwordMatch) {
//             const token = jwt.sign({name :student.name}, secretKey, { expiresIn: '1h' });

//         res.status(200).json({ token,student });
//         }
        
//         else{
//             res.status(401).send('Incorrect password');
//         }
//         } catch (error) {
        
//         res.status(500).send(error); } 
// });






// const userSchema =new mongoose.Schema({
//     name: String,
//     pswd: String, 
   
//  });
//  const studentModel =mongoose.model("student",userSchema)

// server.post("/signup", async(req,res)=>{
//     let {name,pswd} = req.body;

//     const alreadyExist = await studentModel.findOne({name:req.body.name}); 
//     if(alreadyExist)
//     res.status(500).send(" User already Exists")
// else{

//     const hashedPassword = await bcrypt.hash(pswd, 10); 
//     let student= studentModel({name:name,pswd: hashedPassword});
//     student.save();
//     const token = jwt.sign({name :student.name}, secretKey, { expiresIn: '1h' });


//     res.status(200).json({ token,student });
// }})
// server.post('/login', async (req, res) => {
   
//     const student = await studentModel.findOne({UserName:req.body.UserName}); //http://localhost:3002/student/login
//     if (!student) {
//     return res.status(404).send('Student not found');
//     }
//     try {
//         const passwordMatch = await bcrypt.compare( req.body.pswd,student.pswd);

//         if (passwordMatch) {
//             const token = jwt.sign({name :student.name}, secretKey, { expiresIn: '1h' });

//         res.status(200).json({ token,student });
//         }
        
//         else{
//             res.status(401).send('Incorrect password');
//         }
//         } catch (error) {
        
//         res.status(500).send(error); } 
// });
// server.listen(3000,()=>{
//     console.log("Server has Started");
// });






// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const registerRouter = express.Router();
// const mongo_url = "mongodb://localhost:27017/school"
// const secretKey = 'mySecretKey123';

// module.exports = {
//     mongo_url: mongo_url,
//   secretKey: secretKey,
//   };

// const mongoose =require("mongoose")
// mongoose.connect(mongo_url)
// .then(()=>console.log("mongodb connection established "))
// .catch((err)=>console.log(err));

// module.exports = mongoose
// const userSchema =new mongoose.Schema({
//     UserName: String,
//     password: String, 
   
   
//  });
//  const registerModel =mongoose.model("register",userSchema)
//  module.exports = registerModel

// registerRouter.post('/signup', async (req, res) => {
//     const student = await registerModel.findOne({UserName:req.body.UserName}); //http://localhost:3002/student/register

//     if(student){
//         return res.status(404).send('Student registered already');
//     }
//     else{
//     try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10); 
//     const student = registerModel({ UserName: req.body.UserName, password: hashedPassword }); 
//     student.save();
//     const token = jwt.sign({UserName :student.UserName}, secretKey, { expiresIn: '1h' });
//     res.status(201).json({ token });

//     } catch (error) {

//     console.error('Error registering student:', error); res.status(500).send('Internal Server Error');
//     } }});



//     registerRouter.post('/login', async (req, res) => {
   
//         const student = await registerModel.findOne({UserName:req.body.UserName}); //http://localhost:3002/student/login
//         if (!student) {
//         return res.status(404).send('Student not found');
//         }
//         try {
//             const passwordMatch = await bcrypt.compare( req.body.password,student.password);

//             if (passwordMatch) {
//                 const token = jwt.sign({UserName :student.UserName}, secretKey, { expiresIn: '1h' });

//             res.status(200).json({ token });
//             }
            
//             else{
//                 res.status(401).send('Incorrect password');
//             }
//             } catch (error) {
            
//             res.status(500).send(error); } 
//     });

// module.exports = registerRouter

// const express = require("express")
// const server = express()
// const cors = require("cors");
// const multer = require("multer")
// server.use(express.static("public"))

// server.use(express.json())
// server.use(cors());

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"public/images");
//     },
//     filename:(req,file,cb)=>{
//         cb(null,`${Date.now()}_${file.originalname}`)
//     }
// })

// const upload = multer({ storage: storage })


// server.post("/upload",upload.single('file'),(req,res)=>{
//     if(!req.file){
//         res.status(400).send("No FIle uploaded")
//     }
//     console.log(req.file.filename);
//     res.send("http://localhost:3000/images/"+req.file.filename);
// })

// server.listen(3000,()=>{
//     console.log("server started");
// });

// const express = require("express");
// const server = express();
// // const port = 3000;
// const cors = require("cors");
// // const bcrypt = require("bcrypt");
// // const mongoose = require("mongoose");
// // const jwt = require("jsonwebtoken");


// server.use(express.json());
// server.use(cors());

// // const mongo_url = "mongodb://localhost:27017/school";

// mongoose
//   .connect(mongo_url)
//   .then(() => console.log("MongoDB connection established"))
//   .catch((err) => console.error("MongoDB connection error:", err));


// // const userSchema = new mongoose.Schema({
// //   name: String,
// //   pswd: String,
// // });

// const User = mongoose.model("User", userSchema);

// server.post("/studentRegister", async (req, res) => {
//     const { name, pswd } = req.body;
//     const alreadyExists = await User.findOne({ name });
//     if (alreadyExists) {
//         return res.status(400).send("User already exists");
//     }
//     try {
//         const hashedPwd = await bcrypt.hash(pswd, 10);
//         const newUser = new User({ name, pswd: hashedPwd });
//         await newUser.save();
//         const token = jwt.sign({ username: name }, secretKey, { expiresIn: '1h' });
//         res.status(201).json({ token });
//     } catch (error) {
//         console.error("Error registering user:", error);
//         res.status(500).send("Internal server error");
//     }
// });

// server.post("/studentLogin", async (req, res) => {
//     const { name, pswd } = req.body;
//     try {
//         const user = await User.findOne({ name });
//         if (!user) {
//             return res.status(404).send("User not found");
//         }
//         const matched = await bcrypt.compare(pswd, user.pswd);
//         if (matched) {
//             const token = jwt.sign({ username: name }, secretKey, { expiresIn: '1h' });
//             res.status(200).json({ token });
//         } else {
//             res.status(401).send("Invalid password");
//         }
//     } catch (error) {
//         console.error("Error logging in:", error);
//         res.status(500).send("Internal server error");
//     }
// });

// const secretKey ='something';
// server.use(authenticator);
// function authenticator(req, res, next) {
//   let token = req.headers.authorization;
//   if (!token) {
//       return res.status(401).send("Authentication failed! Token not provided.");
//   }
//   try {
//       token = token.split(" ")[1];
//       const decodedToken = jwt.verify(token, secretKey); // Assuming secretKey is defined somewhere
//       req.user = decodedToken;
//       next();
//   } catch (error) {
//       return res.status(401).send("Authentication failed! Invalid token.");
//   }
// }

// server.get("/api", (req, res) => {
// res.send("API");
// });

// server.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });


// const express = require("express");
// const server = express();
// const port = 3000;
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const mongoose = require("mongoose");

// server.use(express.json());

// server.get("/api",(req,res) => {res.send("api")})
// server.use(cors());

// const mongo_url = "mongodb://localhost:27017/school";

// mongoose
//   .connect(mongo_url)
//   .then(() => console.log("MongoDB connection established"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   pswd: String,
// });

// const User = mongoose.model("User", userSchema);

// server.post("/studentRegister", async (req, res) => {
//     const { name, pswd } = req.body;
//     const alreadyExists = await User.findOne({ name });
//     if (alreadyExists) {
//       return res.status(500).send("User already exists");
//     }
//     const hashedPwd = await bcrypt.hash(pswd, 10);
//     const newUser = new User({ name, pswd: hashedPwd });
//     await newUser.save();
    // let token;
    // token = jwt.sign({username: name},secretKey,{expireIn: '1h'});
//     res.send(token);
// });

// server.post("/studentLogin", async (req, res) => {
//   const studentName = req.body.name;
//   const enterPassword = req.body.pswd;
//   let studentDetails = users.find(user => user.name == studentName);
//   let matched = await bcrypt.compare(enterPassword, studentDetails.pswd);
//   if(matched){
//     res.status(200).send("successful login");
//   }
//   else{
//     res.status(404).send("no user found")
//   }
// });

// function authenticator(res,req,next){
//   let token = req.headers.authorization;
//   token = token.split(" ")[1]
//   userisValid = jwt.verify(token.secretKey);
//   if (userisValid){
//       next();
//   }
//   else{
//       next(new Error("not a valid user"));
//   }
// }

// server.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });

// server.use(authenticator);

// try {
//   const { name, pswd } = req.body;
//   const alreadyExists = await User.findOne({ name });
//   if (alreadyExists) {
//     return res.status(500).send("User already exists");
//   }
//   const hashedPwd = await bcrypt.hash(pswd, 10);
//   const newUser = new User({ name, pswd: hashedPwd });
//   await newUser.save();
//   res.status(200).send(newUser);
// } catch (error) {
//   console.error(error);
//   res.status(500).send("Internal Server Error");
// }

// try {
//     const { name, pswd } = req.body;
//     const user = await User.findOne({ name });
//     if (!user) {
//       return res.status(404).send("User not found");
//     }
//     const matched = await bcrypt.compare(pswd, user.pswd);
//     if (matched) {
//       res.status(200).send("Successful login");
//     } else {
//       res.status(401).send("Incorrect password");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }