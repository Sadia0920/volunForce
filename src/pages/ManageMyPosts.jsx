import React, { useContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

export default function ManageMyPosts() {
  const {user} = useContext(AuthContext)
  const {postData , beAVolunteerData} = useLoaderData();
  // load post data
  const setLoadedPosts = postData.filter((email) => email.email == user.email)
  const [myPost,setMyPost]=useState(setLoadedPosts)
  // load be volunteer data
  const setLoadedBeAVolunteerReq = beAVolunteerData.filter((email) => email.volunteerEmail == user.email)
  const [myVolunteerReq,setMyVolunteerReq]=useState(setLoadedBeAVolunteerReq)

  // delete volunteer post
    const handleDeletePost = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/posts/${_id}`,{
          method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          if(data.deletedCount > 0){
          Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success"
        });
        const remainingPost = myPost.filter(post => post._id !== _id)
        setMyPost(remainingPost)
          }
        })
      }
    });
  }

  // delete volunteer request
  const handleDeleteRequest = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/beAVolunteer/${_id}`,{
          method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          if(data.deletedCount > 0){
          Swal.fire({
          title: "Deleted!",
          text: "Your request has been deleted.",
          icon: "success"
        });
        const remainingRequest = myVolunteerReq.filter(req => req._id !== _id)
        setMyVolunteerReq(remainingRequest)
          }
        })
      }
    });
  }
  return (
    <div>
    <Helmet>
        <title>VolunForce | Manage My Posts</title>
    </Helmet>
    
  {/* My Volunteer Need Post */}

  <div className='w-10/12 mx-auto py-7'>
  <h1 className='text-3xl font-bold text-center mb-6'>My Volunteer Need Post</h1>
    <div className="overflow-x-auto">
    <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th></th>
      <th>Organizer Name</th>
      <th>Post Title</th>
      <th>Category</th>
      <th>location</th>
      <th>Action</th>
      </tr>
    </thead>
    <tbody> 
    {/* row 1 */}
    {
      myPost.map((item,idx) =>  <tr key={item._id}>
      <th>{idx + 1}</th>
      <td>{item.organizerName}</td>
      <td>{item.postTitle}</td>
      <td>{item.category}</td>
      <td>{item.location}</td>
      <td>
      {/* update button */}
      <Link to={`/updatePost/${item._id}`}><button className='btn mr-2'><i className="fa-regular fa-pen-to-square"></i></button></Link>
      {/* delete button */}
      <button onClick={()=>handleDeletePost(item._id)} className='btn'><i className="fa-regular fa-trash-can"></i></button> 
      </td>
      </tr>)
    }
  </tbody>
  </table>
  </div>
  </div>

  {/* My Request For Volunteer */}
 
  <div className='w-10/12 mx-auto py-7'>
  <h1 className='text-3xl font-bold text-center mb-6'>My Volunteer Request</h1>
    <div className="overflow-x-auto">
    <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th></th>
      <th>Volunteer Name</th>
      <th>Post Title</th>
      <th>Category</th>
      <th>location</th>
      <th>Action</th>
      </tr>
    </thead>
    <tbody> 
    {/* row 1 */}
    {
      myVolunteerReq.map((item,idx) =>  <tr key={item._id}>
      <th>{idx + 1}</th>
      <td>{item.volunteerName}</td>
      <td>{item.postTitle}</td>
      <td>{item.category}</td>
      <td>{item.location}</td>
      <td>
      {/* delete button */}
      <button onClick={()=>handleDeleteRequest(item._id)} className='btn'><i className="fa-regular fa-trash-can"></i></button> 
      </td>
      </tr>)
    }
  </tbody>
  </table>
  </div>
  </div>
  </div>
  )
}

// import React, { useContext, useState } from 'react'
// import { Link, useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider';
// import Swal from 'sweetalert2';

// export default function MyReviews() {
//   const {user} = useContext(AuthContext)
//   const loadedReviews = useLoaderData();
    
//   const setLoadedReviews = loadedReviews.filter((email) => email.email == user.email)
//   const [reviews,setReviews]=useState(setLoadedReviews)

//   const handleDeleteUser = (_id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://game-freak-reviews-server.vercel.app/reviews/${_id}`,{
//           method : 'DELETE'
//         })
//         .then(res => res.json())
//         .then(data => {
//           // console.log(data)
//           if(data.deletedCount > 0){
//           Swal.fire({
//           title: "Deleted!",
//           text: "Your file has been deleted.",
//           icon: "success"
//         });
//         const remaining = reviews.filter(review => review._id !== _id)
//         setReviews(remaining)
//           }
//         })
//       }
//     });
//   }
//   return (
//     <div className='w-10/12 mx-auto py-7'>
//       <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th></th>
//         <th>User Name</th>
//         <th>Game Name</th>
//         <th>Genres</th>
//         <th>Rating</th>
//         <th>Action</th>
//       </tr>
//     </thead>
//     <tbody> 
//       {/* row 1 */}
//      {
//       reviews.map((review,idx) =>  <tr key={review._id}>
//         <th>{idx + 1}</th>
//         <td>{review.yourName}</td>
//         <td>{review.gameName}</td>
//         <td>{review.genres}</td>
//         <td>{review.rating} Stars</td>
    
//         <td>
//           <Link to={`/updateReview/${review._id}`}><button className='btn mr-2'><i className="fa-regular fa-pen-to-square"></i></button></Link>
//           <button onClick={()=>handleDeleteUser(review._id)} className='btn'><i className="fa-regular fa-trash-can"></i></button> 
//       </td>
//       </tr>)
//       }
//       </tbody>
//   </table>
// </div>
//     </div>
//   )
// }