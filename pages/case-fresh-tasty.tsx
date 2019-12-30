import * as React from 'react'
import Head from 'next/head'

// Import utils
import { initGA, logPageView } from '../utils/analytics'

// Import components
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { QuoteModal } from '../components/quote-modal'

const CaseSvaca = () => {
  const [isQuoteModalShown, setIsQuoteModalShown] = React.useState(false)

  React.useEffect(() => {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true
    }

    logPageView()
  })

  const handleQuoteClick = () => {
    setIsQuoteModalShown(!isQuoteModalShown)
  }

  return (
    <div className={isQuoteModalShown ? 'page-overlay' : ''}>
      <Head>
        <title>Fresh & Tasty website case study | Devero Studio</title>
      </Head>

      <Header isHomepage={false} handleQuoteClick={handleQuoteClick} />

      <div className="case-study-hero">
        <img className="case-study-hero-image img-responsive" src="./../static/images/showcase-thumbnails/snapshot-top-fresh-and-tasty.png" alt="Fresh & Tasty website snapshot" />
      </div>

      <div className="container page-content pb-6">
        <h1 className="h2 mt-0">Fresh & Tasty website case study</h1>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Overview</h2>
          </div>

          <div className="col-sm-8">
            <p>Fresh & Tasty is a gastronomy startup, based in Czech Republic, that aims to improve experience and food quality in corporate and school canteens. Fresh & Tasty does this by preparing and delivering healthy meals to companies and schools. Fresh & Tasty also built a couple of its own canteens that are opened for public.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Our role</h2>
          </div>

          <div className="col-sm-8">
            <p>We were hired to build a pixel-perfect and responsive website that covers the whole business. In the beginning, we received complete design for all pages we were tasked to code. During the work, we made some adjustments and improvements to the design to ensure the best experience. We discussed all these changes with all stakeholders before we realized them.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Project specifications</h2>
          </div>

          <div className="col-sm-8">
            <ul className="list--unstyled">
              <li>Deadline: 4 months (completed in 2.85 months)</li>

              <li>Number of pages: 29</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Goals and objectives</h2>
          </div>

          <div className="col-sm-8">
            <ul className="list--unstyled">
              <li>&ndash; Create site architecture and navigation for easy browsing and frictionless experience</li>

              <li>&ndash; Build responsive pixel-perfect website</li>

              <li>&ndash; Use extensive testing to ensure cross-browser compatibility</li>

              <li>&ndash; Implement best practices to achieve maximum performance and accessibility</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Tech stack</h2>
          </div>

          <div className="col-sm-8">
            <ul className="list--unstyled">
              <li>Front-end: HTML, CSS, JavaScript</li>

              <li>Back-end: PHP</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">The Process</h2>
          </div>

          <div className="col-sm-8">
            <p>This project was built with HTML, CSS and JavaScript, and PHP, mainly for forms. We didn't use any front-end or back-end framework. All pages were coded as static, using latest HTML5 and CSS3 specifications. For JavaScript, we used, back then, the latest ES6. The whole website was built as a system of components, each of these components being re-usable. This made it easier to gradually extend the website to its final size.</p>

            <p className="mt-3">We were always working on page at the time. When page was finished we went through extensive testing and reviews with Fresh & Tasty CEO. Only when any potential issues were solved the page was accepted and we started working on another page.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">The Solution</h2>
          </div>

          <div className="col-sm-8">
            <p>We've built the website from scratch with HTML, CSS and JavaScript. We didn't use any front-end or back-end framework. During the work, we followed the best practices for asset optimization to make sure website will load fast, even on low-end devices and slow internet connection. The website has been thoroughly tested on a wide range of devices, from mobile phones and tablets, to small and large desktops to ensure maximum compatibility.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Final score</h2>
          </div>

          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="circle circle--centered circle--green">
                  <span className="circle__label">89%</span>
                </div>

                <h3 className="h5 text--center mt-3">Performance</h3>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="circle circle--centered circle--green">
                  <span className="circle__label">81%</span>
                </div>

                <h3 className="h5 text--center mt-3">Accessibility</h3>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="circle circle--centered circle--green">
                  <span className="circle__label">88%</span>
                </div>

                <h3 className="h5 text--center mt-3">Best practices</h3>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="circle circle--centered circle--orange">
                  <span className="circle__label">92%</span>
                </div>

                <h3 className="h5 text--center mt-3">SEO</h3>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="circle circle--centered circle--black">
                  <span className="circle__label">PWA</span>
                </div>

                <h3 className="h5 text--center mt-3">Progressive Web App (PWA)</h3>
              </div>
            </div>
          </div>
        </div>

        <a className="link--black-red" href="https://www.freshandtasty.cz/" target="_blank" rel="noopener noreferrer">Visit the website <span className="fas fa-external-link-alt text--smaller" /></a>
      </div>

      <Footer />

      {isQuoteModalShown && <QuoteModal handleQuoteClick={handleQuoteClick} />}
    </div>
  )
}

export default CaseSvaca
