import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const Pitch = () => {
  let sectionPitch: HTMLDivElement | null

  const handleWaypointEnter = () => {
    sectionPitch!.classList.add('fade-in-up')
  }

  return <Waypoint onEnter={handleWaypointEnter} topOffset="-40%">
    <div id="learnMore" className="section-pitch pt-2 pb-2 animated" ref={el => sectionPitch = el}>
      <div className="container">
        <div className="row text--center pt-5 pb-5">
          <div className="col-sm-6 col-md-3">
            <h3 className="pitch__number h4">10+</h3>

            <h2 className="pitch__text h6 text--gray-light">Fully Developed Products</h2>
          </div>

          <div className="col-sm-6 col-md-3">
            <h3 className="pitch__number h4">9</h3>

            <h2 className="pitch__text h6 text--gray-light">Happy Clients</h2>
          </div>

          <div className="col-sm-6 col-md-3">
            <h3 className="pitch__number h4">1</h3>

            <h2 className="pitch__text h6 text--gray-light">Award</h2>
          </div>

          <div className="col-sm-6 col-md-3">
            <h3 className="pitch__number h4">3</h3>

            <h2 className="pitch__text h6 text--gray-light">Honorable Mentions</h2>
          </div>

          {/* <div className="col-sm-6 col-md-3">
            <h3 className="pitch__number h4">3+</h3>

            <h2 className="pitch__text h6 text--gray-light">Years on the Market</h2>
          </div> */}
        </div>
      </div>
    </div>
  </Waypoint>
}
