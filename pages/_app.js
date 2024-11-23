import '../styles/globals.css'

import Layout from './layout'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Head>
          <title>Rizky Ardiansyah || Personal Portfolio</title>
                  <meta property="og:title" content="Personal Portfolio of Rizky Ardiansyah" />
                  <meta property="og:type" content="article" />
                  <meta
                      property="og:description"
                      content="Official personal website, 💬 Instagram: @rz._.ar | 🦜Twitter: @onchainmfer"
                  />
                  <meta 
                      name="keywords"
                      content="NFT,FlappyOwl NFT,Ethereum,Crypto,Opensea,Flappyowl,Onchain Nft"
                  />
                  <meta property="og:image" content="https://www.rizkyoktan.my.id/readme-images/portfolio.png" />
                  <meta property="og:url" content="https://www.rizkyoktan.my.id" />
                  <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
