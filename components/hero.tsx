import * as React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Hero = () => {
  return(
    <div className="hero">
      <div className="container">
        {/* <div className="glitch-wrapper">
          <h1 className="hero__title heading__big">
            <span className="glitch" data-text="DEVERO">DEVERO</span>
            <span className="glitch" data-text="STUDIO">STUDIO</span>
          </h1>
        </div> */}

        <div className="glitch-wrapper d-md-none">
          <h1 className="hero__title">
            <span className="glitch" data-text="Delivering">Delivering</span>
            <span className="glitch" data-text="digital">digital</span>
            <span className="glitch" data-text="perfection">perfection</span>
          </h1>
        </div>

        <div className="glitch-wrapper d-none d-md-block">
          <h1 className="hero__title glitch" data-text="Delivering digital perfection">Delivering digital perfection</h1>
        </div>

        <h3 className="hero__text">We build top-class websites and apps for those who want the best.</h3>

        <AnchorLink className="hero__link" href="#whatWeDo" offset={() => 100}>&darr; Learn more</AnchorLink>
      </div>
    </div>
  )
}
