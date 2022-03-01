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
            nextEl: '.swiper-button-next-timeline', // Add your class name for next button
            prevEl: '.swiper-button-prev-timeline', // Add your class name for prev button
        },
        spaceBetween: 30,
        loop: true,
    };

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
                <p className='mt-2'> WRECKFEST-THQ NORDIC </p>
            </SwiperSlide>
        );

        slides.push(
            <SwiperSlide key={`slide-APEXLEGENDS-2-1.jpg`}>
                <img src={require('../../img/APEXLEGENDS-2-1.jpg')} alt="" />
                <p className='mt-2'> APEXLEGENDS - RESPAWN ENTERTAINMENT </p>
            </SwiperSlide>
        );

        slides.push(
            <SwiperSlide key={`slide-APEXLEGENDS-1.jpg`}>
                <img src={require('../../img/APEXLEGENDS-1.jpg')} alt="" />
                <p className='mt-2'> APEXLEGENDS - RESPAWN ENTERTAINMENT </p>
            </SwiperSlide>
        );

        slides.push(
            <SwiperSlide key={`slide-GLASS-EGG-DIGITAL-MEDIA-2.jpg`}>
                <img src={require('../../img/GLASS-EGG-DIGITAL-MEDIA-2.jpg')} alt="" />
                <p className='mt-2'> GLASS EGG DIGITAL MEDIA </p>
            </SwiperSlide>
        );

        slides.push(
            <SwiperSlide key={`slide-GLASS-EGG-DIGITAL-MEDIA-3.jpg`}>
                <img src={require('../../img/GLASS-EGG-DIGITAL-MEDIA-3.jpg')} alt="" />
                <p className='mt-2'> GLASS EGG DIGITAL MEDIA </p>
            </SwiperSlide>
        );

        slides.push(
            <SwiperSlide key={`slide-GLASS-EGG-DIGITAL-MEDIA.jpg`}>
                <img src={require('../../img/GLASS-EGG-DIGITAL-MEDIA.jpg')} alt="" />
                <p className='mt-2'> GLASS EGG DIGITAL MEDIA </p>
            </SwiperSlide>
        );

        slides.push(
            <SwiperSlide key={`slide-GLASS-EGG-DIGITAL-MEDIA-4.jpg`}>
                <img src={require('../../img/GLASS-EGG-DIGITAL-MEDIA-4.jpg')} alt="" />
                <p className='mt-2'> GLASS EGG DIGITAL MEDIA </p>
            </SwiperSlide>
        );

        slides.push(
            <SwiperSlide key={`slide-FORZA-HORIZON4-XBOXGAMESTUDIOS.jpg`}>
                <img src={require('../../img/FORZA-HORIZON4-XBOXGAMESTUDIOS.jpg')} alt="" />
                <p className='mt-2'> FORZA HORIZON 4 - XBOX GAME STUDIOS </p>
            </SwiperSlide>
        );

        slides.push(
            <SwiperSlide key={`slide-FORZAMOTORSPORT7-XBOXGAMESTUDIOS.jpg`}>
                <img src={require('../../img/FORZAMOTORSPORT7-XBOXGAMESTUDIOS.jpg')} alt="" />
                <p className='mt-2'> FORZA MOTORSPORT 7 - XBOX GAME STUDIOS</p>
            </SwiperSlide>
        );

        slides.push(
            <SwiperSlide key={`slide-FORZAMOTORSPORT7-1-XBOXGAMESTUDIOS.jpg`}>
                <img src={require('../../img/FORZAMOTORSPORT7-1-XBOXGAMESTUDIOS.jpg')} alt="" />
                <p className='mt-2'> FORZA MOTORSPORT 7 - XBOX GAME STUDIOS </p>
            </SwiperSlide>
        );
        // }
        return slides
    }

    const slides = [];
    const mapYear = {
        0: 1992,
        1: 1193,
    }
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
                        nextEl: '.swiper-button-next-timeline',
                        prevEl: '.swiper-button-prev-timeline',
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
                    <div className="flex align-center justify-center mt-6">
                        <div className=" bg-white flex align-center justify-center py-7" style={{ height: '100px' }}>
                            <div className="swiper-button-prev-timeline" style={{ height: '30px' }} onClick={() => swiper.slidePrev()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                                </svg>
                            </div>
                            <div className="inline-block text-2xl font-bold mx-4" style={{ height: '30px' }}>{mapYear[slide.toString()]}</div>
                            <div className="swiper-button-next-timeline " style={{ height: '30px' }} onClick={() => swiper.slideNext()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Swiper >

            </div >
        </div >
    )
}
