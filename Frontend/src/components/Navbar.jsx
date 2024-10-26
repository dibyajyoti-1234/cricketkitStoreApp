import React, { useEffect } from 'react';
import { useState } from 'react';
import Login from './login';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setSticky(true);
      else setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/shopnow">Shop Now</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
    </>
  );

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed z-50 ${
        sticky ? "sticky-navbar shadow-md bg-base-100 duration-300 transition-all ease-in-out" : ""
      }`}>
        <div className="navbar bg-slate-800">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">BAT STORE</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>
          </div>

          <div className="navbar-end space-x-4 flex items-center">
            <label className="input input-bordered flex items-center gap-2 hidden md:flex">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>

            {authUser ? (
              <Logout />
            ) : (
              <a
                className="bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-700 duration-300"
                onClick={() => document.getElementById("my_modal_3").showModal()}>
                Login
              </a>
            )}
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
