/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
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
  }

  export default MyApp
