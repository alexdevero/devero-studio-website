import * as React from 'react'
import { ReactSVG } from 'react-svg'
import { Waypoint } from 'react-waypoint'

export const OurProcess = () => {
  let sectionOurProcess: HTMLDivElement | null

  const handleWaypointEnter = () => {
    sectionOurProcess!.classList.add('fade-in-up')
  }

  return (
    <section id="ourProcess">
      <div className="container pt-5 pb-5">
        <Waypoint onEnter={handleWaypointEnter} topOffset="-90%">
          <div ref={el => sectionOurProcess = el} className="animated">
            <h1 className="h3 heading--small">Our work process</h1>

            <div className="divider divider--red divider--slim mb-5" />

            <div className="row">
              <div className="col-md-6 col-lg-4">
                {/* <span className="process-number">1.</span> */}

                <ReactSVG
                  beforeInjection={svg => {
                    svg.classList.add('icon-meeting')
                    svg.setAttribute('style', 'width: 60px; fill: #333;')
                  }}
                  src='./../static/images/process-icons/icon-meeting.svg'
                />

                <h2 className="h4">1. Meeting & Listening</h2>

                <p className="text--left">First, we will have a meeting and listen to your wishes & needs. What you want to get from this project.</p>
              </div>

              <div className="col-md-6 col-lg-4 mt-5 mt-md-0">
                {/* <span className="process-number">2.</span> */}

                <ReactSVG
                  beforeInjection={svg => {
                    svg.classList.add('icon-design')
                    svg.setAttribute('style', 'width: 60px; fill: #333;')
                  }}
                  src='./../static/images/process-icons/icon-pencil.svg'
                />

                <h2 className="h4">2. Design</h2>

                <p className="text--left">We master Photoshop & XD. We will prepare the wireframes, design book, mockups, and all the visual materials.</p>
              </div>

              <div className="col-md-6 col-lg-4 mt-5 mt-lg-0">
                {/* <span className="process-number">3.</span> */}

                <ReactSVG
                  beforeInjection={svg => {
                    svg.classList.add('icon-validation')
                    svg.setAttribute('style', 'width: 60px; fill: #333;')
                  }}
                  src='./../static/images/process-icons/icon-thumb-up.svg'
                />

                <h2 className="h4">3. Validation</h2>

                <p className="text--left">Next phase is to get your validation. When all is cool, you will approve the visual identity, concept, styles, colors, etc.</p>
              </div>

              <div className="col-md-6 col-lg-4 mt-5">
                {/* <span className="process-number">4.</span> */}

                <ReactSVG
                  beforeInjection={svg => {
                    svg.classList.add('icon-coding')
                    svg.setAttribute('style', 'width: 60px; fill: #333;')
                  }}
                  src='./../static/images/process-icons/icon-coding.svg'
                />

                <h2 className="h4">4. Coding</h2>

                <p className="text--left">And here we start the development process, in a SCRUM environment with frequent updates on the progress from our side.</p>
              </div>

              <div className="col-md-6 col-lg-4 mt-5">
                {/* <span className="process-number">5.</span> */}

                <ReactSVG
                  beforeInjection={svg => {
                    svg.classList.add('icon-launch')
                    svg.setAttribute('style', 'width: 60px; fill: #333;')
                  }}
                  src='./../static/images/process-icons/icon-paper-plane.svg'
                />

                <h2 className="h4">5. Launch</h2>

                <p className="text--left">We will take care of the whole technical launch, prepare the environment so that you can enjoy the launch of your web or app.</p>
              </div>

              <div className="col-md-6 col-lg-4 mt-5">
                {/* <span className="process-number">6.</span> */}

                <ReactSVG
                  beforeInjection={svg => {
                    svg.classList.add('icon-maintain')
                    svg.setAttribute('style', 'width: 60px; fill: #333;')
                  }}
                  src='./../static/images/process-icons/icon-shield.svg'
                />

                <h2 className="h4">6. Maintainenance</h2>

                <p className="text--left">After this journey, 91% of all our clients give us their websites for tech maintenance and design updates whenever they need.</p>
              </div>
            </div>
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
