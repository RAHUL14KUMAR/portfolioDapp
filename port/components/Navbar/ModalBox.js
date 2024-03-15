import React from 'react'
import { motion } from "framer-motion";

function ModalBox() {
  return (
    <motion.div className='modal bg-blue-200 w-64 h-34 mt-5 z-1 rounded-lg' whileInView={{x:[0,40]}}
    transition={{duration:0.5, type:"tween"}}>
      <p>I am <span className='font-bold text-blue-600'>Rahul Kumar</span></p>
      <p>A <span className='font-bold text-blue-600'> Backend Developer.</span></p>
      <p>Enter in the field of</p>
      <p className='font-bold text-blue-600'>Blockchain</p>
      <p>open to explore <span className='font-bold text-blue-600'>new tools</span></p>
    </motion.div>
  )
}

export default ModalBox
