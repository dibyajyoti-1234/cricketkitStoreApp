import React from 'react';
import banner from "../../public/frontpagevirat.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-5">
        <div className="w-full md:w-1/2 mt-12 md:mt-60 ">
          <div className="space-y-10 ">
            <h1 className="text-6xl font-serif text-ellipsis space-x-10 mr-7">WELCOME TO SPORTS GEAR</h1>
            <h2 className="text-7xl font-serif text-blue-700 mr-6">BE A PRO!!!</h2>
            <label className="input input-bordered flex items-center gap-2 mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-outline mt-6">Subscribe</button>
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-10 flex justify-center">
          <img
            src={banner}
            alt="Banner"
            className="object-cover w-full h-auto max-h-[550px] md:max-w-full md:max-h-[900px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
