

import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from "./Getstarted.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const image = require('../asserts/classroom.png');
const GetStartedPage = () => {
    const nav = useNavigate();
    return (
        <div className="get-started-page">
            
            <div className="button-container">
            <h1>Welcome to School Management System</h1>
            </div>
            <div>
            <div style={{display:'flex'}}>
            <img className={classes.img} src={image} width={1000}/>
            </div>
            <div>
            <Button style={{color:"rgb(35, 165, 208)" , height:"50px"}} onClick={()=>nav('/choose')} variant="outlined">Lets get started</Button>
            </div>   
            </div>         
           
        </div>
    );
};

export default GetStartedPage;