import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Shopnow2 from '../components/Shopnow2';





function Shopnows() {
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10">
        <Shopnow2/>
      </div>
      <Footer />
    </>
  );
}

export default Shopnows;
