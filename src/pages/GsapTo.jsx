import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


export default function GsapTo() {
    useGSAP(()=>{
      gsap.to('#blue-box',{
        x:1200,
        y:500,
        z:202,
        duration:1,
        repeat:-1 ,
        yoyo:true,
        rotation:360,
        ease:'back.in'

      })
    },[])
  return (
    <div className='mt-20'>
        <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg'></div>
    </div>
  )
}
