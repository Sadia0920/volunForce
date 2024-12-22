import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <div>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}
