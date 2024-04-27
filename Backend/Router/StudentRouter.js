
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const studentRouter = express.Router();
const studentModel =require("../models/studentModel")
const { secretKey } = require('../config/config');





studentRouter.post('/signup', async (req, res) => {
    const student = await studentModel.findOne({email:req.body.email}); 

    if(student){
        return res.status(404).send('Student registered already');
    }
    else{
    try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); 
    const student = studentModel({ email:req.body.email, password: hashedPassword, UserName: req.body.UserName, }); 
    student.save();
    const token = jwt.sign({email :student.email}, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token,student });

    } catch (error) {

    console.error('Error registering student:', error); res.status(500).send('Internal Server Error');
    } }});



    studentRouter.post('/login', async (req, res) => {
   
        const student = await studentModel.findOne({email:req.body.email}); //http://localhost:3002/student/login
        if (!student) {
        return res.status(404).send('Student not found');
        }
        try {
            const passwordMatch = await bcrypt.compare( req.body.password,student.password);

            if (passwordMatch) {
                const token = jwt.sign({email :student.email}, secretKey, { expiresIn: '1h' });

            res.status(200).json({ token,student });
            }
            
            else{
                res.status(401).send('Incorrect password');
            }
            } catch (error) {
            
            res.status(500).send(error); } 
    });



module.exports = studentRouter