import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import "./Layout.css";

const Layout = () => {
  return (
    <div className = "layout-container">
        <Navbar/>
        <div className="outlet-container">
            <Outlet />
        </div>
        <Footer />
      
    </div>
  )
}

export default Layout
