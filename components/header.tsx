import * as React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface HeaderInterface {
  handleQuoteClick: () => void;
}

export const Header = (props: HeaderInterface) => (
  <header className="header">
    <div className="container">
      <nav>
        <ul className="list--inline list--unstyled text--right">
          <li className="list--inline-item">
            <AnchorLink href="#works">Works</AnchorLink>
          </li>

          <li className="list--inline-item">
            <AnchorLink href="#whatWeDo">Services</AnchorLink>
          </li>

          <li className="list--inline-item">
            <AnchorLink href="#ourProcess">Process</AnchorLink>
          </li>

          <li className="list--inline-item">
            <a href="https://blog.alexdevero.com" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>

          <li className="list--inline-item">
            <AnchorLink href="#contact">Hire us</AnchorLink>
          </li>

          <li className="list--inline-item quote-btn-wrapper">
            <button className="btn btn--black-red" onClick={props.handleQuoteClick} data-text="Get quote">Get quote</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
