import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData,useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default function UpdatePost() { 

  const loadData = useLoaderData()
  const {_id,organizerName,email,thumbnail,description,postTitle,category,location,NoOfVolunteersNeeded,deadline} = loadData;
  const {user} = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date(deadline));
  const navigate = useNavigate()

    const handleUpdatedPost = (event) => {
        
    event.preventDefault();
    // const _id = _id;
    const form = event.target;
    const organizerName = form.organizerName.value;
    const email = form.email.value;
    const thumbnail = form.thumbnail.value;
    const description = form.description.value;
    const postTitle = form.postTitle.value;
    const category = form.category.value;
    const location = form.location.value;
    const NoOfVolunteers = form.NoOfVolunteersNeeded.value;
    const deadline = form.deadline.value;
      const NoOfVolunteersNeeded = Number(NoOfVolunteers);
          if (isNaN(NoOfVolunteersNeeded) || NoOfVolunteersNeeded <= 0) {
              Swal.fire({
                  title: 'Error',
                  text: 'not valid',
                  icon: 'error',
                  confirmButtonText: 'Ok'
                })
              return;
          }
    const newUpdatedPost = {organizerName,email,thumbnail,description,postTitle,category,location,NoOfVolunteersNeeded,deadline}
    // console.log(newUpdatedPost)

    // update data to the server

    fetch(`https://volun-force-server.vercel.app/posts/${_id}`,{
      method : 'PUT',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(newUpdatedPost)
      })
      .then(res => res.json())
      .then(data => {
      if(data.modifiedCount > 0){
      Swal.fire({
      title: 'Success',
      text: 'Post Updated successfully',
      icon: 'success',
      confirmButtonText: 'Ok'
      })
      }
      navigate('/manageMyPosts')
      })
      }
  return (
<div className='w-10/12 mx-auto py-7'>
    <Helmet>         
      <title>VolunForce | Update Post</title>
    </Helmet> 
    <div className=' bg-base-200 rounded-xl p-10'>
        <h2 className='text-center text-4xl font-bold text-[#374151]'>Update Volunteer Need Post</h2>
        <p className='text-center text-[#1B1A1AB3] w-9/12 mx-auto mt-8'>It is a dedicated area where you can update your volunteer needed post. </p>
    <form onSubmit={handleUpdatedPost}>
    <div className='md:flex justify-between items-center gap-5 mt-6'>
        <div className='md:w-1/2'>
            <label className="form-control">
            <div className="label">
            <span className="label-text font-bold">Organizer Name</span>
            </div>
            <input type="text" readOnly defaultValue={user.displayName}  placeholder="Enter Organizer Name" name='organizerName' className="input input-bordered w-full" required/>
            </label>
        </div>
        <div className='md:w-1/2'>
            <label className="form-control">
            <div className="label">
            <span className="label-text font-bold">Organizer Email</span>
            </div>
            <input type="email" readOnly defaultValue={user.email} placeholder="Enter Organizer Email" name='email' className="input input-bordered w-full" required/>
            </label>
        </div>
    </div>
    <div className='mt-6'>
      <div className='md:w-full'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">Thumbnail</span>
        </div>
        <input type="text" defaultValue={thumbnail} placeholder="Enter Thumbnail" name='thumbnail' className="input input-bordered w-full" required />
        </label>
        </div>
    </div>
    <div className='mt-6'>
      <div className='md:w-full'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">Post Title</span>
        </div>
        <input type="text" defaultValue={postTitle} placeholder="Enter Post Title" name='postTitle' className="input input-bordered w-full" required />
        </label>
      </div>
    </div>
    <div className='mt-6'>
      <div className='md:w-full'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">Description</span>
        </div>
        <textarea type="text" defaultValue={description} placeholder="Enter Description" name='description' className="textarea" required></textarea>
        </label>
      </div>
    </div>
    <div className='md:flex justify-between items-center gap-5 mt-6'>
      <div className='md:w-1/2'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">Category</span>
        </div>
        <input type="text" defaultValue={category} placeholder="Enter Category" name='category' className="input input-bordered w-full" required/>
        </label>
      </div>
      <div className='md:w-1/2'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">Location</span>
        </div>
        <input type="text" defaultValue={location} placeholder="Enter Location" name='location' className="input input-bordered w-full" required/>
        </label>
      </div>
    </div>
    <div className='md:flex justify-between items-center gap-5 mt-6'>
      <div className='md:w-1/2'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">No. of volunteers needed</span>
        </div>
        <input type="number" defaultValue={NoOfVolunteersNeeded} placeholder="Enter No. of volunteers needed" name='NoOfVolunteersNeeded' className="input input-bordered w-full" required/>
        </label>
      </div>
      <div className='md:w-1/2'>
        <label className="form-control">
        <div className="label">
        <span className="label-text font-bold">Deadline</span>
        </div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a date"
          defaultValue={startDate}
          name='deadline'
          className='input input-bordered w-full'
          required
        />
        </label>
      </div>
    </div>
    <div className='mt-6'>
      <input type="submit" value="Update Post" className="btn w-full font-bold border-white text-white bg-green-800" />
    </div>
    </form>
    </div>
</div>
  )
}