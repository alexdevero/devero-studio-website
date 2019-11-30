import * as React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Lottie from 'lottie-react-web'

import animation from './../static/lottie-animation.json'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="hero__heading">Crafting beautiful websites & apps</h1>

            {/* <div className="glitch-wrapper d-md-none">
              <h1 className="hero__title">
                <span className="glitch" data-text="Delivering">Delivering</span>
                <span className="glitch" data-text="digital">digital</span>
                <span className="glitch" data-text="perfection">perfection</span>
              </h1>
            </div> */}

            {/* <div className="glitch-wrapper d-none d-md-block">
              <h1 className="hero__title glitch" data-text="Delivering digital perfection">Delivering digital perfection</h1>
            </div> */}

            <h3 className="hero__text">Devero Studio is a digital agency specializing in mobile and web design and development.</h3>
          </div>

          <div className="col-md-6">
            <Lottie
              options={{
                animationData: animation
              }}
            />
          </div>
          </div>
        </div>

      <AnchorLink className="hero__link" href="#works"><span className="fas fa-long-arrow-alt-down" /> Learn more</AnchorLink>
    </div>
  )
}
