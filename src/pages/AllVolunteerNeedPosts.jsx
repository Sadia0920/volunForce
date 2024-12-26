import React, { useState, useEffect } from 'react'
import { useLoaderData, Link} from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import VolunteerNeedCard from './../components/VolunteerNeedCard';
import axios from 'axios';

export default function AllVolunteerNeedPosts() {
  const [data,setData]=useState([])
  const fetchAllData = async () =>{
    const {data} = await axios.get('https://volun-force-server.vercel.app/posts')
    setData(data)
  }
  useEffect(()=> {
    fetchAllData()
  },[])
  // const loadedPosts = useLoaderData();
  // const [data, setData] = useState(loadedPosts);
  const [search, setSearch] = useState("");

  const [isTableLayout, setIsTableLayout] = useState(false);

  const toggleLayout = () => {
    setIsTableLayout((prev) => !prev);
  };

  useEffect(() => {
      fetch(`https://volun-force-server.vercel.app/posts?searchParams=${search}`)
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
      <div className='w-[250px] md:w-[300px] lg:w-[400px] mx-auto my-6'>
      <input
      onChange={(e) => setSearch(e.target.value)} 
      type="text"  
      placeholder="Search"
      name='search' 
      className="input input-bordered w-full"/>
      </div>

  <div className='w-6/12 md:w-5/12 lg:w-4/12 mx-auto mb-6'>
  <button className='btn bg-green-800 text-white w-full' onClick={toggleLayout}>
        {isTableLayout ? "Switch to Card Layout" : "Switch to Table Layout"}
      </button>
  </div>
      {
        isTableLayout ? 
        <>
        <div id="table-layout" className="layout overflow-x-auto">
      <table className="table">
      <thead>
      <tr>
        <th>Thumbnail</th>
        <th>Post Title</th>
        <th>Category</th>
        <th>Deadline</th>
      </tr>
      </thead>
      </table>
      </div>
      </>
      :
      <>
      </>
      }

      <div className={isTableLayout ?'grid grid-cols-1' : ' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
      {
        data.map(post => <VolunteerNeedCard 
          key={post._id} 
          post={post}
          setIsTableLayout={setIsTableLayout}
          isTableLayout={isTableLayout}></VolunteerNeedCard>)
      }
      </div>
    </div>
  )
}

