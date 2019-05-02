import * as React from 'react'

export const Stack = () => {
  return(
    <section>
      <div className="container pt-5 pb-5">
        <h1 className="h2 text--center">Our Technology stack</h1>

        <div className="divider divider--black divider--center"></div>

        <div className="row">
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
              <span className="tooltip__image fab fa-adobe" />
              <span className="tooltip__text">Adobe</span>
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
              <span className="tooltip__image" />
              <span className="tooltip__text">Brain.js</span>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mt-5">
            <div className="tooltip__container">
              <span className="tooltip__image" />
              <span className="tooltip__text">Tensorflow</span>
            </div>
          </div>

          <div className="col-sm-6 col-md-3 mt-5">
            <div className="tooltip__container">
              <span className="tooltip__image" />
              <span className="tooltip__text">Keras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
