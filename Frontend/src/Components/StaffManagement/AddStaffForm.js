// AddStaffForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AddStaffForm = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/AdminUsers/staff', { name, role, department })
      .then(response => {
        console.log('Staff added:', response.data);
        // Reset form fields
        setName('');
        setRole('');
        setDepartment('');
      })
      .catch(error => {
        console.error('Error adding staff:', error);
      });
  };

  return (
    <div>
      <h2>Add Staff</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Role:
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
        <label>
          Department:
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStaffForm;
