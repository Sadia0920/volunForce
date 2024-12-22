import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Register() {
  return (
    <div className='my-7'>
      <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card w-full">
    <h1 className="text-3xl text-center pt-7 font-bold">Register now!</h1>
      <form className="card-body">
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
          <input type="text" placeholder="Your Photo URL*" name='photoURL' className="input input-bordered" required />
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
      <button className="btn bg-green-800 text-white w-11/12 mx-auto mt-6">Google Login</button>
    </div>
  </div>
</div>
    </div>
  )
}
