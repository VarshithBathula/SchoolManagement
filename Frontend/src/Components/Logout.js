import React from "react";
import { useNavigate } from "react-router-dom";
const studentImageSrc = require('../asserts/logout.png');
function Logout(){
    
  const nav = useNavigate();
  const cancel=()=>{
    nav(-1)
  }

  const logout=()=>{
    nav('/choose')

  }
  return(
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img className='img' src={studentImageSrc} style={{height:"70vh", width:"100vw"}}/>
      </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        
        <h2>Are you sure you want to logout?</h2><br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ margin: '1%' ,marginTop:'20px'}} onClick={logout}>Logout</button>
        <button style={{ margin: '1%' ,marginTop:'20px'}} onClick={cancel}>Cancel</button>
        </div>
        </div>
    </div>
    </div>
  )
}
export default Logout