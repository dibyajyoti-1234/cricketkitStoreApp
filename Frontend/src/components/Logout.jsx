import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'

function Logout() {
  const[authUser,setAuthUser]=useAuth()

  const handlelogout=()=>{
    try {
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem("Users");
      toast.success("Logout Succesfull");
      setTimeout(()=>{
        
        window.location.reload();
       
      },3000)
   
      
    } catch (error) {
      toast.error("Error: "+error.message)
      setTimeout(()=>{},3000);
    }
  }
  return (
    <div>
        <button className='px-3 py-2 bg-blue test-white rounded-md cursor-pointer'onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout