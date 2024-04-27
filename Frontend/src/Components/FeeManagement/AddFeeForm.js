// AddFeeForm.js
import Switch from '@mui/material/Switch';
import React, { useState } from 'react';
import axios from 'axios';
const AddFeeForm = () => {
  const [studentName, setStudentName] = useState('');
  const [amount, setAmount] = useState('');
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/AdminUsers/fees', { studentName, amount })
      .then(response => {
        console.log('Fee added:', response.data);
        // Reset form fields
        setStudentName('');
        setAmount('');
        setChecked('');
      })
      .catch(error => {
        console.error('Error adding fee:', error);
      });
  };

  return (
    <div>
      <h2>Add Fee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <label>
          Payment Status:
          <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
        </label>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default AddFeeForm;


// import * as React from 'react';
// import Switch from '@mui/material/Switch';

// export default function ControlledSwitches() {
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <Switch
//       checked={checked}
//       onChange={handleChange}
//       inputProps={{ 'aria-label': 'controlled' }}
//     />
//   );
// }
