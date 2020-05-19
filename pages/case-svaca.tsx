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
        <title>Cerstva Svaca website case study | Devero Studio</title>
      </Head>

      <Header isHomepage={false} handleQuoteClick={handleQuoteClick} />

      <div className="case-study-hero">
        <img className="case-study-hero-image img-responsive" src="./../static/images/showcase-thumbnails/snapshot-top-cerstvasvaca.jpg" alt="Cerstva svaca website snapshot" />
      </div>

      <div className="container page-content pb-6">
        <h1 className="h2 mt-0">Cerstva Svaca website case study</h1>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Overview</h2>
          </div>

          <div className="col-sm-8">
            <p>Cerstva Svaca is a small startup, based in Czech Republic, that aims to improve food quality in schools and beyond. It does so by preparing and delivering healthy meals to children and their families. Parents order meals, via credit-based purchases, that are delivered to the school their children attends the next day.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Our role</h2>
          </div>

          <div className="col-sm-8">
            <p>We were hired to build a pixel-perfect and responsive website for the whole project. When we started the project we received the design for the first five pages. As we worked on coding the first batch of pages, we also worked with the company's designer on the rest of pages. Through this collaboration we were able to design, and then code, the rest of pages.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Project specifications</h2>
          </div>

          <div className="col-sm-8">
            <ul className="list--unstyled">
              <li>Deadline: 2 months (completed in 1.5 month)</li>

              <li>Number of pages: 13</li>
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

              <li>&ndash; Create smooth, frictionless experience on mobile devices</li>

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
              <li>Front-end:
                {/* HTML, CSS, CSS-in-JS, JavaScript, React.js, Next.js */}
                <ul>
                  <li><span className="fab fa-html5" /></li>
                  <li><span className="fab fa-css3-alt" /></li>
                  <li><span className="fab fa-js" /></li>
                  <li><span className="fab" /></li>
                  <li><span className="fab fa-react" /></li>
                  <li><span className="fab fa-php" /></li>
                </ul>
              </li>

              <li>Back-end: PHP, Firebase</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">The Process</h2>
          </div>

          <div className="col-sm-8">
            <p>We started this project by building the React app for the website using Next.js framework. Internal and router in Next.js made it easier to handle necessary routing. Next.js made it also easier to create high-performance website, thanks to code splitting, advanced bundling and automatic assets optimization. The whole website was built as a system of components that could be re-used elsewhere. This made it easier to gradually extend the website to its final size.</p>

            <p className="mt-3">We were always working on page at the time. When page was finished we went through extensive testing and reviews with Cerstva Svaca CEO. Only when any potential issues were solved the page was accepted and we started working on another page.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">The Solution</h2>
          </div>

          <div className="col-sm-8">
            <p>We've built the website on top of Next.js framework, as a React app. We followed the best practices for asset optimization to ensure website will load fast, even on slow bandwidth and devices. This was further greatly enhanced by default optimization processes provided by Next.js framework. The layout of every page has been tested and optimized to create great experience on all devices, from mobile phones and tablets, to small and large desktops. Our component-based approach allowed for the website to be continually extended and upgraded in the future.</p>
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
                  <span className="circle__label">91%</span>
                </div>

                <h3 className="h5 text--center mt-3">Performance</h3>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="circle circle--centered circle--green">
                  <span className="circle__label">90%</span>
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
                <div className="circle circle--centered circle--orange">
                  <span className="circle__label">89%</span>
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

        <a className="link--black-red" href="https://www.cerstvasvaca.cz/" target="_blank" rel="noopener noreferrer">Visit the website <span className="fas fa-external-link-alt text--smaller" /></a>
      </div>

      <Footer />

      {isQuoteModalShown && <QuoteModal handleQuoteClick={handleQuoteClick} />}
    </div>
  )
}

export default CaseSvaca
