import React, { useState } from 'react'
import { useLoaderData, Link} from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import VolunteerNeedCard from './../components/VolunteerNeedCard';

export default function AllVolunteerNeedPosts() {
  const loadedPosts = useLoaderData();
  const [data, setData] = useState(loadedPosts);
  return (
      <div className='w-10/12 mx-auto'>
      <Helmet>
          <title>VolunForce | All Volunteer Need Posts</title>
      </Helmet>
      <h1 className='text-3xl font-bold text-center mt-9'>All Volunteer Need Posts</h1>
     
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        data.map(post => <VolunteerNeedCard key={post._id} post={post}></VolunteerNeedCard>)
      }
      </div>
    </div>
      // <Link to='/volunteerNeedPostDetails' className='btn'>Details</Link>
  )
}

