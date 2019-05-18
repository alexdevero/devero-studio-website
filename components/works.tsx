import * as React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import { Waypoint } from 'react-waypoint'

export const Works = () => {
  let sectionRecentWorks: HTMLDivElement | null

  const handleWaypointEnter = (section: string) => {
    switch (section) {
      case 'recentWorks':
        sectionRecentWorks!.classList.add('fade-in-up')
        break
    }
  }

  return(
    <section id="learnMore" className="pb-5">
      <div className="container pt-5 pb-5">
        <div className="services__row services__row--one row">
          <Waypoint onEnter={() => handleWaypointEnter('recentWorks')} topOffset="-40%">
            <div className="col-md-6 col-lg-5 services__col-text animated" data-number="1" ref={el => sectionRecentWorks = el}>
              <h2 className="h4">Recent works</h2>

              <div className="divider divider--red divider--slim" />

              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </Waypoint>

          {/* <div className="col-md-6 services__screenshot-wrapper">
            <ImageZoom
              image={{
                src: require('./../static/images/screenshots-services/services-screenshot-12.jpg'),
                alt: '',
                className: 'services__screenshot',
              }}
              zoomImage={{
                src: require('./../static/images/screenshots-services/services-screenshot-12.jpg'),
                alt: ''
              }}
            />

            <ImageZoom
              image={{
                src: require('./../static/images/screenshots-services/services-screenshot-11.jpg'),
                alt: '',
                className: 'services__screenshot',
              }}
              zoomImage={{
                src: require('./../static/images/screenshots-services/services-screenshot-11.jpg'),
                alt: ''
              }}
            />

            <ImageZoom
              image={{
                src: require('./../static/images/screenshots-services/services-screenshot-06.jpg'),
                alt: '',
                className: 'services__screenshot',
              }}
              zoomImage={{
                src: require('./../static/images/screenshots-services/services-screenshot-06.jpg'),
                alt: ''
              }}
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}
