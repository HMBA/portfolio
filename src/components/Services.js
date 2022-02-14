import React, { useState } from 'react'
import Service from './Servicedata'
import SeviceCard from './SeviceCard';

const Services = () => {
  const [serviceDataStore, setServicesData] = useState(Service);
  return (
    <>
      <SeviceCard serviceDataProps={serviceDataStore} />
    </>
  )
}

export default Services
