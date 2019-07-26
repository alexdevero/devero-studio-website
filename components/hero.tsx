import * as React from 'react'
import { useTrail, animated } from 'react-spring'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export const Hero = () => {
  const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))

  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__heading">DEVERO STUDIO</h1>

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

        <h3 className="hero__text">We design and build top-class websites and apps for those who want the best.</h3>

        <AnchorLink className="hero__link" href="#learnMore">&darr; Learn more</AnchorLink>
      </div>

      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>

      <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
    </div>
  )
}
