import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

export default function MyRequestPost() {
  const {user} = useContext(AuthContext)
  const [data,setData]=useState(null)

  useEffect(()=>{
    fetch('http://localhost:5000/beAVolunteer')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => {
        console.log(error.message)
    })
  },[setData])
//   const loadedPosts = useLoaderData();
 const setReqData = data.filter((email) => email.volunteerEmail == user.email)
 const [myReq,setMyReq]=useState(setReqData)
  return (
    <div>
  <div className=' py-7'>
  <h1 className='text-3xl font-bold text-center'>My Volunteer Request Post</h1>
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
      myReq.map((item,idx) =>  <tr key={item._id}>
      <th>{idx + 1}</th>
      <td>{item.volunteerName}</td>
      <td>{item.postTitle}</td>
      <td>{item.category}</td>
      <td>{item.location} Stars</td>
      <td>
      <button className='btn'><i className="fa-regular fa-trash-can"></i></button>
        {/* <Link to={`/updatePost/${item._id}`}><button className='btn mr-2'><i className="fa-regular fa-pen-to-square"></i></button></Link> */}
        {/* <button onClick={()=>handleDeleteUser(review._id)} className='btn'><i className="fa-regular fa-trash-can"></i></button>  */}
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