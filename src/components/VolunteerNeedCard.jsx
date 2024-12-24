import { Link } from 'react-router-dom'

export default function VolunteerNeedCard({post}) {

const {_id,organizerName,email,thumbnail,description,postTitle,category,location,NoOfVolunteersNeeded,deadline} =post

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
  <figure className="px-5 pt-5 h-[200PX] w-11/12 mx-auto">
    <img
      src={thumbnail}
      alt="Volunteer"
      className="rounded-xl w-full h-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{postTitle}</h2>
    <p className="text-lg font-semibold text-gray-800">Genres :<span className='text-gray-500'>{category}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Rating :<span className='text-gray-500'>{deadline}</span></p>
    
    <div className="card-actions">
      <Link to={`/volunteerNeedPostDetails/${_id}`}><button className="btn bg-[#0a3d62] text-[#d4af37]">View Details</button></Link>
    </div>
  </div>
</div>
</div>
  )
}
