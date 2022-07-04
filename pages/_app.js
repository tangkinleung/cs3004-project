/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  onInit()

  if(acctAddress == "0x94e4ebdf880c7eaa72346dbf4fb33d9be85f022f"){
    console.log("Admin Account detected");
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
  } else{
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

let acctAddress;
var app = MyApp;
var test = 1;

async function onInit() {
  await window.ethereum.enable();
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  console.log(account);
  acctAddress = account.toString();
   window.ethereum.on('accountsChanged', function (accounts) {
      // Time to reload your interface with accounts[0]!
      console.log(accounts[0])
     });
     return account
    
}

onInit()
export default app