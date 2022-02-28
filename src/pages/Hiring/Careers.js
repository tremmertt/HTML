import React from 'react'
import CardCareers from '../../components/CardCareers/CardCareers'

import CarouselCareers from '../../components/Carousel/CarouselCareers'
import TableCareer from '../../components/TableCareer/TableCareer'


export default function Careers() {
  return (
    <div className='container-fluid xl:w-full xl:h-full md:h-3/5 md:w-3/5'>
        
        <CarouselCareers />
        <CardCareers />
        <TableCareer />
        
    </div>
  )
}
