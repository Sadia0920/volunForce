import React from 'react'
import Banner from '../components/Banner'
import VolunteerGuide from '../components/VolunteerGuide'
import FAQ from '../components/FAQ'
import { Link, useLoaderData } from 'react-router-dom'
import VolunteerNeedCard from './../components/VolunteerNeedCard';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const loadedCards = useLoaderData();
  const limit = 6; 
  const limitedCards = loadedCards.slice(0, limit);
  return (
    <div className='my-7'>
    <Helmet>
      <title>VolunForce | Home</title>
    </Helmet>
        <Banner></Banner>
        <h1 className="text-3xl font-bold text-center my-9">Volunteer Needs Now</h1>
      <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        limitedCards.map(post => <VolunteerNeedCard key={post._id} post={post}></VolunteerNeedCard>)
      }
      </div>
      <div className="text-center">
      <Link to="/allVolunteerNeedPosts" className='btn bg-green-800 text-white w-1/12'>See All</Link>
      </div>
        <VolunteerGuide></VolunteerGuide>
        <FAQ></FAQ>
    </div>
  )
}
