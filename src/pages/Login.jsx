import { NavLink, Link, useNavigate } from 'react-router-dom'
import Lottie from "lottie-react";
import loginLottieData from "../assets/animation/Animation-2.json"
import React, { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

export default function Login() {
  const {signInUser,signInWithGoogle,setUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const [showPassword,setShowPassword]=useState(false)

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email,password}
    // console.log(user);

    // SignInUser
    signInUser(email,password)
    .then(result => {
      // console.log(result.user)
      setUser(result.user)
      Swal.fire({
        title: 'Success',
        text: 'Login successfully',
        icon: 'success',
        confirmButtonText: 'Done'
      })
      navigate('/')
      form.reset()
    })
    .catch(error => {
      // console.log(error.message)
      setUser(null)
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    })
  }
  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(result => {
      // console.log(result.user)
      setUser(result.user)
      Swal.fire({
        title: 'Success',
        text: 'Login successfully',
        icon: 'success',
        confirmButtonText: 'Done'
      })
      navigate('/')
    })
    .catch(error => {
      // console.log(error)
      setUser(null)
    })
  }
  
  return (
    <div className='my-7'>
    <Helmet>
      <title>VolunForce | Login</title>
    </Helmet>
    <div className="hero">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie animationData={loginLottieData}></Lottie> 
    </div>
    <div className="card w-full">
    <h1 className="text-3xl text-center pt-7 font-bold">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" placeholder="Email*" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword?'text':'password'}   placeholder="password*" name='password' className="input input-bordered" required />
          <a onClick={()=>setShowPassword(!showPassword)} className="absolute inset-y-0 right-4 flex items-center cursor-pointer">{showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</a>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn bg-green-800 text-white hover:bg-[#A8E05C] hover:text-black">Login</button>
          <p className='text-center mt-3'>Don't have an account? <NavLink to='/register' className='text-green-800 border-green-800 border-b-2'>Register</NavLink></p>
        </div>
      </form>
      <div className="divider w-11/12 mx-auto">OR</div>
      <button onClick={handleGoogleLogin} className="btn bg-green-800 text-white hover:bg-[#A8E05C] hover:text-black w-11/12 mx-auto mt-2"><i className="fa-brands fa-google"></i>Google Login</button>
    </div>
  </div>
</div>
    </div>
  )
}
