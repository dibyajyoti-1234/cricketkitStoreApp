import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  
  return (
    <div>
    <dialog id="my_modal_3" className="modal">
    <div className="modal-box h-[330px] w-[450px]">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg mb-2">Login</h3>
    <div>
        <span >Email</span>
        <br/>
        <input type="email" placeholder="Enter your email" className='w-96 px-3 border rounded-md outline-none py-2 mt-3' {...register("email", { required: true })}/>
        <br/>{errors.email && <span className='text-sm text-red'>This field is required</span>}
    </div>
    {/* password */}
    <div className='mt-3'>
        <span >Password</span>
        <br/>
        <input type="password" placeholder="Enter your password" className='w-96 px-3 border rounded-md outline-none py-2 mt-3'{...register("password", { required: true })}/>
        <br/>{errors.password && <span className='text-sm text-red'>This field is required</span>}
    </div>

    {/* button */}
    <div className='flex justify-around mt-4'>
        <button className='bg-blue-700 text-white rounded-md  mr-1 px-3 py-1 hover:bg-slate-600'>Login</button>
        <p >Not registered? <Link to="/signup" className='underline text-white cursor-pointer'>Signup</Link>
        </p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login