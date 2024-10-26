import React, { useEffect, useState } from 'react';

import Cards from './Cards';
import axios from"axios";

function Shopnow2() {
  const [kit,setkit]=useState([])
  useEffect(()=>{
    const getkit=async()=>{
      try {
        const res=await axios.get("http://localhost:4001/kit");
        console.log(res.data)
        setkit(res.data)
      } catch (error) {
        console.log("errors :",error)
      }
    }
    getkit();
  },[])
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 bg-gray-900">
      <div className="text-center">
        <h1 className="text-2xl font-semibold md:text-4xl text-blue-900 mt-6 border-2-px">
          CHOOSE YOUR BEST GEARS AND BE A PRO!!
        </h1>
      </div>
      
      {/* Grid layout for cards with responsive spacing */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        {kit.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Shopnow2;
