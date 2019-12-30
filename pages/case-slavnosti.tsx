import * as React from 'react'
import Head from 'next/head'

// Import utils
import { initGA, logPageView } from '../utils/analytics'

// Import components
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { QuoteModal } from '../components/quote-modal'

const CaseSlavnosti = () => {
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
        <title>Slavnosti růžového vína website case study | Devero Studio</title>
      </Head>

      <Header isHomepage={false} handleQuoteClick={handleQuoteClick} />

      <div className="case-study-hero">
        <img className="case-study-hero-image img-responsive" src="./../static/images/showcase-thumbnails/snapshot-top-slavnosti-ruzoveho-vina.png" alt="Slavnosti růžového vína website snapshot" />
      </div>

      <div className="container page-content pb-6">
        <h1 className="h2 mt-0">Slavnosti růžového vína website case study</h1>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Overview</h2>
          </div>

          <div className="col-sm-8">
            <p>Slavnosti růžového vína is a gastronomy event in based in Czech Republic organized once a year. It provides a lot of high-quality food for children and adults. And, of course, wine tasting. The name of the event basically translates to "Celebrations of rose wine". The whole event is also accompanied by entertainment, events and great music.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Our role</h2>
          </div>

          <div className="col-sm-8">
            <p>We were hired to upgrade, back then the current, website for Slavnosti růžového vína. Following that, we were assigned to build a pixel-perfect and responsive website based on a new design. The first phase of the process was mainly about updating the content of the Slavnosti růžového vína website, optimization and some maintenance tasks. In the second phase, we received the design for all pages we were tasked to code and got to work.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Project specifications</h2>
          </div>

          <div className="col-sm-8">
            <ul className="list--unstyled">
              <li>Deadline: 1 month (completed in 2.3 weeks)</li>

              <li>Number of pages: 7</li>
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
            <p>Slavnosti růžového vína website was built with HTML, CSS, JavaScript and PHP. PHP was used exclusively for contact forms. There was no front-end or back-end framework involved in the process. All pages were coded as static, using latest HTML5 and CSS3 specifications. For JavaScript, we used, back then, the latest ES6.</p>

            <p className="mt-3">The whole website was built as a system of components, each of these components being re-usable. This made the whole process of building the website easier and faster. It also allowed for extending the website in the future.</p>

            <p className="mt-3">Our approach during the second phase, building new website for Slavnosti růžového vína, was about working on one page at the time. When we finished the page we went through extensive testing and reviews with Slavnosti růžového vína CEO.</p>

            <p className="mt-3">Only when Slavnosti růžového vína CEO were happy with the result and the page was accepted we started working on another page.</p>

            <p className="mt-3">At the end of the work, we also conduct extensive testing of the whole website to ensure all pages look and work flawlessly on all devices.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">The Solution</h2>
          </div>

          <div className="col-sm-8">
            <p>We've built the website from scratch with HTML, CSS, JavaScript and PHP. We didn't use any front-end or back-end framework. During the work, we followed the best practices for asset optimization to make sure website will load fast, even on low-end devices and slow internet connection.</p>

            <p className="mt-3">The website has been thoroughly tested on a wide range of devices, from mobile phones and tablets, to small and large desktops to ensure maximum compatibility.</p>
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
                  <span className="circle__label">87%</span>
                </div>

                <h3 className="h5 text--center mt-3">Performance</h3>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="circle circle--centered circle--green">
                  <span className="circle__label">85%</span>
                </div>

                <h3 className="h5 text--center mt-3">Accessibility</h3>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="circle circle--centered circle--green">
                  <span className="circle__label">100%</span>
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

        <a className="link--black-red" href="https://www.slavnostiruzovehovina.cz/" target="_blank" rel="noopener noreferrer">Visit the website <span className="fas fa-external-link-alt text--smaller" /></a>
      </div>

      <Footer />

      {isQuoteModalShown && <QuoteModal handleQuoteClick={handleQuoteClick} />}
    </div>
  )
}

export default CaseSlavnosti
