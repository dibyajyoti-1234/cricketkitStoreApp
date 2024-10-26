import React from 'react'


import {Navigate, Route,Routes} from "react-router-dom";
import Home from './home/Home'
import Shopnows from './shopnow/shopnows';
import Signup from './components/Signup';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';








function App() {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
   <>
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/shopnow" element ={authUser?<Shopnows/>:<Navigate to="/signup"/>} />
      <Route path="/signup" element ={<Signup/>} />
    </Routes>
    <Toaster/>
   </>
  )
}

export default App