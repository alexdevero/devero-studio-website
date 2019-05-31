import * as React from 'react'
import Head from 'next/head'
// import Link from 'next/link'

// Import utils
import { initGA, logPageView } from '../utils/analytics'

// Import components
import { Contact } from './../components/contact'
// import { Faq } from './../components/faq'
import { Footer } from './../components/footer'
import { Hero } from './../components/hero'
// import { Partners } from './../components/partners'
import { Pitch } from './../components/pitch'
import { Services } from './../components/services'
import { Stack } from './../components/stack'
import { Where } from '../components/where'
import { Works } from '../components/works'

// Import styles
import './../styles/styles.scss'


export default class extends React.Component {
  componentDidMount() {
    if (!window!.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }

    logPageView()
  }

  render() {
    return(
      <div>
        <Head>
          <title>Devero Studio</title>

          <meta charSet="utf-8" />

          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900" rel="stylesheet" />

          <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap&subset=latin-ext" rel="stylesheet" />

          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=latin-ext" rel="stylesheet" />

          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap&subset=latin-ext" rel="stylesheet" />

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
        </Head>

        {/* <Link href='/about'>
          <a>About</a>
        </Link> */}

        <Hero />

        <Pitch />

        <Works />

        <Services />

        <Stack />

        {/* <Partners /> */}

        <Where />

        {/* <Faq /> */}

        <Contact />

        <Footer />
      </div>
    )
  }
}
