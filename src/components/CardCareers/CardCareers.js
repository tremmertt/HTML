import React from 'react'

export default function CardCareers() {
  return (
    <div>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3">
        {/*Card 1*/}
        <div className="rounded overflow-hidden shadow-lg">
            <img className="h-60" src={require('../../img/Careers/lobby-statue-small.jpg')} alt="lobby-statue" />
            <div className="px-6 py-4 text-left  bg-slate-800">
                <div className="font-bold text-white text-xl mb-2">Lorem ipsum dolor</div>
                <p className="text-white text-base"> /Learn more </p>
            </div>
        </div>
  {/*Card 2*/}
  <div className="rounded overflow-hidden shadow-lg">
    <img className="h-60" src={require('../../img/Careers/5-tips-for-a-successful-remote-interview.png')} alt="lobby-statue" />
    <div className="px-6 py-4 text-left  bg-slate-800">
      <div className="font-bold text-white text-xl mb-2">Lorem ipsum dolor</div>
      <p className="text-white text-base">
        /Learn more
      </p>
    </div>
    
  </div>
  {/*Card 3*/}
  <div className="rounded overflow-hidden shadow-lg">
    <img className="h-60" src={require('../../img/Careers/AdobeStock.jpeg')} alt="" />
    <div className="px-6 py-4 text-left  bg-slate-800">
      <div className="font-bold text-white text-xl mb-2">Lorem ipsum dolor</div>
      <p className="text-white text-base">
        /Learn more
      </p>
    </div>
    
  </div>
  
  {/*Card 4*/}
  <div className="rounded overflow-hidden shadow-lg">
    <img className="h-60" src={require('../../img/Careers/social-impact.jpg')} alt="" />
    <div className="px-6 py-4 text-left  bg-slate-800">
      <div className="font-bold text-white text-xl mb-2">Lorem ipsum dolor</div>
      <p className="text-white text-base">
        /Learn more
      </p>
    </div>
  </div>
</div>
    <div>
    <div className='flex justify-center mb-10'>
        <div className='w-auto'>
            <img src={require('../../img/Careers/riot-games-tech-summit-2017-272.jpg')} alt='' />
        </div>
    </div>
    <div className='bg-gray-300 text-start text-white'>
          <h3 className='font-mono text-xl font-extrabold'> University Programs </h3>
          <button className='outline outline-offset-1 outline-white rounded-lg w-32 m-3 p-2'> / Learn More </button>
    </div>
    </div>
</div>
  )
}
