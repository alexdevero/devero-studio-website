import * as React from 'react'
import Head from 'next/head'
import ImageZoom from 'react-medium-image-zoom'
import Link from 'next/link'
import Masonry from 'react-masonry-component'

import { Footer } from './../components/footer'
import { Header } from './../components/header'
import { QuoteModal } from './../components/quote-modal'

export default () => {
  const [projectType, handleProjectTypeChange] = React.useState('all')
  const [publishingYear, handlePublishingYearChange] = React.useState('2019')
  const [isDropdownTypeVisible, handleDropdownType] = React.useState(false)
  const [isDropdownYearVisible, handleDropdownYear] = React.useState(false)
  const [isQuoteModalShown, setIsQuoteModalShown] = React.useState(false)

  const handleQuoteClick = () => {
    setIsQuoteModalShown(!isQuoteModalShown)
  }

  console.log(publishingYear)

  return (
    <div className={isQuoteModalShown ? 'page-overlay' : ''}>
      <Head>
        <title>Portfolio | Devero Studio</title>
      </Head>

      <Header isHomepage={false} handleQuoteClick={handleQuoteClick} />

      <div className="container page-content pb-6">
        <div className="portfolio__project-filter">
          <h2>Portfolio</h2>

          <div className="dropdown">
            <button className="dropdown__toggler" onClick={() => handleDropdownType(!isDropdownTypeVisible)}>{projectType}</button>

            <div className="dropdown__menu">
              <span className="dropdown__item" onClick={() => handleProjectTypeChange('all')}>All</span>
              <span className="dropdown__item" onClick={() => handleProjectTypeChange('websites')}>Websites</span>
              <span className="dropdown__item" onClick={() => handleProjectTypeChange('web apps')}>Web apps</span>
              <span className="dropdown__item" onClick={() => handleProjectTypeChange('e-commerce')}>E-commerce</span>
              <span className="dropdown__item" onClick={() => handleProjectTypeChange('mobile apps')}>Mobile apps</span>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropdown__toggler" onClick={() => handleDropdownType(!handleDropdownYear)}>{isDropdownYearVisible}</button>

            <div className="dropdown__menu">
              <span className="dropdown__item" onClick={() => handlePublishingYearChange('2019')}>2019</span>
              <span className="dropdown__item" onClick={() => handlePublishingYearChange('2018')}>2018</span>
            </div>
          </div>
        </div>

        <Masonry className="masonry-wrapper">
          <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <div className="projects__info">
                <h2 className="projects__project-name">
                  <Link href="/case-supernova"><a>Supernova</a></Link>
                </h2>

                <h3 className="projects__project-type">Web development</h3>
              </div>

              <ImageZoom
                image={{
                  alt: 'Supernova',
                  className: 'projects__thumbnail thumbnail',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-supernova-small.png')
                }}
                zoomImage={{
                  alt: 'Supernova',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-supernova.png')
                }}
              />

              {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <div className="projects__info">
                <h2 className="projects__project-name">Cerstva Svaca</h2>

                <h3 className="projects__project-type">Web development</h3>
              </div>

              <ImageZoom
                image={{
                  alt: 'Cerstva Svaca',
                  className: 'projects__thumbnail thumbnail',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-cerstvasvaca-small.jpg')
                }}
                zoomImage={{
                  alt: 'Cerstva Svaca',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-cerstvasvaca.jpg')
                }}
              />

              {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <div className="projects__info">
                <h2 className="projects__project-name">Fresh &amp; Tasty</h2>

                <h3 className="projects__project-type">Web development</h3>
              </div>

              <ImageZoom
                image={{
                  alt: 'Fresh & Tasty',
                  className: 'projects__thumbnail thumbnail',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-fresh-and-tasty-small.png')
                }}
                zoomImage={{
                  alt: 'Fresh & Tasty',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-fresh-and-tasty.png')
                }}
              />

              {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <div className="projects__info">
                <h2 className="projects__project-name">Slavnosti Růžového Vína</h2>

                <h3 className="projects__project-type">Web development</h3>
              </div>

              <ImageZoom
                image={{
                  alt: 'Slavnosti Růžového Vína',
                  className: 'projects__thumbnail thumbnail',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-slavnosti-ruzoveho-vina-small.png')
                }}
                zoomImage={{
                  alt: 'Slavnosti Růžového Vína',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-slavnosti-ruzoveho-vina.png')
                }}
              />

              {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <div className="projects__info">
                <h2 className="projects__project-name">Tesla</h2>

                <h3 className="projects__project-type">Web design</h3>
              </div>

              <ImageZoom
                image={{
                  alt: 'Tesla web design concept',
                  className: 'projects__thumbnail thumbnail',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-tesla-web-design-concept-small.jpg')
                }}
                zoomImage={{
                  alt: 'Tesla web design concept',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-tesla-web-design-concept.jpg')
                }}
              />

              {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <div className="projects__info">
                <h2 className="projects__project-name">Harley-Davidson</h2>

                <h3 className="projects__project-type">Web design</h3>
              </div>

              <ImageZoom
                image={{
                  alt: 'Harley-Davidson web design concept',
                  className: 'projects__thumbnail thumbnail',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-harley-davidson-landing-page-v6-desktop-small.jpg')
                }}
                zoomImage={{
                  alt: 'Harley-Davidson web design concept',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-harley-davidson-landing-page-v6-desktop.jpg')
                }}
              />

              {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="projects__wrapper">
              <div className="projects__info">
                <h2 className="projects__project-name">Česká Whisky</h2>

                <h3 className="projects__project-type">Web design & development</h3>
              </div>

              <ImageZoom
                image={{
                  alt: 'Ceska Whisky web design concept',
                  className: 'projects__thumbnail thumbnail',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-ceska-whisky-desktop-v6-small.jpg')
                }}
                zoomImage={{
                  alt: 'Ceska Whisky web design concept',
                  src: require('./../static/images/showcase-thumbnails/snapshot-top-ceska-whisky-desktop-v6.jpg')
                }}
              />

              {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
            </div>
          </div>
        </Masonry>
      </div>

      <Footer />

      {isQuoteModalShown && <QuoteModal handleQuoteClick={handleQuoteClick} />}
    </div>
  )
}
