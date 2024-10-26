import React from 'react'
import { Link,  useLocation, useNavigate } from 'react-router-dom'
import Login from './login'
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';

function Signup() {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname ||"/"
    const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = async data => {
    const userInfo={
      FullName:data.FullName,
      Emailid:data.Emailid,
      password:data.password,

    }//post mane oi page theke nicche,, get mane oi page a show korche
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup Succesful !");
        navigate(from,{replace:true});
       
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
     if(err.response)
     {
      console.log(err);
      toast.error("Error: "+err.response.data.message);
     }
    })
  };
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
        <input type="text" placeholder="Enter your name" className='w-96 px-3 border rounded-md outline-none py-2 mt-3' {...register("FullName", { required: true })}/>
        <br/>{errors.FullName && <span className='text-sm text-red'>This field is required</span>}
    </div>

    <div className='mt-3'>
        <span >Email</span>
        <br/>
        <input type="email" placeholder="Enter your email" className='w-96 px-3 border rounded-md outline-none py-2 mt-3' {...register("Emailid", { required: true })}/>
        <br/>{errors.Emailid && <span className='text-sm text-red'>This field is required</span>}
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