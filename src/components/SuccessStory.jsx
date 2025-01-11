import React from 'react'

export default function SuccessStory() {
  return (
    <div className="w-10/12 mx-auto my-14">
    <h1 className='text-3xl font-bold text-center mb-9'>Testimonials</h1>
    <div className=" grid grid-cols-1 gap-6">
    {/* 1 */}
    <h2 className="text-xl font-bold text-center"><i className="fa-solid fa-leaf text-3xl mr-2"></i>Organization Story</h2>
    <div className="card bg-base-200 shadow-xl text-left">
      <div className="card-body">
      <h4 className="text-lg font-bold">Quote:</h4>
      <p className="font-medium">"VolunForce has completely transformed how we manage our volunteer teams. The real-time scheduling and easy-to-use dashboard saved us hours each week, allowing us to focus more on our mission. We saw a 40% increase in volunteer engagement in just three months!"
      — Sarah Williams, Director of Operations, Hope for Tomorrow</p>
      <h4 className="text-lg font-bold">Impact:</h4>
      <p className="font-medium">Fact:Hope for Tomorrow managed to schedule 3,000+ volunteer hours in a single quarter, increasing overall volunteer participation by 40%.</p>
  </div>
  </div>
  {/* 2 */}
    <h2 className="text-xl font-bold text-center"><i className="fa-solid fa-people-group text-3xl mr-2"></i>Volunteer Story</h2>
  <div className="card bg-base-200 shadow-xl text-left">
      <div className="card-body">
      <h4 className="text-lg font-bold">Quote:</h4>
      <p className="font-medium">
"As a volunteer, VolunForce made it so easy to track my hours and stay connected with the team. I felt more valued and involved, which kept me coming back month after month. It's a tool that truly empowers volunteers."
— Michael Johnson, Volunteer at Green Earth Initiative</p>
      <h4 className="text-lg font-bold">Impact:</h4>
      <p className="font-medium">Fact:Since using VolunForce, volunteers like Michael have reported a 25% increase in satisfaction and engagement, leading to improved retention rates.</p>
  </div>
</div>
</div>
    </div>
  )
}