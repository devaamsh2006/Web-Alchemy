import React from 'react';
import Lottie from 'lottie-react';
import {useForm} from 'react-hook-form';

import Animation from "../../public/Animation.json";

function Login() {

    const {register,handleSubmit,formState:{errors}}=useForm();
    
    const handleDetails=async(credObj)=>{
        console.log(credObj)
    }

  return (
    <div className='flex h-[90vh] justify-center items-center'>
    <form onSubmit={handleSubmit(handleDetails)} className='flex flex-col items-center gap-6 p-10 rounded-xl shadow-md shadow-slate-400 w-1/2 h-2/3'>
        <h1 className='text-xl font-bold'>Login</h1>
        <label className="block font-semibold mb-2">Select User Type:</label>
        <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input type="radio" value="user" {...register("userType", { required: true })} />
          User
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" value="farmer" {...register("userType", { required: true })} />
          Farmer
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" value="rentor" {...register("userType", { required: true })} />
          Rentor
        </label>
        </div>
        <input type='text' {...register('username')} className='p-4 focus:outline-none focus:border-slate-800 border-2 border-slate-400 w-full rounded-xl' placeholder='Username' />
        <input type='text' {...register('passholder')} className='p-4 focus:outline-none focus:border-slate-800 border-2 border-slate-400 w-full rounded-xl' placeholder='Password' />     
        <button className='p-4 rounded-xl bg-green-400 hover:bg-green-600 transition-colors text-white'>LoginIn</button>
    </form>
    <Lottie animationData={Animation} className='h-96 w-96' />
    </div>
  )
}

export default Login