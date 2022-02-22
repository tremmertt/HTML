import React from 'react'
import ReactPlayer from 'react-player'

export default function Carousel() {
  return (
    <div className='container-fluid videoPlay'>
        <ReactPlayer url="https://www.glassegg.com/wp-content/themes/glassegg/assets/images/ge-intro.mp4" width={'100%'} height={'100%'} fluid='true' pip={true}  playing={true} muted={true} loop={true} />
    </div>
  )
}
