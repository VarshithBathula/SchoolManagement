
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AdminRouter = express.Router();
const {AdminModel,AdminFee,AdminStaff} =require("../models/adminModel")
const { secretKey } = require('../config/config');





AdminRouter.post('/signup', async (req, res) => {
    const student = await AdminModel.findOne({email:req.body.email}); //http://localhost:3002/student/signup

    if(student){
        return res.status(404).send('Student registered already');
    }
    else{
    try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); 
    const student = AdminModel({ email: req.body.email, password: hashedPassword ,School_code:req.body.School_code,school_about:req.body.school_about,School_name:req.body.name}); 
    student.save();
    const token = jwt.sign({email :student.email}, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token,student });

    } catch (error) {

    console.error('Error registering student:', error); res.status(500).send('Internal Server Error');
    } }});



    AdminRouter.post('/login', async (req, res) => {
   
        const student = await AdminModel.findOne({email:req.body.email}); //http://localhost:3002/student/login
        if (!student) {
        return res.status(404).json({ error: 'Student not found' });
        }
        try {
            const passwordMatch = await bcrypt.compare( req.body.password,student.password);

            if (passwordMatch) {
                const token = jwt.sign({email :student.email}, secretKey, { expiresIn: '1h' });

            res.status(200).json({ token,student });
            }
            
            else{
                res.json({ error: 'Incorrect password' });
            }
            } catch (error) {
            
            res.status(500).json({ error: 'Internal server error' }); } 
    });


    AdminRouter.get("/",async (req,res)=>{
        try{
        let studentsList = await AdminModel.find();
        res.json(studentsList);
        }
        catch (error) {
            console.error('Error fetching students:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    AdminRouter.get('/fees', async (req, res) => {
        try {
          const fees = await AdminFee.find();
          res.json(fees);
        } catch (err) {
          console.error('Error fetching fees:', err);
          res.status(500).json({ error: 'Server error' });
        }
      });
      
      // Add new fee record
      AdminRouter.post('/fees', async (req, res) => {
        const { studentName, amount } = req.body;
        try {
          const newFee = new AdminFee({ studentName, amount });
          await newFee.save();
          res.status(201).json(newFee);
        } catch (err) {
          console.error('Error adding fee:', err);
          res.status(500).json({ error: 'Server error' });
        }
      });
      AdminRouter.get('/staff', async (req, res) => {
        try {
          const staff = await AdminStaff.find();
          res.json(staff);
        } catch (err) {
          console.error('Error fetching staff:', err);
          res.status(500).json({ error: 'Server error' });
        }
      });
      
      // Add new staff record
      AdminRouter.post('/staff', async (req, res) => {
        const { name, role, department } = req.body;
        try {
          const newStaff = new AdminStaff({ name, role, department });
          await newStaff.save();
          res.status(201).json(newStaff);
        } catch (err) {
          console.error('Error adding staff:', err);
          res.status(500).json({ error: 'Server error' });
        }
      });


module.exports = AdminRouter