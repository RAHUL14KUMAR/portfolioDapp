"use client"
import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Navbar/navbar'
import { MdPortrait } from "react-icons/md";
import {BsImage, BsLink, BsPencil} from 'react-icons/bs'
import {useStateValue} from '../../stateProvider'
import Web3 from 'web3';
import { Abi,address } from '@/components/contract/Abi';

function page() {
    const [{providers,accounts,contracts},dispatch]=useStateValue();

    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [link,setLink]=useState('');
    const [image,setImage]=useState('');

    const addProject=async()=>{

        const res=await insertProject();
        console.log(res);

    }

    async function getContract(){
        const web3 = new Web3(providers);
        return new web3.eth.Contract(Abi,address);
    }
    
      async function get(){
        const contract=await getContract();
        return contract;
    }

    console.log("accounts",accounts);

    async function insertProject(){
        const contract=await get();
        // console.log("object",contract.methods);
        const res=await contract.methods.insertProjeect(name,description,link,image).send({from:accounts});
        
        console.log("from insert project",res);
    }

    console.log("global",contracts)

  return (
    <div className='w-screen h-screen overflow-hidden'>
        <Navbar/> 
        <div className=' flex justify-center items-center'>
            <div className='w-1/2 h-full p-4 mt-[8em] flex flex-col justify-center text-centern items-center'> 
                <h1 className='text-black font-mono text-4xl font-bold tracking-widest border-b-4 border-violet-950 p-2'>ADD PROJECTS</h1>
                <div className='w-full h-96 p-4 border-4 border-violet-950 rounded-3xl mt-4'>
                    <div className='grid grid-cols md:grid-cols-2 gap-4 text-center'>
                        <div className='border-r-none m-5 flex rounded-lg border-l-4 border-l-violet-950 bg-blue-100 p-3 text-justify'>
                            <div className="h-16 w-14 bg-blue-300 flex items-center justify-center">
                                <MdPortrait className="text-4xl text-blue-600"/>
                            </div>
                            <form className="flex-col">
                            <label className="m-2 font-bold text-blue-800" htmlFor="NAME">PROJECT NAME</label>
                            <div><input type="text" placeholder="enter your project name" className="mx-2 w-fit bg-blue-100 p-2 font-mono text-black placeholder-blue-500 focus:outline-none" id="NAME" name={name} value={name} onChange={(e)=>setName(e.target.value)}/></div>
                            </form>
                        </div>
                        <div className='border-r-none m-5 flex rounded-lg border-l-4 border-l-violet-950 bg-blue-100 p-3 text-justify'>
                            <div className="h-16 w-14 bg-blue-300 flex items-center justify-center">
                                <BsPencil  className="text-4xl text-blue-600"/>
                            </div>
                            <form className="flex-col">
                            <label className="m-2 font-bold text-blue-800" htmlFor="DESCRIPTION">PROJECT DEESCRIPTION</label>
                            <div><input type="text" placeholder="project description" className="mx-2 w-fit bg-blue-100 p-2 font-mono text-black placeholder-blue-500 focus:outline-none" id="DESCRIPTION" name={description} value={description} onChange={(e)=>setDescription(e.target.value)}/></div>
                            </form>
                        </div>
                        <div className='border-r-none m-5 flex rounded-lg border-l-4 border-l-violet-950 bg-blue-100 p-3 text-justify'>
                            <div className="h-16 w-14 bg-blue-300 flex items-center justify-center">
                                <BsLink  className="text-4xl text-blue-600"/>
                            </div>
                            <form className="flex-col">
                            <label className="m-2 font-bold text-blue-800" htmlFor="LINK">PROJECT LINK</label>
                            <div><input type="text" placeholder="project link" className="mx-2 w-fit bg-blue-100 p-2 font-mono text-black placeholder-blue-500 focus:outline-none" id="LINK" name={link} value={link} onChange={(e)=>setLink(e.target.value)}/></div>
                            </form>
                        </div>
                        <div className='border-r-none m-5 flex rounded-lg border-l-4 border-l-violet-950 bg-blue-100 p-3 text-justify'>
                            <div className="h-16 w-14 bg-blue-300 flex items-center justify-center">
                                <BsImage  className="text-4xl text-blue-600"/>
                            </div>
                            <form className="flex-col">
                            <label className="m-2 font-bold text-blue-800" htmlFor="IMAGE">PROJECT IMAGE</label>
                            <div><input type="text" placeholder="project description" className="mx-2 w-fit bg-blue-100 p-2 font-mono text-black placeholder-blue-500 focus:outline-none" id="IMAGE" name={image} value={image} onChange={(e)=>setImage(e.target.value)}/></div>
                            </form>
                        </div>
                        <div className='ml-auto -mb-5'>
                            <button className='w-full h-full p-2 border-4 border-violet-950 rounded-xl mt-4 bg-violet-950 text-white font-mono font-bold tracking-widest -mb-[5em]' onClick={addProject}>ADD +</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
