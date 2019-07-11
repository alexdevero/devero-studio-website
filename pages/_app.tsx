import * as React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import NextSeo from 'next-seo'

import SEOConfig from './../next-seo.config'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <NextSeo config={SEOConfig} />

        <Head>
          {/* <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900" rel="stylesheet" /> */}

          <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap&subset=latin-ext" rel="stylesheet" />

          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=latin-ext" rel="stylesheet" />

          {/* <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap&subset=latin-ext" rel="stylesheet" /> */}

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
        </Head>

        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
