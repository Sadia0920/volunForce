import React from 'react'
import { Link } from 'react-router-dom'

export default function VolunteerGuide() {
  return (
    <div className="w-10/12 mx-auto my-14">
      <h1 className="text-3xl font-bold text-center mb-9">Your Volunteering Guide: Learn, Share, Act!</h1>
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* 1 */}
    <div className="card bg-[rgb(168,224,92,0.3)] shadow-xl text-center">
      <div className="card-body">
      <i className="fa-solid fa-leaf text-3xl"></i>
      <h2 className="text-xl font-bold">"10 Ways to Make the Most of Your Volunteer Experience"</h2>
      <p className="font-medium">Learn actionable tips to maximize your impact and find joy in your volunteer journey. Perfect for both beginners and seasoned volunteers!</p>
        <div className="card-actions justify-center">
        <Link to='/tenWays' className="px-2 rounded-lg bg-gradient-to-r from-[rgb(168,224,92,0.8)] to-green-500 hover:text-green-800 text-black font-bold border-y-2 border-green-900">Read More <i className="fa-solid fa-circle-chevron-right"></i></Link>
      </div>
  </div>
</div>
{/* 2 */}
<div className="card bg-[rgb(255,111,0,0.3)] shadow-xl text-center">
  <div className="card-body">
  <i className="fa-solid fa-hand-sparkles text-3xl"></i>
    <h2 className="text-xl font-bold">"Building Brighter Futures: Emma’s Story of Teaching Kids"</h2>
    <p className="font-medium">Discover how Emma’s dedication to teaching children in underserved areas transformed lives and inspired a community.</p>
    <div className="card-actions justify-center">
    <Link to='/emmasStory' className="px-2 rounded-lg bg-gradient-to-r from-orange-200 to-orange-400 hover:text-orange-800 text-black font-bold border-y-2 border-orange-800">Read More <i className="fa-solid fa-circle-chevron-right"></i></Link>
    </div>
  </div>
</div>
{/* 3 */}
<div className="card bg-[rgb(168,224,92,0.3)] shadow-xl text-center">
  <div className="card-body">
  <i className="fa-solid fa-people-group text-3xl"></i>
    <h2 className="text-xl font-bold">"How to Start a Volunteer Program for Your Organization"</h2>
    <p className="font-medium">Explore our step-by-step guide to launch and manage a successful volunteer program that drives real change.</p>
    <div className="card-actions justify-center">
    <Link to='/volunteerProgram' className="px-2 rounded-lg bg-gradient-to-r from-[rgb(168,224,92,0.8)] to-green-500 hover:text-green-800 text-black font-bold border-y-2 border-green-900">Read More <i className="fa-solid fa-circle-chevron-right"></i></Link>
    </div>
  </div>
</div>
{/* 4 */}
<div className="card bg-[rgb(255,111,0,0.3)] shadow-xl text-center">
  <div className="card-body">
  <i className="fa-solid fa-suitcase-medical text-3xl"></i>
    <h2 className="text-xl font-bold">"The Hidden Benefits of Volunteering for Your Mental Health"</h2>
    <p className="font-medium">Did you know volunteering can boost your well-being? Dive into the surprising ways helping others helps you too!</p>
    <div className="card-actions justify-center">
    <Link to='/hiddenBenefits' className="px-2 rounded-lg bg-gradient-to-r from-orange-200 to-orange-400 hover:text-orange-800 text-black font-bold border-y-2 border-orange-800">Read More <i className="fa-solid fa-circle-chevron-right"></i></Link>
    </div>
  </div>
</div>
      </div>
     </div>
  )
}
