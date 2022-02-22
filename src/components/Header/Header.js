import React from 'react'

export default function Header() {
  return (
    <div>
        <header className="text-gray-600 body-font">
    <div className="container-fluid mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center shadow-md">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className='ml-52 w-auto' style={{ height:'60px'}} src={require("../../img/blue-2.png")} alt="logo" />
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-md font-semibold justify-center">
        <a className="mr-8 hover:text-gray-900"> ABOUT </a>
        <a className="mr-8 hover:text-gray-900"> SERVICE </a>
        <a className="mr-8 hover:text-gray-900"> PORTFOLIO </a>
        <a className="mr-8 hover:text-gray-900"> NEWS </a>
        <a className="mr-8 hover:text-gray-900"> CAREERS </a>
        <a className="mr-8 hover:text-gray-900"> CONTACT </a>
      </nav>
      <button className="inline-flex items-center outline outline-offset-2 outline-1 outline-blue-400 border-0 py-1 px-3 focus:outline-none hover:outline-blue-900 hover:outline-2 rounded text-base mt-4 md:mt-0 mr-24" style={{width: '100px'}}> English
        <div className='ml-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        </div>
      </button>
    </div>
  </header>
  </div>

  )
}
