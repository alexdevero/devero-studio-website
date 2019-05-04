import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const Where = () => {
  let sectionWhere: HTMLDivElement | null

  const handleWaypointEnter = () => {
    sectionWhere!.classList.add('fade-in-up')
  }

  return(
    <section>
      <div className="container pt-5 pb-5 text--center">
        <Waypoint onEnter={handleWaypointEnter} topOffset="-90%">
          <div ref={el => sectionWhere = el} className="animated">
            <h1 className="h3 text--green">Where We Are</h1>

            <div className="divider divider--center divider--gray divider--slim" />

            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <img className="icon--big" src={require('./../static/images/icon-san-francisco.svg')} alt="San Francisco, USA" />

                <h2 className="h4">San Francisco</h2>

                <h3 className="h6 text--gray-light">USA</h3>
              </div>

              <div className="col-sm-6 col-lg-3">
                <img className="icon--big" src={require('./../static/images/icon-prague.svg')} alt="Prague, Czech Republic" />

                <h2 className="h4">Prague</h2>

                <h3 className="h6 text--gray-light">Czech Republic</h3>
              </div>

              <div className="col-sm-6 col-lg-3">
                <img className="icon--big" src={require('./../static/images/icon-london.svg')} alt="London, United Kingdom" />

                <h2 className="h4">London</h2>

                <h3 className="h6 text--gray-light">United Kingdom</h3>
              </div>

              <div className="col-sm-6 col-lg-3">
                <img className="icon--big" src={require('./../static/images/icon-shanghai.svg')} alt="Shanghai, China" />

                <h2 className="h4">Shanghai</h2>

                <h3 className="h6 text--gray-light">China</h3>
              </div>
            </div>
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
