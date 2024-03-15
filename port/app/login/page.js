import React from 'react'

function page(prop) {
  return (
    <div className='bg-white w-screen h-screen flex flex-col justify-center items-center'>
        <div className='text-center font-bold tracking-widest font-mono text-3xl text-violet-900'>
            <h1>WELCOME TO MY PORTFOLIO</h1>
        </div>  
        <button className='mt-3 p-3 bg-violet-200 hover:bg-violet-900 text-violet-900 hover:text-white font-bold tracking-widest rounded-sm' onClick={prop.connectWallet}>
            Login To Metamask
        </button>
    </div>
  )
}

export default page
