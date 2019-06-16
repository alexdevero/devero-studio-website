import * as React from 'react'
import Link from 'next/link'
import { Waypoint } from 'react-waypoint'
import ImageZoom from 'react-medium-image-zoom'

export const Works = () => {
  let sectionRecentWorks: HTMLDivElement | null

  const [activeTab, handleChangeActiveTab] = React.useState('one')

  const [isProjectsListVisible, handleOpenProjectsList] = React.useState(false)

  const handleWaypointEnter = (section: string) => {
    switch (section) {
      case 'recentWorks':
        sectionRecentWorks!.classList.add('fade-in-up')
        break
    }
  }

  function generateCaseStudyThumbnail() {
    switch (activeTab) {
      case 'one':
        return <ImageZoom
            image={{
              src: require('./../static/images/showcase-thumbnails/thumbnail-tesla-landing-page.png'),
              alt: 'Tesla web design concept',
              className: 'works__thumbnail thumbnail'
            }}
            zoomImage={{
              src: require('./../static/images/showcase-thumbnails/thumbnail-tesla-landing-page@2x.png'),
              alt: 'Tesla web design concept'
            }}
          />
      case 'two':
        return <ImageZoom
        image={{
          src: require('./../static/images/showcase-thumbnails/thumbnail-harley-davidson-landing-page.png'),
          alt: 'Harley-Davidson web design concept',
          className: 'works__thumbnail thumbnail'
        }}
        zoomImage={{
          src: require('./../static/images/showcase-thumbnails/thumbnail-harley-davidson-landing-page@2x.png'),
          alt: 'Harley-Davidson web design concept'
        }}
      />
      case 'three':
        return <ImageZoom
        image={{
          src: require('./../static/images/showcase-thumbnails/thumbnail-ceska-whisky-landing-page.png'),
          alt: 'Ceska Whisky web design concept',
          className: 'works__thumbnail thumbnail'
        }}
        zoomImage={{
          src: require('./../static/images/showcase-thumbnails/thumbnail-ceska-whisky-landing-page@2x.png'),
          alt: 'Ceska Whisky web design concept'
        }}
      />
      case 'four':
        return <ImageZoom
        image={{
          src: require('./../static/images/showcase-thumbnails/thumbnail-sumava-landing-page.png'),
          alt: '',
          className: 'works__thumbnail thumbnail'
        }}
        zoomImage={{
          src: require('./../static/images/showcase-thumbnails/thumbnail-sumava-landing-page@2x.png'),
          alt: ''
        }}
      />
      // case 'five':
      //   return <ImageZoom
      //   image={{
      //     src: require(''),
      //     alt: '',
      //     className: 'works__thumbnail thumbnail'
      //   }}
      //   zoomImage={{
      //     src: require(''),
      //     alt: ''
      //   }}
      // />
      // case 'six':
      //   return <ImageZoom
      //   image={{
      //     src: require(''),
      //     alt: '',
      //     className: 'works__thumbnail thumbnail'
      //   }}
      //   zoomImage={{
      //     src: require(''),
      //     alt: ''
      //   }}
      // />
    }
  }

  function generateCaseStudyBtnLink() {
    switch (activeTab) {
      case 'one':
        return '/case-study-one'
      case 'two':
        return '/case-study-two'
      case 'three':
        return '/case-study-three'
      case 'four':
        return '/case-study-four'
      case 'five':
        return '/case-study-five'
      case 'six':
        return '/case-study-six'
    }
  }

  return(
    <section className="pb-5">
      <div className="container pt-5 pb-5">
        <Waypoint onEnter={() => handleWaypointEnter('recentWorks')} topOffset="-40%">
          <div>
            <div className="services__row services__row--one row animated" ref={el => sectionRecentWorks = el}>
              <div className="col-md-6 services__col-text" data-number="1">
                <h2 className="h4">Recent works</h2>

                <div className="divider divider--red divider--slim" />

                <ul className="list--unstyled">
                  <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'one' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('one')}><small className="text--small">No.00:</small> <strong>Tesla</strong></span>
                  </li>

                  <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'two' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('two')}><small className="text--small">No.01:</small> <strong>Harley-Davidson</strong></span>
                  </li>

                  <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'three' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('three')}><small className="text--small">No.02:</small> <strong>Ceska Whisky</strong></span>
                  </li>

                  <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'four' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('four')}><small className="text--small">No.03:</small> <strong>Sumava</strong></span>
                  </li>

                  {/* <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'four' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('four')}><small className="text--small">No.03:</small> <strong>Foo</strong></span>
                  </li> */}

                  {/* <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'five' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('five')}><small className="text--small">No.04:</small> <strong>Foo</strong></span>
                  </li> */}

                  {/* <li className="mb-2">
                    <span className={`link--black-red${activeTab === 'six' ? ' link--black-red--selected' : ''}`} onClick={() => handleChangeActiveTab('six')}><small className="text--small">No.05:</small> <strong>Foo</strong></span>
                  </li> */}

                  <li className="d-none">
                    <Link href="portfolio"><a className="link--unstyled link--black-red"><strong>Show full portfolio &rarr;</strong></a></Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <div className="works__wrapper">
                  {generateCaseStudyThumbnail()}

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="works__btn btn btn--red link--unstyled" data-text="See case study &rarr;">See case study &rarr;</a></Link> */}
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
                    <li>Slavnosti Růžového Vína</li>
                    <li>Slavnosti Růžového Vína</li>
                    <li>Posli</li>
                  </ul>
                </div>

                <div className="col-sm-2 col-md-4">
                  <h2 className="h5 mt-4">Web development</h2>

                  <ul className="list--unstyled">
                    <li>Supernova</li>
                    <li>Fresh & Tasty</li>
                    <li>Čerstvá Sváča</li>
                    <li>Česká Whisky</li>
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
                    <li>Supernova Cloud</li>
                    <li>StartMonday</li>
                    <li>Účetnictví Online</li>
                  </ul>

                  {/* <h2 className="h5">Consulting</h2>

                  <ul className="list--unstyled">
                    <li>DámeJídlo</li>
                  </ul> */}
                </div>
              </div>}

              <button className="works__projects-btn btn btn--black" onClick={() => handleOpenProjectsList(!isProjectsListVisible)} data-text={`${isProjectsListVisible ? 'Hide' : 'View'} all projects`}>{isProjectsListVisible ? 'Hide' : 'View'} all projects</button>
            </div>
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
