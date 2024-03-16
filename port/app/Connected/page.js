import React,{useEffect,useState} from 'react'
import Navbar from '../../components/Navbar/navbar'
import Home from '@/components/Home/Home'
import Hero from '@/components/Hero/Hero'
import Web3 from "web3";
import { address ,Abi} from '@/components/contract/Abi';

function page(prop) {

  let cont;

  useEffect(()=>{
    get();
  },[])

  async function getContract(){
    const web3 = new Web3(prop.provider);
    return new web3.eth.Contract(Abi,address);
  }

  async function get(){
    const contract=await getContract();
    return contract;
  }
  return (
    <div>
        <Navbar contract={get}/>
        <Home/>
        {/* <Hero/> */}
    </div>
  )
}

export default page
