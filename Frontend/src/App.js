import './App.css';
import {  useState,useEffect } from "react";
import UserContext from './Components/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import GetStartedPage from './Pages/Getstarted';
import ChooseLoginTypePage from './Pages/choose';

import AdminAuthPage from './Pages/Admin/AdminLogin';
import AdminHomePage from './Pages/Admin/AdminHome';
import AdminScheduleTab from './Components/Schedule/AdminScheduleTab';
import AdminGradeTab from './Components/Grading/AdminGradeTab';
import AdminProfile from './Pages/Admin/adminProfile';
import AdminStaffDisplay from './Components/StaffManagement/AdminStaffDisplay';
import AdminFeeTab from './Components/FeeManagement/AdminFeeTab';

import StudentAuthPage from './Pages/student/studentLogin';
import StudentHomePage from './Pages/student/studentHome';
import StudentScheduleTab from './Components/Schedule/StudentScheduleTab';
import StudentGradeTab from './Components/Grading/StudentGradeTab';
import StudentProfile from './Pages/student/studentProfile';
import StudentStaffDisplay from './Components/StaffManagement/StudentStaffDisplay';

import ParentAuthPage from './Pages/parents/parentLogin';
import ParentHomePage from './Pages/parents/ParentHome';
import ParentScheduleTab from './Components/Schedule/ParentScheduleTab';
import ParentGradeTab from './Components/Grading/ParentGradeTab';
import ParentProfile from './Pages/parents/parentProfile';
import ParentStaffDisplay from './Components/StaffManagement/ParentStaffDisplay';

import TeachersHomePage from './Pages/teachers/teachersHome';
import TeachersAuthPage from './Pages/teachers/teachersLogin';
import TeacherGradeTab from './Components/Grading/TeacherGradeTab';
import TeacherScheduleTab from './Components/Schedule/TeacherScheduleTab';
import TeacherStaffDisplay from './Components/StaffManagement/TeacherStaffDisplay';
import TeacherProfile from './Pages/teachers/teachersProfile';

import Logout from './Components/Logout';

function App() {



 


  return (
    <div>
      <UserContext.Provider>
  
        <Routes>
          <Route path="/" element={<GetStartedPage />} />
          <Route path="/choose" element={<ChooseLoginTypePage />} />
          
          <Route path="/admin" element={<AdminAuthPage/>}/> 
          <Route path='/adminhome' element={<AdminHomePage />} />
          <Route path="/adminhome/schedule" element={<AdminScheduleTab/>}/>
          <Route path="/adminhome/grade" element={<AdminGradeTab/>}/>
          <Route path="/adminhome/profile" element={<AdminProfile/>}/>
          <Route path ='/adminhome/staff' element={<AdminStaffDisplay/>}/>
          <Route path="/adminhome/fee" element={<AdminFeeTab/>}/>

          <Route path="/parent" element={<ParentAuthPage/>}/>
          <Route path='/parenthome' element={<ParentHomePage />} /> 
          <Route path="/parenthome/schedule" element={<ParentScheduleTab/>}/>
          <Route path="/parenthome/grade" element={<ParentGradeTab/>}/>
          <Route path="/parenthome/profile" element={<ParentProfile/>}/>
          <Route path = '/parenthome/staff' element={<ParentStaffDisplay/>}/>

          <Route path="/teacher" element={<TeachersAuthPage/>}/>
          <Route path='/teacherhome' element={<TeachersHomePage />} />
          <Route path = '/teacherhome/grade' element={<TeacherGradeTab/>}/>
          <Route path = '/teacherhome/schedule' element={<TeacherScheduleTab/>}/>
          <Route path = '/teacherhome/staff' element={<TeacherStaffDisplay/>}/>
          <Route path = '/teacherhome/profile' element={<TeacherProfile/>}/>

          <Route path="/student" element={<StudentAuthPage/>}/>
          <Route path='/studenthome' element={<StudentHomePage />} />
          <Route path="/studenthome/schedule" element={<StudentScheduleTab/>}/>
          <Route path="/studenthome/grade" element={<StudentGradeTab/>}/>
          <Route path="/studenthome/profile" element={<StudentProfile/>}/>
          <Route path = '/studenthome/staff' element={<StudentStaffDisplay/>}/>
          <Route path = '/logout' element={<Logout/>}/>
        </Routes>

      </UserContext.Provider>
    </div>
  );
}

export default App;