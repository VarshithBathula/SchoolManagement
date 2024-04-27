// ScheduleList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/TeacherUsers/schedules')
      .then(response => {
        setSchedules(response.data);
      })
      .catch(error => {
        console.error('Error fetching schedules:', error);
      });
  }, []);

  return (
    <div>
      <h2>Class Schedules</h2>
      <ul>
        {schedules.map(schedule => (
          <li key={schedule._id}>
            {schedule.className} - {schedule.time}, {schedule.day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
