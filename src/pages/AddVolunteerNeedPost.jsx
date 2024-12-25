import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function AddVolunteerNeedPost() {
  const {user} = useContext(AuthContext);
  const [startDate, setStartDate] = useState(null);
  // const [selectedValue, setSelectedValue] = useState("");

  const handleAddPost = (event) => {
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
    const newPost = {organizerName,email,thumbnail,description,postTitle,category,location,NoOfVolunteersNeeded,deadline}
    console.log(newPost)
    // send data to the server
    fetch('http://localhost:5000/posts',{
      method : 'POST',
      headers : {
          'content-type' : 'application/json'
      },
      body : JSON.stringify(newPost)
  })
  .then(res => res.json())
  .then(data => {
      console.log(data)
      if(data.insertedId){
          Swal.fire({
              title: 'Success',
              text: 'Review added successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
      }
      form.reset()
  })
  }
  return (
    <div className='w-10/12 mx-auto py-7'>
        <Helmet>
            <title>VolunForce | Add Volunteer Need Post</title>
        </Helmet>
        <div className=' bg-base-200 rounded-xl p-10'>
            <h2 className='text-center text-4xl font-bold text-[#374151]'>Add Volunteer Need Post</h2>
            <p className='text-center text-[#1B1A1AB3] w-9/12 mx-auto mt-8'>It is a dedicated area where you can add detailed reviews of popular games.This page can significantly enhance user engagement and provide valuable content for visitors.</p>
        <form onSubmit={handleAddPost}>
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
                <input type="text" placeholder="Enter Thumbnail" name='thumbnail' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Post Title</span>
                </div>
                <input type="text" placeholder="Enter Post Title" name='postTitle' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Description</span>
                </div>
                <textarea type="text" placeholder="Enter Description" name='description' className="textarea" required></textarea>
                </label>
            </div>
        </div>
        
        <div className='md:flex justify-between items-center gap-5 mt-6'>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Category</span>
                </div>
                <input type="text" placeholder="Enter Category" name='category' className="input input-bordered w-full" required/>
                </label>
            </div>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Location</span>
                </div>
                <input type="text" placeholder="Enter Location" name='location' className="input input-bordered w-full" required/>
                </label>
            </div>
        </div>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">No. of volunteers needed</span>
                </div>
                <input type="number" placeholder="Enter No. of volunteers needed" name='NoOfVolunteersNeeded' className="input input-bordered w-full" required/>
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
                    name='deadline'
                    className='input input-bordered w-full'
                    required
                     />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <input type="submit" value="Add Post" className="btn w-full font-bold border-white text-white bg-green-800" />
        </div>
        </form>
        </div>
    </div>
  )
}
