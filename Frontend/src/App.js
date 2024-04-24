import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Homepage from './pages/HomePage';
import AdminDashboard from './pages/admin/AdminDashboard';
import ParentDashboard from './pages/parent/ParentDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import ChooseUser from './pages/ChooseUser';

const App = () => {
  const { currentRole } = useSelector(state => state.user);
  return (
    <Router>
      {currentRole === null &&
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/choose" element={<ChooseUser visitor="normal" />} />
          <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />

          <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
          <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
          <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />
          <Route path="/Parentlogin" element={<LoginPage role="Parent" />} />

          <Route path="/Adminregister" element={<AdminRegisterPage />} />

          <Route path='*' element={<Navigate to="/" />} />
        </Routes>}

      {currentRole === "Admin" &&
        <>
          <AdminDashboard />
        </>
      }

      {currentRole === "Student" &&
        <>
          <StudentDashboard />
        </>
      }

      {currentRole === "Teacher" &&
        <>
          <TeacherDashboard />
        </>
      }

      {currentRole === "Parent" &&
        <>
          <ParentDashboard />
        </>
      }
    </Router>
  )
}

export default App




// import React from "react";
// import './App.css';
// import Signup from "./components/signup/Signup";



// import React from 'react';
// import './App.css';
// import Account from "./components/Account/Account";
// import Navbar from "./components/Navbar/Navbar";
// import Admin from "./components/SchoolManagement/Admin";
// import Home from "./components/SchoolManagement/Home";
// import Parent from "./components/SchoolManagement/Parent";
// import UserContext from "./Context/UserContext";
// import Signup from "./components/signup/Signup";
// import { Routes, Route } from 'react-router-dom';
// import { useState,useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Upload from "./components/Upload/Upload"



// function App(){
//   const [user, setUser] = useState(null);
//   const nav = useNavigate();

//   const login = useCallback((user) => {
//     setUser(user);
//   });

//   const logout = useCallback(() => {
//     setUser(null);
//     nav('/');
//   });

//   let routes;
//   if (user) {
//     routes = (
//       <Route path='/account' element={<Account />} />
//     )
//   } else {
//     routes = (
//       <Route path='/' element={<Navbar />} >
//         <Route path="signup" element={<Signup />} />
//         <Route path="admin" element={<Admin />} />
//         <Route path="home" element={<Home/>}/>
//         <Route path="parent" element={<Parent/>}/>
//       </Route>
//     )
//   }
//   return(
//     <div className='App'>
//     <UserContext.Provider value={{ user, login, logout }}>
//       <Routes>
//         {routes}
//       </Routes>
//     </UserContext.Provider>
//     </div>
//   )
// }

// export default App;


{/* <Route path="/students" element={<Navbar />}>
<Route path=":studentId" element={<StudentProfile/>} />
<Route path="home" element={<Home />} />
<Route path="about" element={<About />} />
</Route> */}

