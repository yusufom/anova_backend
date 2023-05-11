import React from 'react'
import ServiceImg from '../assets/services.png'


function Services() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '100vh' }}>
      <img src={ServiceImg} alt='' style={{ width: 100 }} />
      Services Page
    </div>
  )
}

export default Services