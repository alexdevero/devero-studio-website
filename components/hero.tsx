import * as React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Hero = () => {
  return(
    <div className="hero">
      <div className="container">
        <div className="glitch-wrapper">
          <h1 className="hero__title">
            <span className="glitch" data-text="DEVERO">DEVERO</span>
            <span className="glitch" data-text="STUDIO">STUDIO</span>
          </h1>
        </div>

        <h2 className="hero__subtitle">Helping you thrive in the digital world.</h2>

        <h3 className="hero__text">We design and build exceptional, high-quality websites and applications for startups, small businesses, solopreneurs and individuals.</h3>

        <div className="divider divider--red divider--thick" />

        <AnchorLink className="btn btn--red" href="#whatWeDo" offset={() => 100} data-text="WHAT WE DO" style={{ maxWidth: '240px', textDecoration: 'none' }}>What we do</AnchorLink>
      </div>

      <div className="video-wrapper">
        <div className="video-overlay"></div>

        <video autoPlay={true} loop={true} muted={true} poster="/static/images/working-space.jpg">
          <source src="/static/videos/working-space.webm" />
          <source src="/static/videos/working-space.mp4" />
        </video>
      </div>
    </div>
  )
}
