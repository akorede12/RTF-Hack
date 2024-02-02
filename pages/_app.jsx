import { ToastContainer } from 'react-toastify'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import '@rainbow-me/rainbowkit/styles.css'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'
import {Provider} from 'react-redux'
import { Footer, Header } from '@/components'
import { store } from '@/store'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  trustWallet,
  coinbaseWallet,
  rainbowWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { mainnet, sepolia, hardhat } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { SessionProvider } from 'next-auth/react'
require('dotenv').config()

const pegasus = {
  id: 1891,
  name: 'Pegasus Testnet',
  network: 'pegasus',
  iconUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/220px-Ethereum-icon-purple.svg.png',
  iconBackground: '#000000',
  nativeCurrency: {
    decimals: 18,
    name: 'Pegasus',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://replicator.pegasus.lightlink.io/rpc/v1'] },
    default: { http: ['https://replicator.pegasus.lightlink.io/rpc/v1'] },
  },
  blockExplorers: {
    default: { name: 'Pegasus Block Explorer', url: 'https://pegasus.lightlink.io/' },
    pegasus: { name: 'Pegasus Block Explorer', url: 'https://pegasus.lightlink.io/' },
  },
  testnet: true,
}

const { chains, publicClient } = configureChains(
  [pegasus],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }), publicProvider()]
)

const projectId = '963bc55247e84a7a06558c784100efd0'

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      coinbaseWallet({ appName: 'Coinbase', chains }),
      rainbowWallet({ projectId, chains }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const appInfo = {
  appName: 'BookingBox-TX dApp',
}

const getSiweMessageOptions = () => ({
  statement: `
  Once you're signed in, you'll be able to access all of our dApp's features.
  Thank you for partnering with BookingBox-TX!`,
})

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild || typeof window === 'undefined') {
    return null
  } else {
    return (
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider theme={darkTheme()} chains={chains} appInfo={appInfo}>
          <Provider store={store}>
            <div className="relative h-screen min-w-screen">
              <Header />
              <Component {...pageProps} />
              <div className="h-20"></div>
              <Footer />
            </div>

            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </Provider>
        </RainbowKitProvider>
      </WagmiConfig>
    )
  }
}
