import * as React from 'react'
import Head from 'next/head'
// import Link from 'next/link'

// Import components
import { Contact } from './../components/contact'
// import { Faq } from './../components/faq'
import { Footer } from './../components/footer'
import { Hero } from './../components/hero'
// import { Partners } from './../components/partners'
import { Services } from './../components/services'
import { Stack } from './../components/stack'
import { We } from './../components/we'

// Import styles
import './../styles/styles.scss'


export default () => (
  <div>
    <Head>
      <title>Devevero Studio</title>

      <meta charSet="utf-8" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900" rel="stylesheet" />

      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700&amp;subset=latin-ext" rel="stylesheet" />

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
    </Head>

    {/* <Link href='/about'>
      <a>About</a>
    </Link> */}

    <Hero />

    <Services />

    <Stack />

    {/* <Partners /> */}

    <We />

    {/* <Faq /> */}

    <Contact />

    <Footer />
  </div>
)
