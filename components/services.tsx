import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const Services = () => {
  let sectionServices: HTMLDivElement | null
  let sectionDesign: HTMLDivElement | null

  const [activeServiceTab, handleActiveServiceTabChange] = React.useState('design')

  const handleWaypointEnter = (section: string) => {
    switch (section) {
      case 'services':
        sectionServices!.classList.add('fade-in-up')
        break
      case 'design':
        sectionDesign!.classList.add('fade-in-up')
        break
    }
  }

  const generateServiceContent = () => {
    switch (activeServiceTab) {
      case 'design':
        return <>
          {/* <h2 className="h3 heading--small">Design</h2> */}

          {/* <div className="divider divider--red divider--slim" /> */}

          {/* <p>Our team of exceptional designers will create design concept, and later prototype, for your websites or web app based on your requirements. Next, we will review it with you, and gradually, polish it to perfection.</p> */}

          {/* <p>Balancing creativity and imagination with functionality to deliver unforgettable digital experiences that enhances the vision you have for your project and your brand.</p> */}

          <p>Our award-winning design team creates custom designs that convert, all while elevating the user’s experience. We push the boundaries of design and then eliminate them altogether.</p>

          <div className="row">
            <div className="col-md-6">
              <ul className="list--unstyled mt-3">
                <li>&bull; UI/UX design</li>
                <li>&bull; Web design</li>
                <li>&bull; App design</li>
                <li>&bull; Re-design</li>
                {/* <li>&bull; Identity Design</li> */}
                {/* <li>&bull; Interaction Design</li> */}
                {/* <li>&bull; User Experience Design</li> */}
              </ul>
            </div>

            {/* <div className="col-md-6">
              <ul className="list--unstyled mt-3">
                <li>&bull; Visual Design</li>
              </ul>
            </div> */}
          </div>
        </>
      case 'engineering':
        return <>
          {/* <h2 className="h3 heading--small">Engineering</h2> */}

          {/* <div className="divider divider--red divider--slim" /> */}

          {/* <p>When you are pleased with design prototype, our team of rock star developers will get to work on it. They will take the design prototype and transform it into clean, optimized and ready-to-use website, or app.</p> */}

          {/* <p>Pushing the limits and boundaries of digital development, whilst producing functional unforgettable experiences that work for our partners and their users.</p> */}

          <p>Armed with the latest technology, our front-end and back-end development teams bring your designs to life, paving the way for your entire business strategy. We develop for the now and build for the future.</p>

          <div className="row">
            <div className="col-md-6">
              <ul className="list--unstyled mt-3">
                <li>&bull; Frontend</li>
                <li>&bull; Backend</li>
                <li>&bull; Web development</li>
                <li>&bull; App development</li>
                <li>&bull; iOS &amp; Android (React Native)</li>
              </ul>
            </div>

            {/* <div className="col-md-6">
              <ul className="list--unstyled mt-3">
                <li>&bull; AR/VR/MR</li>
                <li>&bull; Machine Learning</li>
                <li>&bull; QA Testing</li>
              </ul>
            </div> */}
          </div>
        </>
      case 'consulting':
        return <>
          {/* <h2 className="h3 heading--small">Consulting</h2> */}

          {/* <div className="divider divider--red divider--slim" /> */}

          <p>Helping you find ways to improve your existing website or app without the need to start again from scratch, providing you with feedback, guidance and advice.</p>

          <div className="row">
            <div className="col-md-6">
              <ul className="list--unstyled mt-3">
                <li>&bull; Web design</li>
                <li>&bull; Web development</li>
                <li>&bull; App design</li>
                <li>&bull; App development</li>
                <li>&bull; Re-design</li>
              </ul>
            </div>

            <div className="col-md-6">
              <ul className="list--unstyled mt-3">
                <li>&bull; Digital strategy</li>
                <li>&bull; Code reviews</li>
              </ul>
            </div>
          </div>
        </>
      case 'optimization':
        return <>
          {/* <h2 className="h3 heading--small">Optimization</h2> */}

          {/* <div className="divider divider--red divider--slim" /> */}

          {/* <p>When your website is ready we will deploy it, put put it online. In case of an app, we will help you put it in stores. After this, we can take care of it for you if you want, maintaining, fixing and improving it.</p> */}

          {/* <p>Continually updating, improving and maintaining your website or app to ensure you stay on the cutting-edge in today's constantly changing and evolving world.</p> */}

          <p>Today, your website must be three things: fast, functional and always on. Our support and maintenance capabilities monitor your website's performance while keeping it up to date.</p>

          <ul className="list--unstyled mt-3">
            <li>&bull; Reviews &amp; Reports</li>
            <li>&bull; Further Recommendations</li>
            <li>&bull; Updates &amp; fixes</li>
          </ul>
        </>
    }
  }

  return (
    <section id="whatWeDo">
      <Waypoint onEnter={() => handleWaypointEnter('services')} topOffset="-40%">
        <div className="container pt-5 pb-5 animated" ref={el => sectionServices = el}>
          <div className="services__row row">
            <div className="col-md-6 col-lg-5 services__col-text" data-number="2">
              <h3 className="h3 heading--small">Our Services</h3>

              <div className="divider divider--red divider--slim" />
            </div>
          </div>

          <div className="services__row services__row--two row mt-1">
            <div className="col-sm-6 col-md-4 services__col-text">
              <ul className="list--unstyled">
                <li className="mb-2">
                  <span className={`h3 link--black-red${activeServiceTab === 'design' ? ' link--black-red--selected' : ''}`} onClick={() => handleActiveServiceTabChange('design')}><strong>Design</strong></span>
                </li>

                <li className="mb-2">
                  <span className={`h3 link--black-red${activeServiceTab === 'engineering' ? ' link--black-red--selected' : ''}`} onClick={() => handleActiveServiceTabChange('engineering')}><strong>Development</strong></span>
                </li>

                <li className="mb-2">
                  <span className={`h3 link--black-red${activeServiceTab === 'consulting' ? ' link--black-red--selected' : ''}`} onClick={() => handleActiveServiceTabChange('consulting')}><strong>Consulting</strong></span>
                </li>

                <li className="mb-2">
                  <span className={`h3 link--black-red${activeServiceTab === 'optimization' ? ' link--black-red--selected' : ''}`} onClick={() => handleActiveServiceTabChange('optimization')}><strong>Optimization</strong></span>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-md-8 services__col-text">
              {generateServiceContent()}
            </div>
          </div>
        </div>
      </Waypoint>
    </section>
  )
}
