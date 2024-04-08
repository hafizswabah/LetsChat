import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Home from '../../Components/Home/Home'
import "./HomePage.css"
function HomePage() {
  return (
    <>
    <div className="home-page">
    <Sidebar />
      <Home/>
    </div>
  
    </>
  )

}

export default HomePage