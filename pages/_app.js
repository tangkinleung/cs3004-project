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
  if(acc[0]=="0xB582836AcA8f28994F5Fafd35C3ED0D9354bfC1b"){
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
            <Link href="/create-nft">
              <a className="mr-6 text-white">
                Sell Snkrs
              </a>
            </Link>
            <Link href="/my-nfts">
              <a className="mr-6 text-white">
                My Snkrs
              </a>
            </Link>
            <Link href="/dashboard">
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
            <Link href="/my-nfts">
              <a className="mr-6 text-white">
                My Snkrs
              </a>
            </Link>
            <Link href="/dashboard">
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