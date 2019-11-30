import * as React from 'react'
// import Link from 'next/link'
// import { hotjar } from 'react-hotjar'

// Import utils
import { initGA, logPageView } from '../utils/analytics'

// Import components
import { Awards } from './../components/awards'
// import { Blog } from './../components/blog'
import { Contact } from './../components/contact'
// import { Faq } from './../components/faq'
import { Footer } from './../components/footer'
import { Hero } from './../components/hero'
// import { Intro } from './../components/intro'
// import { MapComponent } from '../components/map'
// import { Partners } from './../components/partners'
// import { Pitch } from './../components/pitch'
import { Projects } from '../components/projects'
import { Services } from './../components/services'
// import { Stack } from './../components/stack'
import { Testimonials } from './../components/testimonials'
// import { Where } from '../components/where'
// import { Works } from '../components/works'

// Import styles
import './../styles/styles.scss'

export default class extends React.Component {
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

  render() {
    return (
      <div>
        {/* <Link href='/about'>
          <a>About</a>
        </Link> */}

        <Hero />

        {/* <Pitch /> */}

        {/* <Intro /> */}

        {/* <Works /> */}

        <Projects />

        <Services />

        {/* <Stack /> */}

        {/* <Partners /> */}

        {/* <Faq /> */}

        <Testimonials />

        {/* <Where /> */}

        <Awards />

        {/* <Blog /> */}

        <Contact />

        {/* <MapComponent /> */}

        <Footer />
      </div>
    )
  }
}
