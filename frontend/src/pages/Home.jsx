import React from 'react'
import HomeImg from '../assets/home.jpeg'


function Home() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '100vh'}}>
      <img src={HomeImg} alt='' style={{width: 100, }}/>
      Home Landing Page
    </div>
  )
}

export default Home
