"use client"
import Login from './login/page'
import { useState,useEffect } from 'react'
import Connected from './Connected/page'
import { useStateValue } from '@/stateProvider'

export default function Home() {
  const [{providers},dispatch]=useStateValue();

  useEffect(()=>{
    if(typeof window !== 'undefined'){
      if(window.ethereum){
        window.ethereum.on('accountsChanged', handleAccountChange);
      }
    }

    return()=>{
      if(typeof window !== 'undefined'){
        if(window.ethereum){
          window.ethereum.removeListener('accountsChanged', handleAccountChange);
        }
      }
    }
  
  })

  function handleAccountChange(accounts,account){
    if(accounts.length>0 && account!==accounts[0]){
      setWalletAddress(accounts[0]);
      setIsConnected(true);
    }else{
      setWalletAddress('');
      setIsConnected(false);
    }
  }

  const [walletAddress,setWalletAddress] = useState('');
  const [isConnected,setIsConnected] = useState(false);

  let  provider=typeof window !== 'undefined' && window.ethereum;

  async function connectToMetaMask(){
    try{
      if(!provider){
        alert('please install metamask');
        return;
      }

      const accounts = await provider.request({ method: 'eth_requestAccounts' });

      if(accounts.length){
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      }

      dispatch({
        type:'SET_PROVIDER',
        providers:provider
      })  
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      {isConnected? <Connected account={walletAddress} provider={provider}/>:
      <Login connectWallet={connectToMetaMask} />}
    </div>
  )
}
