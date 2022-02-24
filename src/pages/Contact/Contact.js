import React from 'react'
import CarouselContact from '../../components/Carousel/CarouselContact'
import MapContact from '../../components/MapContact/MapContact'
import SimpleMap from '../../components/MapContact/SimpleMap'

export default function Contact() {
  return (
    <div className='container-fluid xl:w-full xl:h-full md:h-3/5 md:w-3/5'>
        
        <CarouselContact />
        <MapContact />
        {/* <SimpleMap /> */}
        
    </div>
  )
}
