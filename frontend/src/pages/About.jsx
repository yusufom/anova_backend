import React from 'react'
import AboutImg from '../assets/about.png'


function About() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '100vh'}}>
      <img src={AboutImg} alt='' style={{width: 100, }}/>
      About Page
    </div>
  )
}

export default About