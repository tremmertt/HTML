import React from 'react'
import './LastestNews.css'

export default function LastestNews() {

  function getPictures() {
    const rows = []
    const images = [
      '../../img/News/new2.png',
      '../../img/News/new3.png',
      '../../img/News/new4.jpg',
      '../../img/News/new5.png',
      '../../img/News/new6.png',
      '../../img/News/new7.jpg',
      '../../img/News/new8.png',
    ]
    for (const image of images) {
      const name = image.split('/')[image.split('/').length - 1]
      rows.push(
        <div className="text-left py-3">
          <div key={name} className="col-span-1 shadow-xl rounded " style={{ width: '350px', height: '180px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

          <p className="mt-2">FEB 23, 2022 <a href="#">Go to</a></p>
          <h1 className="text-2xl">Pi test 2</h1>
        </div>
      )
    }
    return rows
  }

  return (
    <div className='container-fluid py-16 mx-auto'>
      <div className='grid justify-items-stretch'>
        <h1 className='text-6xl mr-6 text-blue-400 font-mono font-extrabold'> LATEST NEWS </h1>
        <div className='bg-blue-400 justify-self-center rounded-lg mt-8' style={{ width: '300px', height: '10px' }}></div>
      </div>

      <div className='px-24 m-10 grid grid-cols-3'>
        <div className='rounded-lg shadow-2xl col-span-2 justify-center' style={{ width: '550px' }}>
          <img src={require('../../img/News/new1.png')} alt="" />
        </div>
        <div className='col-span-1 text-left ml-3 leading-loose'>
          <h1 className='text-xl'> FEB 23, 2022</h1>
          <p className='text-lg'> pitest 5 </p>
          <p className='text-sm'> pitest 5</p>
        </div>
        <div className='col-span-3 grid grid-cols-3  mt-10'>
          {getPictures()}
        </div>




      </div>

    </div>
  )
}
