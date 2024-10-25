import React from 'react';
import list from "../../public/list.json";

function Cards({ item }) {
  return (
    <div className="p-4">
      <div className="card bg-base-90 w-full h-[28rem] shadow-xl hover:scale-105 transition-transform duration-200 flex flex-col">
        {/* Container for image, name, and category */}
        <figure className="relative h-72 overflow-hidden bg-gray-100 rounded-lg flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </figure>
        
        {/* Card Content */}
        <div className="card-body flex flex-col justify-between flex-grow p-4">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <span className="badge badge-secondary py-4 px-7 mb-2">{item.category}</span>
          <div className="flex justify-between items-center">
            <span className="badge badge-outline">Rs {item.price}</span>
            <button className="badge badge-outline hover:bg-blue-800 hover:text-white cursor-pointer px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
