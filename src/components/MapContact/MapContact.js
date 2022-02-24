import React from 'react'

export default function MapContact() {


  return (
    <div className='container-fluid py-16 mx-auto'>
        <div className='grid justify-items-stretch'>
            <h1 className='text-6xl mr-6 text-blue-400 font-mono font-extrabold'> LET'S GAME ON </h1>
            <div className='bg-blue-400 justify-self-center rounded-lg mt-8' style={{ width:'300px' , height:'10px' }}></div>
        </div>
        <div className='container grid grid-cols-2 col-span-1 gap-2 mt-14 mx-auto'>
            <div className='flex items-center m-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />  
                    </svg>
                    <p className='text-lg font-thin ml-2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
            </div>
            <div className='flex items-center m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />  
                </svg>
                <p className='text-lg font-thin ml-2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
            </div>
            <div className='flex items-center m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
                <p className='text-lg font-thin ml-2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
            </div>
            <div className='flex items-center m-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className='text-lg font-thin ml-2'> Phone: +84 00 000 000
                </p>
            </div>
        </div>
        <div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4660.894635241588!2d106.66538965138302!3d10.786048999101267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed22b5f8907%3A0x54b69beb3a9daeea!2zNTM4IEPDoWNoIE3huqFuZyBUaMOhbmcgOCwgUGjGsOG7nW5nIDExLCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1645672660630!5m2!1svi!2s"
        width="90%"
        height="450"
        className='mx-auto'
        allowfullscreen=""
        loading="lazy"
        title="huahd"
      />
        </div>
        
    </div>
  )
}
