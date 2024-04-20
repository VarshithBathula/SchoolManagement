import React, { useEffect, useState } from 'react'

function StudentCard() {

  let [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json));
  },[]);
  
  return (
    <div>
      <ul>
        {
          data.map((obj,ind)=>{
            return <li key={ind}>{obj.title}</li>
          })
        }
      </ul>
    </div>
  )}
export default StudentCard