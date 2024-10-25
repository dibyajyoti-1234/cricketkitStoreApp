import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'
import { useForm } from "react-hook-form";

function Signup() {
    const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
    <div className='w-[500px]' >
    <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg mb-2">Signup</h3>
    <div >
        <span >Name</span>
        <br/>
        <input type="text" placeholder="Enter your name" className='w-96 px-3 border rounded-md outline-none py-2 mt-3' {...register("name", { required: true })}/>
        <br/>{errors.name && <span className='text-sm text-red'>This field is required</span>}
    </div>

    <div className='mt-3'>
        <span >Email</span>
        <br/>
        <input type="email" placeholder="Enter your email" className='w-96 px-3 border rounded-md outline-none py-2 mt-3' {...register("email", { required: true })}/>
        <br/>{errors.email && <span className='text-sm text-red'>This field is required</span>}
    </div>
    {/* password */}
    <div className='mt-3 mb-4'>
        <span >Password</span>
        <br/>
        <input type="password" placeholder="Enter your password" className='w-96 px-3 border rounded-md outline-none py-2 mt-3' {...register("password", { required: true })}/>
        <br/>{errors.password && <span className='text-sm text-red'>This field is required</span>}
    </div>

    {/* button */}
    <div className='flex justify-around mt-4'>
        <button className='bg-blue-700 text-white rounded-md  mr-1 px-3 py-1 hover:bg-slate-600'>Signup</button>
        <p className=''>Have account? <button  className='underline text-white cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button><Login/>
        </p>
    </div>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Signup