import React from 'react'
import ReactPlayer from 'react-player'

export default function CarouselCareers() {
  return (
    <div className='container-fluid videoPlay'>
      {/* <img src={require('../../img/static-frame.jpg')} alt="" /> */}
      <div>
        <ReactPlayer url="https://www.riotgames.com/darkroom/original/8a4aa4f7fcd70601d93e5ff0d7f12b0d:1b4eea445bc042f5be0de9824451ffee/nnp-for-rgcom-v3.mp4" width={'100%'} height={'100%'} fluid='true' pip={true}  playing={true} muted={true} loop={true} />
      </div>
      <div className='flex justify-center flex-grow flex-row content-center'>
        <h1 className='text-7xl font-extrabold basis-1/2'>UNLEASH PLAY</h1>
        <button className='rounded-xl bg-red-600 text-white w-40'> Work With Us </button>
      </div>
    </div>

  )
}
