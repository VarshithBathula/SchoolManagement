import React from "react";
import { useNavigate } from "react-router-dom";
function StudentProfile(){
    const nav = useNavigate();
    const cancel=()=>{
        nav(-1)
      }
    return(
        <div>
        <div>Not Applicable</div>
        <button style={{ margin: '1%' ,marginTop:'20px'}} onClick={cancel}>Back</button>
        </div>
    )
}
export default StudentProfile