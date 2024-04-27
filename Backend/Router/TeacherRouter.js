
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const TeacherRouter = express.Router();
const {TeacherGrade,TeacherModel,TeacherSchedule} =require("../models/teachersModel")
const { secretKey } = require('../config/config');





TeacherRouter.post('/signup', async (req, res) => {
    const student = await TeacherModel.findOne({empid:req.body.empid}); //http://localhost:3002/student/signup

    if(student){
        return res.status(404).send('Student registered already');
    }
    else{
    try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); 
    const student = TeacherModel({empid: req.body.empid, password: hashedPassword, name:req.body.name, schoolName: req.body.schoolName }); 
    student.save();
    const token = jwt.sign({empid :student.empid}, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token,student });

    } catch (error) {

    console.error('Error registering student:', error); res.status(500).send('Internal Server Error');
    } }});



    TeacherRouter.post('/login', async (req, res) => {
   
        const student = await TeacherModel.findOne({empid:req.body.empid}); //http://localhost:3002/student/login
        if (!student) {
        return res.status(404).send('Student not found');
        }
        try {
            const passwordMatch = await bcrypt.compare( req.body.password,student.password);

            if (passwordMatch) {
                const token = jwt.sign({empid :student.empid}, secretKey, { expiresIn: '1h' });
               

            res.status(200).json({ token,student });
            }
            
            else{
                res.status(401).send('Incorrect password');
            }
            } catch (error) {
            
            res.status(500).send(error); } 
    });

    TeacherRouter.get("/",async (req,res)=>{
      try{
      let studentsList = await TeacherModel.find();
      res.json(studentsList);
      }
      catch (error) {
          console.error('Error fetching students:', error);
          res.status(500).json({ error: 'Internal server error' });
      }
  });

// Get all grade records
TeacherRouter.get('/grades', async (req, res) => {
    try {
      const grades = await TeacherGrade.find();
      res.json(grades);
    } catch (err) {
      console.error('Error fetching grades:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Add new grade record
TeacherRouter.post('/grades', async (req, res) => {
    const { studentName, subject, score } = req.body;
    try {
      const newGrade = new TeacherGrade({ studentName, subject, score });
      await newGrade.save();
      res.status(201).json(newGrade);
    } catch (err) {
      console.error('Error adding grade:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

    TeacherRouter.get("/",async (req,res)=>{
        try{
        let studentsList = await TeacherModel.find();
        res.json(studentsList);
        }
        catch (error) {
            console.error('Error fetching students:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
    // Class schedule routes
TeacherRouter.get('/schedules', async (req, res) => {
  try {
    const schedules = await TeacherSchedule.find();
    res.json(schedules);
  } catch (err) {
    console.error('Error fetching schedules:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

TeacherRouter.post('/schedules', async (req, res) => {
  const { className, time, day } = req.body;
  try {
    const newSchedule = new TeacherSchedule({ className, time, day });
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (err) {
    console.error('Error adding schedule:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

    

module.exports = TeacherRouter