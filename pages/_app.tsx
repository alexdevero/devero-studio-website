import * as React from 'react'
import App, { Container } from 'next/app'
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

        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
