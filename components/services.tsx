import * as React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import { Waypoint } from 'react-waypoint'

export const Services = () => {
  let sectionConcept: HTMLDivElement | null
  let sectionDevelopment: HTMLDivElement | null
  let sectionMaintenance: HTMLDivElement | null

  const handleWaypointEnter = (section: string) => {
    switch (section) {
      case 'design':
        sectionConcept!.classList.add('is-visible')
        break
      case 'development':
        sectionDevelopment!.classList.add('is-visible')
        break
      case 'maintenance':
        sectionMaintenance!.classList.add('is-visible')
        break

    }
  }

  return(
    <section id="whatWeDo">
      <div className="container pt-5 pb-5">
        <Waypoint onEnter={() => handleWaypointEnter('design')}>
          <div className="services__row services__row--one row" ref={el => sectionConcept = el}>
            <div className="col-md-6 col-lg-5">
              <h2 className="h3 text--green">Concept &amp; Design</h2>

              <div className="divider divider--gray divider--slim" />

              <p>Our team of exceptional designers will create design concept, and later prototype, for your websites or web app based on your requirements. Next, we will review it with you, and gradually, polish it to perfection.</p>
            </div>

            <div className="col-md-6 services__screenshot-wrapper">
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
            </div>
          </div>
        </Waypoint>

        <Waypoint onEnter={() => handleWaypointEnter('development')}>
          <div className="services__row services__row--two row mt-5" ref={el => sectionDevelopment = el}>
            <div className="col-md-4 services__screenshot-wrapper">
              <ImageZoom
                image={{
                  src: require('./../static/images/screenshots-services/services-screenshot-07.jpg'),
                  alt: '',
                  className: 'services__screenshot',
                }}
                zoomImage={{
                  src: require('./../static/images/screenshots-services/services-screenshot-07.jpg'),
                  alt: ''
                }}
              />

              <ImageZoom
                image={{
                  src: require('./../static/images/screenshots-services/services-screenshot-04.png'),
                  alt: '',
                  className: 'services__screenshot',
                }}
                zoomImage={{
                  src: require('./../static/images/screenshots-services/services-screenshot-04.png'),
                  alt: ''
                }}
              />
            </div>

            <div className="col-md-4 text--center">
              <h2 className="h3 text--green">Code &amp; Development</h2>

              <div className="divider divider--center divider--gray divider--slim" />

              <p>When you are pleased with design prototype, our team of rock star developers will get to work on it. They will take the design prototype and transform it into clean, optimized and ready-to-use website, or app.</p>
            </div>

            <div className="col-md-4 services__screenshot-wrapper">
              <ImageZoom
                image={{
                  src: require('./../static/images/screenshots-services/services-screenshot-05.png'),
                  alt: '',
                  className: 'services__screenshot',
                }}
                zoomImage={{
                  src: require('./../static/images/screenshots-services/services-screenshot-05.png'),
                  alt: ''
                }}
              />

              <ImageZoom
                image={{
                  src: require('./../static/images/screenshots-services/services-screenshot-08.jpg'),
                  alt: '',
                  className: 'services__screenshot',
                }}
                zoomImage={{
                  src: require('./../static/images/screenshots-services/services-screenshot-08.jpg'),
                  alt: ''
                }}
              />
            </div>
          </div>
        </Waypoint>

        <Waypoint onEnter={() => handleWaypointEnter('maintenance')}>
          <div className="services__row services__row--three row mt-5" ref={el => sectionMaintenance = el}>
            <div className="col-md-6 services__screenshot-wrapper">
              <ImageZoom
                image={{
                  src: require('./../static/images/screenshots-services/services-screenshot-09.jpg'),
                  alt: '',
                  className: 'services__screenshot',
                }}
                zoomImage={{
                  src: require('./../static/images/screenshots-services/services-screenshot-09.jpg'),
                  alt: ''
                }}
              />

              <ImageZoom
                image={{
                  src: require('./../static/images/screenshots-services/services-screenshot-01.png'),
                  alt: '',
                  className: 'services__screenshot',
                }}
                zoomImage={{
                  src: require('./../static/images/screenshots-services/services-screenshot-01.png'),
                  alt: ''
                }}
              />

              <ImageZoom
                image={{
                  src: require('./../static/images/screenshots-services/services-screenshot-14.jpg'),
                  alt: '',
                  className: 'services__screenshot',
                }}
                zoomImage={{
                  src: require('./../static/images/screenshots-services/services-screenshot-14.jpg'),
                  alt: ''
                }}
              />
            </div>

            <div className="col-md-6">
              <h2 className="h3 text--green">Shipping &amp; Maintenance</h2>

              <div className="divider divider--gray divider--slim" />

              <p>When your website is ready we will deploy it, put put it online. In case of an app, we will help you put it in stores. After this, we can take care of it for you if you want, maintaining, fixing and improving it.</p>
            </div>
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
