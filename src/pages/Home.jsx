import React from 'react'
import Banner from '../components/Banner'
import VolunteerGuide from '../components/VolunteerGuide'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <div className='my-7'>
        <Banner></Banner>
        <VolunteerGuide></VolunteerGuide>
        <FAQ></FAQ>
    </div>
  )
}
