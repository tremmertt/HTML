import React from 'react'
import './Banner.css'

export default function BannerService() {
   return (
      <div className='works container-fluid py-16 mx-auto'>
         <div className='grid justify-items-stretch'>
            <h1 className='text-6xl mr-6 text-blue-400 font-mono font-extrabold '> WHY CHOOSE US </h1>
            <div className='bg-blue-400 justify-self-center rounded-lg mt-8' style={{ width: '300px', height: '10px' }}></div>
         </div>
         <div className='flex justify-center align-center leading-4 my-8 px-40'>
            <p className='text-xl w-2/3 font-extralight'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
         </div>
         <div className='pt-10 px-40 grid grid-cols-10'>
            <div className='col-span-2 px-2'>
               <img className='mx-auto w-1/3' src={require('../../img/artificial-intelligence-2.png')} alt='' />
               <h5 className='text-xl font-bold m-4 pt-3 text-blue-600'> LONG-TERM PARTNERSHIPS </h5>
            </div>
            <div className='col-span-2 px-2'>
               <img className='mx-auto w-1/3' src={require('../../img/artificial-intelligence-1.png')} alt='' />
               <h5 className='text-xl font-bold pt-3 m-4 text-blue-600' > EFFICIENT WORKING PROCESS </h5>
            </div>
            <div className='col-span-2 px-2'>
               <img className='mx-auto w-1/3' src={require('../../img/artificial-intelligence-3.png')} alt='' />
               <h5 className='text-xl font-bold pt-3 m-4 text-blue-600'> QUALITY ASSURANCE </h5>
            </div>
            <div className='col-span-2 px-2'>
               <img className='mx-auto w-1/3' src={require('../../img/artificial-intelligence-4.png')} alt='' />
               <h5 className='text-xl font-bold pt-3 m-4 text-blue-600'> STRONG TECHNICAL TEAM</h5>
            </div>
            <div className='col-span-2 px-2'>
               <img className='mx-auto w-1/3' src={require('../../img/artificial-intelligence-5.png')} alt='' />
               <h5 className='text-xl font-bold pt-3 m-4 text-blue-600'> 3D ART EXPERT </h5>
            </div>
         </div>
      </div>
   )
}
