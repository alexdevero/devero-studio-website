import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const We = () => {
  let sectionWhere: HTMLDivElement | null

  const handleWaypointEnter = () => {
    sectionWhere!.classList.add('is-visible')
  }

  return(
    <section>
      <div className="container pt-5 pb-5 text--center">
        <Waypoint onEnter={handleWaypointEnter}>
          <div ref={el => sectionWhere = el}>
            <h1 className="h3 text--green">Where We Are</h1>

            <div className="divider divider--center divider--gray divider--slim" />

            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <img className="icon--big" src={require('./../static/images/icon-san-francisco.svg')} alt="San Francisco, USA" />

                <h2 className="h4 text--green">San Francisco</h2>

                <h3 className="h6">USA</h3>
              </div>

              <div className="col-sm-6 col-lg-3">
                <img className="icon--big" src={require('./../static/images/icon-prague.svg')} alt="Prague, Czech Republic" />

                <h2 className="h4 text--green">Prague</h2>

                <h3 className="h6">Czech Republic</h3>
              </div>

              <div className="col-sm-6 col-lg-3">
                <img className="icon--big" src={require('./../static/images/icon-london.svg')} alt="London, United Kingdom" />

                <h2 className="h4 text--green">London</h2>

                <h3 className="h6">United Kingdom</h3>
              </div>

              <div className="col-sm-6 col-lg-3">
                <img className="icon--big" src={require('./../static/images/icon-shanghai.svg')} alt="Shanghai, China" />

                <h2 className="h4 text--green">Shanghai</h2>

                <h3 className="h6">China</h3>
              </div>
            </div>
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
