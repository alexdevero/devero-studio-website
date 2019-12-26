import * as React from 'react'
import { ReactSVG } from 'react-svg'
import { Waypoint } from 'react-waypoint'

export const Services = () => {
  let sectionServices: HTMLDivElement | null

  const handleWaypointEnter = () => sectionServices!.classList.add('fade-in-up')

  return (
    <section id="whatWeDo">
      <Waypoint onEnter={() => handleWaypointEnter()} topOffset="-40%">
        <div className="container pt-5 pb-5 animated" ref={el => sectionServices = el}>
          <div className="">
            <h3 className="h3 heading--small">What we do</h3>

            <div className="divider divider--red divider--slim" />
          </div>

          <div className="row mt-5">
            <div className="col-md-6 col-lg-3">
              <ReactSVG
                beforeInjection={svg => {
                  svg.classList.add('icon-design')
                  svg.setAttribute('style', 'display: block; /* margin: auto;*/ width: 70px; fill: #333;')
                }}
                src='./../static/images/services-icons/service-icon-design.svg'
              />

              <h2 className="h4 mt-4 mb-4">Design</h2>

              <p>We will create functional and elegant designs for your website, or web app. We can also redesign your current website.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; UI design</li>
                <li>&bull; UX design</li>
                <li>&bull; Web design</li>
                <li>&bull; App design</li>
                <li>&bull; Re-design</li>
                <li>&bull; Prototyping</li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3 mt-5 mt-md-0">
              <ReactSVG
                beforeInjection={svg => {
                  svg.classList.add('icon-web-dev')
                  svg.setAttribute('style', 'display: block; /* margin: auto;*/ width: 70px; fill: #333;')
                }}
                src='./../static/images/services-icons/service-icon-web-dev.svg'
              />

              <h2 className="h4 mt-4 mb-4">Web Development</h2>

              <p>We create and launch a website from scratch for you. We always follow the highest standards and the modern trends.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; Frontend</li>
                <li>&bull; Backend</li>
                <li>&bull; Single-page apps (SPA)</li>
                <li>&bull; Progressive web apps (PWA)</li>
                <li>&bull; Web apps</li>
                <li>&bull; Responsive websites</li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3 mt-5 mt-lg-0">
              <ReactSVG
                beforeInjection={svg => {
                  svg.classList.add('icon-app')
                  svg.setAttribute('style', 'display: block; /* margin: auto;*/ width: 70px; fill: #333;')
                }}
                src='./../static/images/services-icons/icon-smartphone.svg'
              />

              <h2 className="h4 mt-4 mb-4">App development</h2>

              <p>From idea to launch. We create delightful iOS and Android mobile apps that make your users happy and achieve your business goals.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; iOS apps (React Native)</li>
                <li>&bull; Android apps (React Native)</li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3 mt-5 mt-lg-0">
              <ReactSVG
                beforeInjection={svg => {
                  svg.classList.add('icon-consulting')
                  svg.setAttribute('style', 'display: block; /* margin: auto;*/ width: 70px; fill: #333;')
                }}
                src='./../static/images/services-icons/service-icon-consulting.svg'
              />

              <h2 className="h4 mt-4 mb-4">Consulting</h2>

              <p>We will help you help improve your website or app, or build a startup, providing you with feedback, guidance and advice.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; Web design</li>
                <li>&bull; Web development</li>
                <li>&bull; App design</li>
                <li>&bull; App development</li>
                <li>&bull; Re-design</li>
                <li>&bull; Code reviews</li>
                <li>&bull; Idea validation</li>
                <li>&bull; Market research</li>
                <li>&bull; Competitor research</li>
                <li>&bull; Opportunity discovery</li>
                <li>&bull; Individual consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </Waypoint>
    </section>
  )
}
