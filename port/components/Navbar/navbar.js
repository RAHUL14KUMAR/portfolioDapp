"use client"
import React,{useState,useEffect} from 'react'
import './style.css'
import Image from 'next/image'
import ModalBox from './ModalBox'
import { useRouter } from 'next/navigation'
import { useStateValue } from '@/stateProvider'

function navbar(props) {
    const [modal,setModal]=useState(false);
    const router=useRouter();
    const [{providers,accounts},dispatch]=useStateValue();

    useEffect(()=>{
      console.log("navbar",accounts);
      console.log("navbar",providers);
    },[])
    
  return (
    <div className='pos backdrop-blur-sm'>
      <div className='bg-blue-200 p-3 flex items-center justify-between'>
        <div className='w-20 h-20 border-4 border-violet-950 rounded-full flex items-center justify-center overflow-hidden' onClick={()=>setModal(!modal)} >
            <Image src='/logo.jpeg' alt="" width={80} height={80} className='nav' />
        </div>
        
        <div className='p-2 flex overflow-hidden'>
            <div className='mx-4 p-2 text-xl font-mono text-voilet-950 hover:border-b-4 hover:border-b-violet-950 font-bold tracking-widest' onClick={()=>router.push('/')}>Home</div>
            <div className='mx-4 p-2 text-xl font-mono text-voilet-950 hover:border-b-4 hover:border-b-violet-950 font-bold tracking-widest' onClick={()=>router.push('/Projects')}>Projects</div>
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
