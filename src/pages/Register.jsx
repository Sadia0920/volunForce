import React from 'react'
import { NavLink } from 'react-router-dom'
import Lottie from "lottie-react";
import registerLottieData from "../assets/animation/Animation-2.json"

export default function Register() {
  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password)
  }
  return (
    <div className='my-7'>
      <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie animationData={registerLottieData}></Lottie>
    </div>
    <div className="card w-full">
    <h1 className="text-3xl text-center pt-7 font-bold">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name*" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" placeholder="Your Photo URL*" name='photo' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email*" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password*" name='password' className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-800 text-white">Register</button>
          <p className='text-center mt-4'>Already have an account? <NavLink to='/login' className='text-green-800'>Login</NavLink></p>
        </div>
      </form>
      <div className="divider w-11/12 mx-auto">OR</div>
      <button className="btn bg-green-800 text-white w-11/12 mx-auto mt-6"><i className="fa-brands fa-google"></i>Google Login</button>
    </div>
  </div>
</div>
    </div>
  )
}
