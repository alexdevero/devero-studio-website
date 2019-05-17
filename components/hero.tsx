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

        <h2 className="hero__title">Delivering digital perfection</h2>

        <h3 className="hero__text">We build top-class websites and mobile apps for those who want the best.</h3>

        <AnchorLink className="btn btn--red" href="#whatWeDo" offset={() => 100} data-text="&darr; LEARN MORE" style={{ maxWidth: '240px', textDecoration: 'none' }}>&darr; LEARN MORE</AnchorLink>
      </div>
    </div>
  )
}
