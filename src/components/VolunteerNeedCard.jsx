import { Link } from 'react-router-dom'
import photo from '../assets/volunteer-1.webp'

export default function VolunteerNeedCard() {
// export default function VolunteerNeedCard({review}) {
//   const {_id,yourName,email,gameName,genres,details,photo,rating,year} =review
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
  <figure className="px-5 pt-5 h-[200PX] w-11/12 mx-auto">
    <img
      src={photo}
      alt="Volunteer"
      className="rounded-xl w-full h-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Post Title</h2>
    <p className="text-lg font-semibold text-gray-800">Genres :<span className='text-gray-500'>Category</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Rating :<span className='text-gray-500'>Deadline</span></p>
    
    <div className="card-actions">
      {/* <Link to={`/reviewDetails/${_id}`}><button className="btn bg-[#0a3d62] text-[#d4af37]">View Details</button></Link> */}
      <button className="btn bg-[#0a3d62] text-[#d4af37]">View Details</button>
    </div>
  </div>
</div>
</div>
  )
}
