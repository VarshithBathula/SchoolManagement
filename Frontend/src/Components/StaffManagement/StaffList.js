// StaffList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffList = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/AdminUsers/staff')
      .then(response => {
        setStaff(response.data);
      })
      .catch(error => {
        console.error('Error fetching staff:', error);
      });
  }, []);

  return (
    <div>
      <h2>Staff List</h2>
      <ul>
        {staff.map(person => (
          <li key={person._id}>
            {person.name} - {person.role} ({person.department})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffList;
