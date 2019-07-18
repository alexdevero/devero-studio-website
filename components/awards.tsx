import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const Awards = () => {
  let sectionAwards: HTMLDivElement | null

  const handleWaypointEnter = () => {
    sectionAwards!.classList.add('fade-in-up')
  }

  return(
    <Waypoint onEnter={handleWaypointEnter} topOffset="-40%">
      <div className="container animated" ref={el => sectionAwards = el}>
        <h1 className="h4 heading--small text--center">Featured in</h1>

        <div className="divider divider--red divider--center"></div>

        <div className="row text--center">
          <div className="col-sm-6 col-md-3 logo--csswinner">
            <img className="icon--medium icon--faded" src={require('./../static/images/logos-awards/logo-csswinner.svg')} alt="CSSWinner logo"/>
          </div>

          <div className="col-sm-6 col-md-3">
            <img className="icon--medium icon--faded" src={require('./../static/images/logos-awards/logo-cssawards.svg')} alt="CSSAwards logo"/>
          </div>

          <div className="col-sm-6 col-md-3">
            <img className="icon--medium icon--faded" src={require('./../static/images/logos-awards/logo-awwwards.svg')} alt="awwwards logo"/>
          </div>

          <div className="col-sm-6 col-md-3">
            <img className="icon--medium icon--faded" style={{ width: 80 }} src={require('./../static/images/logos-awards/logo-webby-awards.svg')} alt="Webby Awards logo"/>
          </div>
        </div>

        <div className="row text--center">
          <div className="col-sm-6 col-md-4 logo--csswinner">
            <img className="icon--medium icon--faded" style={{ width: 80 }} src={require('./../static/images/logos-awards/logo-net.svg')} alt="Net Magazine logo"/>
          </div>

          <div className="col-sm-6 col-md-4 logo--smasing-magazine">
            <img className="icon--medium icon--faded" style={{ position: 'relative', top: 12 }} src={require('./../static/images/logos-awards/logo-smashing-magazine.svg')} alt="Smashing Magazine logo"/>
          </div>

          <div className="col-sm-6 col-md-4 logo--web-designer">
            <img className="icon--medium icon--faded" style={{ width: 60 }} src={require('./../static/images/logos-awards/logo-web-designer.svg')} alt="Web Designer magazine logo"/>
          </div>
        </div>
      </div>
    </Waypoint>
  )
}
