import * as React from 'react'

import { Footer } from './../components/footer'
import { Header } from './../components/header'
import { QuoteModal } from './../components/quote-modal'

const CaseSupernova = () => {
  const [isQuoteModalShown, setIsQuoteModalShown] = React.useState(false)

  const handleQuoteClick = () => {
    setIsQuoteModalShown(!isQuoteModalShown)
  }

  return (
    <div className={isQuoteModalShown ? 'page-overlay' : ''}>
      <Header isHomepage={false} handleQuoteClick={handleQuoteClick} />

      <div className="container page-content">
        <div className="case-study-hero">
          <img className="case-study-hero-image img-responsive" src="./../static/images/showcase-thumbnails/snapshot-top-supernova.png" alt="Supernova Studio" />
        </div>

        <h1 className="h2 mt-4">Supernova Studio website case study</h1>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Overview</h2>
          </div>

          <div className="col-sm-8">
            <p>Modern and fast website for Supernova Studio app. Supernova Studio app allows designers and developers to build, prototype, polish and deploy their mobile apps within minutes.</p>
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
            <p>We started this project by building the React app for the website from scratch. We didn't use any framework. The whole website was build as a system of reusable components. We were usually working on page at the time. When page was finished we went through extensive testing and reviews with Supernova Studio CEO and designer. Only when the page was accepted by all stakeholders we started working on another one.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Solution</h2>
          </div>

          <div className="col-sm-8">
            <p>Here you can check the screens showing user journey. They feature all the flow of choice and customization of a burger as well as the screens for delivery or picking up an order.</p>
          </div>
        </div>
      </div>

      <Footer />

      {isQuoteModalShown && <QuoteModal handleQuoteClick={handleQuoteClick} />}
    </div>
  )
}

export default CaseSupernova
