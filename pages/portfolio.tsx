import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default () => {
  const [projectType, handleProjectTypeChange] = React.useState('all')
  const [publishingYear, handlePublishingYearChange] = React.useState('2019')
  const [isDropdownTypeVisible, handleDropdownType] = React.useState(false)
  const [isDropdownYearVisible, handleDropdownYear] = React.useState(false)

  return (
    <div>
      <Head>
        <title>Portfolio | Devero Studio</title>
      </Head>

      <Link href='/'><a>back home</a></Link>

      <div className="container">
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
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4">
            <Link href="/portfolio/">
              <a className="portfolio__link">
                <img className="portfolio__thumbnail thumbnail" src={require('./../static/images/showcase-thumbnails/thumbnail-multi-tesla.jpg')} alt="Tesla web design concept.jpg" />
              </a>
            </Link>
          </div>

          <div className="col-md-6 col-lg-4">
            <Link href="/portfolio/">
              <a className="portfolio__link">
                <img className="portfolio__thumbnail thumbnail" src={require('./../static/images/showcase-thumbnails/thumbnail-multi-harley-davidson.jpg')} alt="Harley-Davidson web design concept.jpg" />
              </a>
            </Link>
          </div>

          <div className="col-md-6 col-lg-4">
            <Link href="/portfolio/">
              <a className="portfolio__link">
                <img className="portfolio__thumbnail thumbnail" src={require('./../static/images/showcase-thumbnails/thumbnail-multi-ceska-whisky.jpg')} alt="Ceska Whisky web design concept.jpg" />
              </a>
            </Link>
          </div>

          {/* <div className="row col-md-6 col-lg-4"></div> */}

          {/* <div className="row col-md-6 col-lg-4"></div> */}

          {/* <div className="row col-md-6 col-lg-4"></div> */}

          {/* <div className="row col-md-6 col-lg-4"></div> */}

          {/* <div className="row col-md-6 col-lg-4"></div> */}

          {/* <div className="row col-md-6 col-lg-4"></div> */}
        </div>
      </div>
    </div>
  )
}
