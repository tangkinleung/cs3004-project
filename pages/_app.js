/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'
import {
  marketplaceAddress
} from '../config'

function MyApp({ Component, pageProps }) {
  async function myFunction() {
    
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    console.log(signer)

    const marketplaceContract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)
    const data = await marketplaceContract.checkAdmin()
    console.log(data)
    // return "Hello";
  }
  // myFunction()
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
}

export default MyApp