// StudentAuthPage.js

import React, { useState } from 'react';
import './teachersLoginPage.css';
import {teacherLogin,teacherSignup} from "../../api"
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';



 // Import CSS file for styling

const TeachersAuthPage = () => {
    const [emp,setEmp]=useState('')
    const [emp1,setEmp1]=useState('')
    const [password,setPassword]=useState('')
    const [password1,setPassword1]=useState('')
    const [schoolName,setSchoolName]=useState('')
    const [name,setName]=useState('')
    const [loginError, setLoginError] = useState('');
    const [signupError, setSignupError] = useState('');
    

    const nav = useNavigate();
   

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await teacherLogin({ empid:emp , password:password , name: name, SchoolName:schoolName});
        
        
        nav('/teacherhome')
        } catch (error) {
            console.log(error);
            setLoginError(error.response.data);
        }
       
    };

    const handleSignupSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await teacherSignup({ empid:emp1 , password:password1, name:name,schoolName: schoolName });
            nav('/teacherhome')
        
        
        nav('/teacherhome')
        } catch (error) {
           
            setSignupError(error.response.data);
        }
       
      
      
    };

    return (
        <div className="student-auth-page">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                <TextField id="standard-basic" style={{margin:'10px'}} label="Emp Id" variant="standard" type="text" name="empid"  onChange={(e)=>setEmp(e.target.value)}  required/>
                <TextField id="standard-basic" style={{margin:'10px'}}  label="Password" variant="standard" type="password" name="password" onChange={(e)=>setPassword(e.target.value)}  required />


                    <button style={{margin:"25px"}}type="submit">Login</button>
                    {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

                </form>
            </div>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignupSubmit}>
                <TextField id="standard-basic"style={{margin:'10px'}}  label="Name" variant="standard" type="text" name="name" onChange={(e)=>setName(e.target.value)}  required  />
                <TextField id="standard-basic"style={{margin:'10px'}}  label="School Name" variant="standard" type="text" name="schoolName" onChange={(e)=>setSchoolName(e.target.value)}  required  />
                <TextField id="standard-basic" style={{margin:'10px'}} label="Emp Id" variant="standard" type="text" name="empid"  onChange={(e)=>setEmp1(e.target.value)}  required  />
                <TextField id="standard-basic"style={{margin:'10px'}}  label="Password" variant="standard" type="password" name="password" onChange={(e)=>setPassword1(e.target.value)}  required  />

                    
                    <button style={{margin:"25px"}} type="submit">Sign Up</button>
                    {signupError && <p style={{ color: 'red' }}>{signupError}</p>}

                </form>
            </div>
        </div>
    );
};

export default TeachersAuthPage;