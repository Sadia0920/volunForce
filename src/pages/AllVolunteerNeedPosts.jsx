import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

export default function AllVolunteerNeedPosts() {
  return (
    <div>
      <Helmet>
          <title>VolunForce | All Volunteer Need Posts</title>
      </Helmet>
      <h1>AllVolunteerNeedPosts</h1>
      <Link to='/volunteerNeedPostDetails' className='btn'>Details</Link>
    </div>
  )
}

