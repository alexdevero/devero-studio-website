import * as React from 'react'
import ImageZoom from 'react-medium-image-zoom'

export const Services = () => {
  return(
    <section id="whatWeDo">
      <div className="container pt-5 pb-5">
        <div className="services__row services__row--one row">
          <div className="col-md-6 col-lg-5">
            <h2 className="h3">Concept &amp; Design</h2>

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

        <div className="services__row services__row--two row mt-5">
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
            <h2 className="h3">Code &amp; Development</h2>

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

        <div className="services__row services__row--three row mt-5">
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
            <h2 className="h3">Shipping &amp; Maintenance</h2>

            <p>When your website is ready we will deploy it, put put it online. In case of an app, we will help you put it in stores. After this, we can take care of it for you if you want, maintaining, fixing and improving it.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
