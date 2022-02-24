import React from 'react'
import BannerService from '../../components/Banner/BannerService'
import CarouselService from '../../components/CarouselService/CarouselService'
import ClientsService from '../../components/Clients/ClientsService'
import IntroService from '../../components/Introduction/IntroService'
import Join from '../../components/Join/Join'

export default function Home() {
  return (
    <div className='container-fluid xl:w-full xl:h-full md:h-3/5 '>

      <CarouselService />
      <IntroService />
      <BannerService />
      <ClientsService />
    </div>
  )
}
