

import React from 'react';
import './choose.css'; 
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const studentImageSrc = require('../asserts/reading.png');
const studentImageSrc2 = require('../asserts/administrator.png');
const studentImageSrc3 = require('../asserts/parents.png');
const studentImageSrc4 = require('../asserts/teacher.png');

const ChooseLoginTypePage = () => {
    const nav = useNavigate();
    return (
        <StyledContainer>
        <div className="choose-login-type-page">
            <h1>Choose Your Login</h1>
            <div className="login-options" style={{display:'flex'}}>
                <button onClick={()=>{nav("/student")}} className="login-button student" >
                    <img className='img' src={studentImageSrc}/>Student</button>
                <button onClick={()=>{nav("/teacher")}} className="login-button teacher">
                <img className='img' src={studentImageSrc4}/>Teacher</button>
                <button onClick={()=>{nav("/Admin")}} className="login-button administrator">
                <img className='img' src={studentImageSrc2}/>Administrator</button>
                <button onClick={()=>{nav("/Parent")}} className="login-button parent">
                <img className='img' src={studentImageSrc3}/>Parent</button>
            </div>
        </div>
        </StyledContainer>
    );
};

export default ChooseLoginTypePage;

const StyledContainer = styled.div`
  background: linear-gradient(to bottom,#3f87a6, #ebf8e1, #f69d3c););
  height: 120vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;