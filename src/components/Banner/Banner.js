import React from 'react'
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Banner() {
  return (
    <div className='works container-fluid py-16 mx-auto'>
        <div className='grid justify-items-stretch'>
            <h1 className='text-6xl mr-6 text-blue-400 font-mono font-extrabold'> SOME OF OUR WORKS </h1>
            <div className='bg-blue-400 justify-self-center rounded-lg mt-8' style={{ width:'300px' , height:'10px' }}></div>
        </div>
        <div>
        <Swiper
            className='mt-10'
            spaceBetween={50}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src={require('../../img/NEEDFORSPEED-PAYBACK-EA.jpg')} alt="" />
                <p className='mt-2'> NEED FOR SPEED PAYBACK - EA </p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={require('../../img/WRECKFEST-THQNordic.jpg')} alt="" />
                <p className='mt-2'> WRECKFEST - THQ NORDIC </p>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}
