import Image from 'next/image'
import React from 'react'
import './style.css'
import { motion } from "framer-motion";

function Home() {
  return (
    <div className='w-screen h-screen flex p-3 overflow-hidden items-center justify-evenly bg-white'>
      <motion.div whileInView={{x:[0,60]}}
    transition={{duration:0.5, type:"tween"}} className='mt-[6em] img'>
        <Image src='/home.gif' alt="/logo.jpeg" width={54} height={44} className='nav -Z-1'/>
      </motion.div>

      <motion.div whileInView={{x:[60,0]}}
    transition={{duration:0.5, type:"tween"}}className='mt-[8em]  text-right p-3'>
        <div className='text-violet-950 font-mono font-bold tracking-widest text-2xl p-5'>
            <h1>Hi,I am <span className='text-3xl underline'>Rahul Kumar</span></h1>

            <div className='mt-3 text-violet-950 font-sans font-bold text-2xl'>  3rd year student</div>

            <div className='mt-3 text-violet-950 font-sans font-bold text-2xl'>A FULL STACK DEVELOPER</div>

            <div className='mt-3 text-violet-950 font-sans font-bold text-2xl'>  Enter in the field of Blockchain</div>
            
            <div className='mt-3 text-violet-950 font-sans font-bold text-2xl'>Eager to learn new Tech</div>

            <div className='flex items-center
            justify-evenly'>
                <div className='mt-[4em] bg-violet-300 p-5 rounded-lg text-violet-950 font-mono font-bold text-right text-sm'>
                    Backend developer
                </div>

                <div className='mt-[4em] bg-cyan-300 p-5 rounded-lg text-cyan-950 font-mono font-bold text-right text-sm'>
                    web3 developer
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home
