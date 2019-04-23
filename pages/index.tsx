import * as React from 'react'
import Head from 'next/head'
// import Link from 'next/link'

// Import components
import { Hero } from './../components/hero'

// Import styles
import './../styles/styles.scss'


export default () => (
  <div>
    <Head>
      <title>Devevero Studio</title>

      <meta charSet="utf-8" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link href="https://fonts.googleapis.com/css?family=Merriweather:300,400,700,900" rel="stylesheet" />

      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900" rel="stylesheet" />
    </Head>
    {/* <Link href='/about'>
      <a>About</a>
    </Link> */}
    <Hero />
  </div>
)
