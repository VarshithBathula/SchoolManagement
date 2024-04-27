

import React, { useState } from 'react';
import './StudentLoginPage.css';
import {studentLogin,studentSignup} from "../../api"
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';





const StudentAuthPage = () => {
    const[UserName, setName]=useState('')
    const [email,setEmail]=useState('')
    const [email1,setEmail1]=useState('')
    const [password,setPassword]=useState('')
    const [password1,setPassword1]=useState('')
    const [loginError, setLoginError] = useState('');
    const [signupError, setSignupError] = useState('');

  
    const nav = useNavigate();
   

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await studentLogin({ email: email , password: password });
  
        nav('/studenthome')
        } catch (error) {
            setLoginError(error.response.data);
        }
     
       
    };

    const handleSignupSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await studentSignup({ UserName: UserName, email: email1 , password: password1 });
                  nav('/studenthome')
        } catch (error) {
            setSignupError(error.response.data);
        }
      
     
       
    };

    return (
        <div className="student-auth-page">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <TextField id="standard-basic" style={{margin:"10px"}} label="Email" variant="standard" type="text" onChange={(e)=>setEmail(e.target.value)}  required/>
                    <TextField id="standard-basic" style={{margin:"10px"}} label="Password" variant="standard" type="password" onChange={(e)=>setPassword(e.target.value)}  required />

                    <button style={{margin:"15px"}} type="submit">Login</button>
                    {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

                </form>
            </div>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignupSubmit}>
                <TextField id="standard-basic" style={{margin:"10px"}} label="Name" variant="standard" onChange={(e)=>setName(e.target.value)} placeholder="UserName" required/>
                <TextField id="standard-basic" style={{margin:"10px"}} label="Email" variant="standard" onChange={(e)=>setEmail1(e.target.value)} placeholder="Email" required/>
                <TextField id="standard-basic" style={{margin:"10px"}} label="Password" type="password" variant="standard"  onChange={(e)=>setPassword1(e.target.value)} placeholder="Password"  required/>

                    <button style={{margin:"15px"}} type="submit">Sign Up</button>
                    {signupError && <p style={{ color: 'red' }}>{signupError}</p>}

                </form>
            </div>
        </div>
    );
};

export default StudentAuthPage;