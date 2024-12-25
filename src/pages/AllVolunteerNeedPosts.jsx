import React, { useState, useEffect } from 'react'
import { useLoaderData, Link} from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import VolunteerNeedCard from './../components/VolunteerNeedCard';

export default function AllVolunteerNeedPosts() {
  const loadedPosts = useLoaderData();
  const [data, setData] = useState(loadedPosts);
  const [search, setSearch] = useState("");

  useEffect(() => {

      fetch(`http://localhost:5000/posts?searchParams=${search}`)
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        setData(data)
      })
  },[search])
  return (
      <div className='w-10/12 mx-auto'>
      <Helmet>
          <title>VolunForce | All Volunteer Need Posts</title>
      </Helmet>
      <h1 className='text-3xl font-bold text-center mt-9'>All Volunteer Need Posts</h1>

      {/* Search */}
      <div className='w-[400px] mx-auto my-6'>
      <input
      onChange={(e) => setSearch(e.target.value)} 
      type="text"  
      placeholder="Search"
      name='search' 
      className="input input-bordered w-full"/>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        data.map(post => <VolunteerNeedCard key={post._id} post={post}></VolunteerNeedCard>)
      }
      </div>
    </div>
      // <Link to='/volunteerNeedPostDetails' className='btn'>Details</Link>
  )
}

