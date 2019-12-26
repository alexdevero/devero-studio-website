import * as React from 'react'
// import Link from 'next/link'
// import { hotjar } from 'react-hotjar'

// Import utils
import { initGA, logPageView } from '../utils/analytics'

// Import components
import { Awards } from './../components/awards'
import { Blog } from './../components/blog'
import { Contact } from './../components/contact'
// import { Faq } from './../components/faq'
import { Footer } from './../components/footer'
import { Header } from '../components/header'
import { Hero } from './../components/hero'
// import { Intro } from './../components/intro'
// import { MapComponent } from '../components/map'
// import { Partners } from './../components/partners'
// import { Pitch } from './../components/pitch'
import { OurProcess } from '../components/our-process'
import { Projects } from '../components/projects'
import { QuoteModal } from '../components/quote-modal'
import { Services } from './../components/services-cols'
// import { Stack } from './../components/stack'
import { Testimonials } from './../components/testimonials'
// import { Where } from '../components/where'
import { Works } from '../components/works'

// Import styles
import './../styles/styles.scss'

export default class extends React.Component {
  state = {
    isQuoteModalShown: false
  }

  componentDidMount() {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true
    }

    logPageView()

    // if (window!.hj._init) {
      // window.hj._init._verifyInstallation()
    // }
    // hotjar.initialize(1435744, 6)

  }

  handleQuoteClick = () => {
    this.setState({
      isQuoteModalShown: !this.state.isQuoteModalShown
    })
  }

  render() {
    return (
      <div className={this.state.isQuoteModalShown ? 'page-overlay' : ''}>
        {/* <Link href='/about'>
          <a>About</a>
        </Link> */}

        <Header handleQuoteClick={this.handleQuoteClick} />

        <Hero />

        {/* <Pitch /> */}

        {/* <Intro /> */}

        <Works />

        <Projects />

        <Services />

        <OurProcess />

        {/* <Stack /> */}

        {/* <Partners /> */}

        {/* <Faq /> */}

        {/* <Where /> */}

        <Awards />

        <Testimonials />

        <Blog />

        <Contact />

        {/* <MapComponent /> */}

        <Footer />

        {this.state.isQuoteModalShown && <QuoteModal handleQuoteClick={this.handleQuoteClick} />}
      </div>
    )
  }
}
