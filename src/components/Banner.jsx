import React from 'react'
import banner from "../assests/banner.jpg"
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="bannerImg" className="banner-image"/>      
    </div>
  )
}

export default Banner

