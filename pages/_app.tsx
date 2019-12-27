import * as React from 'react'
import App from 'next/app'
import Head from 'next/head'
import NextSeo from 'next-seo'

import SEOConfig from './../next-seo.config'

// Import styles
import './../styles/styles.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <NextSeo config={SEOConfig} />

        <Head>
          {/* <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900" rel="stylesheet" /> */}

          <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap&subset=latin-ext" rel="stylesheet" />

          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=latin-ext" rel="stylesheet" />

          {/* <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap&subset=latin-ext" rel="stylesheet" /> */}

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />

          {/* Hotjar Tracking Code for https://studio.devero.io/ */}
          {/*<script>
            {`
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:1435744,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </script>*/}
        </Head>

        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
