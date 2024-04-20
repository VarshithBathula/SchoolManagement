import React from 'react';
import './App.css';
import Account from "./components/Account/Account";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./components/SchoolManagement/Admin";
import Home from "./components/SchoolManagement/Home";
import Parent from "./components/SchoolManagement/Parent";
import UserContext from "./Context/UserContext";
import Signup from "./components/signup/Signup";
import { Routes, Route } from 'react-router-dom';
import { useState,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Upload from "./components/Upload/Upload"



function App(){
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  const login = useCallback((user) => {
    setUser(user);
  });

  const logout = useCallback(() => {
    setUser(null);
    nav('/');
  });

  let routes;
  if (user) {
    routes = (
      <Route path='/account' element={<Account />} />
    )
  } else {
    routes = (
      <Route path='/' element={<Navbar />} >
        <Route path="signup" element={<Signup />} />
        <Route path="admin" element={<Admin />} />
        <Route path="home" element={<Home/>}/>
        <Route path="parent" element={<Parent/>}/>
      </Route>
    )
  }
  return(
    <div className='App'>
    <UserContext.Provider value={{ user, login, logout }}>
      <Routes>
        {routes}
      </Routes>
    </UserContext.Provider>
    </div>
  )
}

export default App;


{/* <Route path="/students" element={<Navbar />}>
<Route path=":studentId" element={<StudentProfile/>} />
<Route path="home" element={<Home />} />
<Route path="about" element={<About />} />
</Route> */}

