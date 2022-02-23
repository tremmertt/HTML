import React, { useEffect, useState } from 'react';
import './Header.css'
import { Link } from "react-router-dom";


export default function Header() {
  const [offset, setOffset] = useState(window.pageYOffset);
  const [curWidth, setCurrentWidth] = useState(window.innerWidth);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  function isLargeScreen() {
    return curWidth <= 1000 ? false : true
  }

  useEffect(() => {
    console.log('useEffect')
    const onScroll = () => setOffset(window.pageYOffset);
    const onResizeWidth = () => setCurrentWidth(window.innerWidth);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResizeWidth);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResizeWidth, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResizeWidth)
    };
  }, []);

  console.log('scroll', offset, curWidth,)

  function showHeaderNormal() {
    return (
      <nav style={{ height: offset == 0 ? '80px' : '60px', transition: 'all 0.5s ease-in-out' }} className="px-14  flex flex-row items-center shadow-md justify-around">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className=' w-auto' style={{ height: offset == 0 ? '50px' : '40px' }} src={require("../../img/blue-2.png")} alt="logo" />
        </Link>
        <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-md font-semibold justify-center">
          <li><Link to="/" className="mr-8 hover:text-gray-900"> ABOUT </Link></li>
          <li><Link to="/service" className="mr-8 hover:text-gray-900"> SERVICE </Link></li>
          <li><Link to="/product" className="mr-8 hover:text-gray-900"> PORTFOLIO </Link></li>
          <li><Link to="/news" className="mr-8 hover:text-gray-900"> NEWS </Link></li>
          <li><Link to="/careers" className="mr-8 hover:text-gray-900"> CAREERS </Link></li>
          <li><Link to="/contact" className="mr-8 hover:text-gray-900"> CONTACT </Link></li>
        </ul>
        <button className="inline-flex items-center outline outline-offset-2 outline-1 outline-blue-400 border-0 py-1 px-3 focus:outline-none hover:outline-blue-900 hover:outline-2 rounded text-base mt-4 md:mt-0 " style={{ width: '100px' }}> English
          <div className='ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </nav>
    )
  }

  function showHeaderSmall() {

    return (
      <nav style={{ height: offset == 0 ? '109px' : '90px', transition: 'all 0.5s ease-in-out' }} className="px-14  flex flex-row items-center shadow-md justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className=' w-auto' style={{ height: offset == 0 ? '50px' : '40px' }} src={require("../../img/blue-2.png")} alt="logo" />
        </a>

        <button
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          className="inline-flex items-center outline outline-offset-2 outline-1 outline-blue-400 border-0 py-1 px-3 focus:outline-none hover:outline-blue-900 hover:outline-2 rounded text-base mt-4 md:mt-0 " style={{ width: '100px' }}> Menu

        </button>
      </nav>
    )
  }

  function drawerNavigation() {
    return (
      <nav
        className={isOpenDrawer ? 'navbar-open navbar w-64 absolute overflow-x-scroll bg-gray-700 top-0 h-screen' : 'navbar-close navbar w-64 absolute overflow-x-scroll bg-gray-700 top-0 h-screen'}
      >
        <div class="flex pr-2 justify-end">
          <button onClick={() => setIsOpenDrawer(false)} class="p-2 text-white text-xl font-bold">&#9747;</button>
        </div>
        <h1 class="text-xl text-center font-bold pt-5">Menu</h1>
        <ul class="list-none text-white text-center">
          <li class="my-8">
            <a href="#"></a>Teams
          </li>
          <li class="my-8">
            <a href="#"></a>Projects
          </li>
          <li class="my-8">
            <a href="#"></a>Favourites
          </li>
          <li class="my-8">
            <a href="#"></a>Notifications
          </li>
          <li class="my-8">
            <a href="#"></a>Members
          </li>
        </ul>
      </nav>
    )
  }

  return (
    <header className={offset == 0 ? 'header text-gray-600 body-font fix-header' : 'header fix-header text-gray-600 body-font fix-header'} >
      {drawerNavigation()}
      {isLargeScreen() ? showHeaderNormal() : showHeaderSmall()}
    </header>

  )
}
