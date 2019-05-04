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
        sectionConcept!.classList.add('fade-in-up')
        break
      case 'development':
        sectionDevelopment!.classList.add('fade-in-up')
        break
      case 'maintenance':
        sectionMaintenance!.classList.add('fade-in-up')
        break

    }
  }

  return(
    <section id="whatWeDo">
      <div className="container pt-5 pb-5">
        <Waypoint onEnter={() => handleWaypointEnter('design')} topOffset="-40%">
          <div className="services__row services__row--one row animated" ref={el => sectionConcept = el}>
            <div className="col-md-6 col-lg-5">
              <h2 className="h3 text--green">Concept &amp; Design</h2>

              <div className="divider divider--gray divider--slim" />

              <p>Our team of exceptional designers will create design concept, and later prototype, for your websites or web app based on your requirements. Next, we will review it with you, and gradually, polish it to perfection.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; User Experience Design</li>
                <li>&bull; Interaction Design</li>
                <li>&bull; Visual Design</li>
                <li>&bull; Design QA</li>
              </ul>
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

        <Waypoint onEnter={() => handleWaypointEnter('development')} topOffset="-40%">
          <div className="services__row services__row--two row mt-5 animated" ref={el => sectionDevelopment = el}>
            <div className="col-md-6 services__screenshot-wrapper">
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

              <ImageZoom
                image={{
                  src: require('./../static/images/screenshots-services/services-screenshot-15.jpg'),
                  alt: '',
                  className: 'services__screenshot',
                }}
                zoomImage={{
                  src: require('./../static/images/screenshots-services/services-screenshot-15.jpg'),
                  alt: ''
                }}
              />
            </div>

            <div className="col-md-6">
              <h2 className="h3 text--green">Code &amp; Development</h2>

              <div className="divider divider--center divider--gray divider--slim" />

              <p>When you are pleased with design prototype, our team of rock star developers will get to work on it. They will take the design prototype and transform it into clean, optimized and ready-to-use website, or app.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; iOS &amp; Android (React Native)</li>
                <li>&bull; Frontend (React)</li>
                <li>&bull; Backend (Node.js)</li>
                <li>&bull; Machine Learning</li>
                <li>&bull; AR/VR</li>
                <li>&bull; QA Testing</li>
              </ul>
            </div>
          </div>
        </Waypoint>

        <Waypoint onEnter={() => handleWaypointEnter('maintenance')} topOffset="-40%">
          <div className="services__row services__row--three row mt-5 animated" ref={el => sectionMaintenance = el}>
            <div className="col-md-6">
              <h2 className="h3 text--green">Shipping &amp; Maintenance</h2>

              <div className="divider divider--gray divider--slim" />

              <p>When your website is ready we will deploy it, put put it online. In case of an app, we will help you put it in stores. After this, we can take care of it for you if you want, maintaining, fixing and improving it.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; Reviews &amp; Reports</li>
                <li>&bull; Further Recommendations</li>
                <li>&bull; Updates &amp; fixes</li>
              </ul>
            </div>

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
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
