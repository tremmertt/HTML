import React from 'react'
import Slider from "react-slick";
import './ClientsService.css'

export default function ClientsService() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
      };

  return (
    <div className='container-fluid py-16 mx-auto'>
        <div className='grid justify-items-stretch'>
            <h1 className='text-6xl mr-6 text-blue-400 font-mono font-extrabold'> OUR CLIENTS </h1>
            <div className='bg-blue-400 justify-self-center rounded-lg mt-8' style={{ width:'300px' , height:'10px' }}></div>
        </div>
        <div className='flex container justify-center mx-8 leading-4 mt-5'>
            <p className='text-xl font-extralight'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
        <div className='container mt-8'>
            <img className='h-auto flex justify-center px-48 ml-10' src={require('../../img/glassegg-client-map.png')} alt=""/>
        </div>

        <div className='p-10'>
            <ul className='country'>
                <li className='list-country' >
                    <img className='mx-4' src={require('../../img/country/AUS.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Australia </p>
                </li>
                <li className='list-country'>  
                    <img className='mx-4' src={require('../../img/country/Germany.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Germany </p>
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Ukraine.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Ukraine </p>
                </li>
                <li className='list-country'>
                    <img  className='mx-4' src={require('../../img/country/Cyprus.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Cyprus </p>
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Japan.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Japan </p>
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/France.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> France </p>
                </li>
                <li className='list-country'>
                    <img className='mr-6' src={require('../../img/country/UK.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> UK </p>
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Colombia.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Colombia </p>
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Italy.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Italy </p>
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Spain.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Spain </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Norway.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Norway </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/China.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> China </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Isareal.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Isareal </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/South-Korea.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> South Korea </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Thailand.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Thailand </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/India.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> India </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Sweden.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Sweden </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Vietnam.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Vietnam </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Canada.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Canada </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Singapore.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Singapore </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/US.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> USA </p> 
                </li>
                <li className='list-country'>
                    <img className='mx-4' src={require('../../img/country/Finland.png')} alt="" />
                    <p className='text-sm font-sans font-medium'> Finland </p> 
                </li>
            </ul>
        </div>

        <div className='mt-20'>
        <Slider {...settings}>
          <div className='ml-10'>
            <img src={require('../../img/logo/ABOSO.png')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Activision.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Bandainamco.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Codemasters.jpg')} alt="" />
          </div>
          <div>
            <img src={require('../../img/logo/EA-1.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Firemonkeys.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/frontier-logo-1.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Gloops.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/GSE-Systems.jpg')} alt="" />
          </div>
          <div>
            <img src={require('../../img/logo/HUTCH.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Insomniac-games.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/iracing-logo-1.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Klab-Games.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Kwalee.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Natural-motion.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Piper-work.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/pixyda.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Playground.jpg')} alt="" />
          </div>
          <div>
            <img src={require('../../img/logo/RESPAWN-ENTERTAINMENT.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Saber-Interactive.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/SEGA-1.jpg')} alt="" />
          </div >
          <div className='ml-10'>
            <img src={require('../../img/logo/Simbin.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/SMS.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/SONY-LOGO-1.png')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Sony.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/THQ-Nordic.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Three-fields-entertainment.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Treyarch.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Turn-10-1.jpg')} alt="" />
          </div>
          <div>
            <img src={require('../../img/logo/Ubisoft-1.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Wargaming-1.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Xbox-games-studios.jpg')} alt="" />
          </div>
          <div className='ml-10'>
            <img src={require('../../img/logo/Zynga-1.jpg')} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  )
}