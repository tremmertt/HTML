import React from 'react'
import AboutTeam from '../../components/AboutTeam/AboutTeam'
import BannerTimeline from '../../components/BannerTimeline/BannerTimeline'
import CarouselAbout from '../../components/Carousel/CarouselAbout'

export default function About() {
  return (
    <div className='container-fluid xl:w-full xl:h-full md:h-3/5 md:w-3/5'>
        <CarouselAbout />
        <BannerTimeline />
        <AboutTeam />
    </div>
  )
}
