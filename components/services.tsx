import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const Services = () => {
  let sectionServices: HTMLDivElement | null
  let sectionDesign: HTMLDivElement | null
  let sectionEngineering: HTMLDivElement | null
  let sectionMaintenance: HTMLDivElement | null

  const handleWaypointEnter = (section: string) => {
    switch (section) {
      case 'services':
        sectionServices!.classList.add('fade-in-up')
        break
      case 'design':
        sectionDesign!.classList.add('fade-in-up')
        break
      case 'engineering':
        sectionEngineering!.classList.add('fade-in-up')
        break
      case 'maintenance':
        sectionMaintenance!.classList.add('fade-in-up')
        break
    }
  }

  return(
    <section id="whatWeDo">
      <div className="container pt-5 pb-5">
        <Waypoint onEnter={() => handleWaypointEnter('services')} topOffset="-40%">
          <div className="services__row row">
            <div className="col-md-6 col-lg-5 services__col-text animated" data-number="2" ref={el => sectionServices = el}>
              <h3 className="h4">Services</h3>
            </div>
          </div>
        </Waypoint>

        <div className="services__row services__row--two row mt-1">
          <Waypoint onEnter={() => handleWaypointEnter('design')} topOffset="-40%">
            <div className="col-md-6 services__col-text animated" ref={el => sectionDesign = el}>
              <h2 className="h3 heading--small">Design</h2>

              <div className="divider divider--red divider--slim" />

              {/* <p>Our team of exceptional designers will create design concept, and later prototype, for your websites or web app based on your requirements. Next, we will review it with you, and gradually, polish it to perfection.</p> */}

              <p>Balancing creativity and imagination with functionality to deliver unforgettable digital experiences that enhances the vision you have for your project and your brand.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; Identity Design</li>
                <li>&bull; Interaction Design</li>
                <li>&bull; User Experience Design</li>
                <li>&bull; Visual Design</li>
              </ul>
            </div>
          </Waypoint>

          <Waypoint onEnter={() => handleWaypointEnter('engineering')} topOffset="-40%">
            <div className="col-md-6 services__col-text mt-5 mt-md-0 animated" ref={el => sectionEngineering = el}>
              <h2 className="h3 heading--small">Engineering</h2>

              <div className="divider divider--red divider--slim" />

              {/* <p>When you are pleased with design prototype, our team of rock star developers will get to work on it. They will take the design prototype and transform it into clean, optimized and ready-to-use website, or app.</p> */}

              <p>Pushing the limits and boundaries of digital development, whilst producing functional unforgettable experiences that work for our partners and their users.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; iOS &amp; Android (React Native)</li>
                <li>&bull; Frontend (React)</li>
                <li>&bull; Backend (Node.js)</li>
                <li>&bull; Machine Learning</li>
                <li>&bull; AR/VR/MR</li>
                {/* <li>&bull; QA Testing</li> */}
              </ul>
            </div>
          </Waypoint>


          <Waypoint onEnter={() => handleWaypointEnter('maintenance')} topOffset="-40%">
            <div className="col-md-6 services__col-text mt-5 animated" ref={el => sectionMaintenance = el}>
              <h2 className="h3 heading--small">Maintenance</h2>

              <div className="divider divider--red divider--slim" />

              {/* <p>When your website is ready we will deploy it, put put it online. In case of an app, we will help you put it in stores. After this, we can take care of it for you if you want, maintaining, fixing and improving it.</p> */}

              <p>Continually updating, improving and maintaining your website or app to ensure you stay on the cutting-edge in today's constantly changing and evolving world.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; Reviews &amp; Reports</li>
                <li>&bull; Further Recommendations</li>
                <li>&bull; Updates &amp; fixes</li>
              </ul>
            </div>
          </Waypoint>
        </div>
      </div>
    </section>
  )
}
