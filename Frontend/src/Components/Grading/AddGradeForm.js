// AddGradeForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AddGradeForm = () => {
  const [studentName, setStudentName] = useState('');
  const [subject, setSubject] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/TeacherUsers/grades', { studentName:studentName, subject:subject, score:score })
      .then(response => {
        console.log('Grade added:', response.data);
        // Reset form fields
        setStudentName('');
        setSubject('');
        setScore('');
      })
      .catch(error => {
        console.error('Error adding grade:', error);
      });
  };

  return (
    <div>
      <h2>Add Grade</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
        </label>
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </label>
        <label>
          Score:
          <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddGradeForm;
