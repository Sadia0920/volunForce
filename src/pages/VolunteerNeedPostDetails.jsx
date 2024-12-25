import { useLoaderData, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

export default function VolunteerNeedPostDetails() {
  
  const loadedPostDetails = useLoaderData()
  const {_id,organizerName,email,thumbnail,description,postTitle,category,location,NoOfVolunteersNeeded,deadline} = loadedPostDetails
  
  return (
    <div className='w-11/12 md:w-10/12 lg:w-7/12 mx-auto my-7'>
        <Helmet>
        <title>VolunForce | Volunteer Need Post Details</title>
        </Helmet>
       <div className="card bg-base-100 shadow-xl">
   <figure className="px-5 pt-5 h-[300PX] w-10/12 mx-auto">
     <img
       src={thumbnail}
       alt="Games"
      className="rounded-xl w-full h-full" />
   </figure>
   <div className="card-body items-center text-center">
     <h2 className="card-title text-xl font-bold text-gray-950">{postTitle}</h2>
     <p className="text-lg font-semibold text-gray-800">Descriptions :<span className='text-gray-500'>{description}</span></p>
     <p className="text-lg font-semibold text-gray-800">Category :<span className='text-gray-500'>{category}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Location :<span className='text-gray-500'>{location}</span></p>
    <p className="text-lg font-semibold text-gray-800">No Of Volunteers Needed :<span className='text-gray-500'>{NoOfVolunteersNeeded}</span></p>
    <p className="text-lg font-semibold text-gray-800">Deadline :<span className='text-gray-500'>{deadline}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Organizer's name :<span className='text-gray-500'>{organizerName}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Organizer's email :<span className='text-gray-500'>{email}</span></p>
    
    <div className="card-actions">
      <Link to={`/beAVolunteer/${_id}`}><button className="btn bg-green-800 text-white">Be A Volunteer</button></Link>
   </div>
</div>
</div>
  </div>
  )
}
