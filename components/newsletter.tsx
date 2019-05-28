import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const Newsletter = () => {
  let sectionNewsletter: HTMLDivElement | null

  const handleWaypointEnter = () => {
    sectionNewsletter!.classList.add('fade-in-up')
  }

  return(
    <section>
      <div className="container pt-5 pb-5 text--center">
        <Waypoint onEnter={handleWaypointEnter} topOffset="-90%">
          <div ref={el => sectionNewsletter = el} className="animated">
            <h1 className="h3 heading--small">Subscribe to Devero Studio Insider</h1>

            <div className="divider divider--center divider--red divider--slim" />
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
