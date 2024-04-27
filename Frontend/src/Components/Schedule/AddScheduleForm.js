// AddScheduleForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AddScheduleForm = () => {
  const [className, setClassName] = useState('');
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/TeacherUsers/schedules', { className, time, day })
      .then(response => {
        console.log('Schedule added:', response.data);
        // Reset form fields
        setClassName('');
        setTime('');
        setDay('');
      })
      .catch(error => {
        console.error('Error adding schedule:', error);
      });
  };

  return (
    <div>
      <h2>Add Schedule</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Class Name:
          <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
        </label>
        <label>
          Time:
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <label>
          Day:
          <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddScheduleForm;
