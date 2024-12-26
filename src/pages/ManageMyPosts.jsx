import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function ManageMyPosts() {
  const {user} = useContext(AuthContext)

  // load post data
  // const [postData,setPostData]=useState([])
  // useEffect(()=> {
  //   fetchAllPostData()
  // },[])
  // const fetchAllPostData = async () =>{
  //   const {data} = await axios.get(`http://localhost:5000/myPosts/${user?.email}`)
  //   setPostData(data)
  //   console.log(data)
  // }
  

  const [postData,setPostData]=useState([])
  const fetchAllPostData = async () =>{
    const {data} = await axios.get('http://localhost:5000/posts')
    const setLoadedPosts = data.filter((email) => email.email == user.email)
    setPostData(setLoadedPosts)
  }
  useEffect(()=> {
    fetchAllPostData()
  },[])

  
  // load be volunteer data
  const [beAVolunteerData,setBeAVolunteerData]=useState([])
  const fetchBeAVolunteerData = async () =>{
    const {data} = await axios.get('http://localhost:5000/beAVolunteer')
    const setLoadedBeAVolunteerReq = data.filter((email) => email.volunteerEmail == user.email)
  setBeAVolunteerData(setLoadedBeAVolunteerReq)
  }
  useEffect(()=> {
    fetchBeAVolunteerData()
  },[])

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
        const remainingPost = postData.filter(post => post._id !== _id)
        setPostData(remainingPost)
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
        const remainingRequest = beAVolunteerData.filter(req => req._id !== _id)
        setBeAVolunteerData(remainingRequest)
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
      <th>No Of Volunteers Needed</th>
      <th>Action</th>
      </tr>
    </thead>
    <tbody> 
    {/* row 1 */}
    {
      postData.map((item,idx) =>  <tr key={item._id}>
      <th>{idx + 1}</th>
      <td>{item.organizerName}</td>
      <td>{item.postTitle}</td>
      <td>{item.category}</td>
      <td>{item.NoOfVolunteersNeeded}</td>
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
    {/* row */}
    {
      beAVolunteerData.map((item,idx) =>  <tr key={item._id}>
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
