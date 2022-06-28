import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Router, useRouter } from 'next/router'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  return <ChakraProvider> 
            <Component key={router.asPath} {...pageProps} />
         </ChakraProvider>
}

export default MyApp
