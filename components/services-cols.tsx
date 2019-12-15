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
          <div className="text--center">
            <h3 className="h3 heading--small">What we do</h3>

            <div className="divider divider--red divider--slim divider--center" />
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3">
              <ReactSVG
                beforeInjection={svg => {
                  svg.classList.add('logo-design')
                  svg.setAttribute('style', 'width: 110px; fill: #999;')
                }}
                src='./../static/images/services-icons/logo-design.svg'
              />

              <h2 className="h4">Design</h2>

              <p>We will create functional and elegant designs for your website, or web app. We can also redesign your current website.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; UI/UX design</li>
                <li>&bull; Web design</li>
                <li>&bull; App design</li>
                <li>&bull; Re-design</li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <ReactSVG
                beforeInjection={svg => {
                  svg.classList.add('logo-web-dev')
                  svg.setAttribute('style', 'width: 110px; fill: #999;')
                }}
                src='./../static/images/services-icons/logo-web-dev.svg'
              />

              <h2 className="h4">Web Development</h2>

              <p>We create and launch a website from scratch for you. We always follow the highest standards and the modern trends.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; UI/UX design</li>
                <li>&bull; Prototyping</li>
                <li>&bull; Frontend</li>
                <li>&bull; Backend</li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <ReactSVG
                beforeInjection={svg => {
                  svg.classList.add('logo-app')
                  svg.setAttribute('style', 'width: 110px; fill: #999;')
                }}
                src='./../static/images/services-icons/logo-app.svg'
              />

              <h2 className="h4">App development</h2>

              <p>From idea to launch. We create delightful iOS and Android mobile apps that make your users happy and achieve your business goals.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; UI/UX design</li>
                <li>&bull; Prototyping</li>
                <li>&bull; PWA development</li>
                <li>&bull; SPA development</li>
                <li>&bull; iOS &amp; Android development (React Native)</li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <ReactSVG
                beforeInjection={svg => {
                  svg.classList.add('logo-consulting')
                  svg.setAttribute('style', 'width: 110px; fill: #999;')
                }}
                src='./../static/images/services-icons/logo-consulting.svg'
              />

              <h2 className="h4">Consulting</h2>

              <p>We will help you find ways to improve your existing website or app, providing you with feedback, guidance and advice.</p>

              <ul className="list--unstyled mt-3">
                <li>&bull; Web design</li>
                <li>&bull; Web development</li>
                <li>&bull; App design</li>
                <li>&bull; App development</li>
                <li>&bull; Re-design</li>
                <li>&bull; Code reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </Waypoint>
    </section>
  )
}
