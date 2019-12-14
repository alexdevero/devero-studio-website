import * as React from 'react'
import { Waypoint } from 'react-waypoint'
import { ReactSVG } from 'react-svg'

export const Awards = () => {
  let sectionAwards: HTMLDivElement | null

  const handleWaypointEnter = () => {
    sectionAwards!.classList.add('fade-in-up')
  }

  return (
    <Waypoint onEnter={handleWaypointEnter} topOffset="-40%">
      <div className="container animated pt-5 pb-5" ref={el => sectionAwards = el}>
        <h1 className="h4 heading--small text--center">Featured in</h1>

        <div className="divider divider--red divider--center" />

        <div className="awards-row row text--center">
          <div className="col-sm-6 col-md-3 d-flex align-items-center justify-content-center">
            <ReactSVG
              beforeInjection={svg => {
                svg.classList.add('logo-csswinner')
                svg.setAttribute('style', 'width: 110px; fill: #999;')
              }}
              src='./../static/images/logos-awards/logo-csswinner.svg'
            />
          </div>

          <div className="col-sm-6 col-md-3 d-flex align-items-center justify-content-center">
            <ReactSVG
              beforeInjection={svg => {
                svg.classList.add('logo-cssawards')
                svg.setAttribute('style', 'width: 110px; fill: #999;')
              }}
              src='./../static/images/logos-awards/logo-cssawards.svg'
            />
          </div>

          <div className="col-sm-6 col-md-3 d-flex align-items-center justify-content-center">
            <ReactSVG
              beforeInjection={svg => {
                svg.classList.add('logo-awwwards')
                svg.setAttribute('style', 'width: 110px; fill: #999;')
              }}
              src='./../static/images/logos-awards/logo-awwwards.svg'
            />
          </div>

          <div className="col-sm-6 col-md-3 d-flex align-items-center justify-content-center">
            <ReactSVG
              beforeInjection={svg => {
                svg.classList.add('logo-webby-awards')
                svg.setAttribute('style', 'width: 80px; fill: #999;')
              }}
              src='./../static/images/logos-awards/logo-webby-awards.svg'
            />
          </div>
        </div>

        <div className="row text--center">
          <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center">
            <ReactSVG
              beforeInjection={svg => {
                svg.classList.add('logo-csswinner')
                svg.setAttribute('style', 'width: 80px; fill: #999;')
              }}
              src='./../static/images/logos-awards/logo-net.svg'
            />
          </div>

          <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center">
            <ReactSVG
              beforeInjection={svg => {
                svg.classList.add('logo-smashing-magazine')
                svg.setAttribute('style', 'position: relative; top: 17px; width: 170px;')
              }}
              src='./../static/images/logos-awards/logo-smashing-magazine.svg'
            />
          </div>

          <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center">
            <ReactSVG
              beforeInjection={svg => {
                svg.classList.add('logo-web-designer')
                svg.setAttribute('style', 'width: 80px; fill: #999;')
              }}
              src='./../static/images/logos-awards/logo-web-designer.svg'
            />
            {/* <img
              alt="Web Designer magazine logo"
              className="icon--medium icon--faded"
              src={require('./../static/images/logos-awards/logo-web-designer.svg')} style={{ width: 60 }}
            /> */}
          </div>
        </div>
      </div>
    </Waypoint>
  )
}
