import * as React from 'react'

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

        <h2 className="hero__subtitle">We help startups, small businesses and individuals enter and thrive in the digital world.</h2>

        <div className="divider divider--red" />

        <button href="#whatWeDo" className="btn btn--red" data-text="WHAT WE DO">What we do</button>
      </div>

      <div className="video-wrapper">
        <div className="video-overlay"></div>

        <video autoPlay={false} loop={false} muted={true} poster="/static/images/working-space.jpg">
          <source src="/static/videos/working-space.webm" />
          <source src="/static/videos/working-space.mp4" />
        </video>
      </div>
    </div>
  )
}
