import * as React from 'react'

export const Hero = () => {
  return(
    <div className="hero">
      <div className="glitch-wrapper">
        <h1 className="hero__title">
          <span className="glitch" data-text="DEVERO">DEVERO</span>
          <span className="glitch" data-text="STUDIO">STUDIO</span>
        </h1>
      </div>

      <h2 className="hero__subtitle">We help individuals, startups and small businesses enter and thrive in the digital world.</h2>

      <div className="divider divider--red" />

      <button className="btn btn--red">What we do</button>
    </div>
  )
}
