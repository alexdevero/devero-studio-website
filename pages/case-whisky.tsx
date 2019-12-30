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
        <title>Česká Whisky website case study | Devero Studio</title>
      </Head>

      <Header isHomepage={false} handleQuoteClick={handleQuoteClick} />

      <div className="case-study-hero">
        <img className="case-study-hero-image img-responsive" src="./../static/images/showcase-thumbnails/snapshot-top-ceska-whisky-desktop-v6.jpg" alt="Česká Whisky website snapshot" />
      </div>

      <div className="container page-content pb-6">
        <h1 className="h2 mt-0">Česká Whisky website case study</h1>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Overview</h2>
          </div>

          <div className="col-sm-8">
            <p>Česká Whisky is a whisky bar and distilery shop based in Czech Republic. It manufactures, and sells, high-quality whisky destilates. Česká Whisky also runs a Whisky Klub for whisky lovers and enthusiast to enjoy their favorite drink.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Our role</h2>
          </div>

          <div className="col-sm-8">
            <p>We were hired to build a pixel-perfect and responsive website for Česká Whisky shop. This was based on a new design we received from designer hired by Česká Whisky. As we worked on coding the pages, we also worked with the designer on continually improving the design nd experience of the website.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">Project specifications</h2>
          </div>

          <div className="col-sm-8">
            <ul className="list--unstyled">
              <li>Deadline: 2 months (completed in 1.25 month)</li>

              <li>Number of pages: 12</li>
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
            <p>Česká Whisky website was built solely with static HTML, CSS, JavaScript and PHP. We used PHP only for contact forms, nowhere else. For JavaScript, we used, back then, the latest ES6. We also didn't use any front-end or back-end framework.</p>

            <p className="mt-3">The whole website was built as a system of components. We build all these components as re-usable blocks. This helped us speed up the whole process of building the Česká Whisky website. This approach also created a starting point for further extension in the future.</p>

            <p className="mt-3">As usually, we focused on building one page at the time, no more. When we finished the page we went through extensive testing and reviews with team from Česká Whisky.</p>

            <p className="mt-3">Only when team at Česká Whisky accepted the result we moved on and started working on another page. We repeated the whole process all over again.</p>

            <p className="mt-3">At the end of the work, we also conduct extensive testing of the whole website to ensure all pages look and work perfectly on all devices.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-4">
            <h2 className="h4 mt-0">The Solution</h2>
          </div>

          <div className="col-sm-8">
            <p>We decided to built the website from scratch using HTML (HTML5 specification), CSS (CSS3 specification), JavaScript (ES6) and PHP. No front-end or back-end framework was involved in the process. We made sure to closely follow the best practices for asset optimization. This helped us to make the website load fast, even on low-end devices and slow internet connection.</p>

            <p className="mt-3">At the end of the project, we thoroughly tested the website on a wide range of devices, from mobile phones and tablets, to small and large desktops. This helped us fix some issues we missed and ensured maximum compatibility.</p>
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
                  <span className="circle__label">83%</span>
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

        <a className="link--black-red" href="https://www.ceskawhisky.cz/" target="_blank" rel="noopener noreferrer">Visit the website <span className="fas fa-external-link-alt text--smaller" /></a>
      </div>

      <Footer />

      {isQuoteModalShown && <QuoteModal handleQuoteClick={handleQuoteClick} />}
    </div>
  )
}

export default CaseSlavnosti
