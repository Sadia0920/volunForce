import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-[#A8E05C] text-[rgb(51,51,51)]'>
    <div className="navbar w-10/12 mx-auto">
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
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allVolunteerNeedPosts'>All Volunteer Need Posts</NavLink></li>
        <li>
          <a>My Profile</a>
          <ul className="p-2">
          <li><NavLink to='/addVolunteerNeedPost'>Add Volunteer Need Post</NavLink></li>
          <li><NavLink to='/manageMyPosts'>ManageMyPosts</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
    <i className="fa-solid fa-handshake-angle text-2xl"></i>
    <a className="btn btn-ghost text-xl px-1">VolunForce</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/allVolunteerNeedPosts'>All Volunteer Need Posts</NavLink></li>
      <li>
        <details>
          <summary>My Profile</summary>
          <ul className="p-2">
          <li><NavLink to='/addVolunteerNeedPost'>Add Volunteer Need Post</NavLink></li>
          <li><NavLink to='/manageMyPosts'>ManageMyPosts</NavLink></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' className="btn mr-2">Login</Link>
    <Link to='/register' className="btn">Register</Link>
  </div>
</div>
    </div>
  )
}
