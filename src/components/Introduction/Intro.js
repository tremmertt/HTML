import React from 'react'
import './Intro.css'

export default function Intro() {
    return (
        <div className='container-fluid py-16 mx-auto'>
            <div className='grid justify-items-stretch'>
                <h1 className='text-6xl mr-6 text-blue-400 font-mono font-extrabold'> 2D/3D ART OUTSOURCING STUDIO </h1>
                <div className='bg-blue-400 justify-self-center rounded-lg my-8' style={{ width: '300px', height: '10px' }}></div>
            </div>
            <div className='flex justify-center align-center leading-4 my-8 px-40'>
                <p className='text-xl font-extralight'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
            <div className='flex justify-center my-20 px-2' >
                <div className="box-border h-48 w-48 p-4 border-4 border-blue-400 mr-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 m-12 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div className='intro'>
                        <h3 className='text-blue-700 text-6xl font-extrabold'> 400+ </h3>
                        <p className='text-xl text-black font-semibold'> MEMBERS </p>
                    </div>
                </div>
                <div className="box-border h-48 w-48 p-4 border-4 border-blue-400 mr-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 m-12 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className='intro'>
                        <h3 className='text-blue-700 text-6xl font-extrabold'> 20+ </h3>
                        <p className='text-xl text-black font-semibold'> YEARS OLD </p>
                    </div>
                </div>
                <div className="box-border h-48 w-48 p-4 border-4 border-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 m-12 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className='intro'>
                        <h3 className='text-blue-700 text-6xl font-extrabold'> 25+ </h3>
                        <p className='text-xl text-black font-semibold'> CLIENT COUNTRIES </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
