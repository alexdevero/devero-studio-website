import * as React from 'react'
// import Link from 'next/link'
import { Waypoint } from 'react-waypoint'
import ImageZoom from 'react-medium-image-zoom'

export const Works = () => {
  let sectionRecentWorks: HTMLDivElement | null

  const [activeTab, handleChangeActiveTab] = React.useState('supernova')

  const [isProjectsListVisible, handleOpenProjectsList] = React.useState(false)

  const handleWaypointEnter = (section: string) => {
    switch (section) {
      case 'recentWorks':
        sectionRecentWorks!.classList.add('fade-in-up')
        break
    }
  }

  // eslint-disable-next-line react/no-multi-comp
  function generateCaseStudyThumbnail() {
    switch (activeTab) {
      case 'supernova':
        return <ImageZoom
          image={{
            alt: 'Supernova',
            className: 'works__thumbnail thumbnail',
            src: require('./../static/images/showcase-thumbnails/macbook-white-supernova@1x.png')
          }}
          zoomImage={{
            alt: 'Supernova',
            src: require('./../static/images/showcase-thumbnails/macbook-white-supernova@2x.png')
          }}
        />
      case 'tasty':
        return <ImageZoom
          image={{
            alt: 'Fresh & Tasty',
            className: 'works__thumbnail thumbnail',
            src: require('./../static/images/showcase-thumbnails/macbook-white-fresh-and-tasty@1x.png')
          }}
          zoomImage={{
            alt: 'Fresh & Tasty',
            src: require('./../static/images/showcase-thumbnails/macbook-white-fresh-and-tasty@2x.png')
          }}
        />
      case 'slavnosti':
        return <ImageZoom
          image={{
            alt: 'Slavnosti Růžového Vína',
            className: 'works__thumbnail thumbnail',
            src: require('./../static/images/showcase-thumbnails/macbook-white-slavnosti-ruzoveho-vina@1x.png')
          }}
          zoomImage={{
            alt: 'Slavnosti Růžového Vína',
            src: require('./../static/images/showcase-thumbnails/macbook-white-slavnosti-ruzoveho-vina@2x.png')
          }}
        />
      case 'tesla':
        return <ImageZoom
          image={{
            alt: 'Tesla web design concept',
            className: 'works__thumbnail thumbnail',
            src: require('./../static/images/showcase-thumbnails/macbook-white-tesla@1x.png')
          }}
          zoomImage={{
            alt: 'Tesla web design concept',
            src: require('./../static/images/showcase-thumbnails/macbook-white-tesla@2x.png')
          }}
        />
      case 'harley':
        return <ImageZoom
          image={{
            alt: 'Harley-Davidson web design concept',
            className: 'works__thumbnail thumbnail',
            src: require('./../static/images/showcase-thumbnails/macbook-white-harley-davidson@1x.png')
          }}
          zoomImage={{
            alt: 'Harley-Davidson web design concept',
            src: require('./../static/images/showcase-thumbnails/macbook-white-harley-davidson@2x.png')
          }}
        />
      case 'whisky':
        return <ImageZoom
          image={{
            alt: 'Ceska Whisky web design concept',
            className: 'works__thumbnail thumbnail',
            src: require('./../static/images/showcase-thumbnails/macbook-white-ceska-whisky@1x.png')
          }}
          zoomImage={{
            alt: 'Ceska Whisky web design concept',
            src: require('./../static/images/showcase-thumbnails/macbook-white-ceska-whisky@2x.png')
          }}
        />
      case 'sumava':
        return <ImageZoom
          image={{
            alt: 'Sumava',
            className: 'works__thumbnail thumbnail',
            src: require('./../static/images/showcase-thumbnails/macbook-white-sumava@1x.png')
          }}
          zoomImage={{
            alt: '',
            src: require('./../static/images/showcase-thumbnails/macbook-white-sumava@2x.png')
          }}
        />
    }
  }

  // function generateCaseStudyBtnLink() {
  //   switch (activeTab) {
  //     case 'one':
  //       return '/case-study-one'
  //     case 'two':
  //       return '/case-study-two'
  //     case 'three':
  //       return '/case-study-three'
  //     case 'four':
  //       return '/case-study-four'
  //     case 'five':
  //       return '/case-study-five'
  //     case 'six':
  //       return '/case-study-six'
  //   }
  // }

  return (
    <section className="pb-5">
      <div className="container pt-5 pb-5">
        <Waypoint onEnter={() => handleWaypointEnter('recentWorks')} topOffset="-40%">
          <div className="animated" ref={el => sectionRecentWorks = el}>
            <h2 className="h3 heading--small">Featured projects</h2>

            <div className="divider divider--red divider--slim" />

            <div className="services__row services__row--one row">
              <div className="col-md-6 col-lg-4 services__col-text" data-number="1">

                <ul className="list--unstyled">
                  <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'supernova' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('supernova')}>
                      <small className="text--small">No.01:</small>
                      {' '}
                      <strong>Supernova</strong>
                    </span>

                    <a href="https://www.supernova.io" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ marginLeft: 6, fontSize: 12 }} /></a>
                  </li>

                  <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'tasty' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('tasty')}>
                      <small className="text--small">No.02:</small>
                      {' '}
                      <strong>Fresh & Tasty</strong>
                    </span>

                    <a href="https://www.freshandtasty.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ marginLeft: 6, fontSize: 12 }} /></a>
                  </li>

                  <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'slavnosti' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('slavnosti')}>
                      <small className="text--small">No.03:</small>
                      {' '}
                      <strong>Slavnosti růžového vína</strong>
                    </span>

                    <a href="https://www.slavnostiruzovehovina.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ marginLeft: 6, fontSize: 12 }} /></a>
                  </li>

                  <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'whisky' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('whisky')}>
                      <small className="text--small">No.05:</small>
                      {' '}
                      <strong>Ceska Whisky</strong>
                    </span>

                    <a href="https://www.ceskawhisky.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ marginLeft: 6, fontSize: 12 }} /></a>
                  </li>

                  <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'harley' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('harley')}>
                      <small className="text--small">No.04:</small>
                      {' '}
                      <strong>Harley-Davidson</strong>
                    </span>

                  </li>

                  <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'sumava' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('sumava')}>
                      <small className="text--small">No.06:</small>
                      {' '}
                      <strong>Sumava</strong>
                    </span>

                  </li>

                  {/* <li>
                    <Link href="portfolio"><a className="link--unstyled link--black-red"><strong>Show full portfolio &rarr;</strong></a></Link>
                  </li> */}
                </ul>
              </div>

              <div className="col-md-6 col-lg-8">
                <div className="works__wrapper text--center">
                  {generateCaseStudyThumbnail()}

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>
            </div>

            <div className="works__projects mt-7">
              {isProjectsListVisible && <div className="row mb-5">
                <div className="col-sm-2 col-md-4">
                  <h2 className="h5">Web design</h2>

                  <ul className="list--unstyled">
                    <li>Tesla Motors</li>
                    <li>Harley Davidson</li>
                    <li>Česká Whisky</li>
                    <li>Posli</li>
                  </ul>
                </div>

                <div className="col-sm-2 col-md-4">
                  <h2 className="h5 mt-4">Web development</h2>

                  <ul className="list--unstyled">
                    <li>Supernova <a href="https://www.supernova.io" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                    <li>Fresh & Tasty <a href="https://www.freshandtasty.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                    <li>Čerstvá Sváča</li>
                    <li>Slavnosti Růžového Vína <a href="https://www.slavnostiruzovehovina.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                    <li>Česká Whisky <a href="https://www.ceskawhisky.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                    <li>Trinity</li>
                    <li>Material</li>
                    <li>Maelstrom</li>
                    <li>Sumava</li>
                  </ul>
                </div>

                <div className="col-sm-2 col-md-4">
                  {/* <h2 className="h5">App design</h2>

                  <ul className="list--unstyled">
                    <li></li>
                  </ul> */}

                  <h2 className="h5">App development</h2>

                  <ul className="list--unstyled">
                    <li>Supernova Cloud <a href="https://www.app.supernova.io" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                    <li>StartMonday</li>
                    <li>Účetnictví Online <a href="https://www.uol.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                  </ul>

                  {/* <h2 className="h5">Consulting</h2>

                  <ul className="list--unstyled">
                    <li>DámeJídlo</li>
                  </ul> */}
                </div>
              </div>}

              <div className="text--center">
                <a className="link--black-red" onClick={() => handleOpenProjectsList(!isProjectsListVisible)}><span className={`fas fa-arrow-${isProjectsListVisible ? 'up' : 'down'}`} style={{ marginRight: 4 }} /> {isProjectsListVisible ? 'Hide' : 'View'} all projects</a>
              </div>
            </div>
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
