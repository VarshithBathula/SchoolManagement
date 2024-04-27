// FeeList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeeList = () => {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/AdminUsers/fees')
      .then(response => {
        setFees(response.data);
      })
      .catch(error => {
        console.error('Error fetching fees:', error);
      });
  }, []);

  return (
    <div>
      <h2>Fee List</h2>
      <ul>
        {fees.map(fee => (
          <li key={fee._id}>
            {fee.studentName} - ${fee.amount} {fee.paid ? '(Paid)' : '(Unpaid)'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeeList;
