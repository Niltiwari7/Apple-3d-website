import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function GsapText() {
  useGSAP(() => {
    gsap.to('#text', {
      ease:'power1.inOut',
      opacity:1,
      y:0,
    })
  }, [])

  return (
    <div className='text-blue-400 text-4xl' id='text'>GsapText</div>
  )
}
