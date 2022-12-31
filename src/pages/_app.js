import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion'
// base css files
import 'swiper/css';
import '../styles/globals.css'
import '../styles/globals.css'
import 'overlayscrollbars/overlayscrollbars.css';

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <title>Dashboard Template</title>
      </Head>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
      
      <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath}  />
      </AnimatePresence>

      </ThemeProvider>
    </>

  )
}

