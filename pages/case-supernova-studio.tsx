import * as React from 'react'
import Head from 'next/head'

// Import utils
import { initGA, logPageView } from '../utils/analytics'

// Import components
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { QuoteModal } from '../components/quote-modal'

const CaseSupernova = () => {
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
        <title>Supernova Studio website case study | Devero Studio</title>
      </Head>

      <Header isHomepage={false} handleQuoteClick={handleQuoteClick} />

      <div className="case-study-hero">
        <img className="case-study-hero-image img-responsive" src="./../static/images/showcase-thumbnails/snapshot-top-supernova.png" alt="Supernova Studio website snapshot" />
      </div>

      <div className="container page-content pb-6">
        <h1 className="h2 mt-0">Supernova Studio website case study</h1>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Overview</h2>
          </div>

          <div className="col-sm-8">
            <p>Modern and fast website for Supernova Studio. Supernova Studio allows designers and developers to build, prototype, polish and deploy their mobile apps within minutes.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Our role</h2>
          </div>

          <div className="col-sm-8">
            <p>We were hired to build a pixel-perfect and responsive website. At the beginning of the project we received almost complete design from Supernova Studio CEO. Our task was taking the design and turning it into code. We were in contact with the designer from Supernova Studio on a daily basis and continually worked together on improving the design, and adding new pages.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Project specifications</h2>
          </div>

          <div className="col-sm-8">
            <ul className="list--unstyled">
              <li>Deadline: 3 months (completed in 2 months)</li>

              <li>Number of pages: 21</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Goals and objectives</h2>
          </div>

          <div className="col-sm-8">
            <ul className="list--unstyled">
              <li>&ndash; Build responsive pixel-perfect website</li>

              <li>&ndash; Create site architecture and navigation for easy browsing and frictionless experience</li>

              <li>&ndash; Implement best practices to achieve maximum performance and accessibility</li>

              <li>&ndash; Use extensive testing to ensure cross-browser compatibility</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Tech stack</h2>
          </div>

          <div className="col-sm-8">
            <ul className="list--unstyled">
              <li>Front-end: HTML, CSS, PostCSS, JavaScript, React.js (no frameworks)</li>

              <li>Back-end: Firebase</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">The Process</h2>
          </div>

          <div className="col-sm-8">
            <p>We started this project by building the React app for the website from scratch. We didn't use any framework. The whole website was built as a system of reusable components. We were usually working on page at the time. When page was finished we went through extensive testing and reviews with Supernova Studio CEO and designer. Only when the page was accepted by all stakeholders we started working on another one.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">The Solution</h2>
          </div>

          <div className="col-sm-8">
            <p>We've built the website as a custom React app. We followed the best practices for asset optimization to ensure website will load fast, even on slow bandwidth and devices. The layout of every page has been optimized and extensively tested. This helped us create great experience on all devices, from mobile phones and tablets, to small and large desktops and even TVs. Thanks to our component-based approach, the website can be continually extended and upgraded.</p>
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
                  <span className="circle__label">94%</span>
                </div>

                <h3 className="h5 text--center mt-3">Performance</h3>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="circle circle--centered circle--green">
                  <span className="circle__label">97%</span>
                </div>

                <h3 className="h5 text--center mt-3">Accessibility</h3>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="circle circle--centered circle--green">
                  <span className="circle__label">93%</span>
                </div>

                <h3 className="h5 text--center mt-3">Best practices</h3>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="circle circle--centered circle--green">
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

        <a className="link--black-red" href="https://supernova.io" target="_blank" rel="noopener noreferrer">Visit the website <span className="fas fa-external-link-alt text--smaller" /></a>
      </div>

      <Footer />

      {isQuoteModalShown && <QuoteModal handleQuoteClick={handleQuoteClick} />}
    </div>
  )
}

export default CaseSupernova
