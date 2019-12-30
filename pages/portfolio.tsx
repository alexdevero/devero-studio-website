import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Masonry from 'react-masonry-component'

// Import utils
import { initGA, logPageView } from '../utils/analytics'

// Import components
import { Footer } from './../components/footer'
import { Header } from './../components/header'
import { QuoteModal } from './../components/quote-modal'

export default () => {
  const [projectType, handleProjectTypeChange] = React.useState('All types')
  const [publishingYear, handlePublishingYearChange] = React.useState('All years')
  const [isDropdownTypeVisible, handleDropdownType] = React.useState(false)
  const [isDropdownYearVisible, handleDropdownYear] = React.useState(false)
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

  const handleDropdownClick = (dropdownType: string) => {
    if (dropdownType === 'year') {
      handleDropdownYear(!isDropdownYearVisible)
      handleDropdownType(false)
    } else {
      handleDropdownType(!isDropdownTypeVisible)
      handleDropdownYear(false)
    }
  }

  const handleDropdownItemClick = (dropdownType: string, value: string) => {
    if (dropdownType === 'year') {
      handlePublishingYearChange(value)
      handleDropdownYear(!isDropdownYearVisible)
    } else {
      handleProjectTypeChange(value)
      handleDropdownType(!isDropdownTypeVisible)
    }
  }

  return (
    <div className={isQuoteModalShown ? 'page-overlay' : ''}>
      <Head>
        <title>Portfolio | Devero Studio</title>
      </Head>

      <Header isHomepage={false} handleQuoteClick={handleQuoteClick} />

      <div className="container page-content pb-6">
        <div className="portfolio__project-filter">
          <h2 className="h3">Portfolio</h2>

          <div className="row mt-3 mb-4">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="dropdown dropdown--full-width">
                <button className="dropdown__toggler" onClick={() => handleDropdownClick('type')}>{projectType} <span>&#9662;</span></button>

                <div className={isDropdownTypeVisible ? 'dropdown__menu dropdown__menu--visible' : 'dropdown__menu'}>
                  <span className="dropdown__item" onClick={() => handleDropdownItemClick('type', 'All types')}>All types</span>
                  <span className="dropdown__item" onClick={() => handleDropdownItemClick('type', 'Websites')}>Websites</span>
                  <span className="dropdown__item" onClick={() => handleDropdownItemClick('type', 'Web apps')}>Web apps</span>
                  <span className="dropdown__item" onClick={() => handleDropdownItemClick('type', 'E-commerce')}>E-commerce</span>
                  <span className="dropdown__item" onClick={() => handleDropdownItemClick('type', 'Mobile apps')}>Mobile apps</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 mt-3 mt-sm-0">
              <div className="dropdown dropdown--full-width">
                <button className="dropdown__toggler" onClick={() => handleDropdownClick('year')}>{publishingYear} <span>&#9662;</span></button>

                <div className={isDropdownYearVisible ? 'dropdown__menu dropdown__menu--visible' : 'dropdown__menu'}>
                  <span className="dropdown__item" onClick={() => handleDropdownItemClick('year', 'All years')}>All years</span>
                  <span className="dropdown__item" onClick={() => handleDropdownItemClick('year', '2017')}>2017</span>
                  <span className="dropdown__item" onClick={() => handleDropdownItemClick('year', '2018')}>2018</span>
                  <span className="dropdown__item" onClick={() => handleDropdownItemClick('year', '2019')}>2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Masonry className="masonry-wrapper">
          {((projectType === 'All types' || projectType === 'Websites') && (publishingYear === 'All years' || publishingYear === '2019')) && <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <Link href="/case-supernova-studio">
                <a>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Supernova Studio</h2>

                    <h3 className="projects__project-type">Web development</h3>
                  </div>

                  <img
                    className="projects__thumbnail thumbnail"
                    src={require('./../static/images/showcase-thumbnails/snapshot-top-supernova-small.png')}
                    alt="Supernova Studio website snapshot" />
                </a>
              </Link>
            </div>
          </div>}

          {((projectType === 'All types' || projectType === 'Websites') && (publishingYear === 'All years' || publishingYear === '2019')) && <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <Link href="/case-svaca">
                <a>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Cerstva Svaca</h2>

                    <h3 className="projects__project-type">Web development</h3>
                  </div>

                  <img
                    className="projects__thumbnail thumbnail"
                    src={require('./../static/images/showcase-thumbnails/snapshot-top-cerstvasvaca-small.jpg')}
                    alt="Cerstva Svaca website snapshot" />
                </a>
              </Link>
            </div>
          </div>}

          {((projectType === 'All types' || projectType === 'Websites') && (publishingYear === 'All years' || publishingYear === '2018')) && <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <Link href="/case-fresh-tasty">
                <a>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Fresh &amp; Tasty</h2>

                    <h3 className="projects__project-type">Web development</h3>
                  </div>

                  <img
                    className="projects__thumbnail thumbnail"
                    src={require('./../static/images/showcase-thumbnails/snapshot-top-fresh-and-tasty-small.png')}
                    alt="Fresh & Tasty website snapshot" />
                </a>
              </Link>
            </div>
          </div>}

          {((projectType === 'All types' || projectType === 'Websites') && (publishingYear === 'All years' || publishingYear === '2018')) && <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <Link href="/case-whisky">
                <a>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Česká Whisky</h2>

                    <h3 className="projects__project-type">Web design & development</h3>
                  </div>

                  <img
                    className="projects__thumbnail thumbnail"
                    src={require('./../static/images/showcase-thumbnails/snapshot-top-ceska-whisky-desktop-v6-small.jpg')}
                    alt="Ceska Whisky web design concept" />
                </a>
              </Link>
            </div>
          </div>}

          {((projectType === 'All types' || projectType === 'Websites') && (publishingYear === 'All years' || publishingYear === '2017')) && <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <Link href="/case-slavnosti">
                <a>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Slavnosti Růžového Vína</h2>

                    <h3 className="projects__project-type">Web development</h3>
                  </div>

                  <img
                    className="projects__thumbnail thumbnail"
                    src={require('./../static/images/showcase-thumbnails/snapshot-top-slavnosti-ruzoveho-vina-small.png')}
                    alt="Slavnosti Růžového Vína website snapshot" />
                </a>
              </Link>
            </div>
          </div>}

          {((projectType === 'All types' || projectType === 'Websites') && (publishingYear === 'All years' || publishingYear === '2018')) && <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <Link href="/portfolio">{/* /case-tesla */}
                <a>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Tesla</h2>

                    <h3 className="projects__project-type">Web design</h3>
                  </div>

                  <img
                    className="projects__thumbnail thumbnail"
                    src={require('./../static/images/showcase-thumbnails/snapshot-top-tesla-web-design-concept-small.jpg')}
                    alt="Tesla web design concept" />
                </a>
              </Link>
            </div>
          </div>}

          {((projectType === 'All types' || projectType === 'Websites') && (publishingYear === 'All years' || publishingYear === '2018')) && <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <Link href="/portfolio">{/* /case-harley */}
                <a>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Harley-Davidson</h2>

                    <h3 className="projects__project-type">Web design</h3>
                  </div>

                  <img
                    className="projects__thumbnail thumbnail"
                    src={require('./../static/images/showcase-thumbnails/snapshot-top-harley-davidson-landing-page-v6-desktop-small.jpg')}
                    alt="Harley-Davidson web design concept" />
                </a>
              </Link>
            </div>
          </div>}

          {(projectType === 'Web apps' || projectType === 'E-commerce' || projectType === 'Mobile apps') && (
            <div className="col-12 text--center"><em>Sorry, there are no projects to show for this selection.</em></div>
          )}
        </Masonry>
      </div>

      <Footer />

      {isQuoteModalShown && <QuoteModal handleQuoteClick={handleQuoteClick} />}
    </div>
  )
}
