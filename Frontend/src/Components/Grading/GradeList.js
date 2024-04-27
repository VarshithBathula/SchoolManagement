// GradeList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GradeList = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/TeacherUsers/grades')
      .then(response => {
        setGrades(response.data);
      })
      .catch(error => {
        console.error('Error fetching grades:', error);
      });
  }, []);

  return (
    <div>
      <h2>Grade List</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Subject</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {grades.map(grade => (
            <tr key={grade._id}>
              <td>{grade.studentName}</td>
              <td>{grade.subject}</td>
              <td>{grade.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradeList;
