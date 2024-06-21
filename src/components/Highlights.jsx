import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarosel from './VideoCarosel'

export default function Highlights() {
  useGSAP(()=>{
    gsap.to('#title',{opacity:1,y:0})
    gsap.to('.link',{opacity:1,y:0,duration:1,stagger:0.25})
  },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full  common-padding bg-zinc'>
      <div className='screen-max-width'>
         <div className='mb-12 flex justify-between '>
           <h1 id='title' className='section-heading'>Get the Highlights.</h1>
           <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>Wathe the film
              <img src={watchImg} alt="image" className='ml-2' />
            </p>

            <p className='link'>Wathe the Event
              <img src={rightImg} alt="right" className='ml-2' />
            </p>
         </div>
         </div>
        <VideoCarosel/>
      </div>
      
    </section>
  )
}
