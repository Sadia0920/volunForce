import { Link } from 'react-router-dom'

export default function VolunteerNeedCard({post,setIsTableLayout,isTableLayout}) {

const {_id,organizerName,email,thumbnail,description,postTitle,category,location,NoOfVolunteersNeeded,deadline} =post

  return (
    <div>
    {isTableLayout ? (
    <div id="table-layout" className="layout overflow-x-auto">
      <table className="table">
      <tbody>
      <tr>
        <td>{thumbnail}</td>
        <td>{postTitle}</td>
        <td>{category}</td>
        <td>{deadline}</td>
      </tr>
      </tbody>
      </table>
      </div>
      ) : (
      <div className="card bg-base-100 shadow-xl">
  <figure className="px-5 pt-5 h-[200PX] w-11/12 mx-auto">
    <img
      src={thumbnail}
      alt="Volunteer Thumbnail"
      className="rounded-xl w-full h-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-gray-950">{postTitle}</h2>
    <p className="text-lg font-semibold text-gray-800">Category :<span className='text-gray-500'>{category}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Deadline :<span className='text-gray-500'>{deadline}</span></p>
    
    <div className="card-actions">
      <Link to={`/volunteerNeedPostDetails/${_id}`}><button className="btn bg-green-800 text-white">View Details</button></Link>
    </div>
  </div>
</div>
      )
      }
</div>
  )
}
