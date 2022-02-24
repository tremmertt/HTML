import React from 'react'
import CarouselNews from '../../components/Carousel/CarouselNews'
import LastestNews from '../../components/News/LastestNews'


export default function News() {
  return (
    <div className='container-fluid xl:w-full xl:h-full md:h-3/5 md:w-3/5'>
        
        <CarouselNews />
        <LastestNews />
        
    </div>
  )
}
