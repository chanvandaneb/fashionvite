import React from 'react'
import { Outlet } from 'react-router-dom'
import Announcement from './components/Announcement'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
export const Layout = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <div><Outlet/></div>
        <Footer/>
    </div>
  )
}
