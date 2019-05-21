import * as React from 'react'
import Link from 'next/link'
import { Waypoint } from 'react-waypoint'
import ImageZoom from 'react-medium-image-zoom'

export const Works = () => {
  let sectionRecentWorks: HTMLDivElement | null

  const [activeTab, handleChangeActiveTab] = React.useState('one')

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
              src: require('./../static/images/showcase-thumbnails/thumbnail-tesla-web-design-concept.jpg'),
              alt: 'Tesla web design concept',
              className: 'works__thumbnail thumbnail'
            }}
            zoomImage={{
              src: require('./../static/images/showcase-thumbnails/thumbnail-tesla-web-design-concept.jpg'),
              alt: 'Tesla web design concept'
            }}
          />
      case 'two':
        return <ImageZoom
        image={{
          src: require('./../static/images/showcase-thumbnails/thumbnail-harley-davidson.jpg'),
          alt: 'Harley-Davidson web design concept',
          className: 'works__thumbnail thumbnail'
        }}
        zoomImage={{
          src: require('./../static/images/showcase-thumbnails/thumbnail-harley-davidson.jpg'),
          alt: 'Harley-Davidson web design concept'
        }}
      />
      case 'three':
        return <ImageZoom
        image={{
          src: require('./../static/images/showcase-thumbnails/thumbnail-ceska-whisky.jpg'),
          alt: 'Ceska Whisky web design concept',
          className: 'works__thumbnail thumbnail'
        }}
        zoomImage={{
          src: require('./../static/images/showcase-thumbnails/thumbnail-ceska-whisky.jpg'),
          alt: 'Ceska Whisky web design concept'
        }}
      />
      // case 'four':
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
    <section id="learnMore" className="pb-5">
      <div className="container pt-5 pb-5">
        <Waypoint onEnter={() => handleWaypointEnter('recentWorks')} topOffset="-40%">
          <div className="services__row services__row--one row animated" ref={el => sectionRecentWorks = el}>
            <div className="col-md-6 services__col-text" data-number="1">
              <h2 className="h4">Recent works</h2>

              <div className="divider divider--red divider--slim" />

              <ul className="list--unstyled">
                <li className="mb-2">
                  <span className="link--white-red" onClick={() => handleChangeActiveTab('one')}><small className="text--small">#01</small> <strong>Tesla</strong></span>
                </li>

                <li className="mb-2">
                  <span className="link--white-red" onClick={() => handleChangeActiveTab('two')}><small className="text--small">#02</small> <strong>Harley-Davidson</strong></span>
                </li>

                <li className="mb-2">
                  <span className="link--white-red" onClick={() => handleChangeActiveTab('three')}><small className="text--small">#03</small> <strong>Ceska Whisky</strong></span>
                </li>

                {/* <li className="mb-2">
                  <span className="link--white-red" onClick={() => handleChangeActiveTab('four')}><small className="text--small">#04</small> <strong>Foo</strong></span>
                </li> */}

                {/* <li className="mb-2">
                  <span className="link--white-red" onClick={() => handleChangeActiveTab('five')}><small className="text--small">#05</small> <strong>Foo</strong></span>
                </li> */}

                {/* <li className="mb-2">
                  <span className="link--white-red" onClick={() => handleChangeActiveTab('six')}><small className="text--small">#06</small> <strong>Foo</strong></span>
                </li> */}

                <li className="d-none">
                  <Link href="portfolio"><a className="link--unstyled link--white-red"><strong>Show full portfolio &rarr;</strong></a></Link>
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
        </Waypoint>
      </div>
    </section>
  )
}
