/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { useEffect, useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  const [acc, setAcc] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    getAccount()
  }, [])
  async function getAccount() {
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const accounts = await provider.listAccounts()
    setAcc(accounts)
    setLoadingState('loaded')
  }
  if(acc[0]=="0x94e4eBDF880c7eaa72346DbF4Fb33d9BE85f022F"){
    return (
      <div>
        <nav className="border-b p-6 bg-purple-500">
          <p className="text-4xl font-bold text-white">SnkrChain   
          
          <img src = "snkr.png" class ="inline-block h-12 w-12 m-3"></img></p> 

          <div className="flex mt-4">
            <Link href="/">
              <a className="mr-4 text-white">
                Store
              </a>
            </Link>
            <Link href="/create-snkrs">
              <a className="mr-6 text-white">
                Sell Snkrs
              </a>
            </Link>
            <Link href="/my-snkrs">
              <a className="mr-6 text-white">
                My Snkrs
              </a>
            </Link>
            <Link href="/listed-snkrs">
              <a className="mr-6 text-white">
                Listed Items
              </a>
            </Link>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
    ) 
  }else{
    return (
      <div>
        <nav className="border-b p-6 bg-purple-500">
          <p className="text-4xl font-bold text-white">SnkrChain</p>
          <div className="flex mt-4">
            <Link href="/">
              <a className="mr-4 text-white">
                Store
              </a>
            </Link>
            <Link href="/my-snkrs">
              <a className="mr-6 text-white">
                My Snkrs
              </a>
            </Link>
            <Link href="/listed-snkrs">
              <a className="mr-6 text-white">
                Listed Items
              </a>
            </Link>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
    ) 
  }
  } 
