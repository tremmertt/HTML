import React, { useState } from 'react'
import './Banner.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

export default function Banner() {

    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next', // Add your class name for next button
            prevEl: '.swiper-button-prev', // Add your class name for prev button
        },
        spaceBetween: 30,
        loop: true,
    };

    function getArrow() {
        return (

            <a>dsadsa</a>
        )
    }

    const [swiper, setSwipper] = useState(null)
    const [slide, setSlide] = useState(0);


    function buildSlide() {
        const slides = [];
        // for (let i = 0; i < 10; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-NEEDFORSPEED-PAYBACK-EA.jpg`}>
                <img src={require('../../img/NEEDFORSPEED-PAYBACK-EA.jpg')} alt="" />
                <p className='mt-2'> NEED FOR SPEED PAYBACK - EA </p>
            </SwiperSlide>
        );

        slides.push(
            <SwiperSlide key={`slide-WRECKFEST-THQNordic.jpg`}>
                <img src={require('../../img/WRECKFEST-THQNordic.jpg')} alt="" />
                <p className='mt-2'> NEED FOR SPEED PAYBACK - EA </p>
            </SwiperSlide>
        );
        // }
        return slides
    }

    const slides = [];

    return (
        <div className='works container-fluid py-16 mx-auto'>
            <div className='grid justify-items-stretch'>
                <h1 className='text-6xl mr-6 text-blue-400 font-mono font-extrabold'> SOME OF OUR WORKS </h1>
                <div className='bg-blue-400 justify-self-center rounded-lg mt-8' style={{ width: '300px', height: '10px' }}></div>
            </div>
            <div>
                <Swiper

                    // navigation arrows 
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className='mt-10'
                    spaceBetween={50}
                    slidesPerView={3}
                    scrollbar={{ draggable: true }}
                    onSlideChange={(swiper) => {
                        console.log("Slide index changed to: ", swiper.activeIndex);
                        setSlide(swiper.activeIndex);
                    }}
                    onSwiper={(swiper) => setSwipper(swiper)}
                >
                    {buildSlide()}
                    <div className="swiper-button-prev" onClick={() => swiper.slidePrev()}></div>
                    <div className="swiper-button-next" onClick={() => swiper.slideNext()}></div>
                </Swiper>
            </div>
        </div>
    )
}
