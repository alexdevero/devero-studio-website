import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const Stack = () => {
  let sectionStack: HTMLDivElement | null

  const handleWaypointEnter = () => {
    sectionStack!.classList.add('fade-in-up')
  }

  return(
    <section className="pt-4">
      <div className="container pt-5 pb-5">
        <Waypoint onEnter={handleWaypointEnter} topOffset="-90%">
          <div ref={el => sectionStack = el} className="animated">
            <h1 className="h3 heading--small text--center">Our Technology stack</h1>

            <div className="divider divider--center divider--red divider--slim" />

            <div className="row justify-content-center">
              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image fab fa-html5" />
                  <span className="tooltip__text">HTML5</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image fab fa-css3" />
                  <span className="tooltip__text">CSS3</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image fab fa-sass" />
                  <span className="tooltip__text">Sass</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image fab fa-js" />
                  <span className="tooltip__text">JavaScript</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image icon--typescript">
                    <img src={require('./../static/images/logos/logo-typescript.svg')} alt="TypeScript logo"/>
                  </span>
                  <span className="tooltip__text">TypeScript</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image fab fa-react" />
                  <span className="tooltip__text">React.js</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image fab fa-node" />
                  <span className="tooltip__text">Node.js</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image fab fa-react" />
                  <span className="tooltip__text">React Native</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image icon--next-js">
                    <img src={require('./../static/images/logos/logo-next-js.svg')} alt="Next.js logo"/>
                  </span>
                  <span className="tooltip__text">Next.js</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image icon--gatsbyjs">
                    <img src={require('./../static/images/logos/logo-gatsbyjs-new.svg')} alt="Gatsbyjs logo"/>
                  </span>
                  <span className="tooltip__text">Gatsbyjs</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image icon--mongodb">
                    <img src={require('./../static/images/logos/logo-mongodb.svg')} alt="MongoDB logo"/>
                  </span>
                  <span className="tooltip__text">MongoDB</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image fab fa-wordpress" />
                  <span className="tooltip__text">WordPress</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image fab fa-git" />
                  <span className="tooltip__text">Git</span>
                </div>
              </div>

              <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image fab fa-adobe" />
                  <span className="tooltip__text">Adobe</span>
                </div>
              </div>

              {/* <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image" />
                  <span className="tooltip__text">Brain.js</span>
                </div>
              </div> */}

              {/* <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image" />
                  <span className="tooltip__text">Tensorflow</span>
                </div>
              </div> */}

              {/* <div className="col-sm-6 col-md-3 mt-5">
                <div className="tooltip__container">
                  <span className="tooltip__image" />
                  <span className="tooltip__text">Keras</span>
                </div>
              </div> */}
            </div>
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
