import React from 'react'
import './AboutTeam.css'

export default function AboutTeam() {
  return (
    <div className='container-fluid py-8 mx-auto'>
      <div className='grid justify-items-stretch'>
        <h1 className='text-6xl mr-6 text-blue-400 font-mono font-extrabold ml-7'> ABOUT US </h1>
          <div className='bg-blue-400 justify-self-center rounded-lg mt-8' style={{ width: '300px', height: '10px' }}></div>
          </div>
      <div className='flex container justify-center mx-8 leading-4 mt-10'>
        <p className='text-xl font-extralight'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra. Lacus sed turpis tincidunt id. Id diam vel quam elementum pulvinar etiam. Proin nibh nisl condimentum id venenatis a. </p>
      </div>
      <div className='grid grid-cols-3 col-span-1 mx-auto mt-4'>
        <div>
        <div className='avatar'>
          <img className=' avatar-team w-full h-full' src={require('../../img/Kyo Nguyen.9dc19ba4.png')} alt='' />
        </div>
         <p className='text-xl font-mono font-medium'> Kyo Nguyen </p>
        </div>
        <div>
        <div className='avatar'>
          <img className=' avatar-team w-full h-full' src={require('../../img/Kyo Nguyen.9dc19ba4.png')} alt='' />
        </div>
         <p className='text-xl font-mono font-medium'> Kyo Nguyen </p>
        </div>
        <div>
        <div className='avatar'>
          <img className=' avatar-team w-full h-full' src={require('../../img/Kyo Nguyen.9dc19ba4.png')} alt='' />
        </div>
         <p className='text-xl font-mono font-medium'> Kyo Nguyen </p>
        </div>
      </div>

    </div>
  )
}
