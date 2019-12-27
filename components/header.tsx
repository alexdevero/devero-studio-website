import * as React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

interface HeaderInterface {
  isHomepage: boolean;
  handleQuoteClick: () => void;
}

export const Header = (props: HeaderInterface) => {
  const [isNavVisible, setIsNavVisible] = React.useState(false)

  return (
    <header className="header">
      <div className="container">
        <button className="header-mobile-btn" onClick={() => setIsNavVisible(!isNavVisible)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={isNavVisible ? 'nav nav-visible' : 'nav'}>
          <ul className="list--inline list--unstyled text--right">
            <li className="list--inline-item">
              <button className="quote-modal__button header-mobile-btn--close" onClick={() => setIsNavVisible(!isNavVisible)} />
            </li>

            {!props.isHomepage ? (
              <>
                <li className="list--inline-item">
                  <Link href="/"><a>Home</a></Link>
                </li>

                <li className="list--inline-item">
                  <Link href="/portfolio"><a>Works</a></Link>
                </li>

                <li className="list--inline-item">
                  <Link href="/#contact"><a>Hire us</a></Link>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}

            <li className="list--inline-item quote-btn-wrapper">
              <button className="btn btn--black-red" onClick={props.handleQuoteClick} data-text="Get quote">Get quote</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
