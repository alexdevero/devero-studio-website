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
        <div>
          <img src="" alt="" />
        </div>

        <h1 className="h3 heading--small">Supernova website case study</h1>

        <div className="row">
          <div className="col-sm-4 col-md-3">
            <h2 className="h4 heading-small">Overview</h2>
          </div>

          <div className="col-sm-8 col-md-9">
            <p>Modern and fast website for Supernova Studio app. Supernova Studio app allows designers and developers to build, prototype, polish and deploy their mobile apps within minutes.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-3">
            <h2 className="h4 heading-small">Our role</h2>
          </div>

          <div className="col-sm-8 col-md-9">
            <p></p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-3">
            <h2 className="h4 heading-small">Objectives</h2>
          </div>

          <div className="col-sm-8 col-md-9">
            <ul>
              <li>Build responsive pixel-perfect website</li>

              <li>Create site architecture and navigation for easy browsing and frictionless experience</li>

              <li>Implement best practices to achieve maximum performance and accessibility</li>

              <li>Use extensive testing to ensure cross-browser compatibility</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-3">
            <h2 className="h4 heading-small">Solution</h2>
          </div>

          <div className="col-sm-8 col-md-9">
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
