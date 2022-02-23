import React from 'react'
import './Banner.css'

export default function BannerService() {
  return (
    <div className='works container-fluid py-16 mx-auto'>
        <div className='grid justify-items-stretch'>
            <h1 className='text-6xl mr-6 text-blue-400 font-mono font-extrabold'> WHY CHOOSE US </h1>
            <div className='bg-blue-400 justify-self-center rounded-lg mt-8' style={{ width: '300px', height: '10px' }}></div>
        </div>
        <div className='flex container justify-center mx-8 leading-4 mt-10'>
            <p className='text-xl font-extralight'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
        <div className=' mt-10 px-2 mx-20 grid grid-cols-10'>
            <div className='col-span-2'>
               <img className='ml-16 w-1/2' src={require('../../img/artificial-intelligence-2.png')} alt='' />
               <h5 className='text-lg m-4 pt-3 text-blue-600'> LONG-TERM PARTNERSHIPS </h5>
            </div>
            <div className='col-span-2'>
               <img className='ml-16 w-1/2' src={require('../../img/artificial-intelligence-1.png')} alt='' />
               <h5 className='text-lg pt-3 m-4 text-blue-600' > EFFICIENT WORKING PROCESS </h5>
            </div>
            <div className='col-span-2'>
               <img className='ml-16 w-1/2' src={require('../../img/artificial-intelligence-3.png')} alt='' />
               <h5 className='text-lg pt-3 m-4 text-blue-600'> QUALITY ASSURANCE </h5>
            </div>
            <div className='col-span-2'>
               <img className='ml-16 w-1/2' src={require('../../img/artificial-intelligence-4.png')} alt='' />
               <h5 className='text-lg pt-3 m-4 text-blue-600'> STRONG TECHNICAL TEAM</h5>
            </div>
            <div className='col-span-2'>
               <img className='ml-16 w-1/2' src={require('../../img/artificial-intelligence-5.png')} alt='' />
               <h5 className='text-lg pt-3 m-4 text-blue-600'> 3D ART EXPERT </h5>
            </div>
        </div>
    </div>
  )
}
