import React from 'react'


import {Route,Routes} from "react-router-dom";
import Home from './home/Home'
import Shopnows from './shopnow/shopnows';
import Signup from './components/Signup';








function App() {
  return (
   <>
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/shopnow" element ={<Shopnows/>} />
      <Route path="/signup" element ={<Signup/>} />
    </Routes>
   </>
  )
}

export default App