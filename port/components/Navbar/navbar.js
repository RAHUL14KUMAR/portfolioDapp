"use client"
import React,{useState} from 'react'
import './style.css'
import Image from 'next/image'
import ModalBox from './ModalBox'

function navbar() {
    const [modal,setModal]=useState(false);
  return (
    <div className='pos backdrop-blur-sm'>
      <div className='bg-blue-200 p-3 flex items-center justify-between'>
        <div className='w-20 h-20 border-4 border-violet-950 rounded-full flex items-center justify-center overflow-hidden' onClick={()=>setModal(!modal)} >
            <Image src='/logo.jpeg' alt="" width={80} height={80} className='nav' />
        </div>
        
        <div className='p-2 flex overflow-hidden'>
            <div className='mx-4 p-2 text-xl font-mono text-voilet-950 hover:border-b-4 hover:border-b-violet-950 font-bold tracking-widest'>Home</div>
            <div className='mx-4 p-2 text-xl font-mono text-voilet-950 hover:border-b-4 hover:border-b-violet-950 font-bold tracking-widest'>Projects</div>
            <div className='mx-4 p-2 text-xl font-mono text-voilet-950 hover:border-b-4 hover:border-b-violet-950 font-bold tracking-widest'>Educations</div>
        </div>
      </div>

        {
        modal&& <ModalBox/>
        }
    </div>
  )
}

export default navbar
