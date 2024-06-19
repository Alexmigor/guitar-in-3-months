import React from 'react'
import video from '../Video_480p.mp4'
export default function VideoPlaeyr() {
    return (
        <div className='self-center w-3/5 xl:w-full '>
       
        <video className=' '
            src={video}
            controls
            muted
            autoPlay
            loop
        />
        </div>
    )
}
