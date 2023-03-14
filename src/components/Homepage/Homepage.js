import React from 'react'
import "./Homepage.css"

const Homepage = () => {
  return (
    <>
    <div className="page-container">
        <div className="image-overlay">
            <img src="https://img.freepik.com/free-photo/modern-business-buildings_1127-2857.jpg?w=826&t=st=1678787909~exp=1678788509~hmac=e679920c332ec33a2fa951e10c95eef9be82534d684beab0781c0b167d79fb8f" alt="image" className="img"/>
        </div>
        <div className="text-overlay">
            <div className='headdiv'><h1 className='heading'>We Crush Minimal Design.</h1></div>
            <div className='paradiv'><p>MONOCHROME is a creative agency based in Chicago. We developed the Genesis Framework and build mobile-optimized themes for WordPress.</p></div>
        </div>
    </div>
    </>
  )
}

export default Homepage