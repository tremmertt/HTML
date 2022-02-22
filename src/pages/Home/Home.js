import React from 'react'
import Banner from '../../components/Banner/Banner'
import Carousel from '../../components/Carousel/Carousel'
import Clients from '../../components/Clients/Clients'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Intro from '../../components/Introduction/Intro'
import Join from '../../components/Join/Join'

export default function Home() {
  return (
    <div className='container-fluid xl:w-full xl:h-full md:h-3/5 md:w-3/5'>
        <Header />
        <Carousel />
        <Intro />
        <Banner />
        <Clients />
        <Join />
        <Footer />
    </div>
  )
}
