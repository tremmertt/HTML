import React from 'react'
import './LastestNews.css'

export default function LastestNews() {
  return (
    <div className='container-fluid py-16 mx-auto'>
        <div className='grid justify-items-stretch'>
            <h1 className='text-6xl mr-6 text-blue-400 font-mono font-extrabold'> LATEST NEWS </h1>
            <div className='bg-blue-400 justify-self-center rounded-lg mt-8' style={{ width:'300px' , height:'10px' }}></div>
        </div>
        
        <div className='px-24 m-10 grid grid-cols-3'>
          <div className='rounded-lg shadow-2xl col-span-2 justify-center' style={{width:'550px'}}>
            <img src={require('../../img/News/new1.png')} alt="" />
          </div>
          <div className='col-span-1 text-left ml-3 leading-loose'>
            <h1 className='text-xl'> FEB 23, 2022</h1>
            <p className='text-lg'> pitest 5 </p>
            <p className='text-sm'> pitest 5</p>
          </div>
          <div className='news grid grid-cols-3 gap-4 mt-10'>
            <div>
                <img src={require('../../img/News/new2.png')} alt="" />
            </div>
            <div >
                <img src={require('../../img/News/new3.png')} alt="" />
            </div>
            <div >
                <img src={require('../../img/News/new4.jpg')} alt="" />
            </div>
            <div >
                <img src={require('../../img/News/new5.png')} alt="" />
            </div>
            <div >
                <img src={require('../../img/News/new6.png')} alt="" />
            </div>            
            <div >
                <img src={require('../../img/News/new7.jpg')} alt="" />
            </div>
            <div >
                <img src={require('../../img/News/new8.png')} alt="" />
            </div>
          </div>


        

        </div>
        
    </div>
  )
}
