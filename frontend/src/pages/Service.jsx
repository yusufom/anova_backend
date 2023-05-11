import React from 'react'
import ServiceImg from '../assets/services.png'
import { useParams } from 'react-router-dom';

function Service() {
  const { serviceId } = useParams();
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '100vh'}}>
      <img src={ServiceImg} alt='' style={{width: 100 }}/>
      Single service Page {serviceId}
    </div>
  )
}

export default Service