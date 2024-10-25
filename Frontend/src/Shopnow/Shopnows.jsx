import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import list from "../../public/list.json";
import Shopnow2 from '../components/shopnow2';



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
