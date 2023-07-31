import React, { useState } from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import Nav from './Nav/Nav'
import Home from './Home/Home'
function PublicRoute({ element }) {
  const [isLoggedIn] = useState(false); 

  return isLoggedIn ? <Navigate to="/home" /> : element;
}
function App() {
  const[isLoggedIn,setIsLogged] = useState(false);

  const handleLogin = () =>{
    setIsLogged(true);
  }
  return (
    <div>
 <Router>
  <Nav isLoggedIn={isLoggedIn} />
  <Routes>
  
    <Route path='/signup'  element={<PublicRoute element={<Signup />} />} />
    <Route path='/login' element={<PublicRoute element={<Login onLogin={handleLogin} />} />} />
    {isLoggedIn && <Route path="/home" element={<Home />} />}
  </Routes>
 </Router>
    </div>
  )
}

export default App