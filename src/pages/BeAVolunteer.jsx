import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function BeAVolunteer() {
  const loadedPostDetails = useLoaderData()
  const {_id,organizerName,email,thumbnail,description,postTitle,category,location,NoOfVolunteersNeeded,deadline} = loadedPostDetails
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
    // const [startDate, setStartDate] = useState(null);
    // const [selectedValue, setSelectedValue] = useState("");
  
    const handleBeAVolunteer = (event) => {
      event.preventDefault();
      const form = event.target;
      const organizerName = form.organizerName.value;
      const email = form.email.value;
      const thumbnail = form.thumbnail.value;
      const description = form.description.value;
      const postTitle = form.postTitle.value;
      const category = form.category.value;
      const location = form.location.value;
      const NoOfVolunteersNeeded = form.NoOfVolunteersNeeded.value;
      const deadline = form.deadline.value;
      const volunteerName = form.volunteerName.value;
      const volunteerEmail = form.volunteerEmail.value;
      const suggestion = form.suggestion.value;
      const status = form.status.value;
      const newBeAVolunteer = {organizerName,email,thumbnail,description,postTitle,category,location,NoOfVolunteersNeeded,deadline,volunteerName,volunteerEmail,suggestion,status}
      console.log(newBeAVolunteer)
      // send data to the server
      fetch('http://localhost:5000/beAVolunteer',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(newBeAVolunteer)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'Request Send successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
        form.reset()
        navigate('/')
    })
    }
  return (
    <div className='w-10/12 mx-auto py-7'>
    <Helmet>
      <title>VolunForce | Be A Volunteer</title>
    </Helmet>
    <div className=' bg-base-200 rounded-xl p-10'>
    <h2 className='text-center text-4xl font-bold text-[#374151]'>Be A Volunteer</h2>
    <form onSubmit={handleBeAVolunteer}>
    <div className='md:flex justify-between items-center gap-5 mt-6'>
      <div className='md:w-1/2'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Organizer Name</span>
      </div>
      <input type="text" readOnly defaultValue={organizerName}  placeholder="Enter Organizer Name" name='organizerName' className="input input-bordered w-full" required/>
      </label>
      </div>

      <div className='md:w-1/2'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Organizer Email</span>
      </div>
      <input type="email" readOnly defaultValue={email} placeholder="Enter Organizer Email" name='email' className="input input-bordered w-full" required/>
      </label>
      </div>
    </div>
    <div className='mt-6'>
      <div className='md:w-full'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Thumbnail</span>
      </div>
      <input type="text" readOnly defaultValue={thumbnail} placeholder="Enter Thumbnail" name='thumbnail' className="input input-bordered w-full" required />
      </label>
      </div>
    </div>
    <div className='mt-6'>
      <div className='md:w-full'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Post Title</span>
      </div>
      <input type="text" readOnly defaultValue={postTitle} placeholder="Enter Post Title" name='postTitle' className="input input-bordered w-full" required />
      </label>
      </div>
    </div>
    <div className='mt-6'>
      <div className='md:w-full'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Description</span>
      </div>
      <textarea type="text" readOnly defaultValue={description} placeholder="Enter Description" name='description' className="textarea" required></textarea>
      </label>
      </div>
    </div>
    <div className='md:flex justify-between items-center gap-5 mt-6'>
      <div className='md:w-1/2'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Category</span>
      </div>
      <input type="text" readOnly defaultValue={category} placeholder="Enter Category" name='category' className="input input-bordered w-full" required/>
      </label>
      </div>
      <div className='md:w-1/2'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Location</span>
      </div>
      <input type="text" readOnly defaultValue={location} placeholder="Enter Location" name='location' className="input input-bordered w-full" required/>
      </label>
      </div>
    </div>
    <div className='md:flex justify-between items-center gap-5 mt-6'>
      <div className='md:w-1/2'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">No. of volunteers needed</span>
      </div>
      <input type="number" readOnly defaultValue={NoOfVolunteersNeeded} placeholder="Enter No. of volunteers needed" name='NoOfVolunteersNeeded' className="input input-bordered w-full" required/>
      </label>
      </div>
      <div className='md:w-1/2'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Deadline</span>
      </div>
      <input type="text" readOnly defaultValue={deadline} placeholder="Enter Deadline" name='deadline' className="input input-bordered w-full" required/>
      </label>
      </div>
    </div>
    <div className='md:flex justify-between items-center gap-5 mt-6'>
      <div className='md:w-1/2'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Volunteer Name</span>
      </div>
      <input type="text" readOnly defaultValue={user.displayName}  placeholder="Enter Volunteer Name" name='volunteerName' className="input input-bordered w-full" required/>
      </label>
      </div>

      <div className='md:w-1/2'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Volunteer Email</span>
      </div>
      <input type="email" readOnly defaultValue={user.email} placeholder="Enter Volunteer Email" name='volunteerEmail' className="input input-bordered w-full" required/>
      </label>
      </div>
    </div>
    <div className='md:flex justify-between items-center gap-5 mt-6'>
      <div className='md:w-1/2'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Suggestion</span>
      </div>
      <input type="text"  placeholder="Enter Your Suggestion" name='suggestion' className="input input-bordered w-full" required/>
      </label>
      </div>

      <div className='md:w-1/2'>
      <label className="form-control">
      <div className="label">
      <span className="label-text font-bold">Status</span>
      </div>
      <input type="text" defaultValue='Request' placeholder="Enter Status" name='status' className="input input-bordered w-full" required/>
      </label>
      </div>
    </div>        
    <div className='mt-6'>
      <input type="submit" value="Request" className="btn w-full font-bold border-white text-white bg-green-800" />
    </div>
    </form>
    </div>
    </div>
  )
}
