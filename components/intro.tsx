import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const Intro = () => {
  let sectionIntro: HTMLElement | null

  const handleWaypointEnter = () => {
    sectionIntro!.classList.add('fade-in-up')
  }

  return(
    <Waypoint onEnter={handleWaypointEnter} topOffset="-40%">
      <section id="intro" className="animated" ref={el => sectionIntro = el}>
        <div className="container text--center pt-5 pb-7">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <p className="h3">As a full-service digital agency with capabilities across web/app design & development, we work with clients to unlock value through creativity, technology, and business-minded thinking.</p>
            </div>
          </div>
        </div>
      </section>
    </Waypoint>
  )
}
