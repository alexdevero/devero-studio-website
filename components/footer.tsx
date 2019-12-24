import * as React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return(
    <footer className="footer pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a className="link--unstyled" href="mailto:studio@devero.io">studio@devero.io</a>

            <ul className="list--inline list--unstyled mt-3">
              <li className="list--inline-item">
                <a href="https://twitter.com/alexdevero" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>

              <li className="list--inline-item">
                <a href="https://github.com/alexdevero" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-github"></span>
                </a>
              </li>

              {/* <li className="list--inline-item">
                <a href="https://codesandbox.io/u/alexdevero" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-sandbox"></span>
                </a>
              </li> */}

              <li className="list--inline-item">
                <a href="https://codepen.io/alexdevero/" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-codepen"></span>
                </a>
              </li>

              <li className="list--inline-item">
                <a href="https://stackoverflow.com/story/alexdevero" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-stack-overflow"></span>
                </a>
              </li>

              <li className="list--inline-item">
                <a href="https://dribbble.com/alexdevero" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-dribbble"></span>
                </a>
              </li>

              {/* <li className="list--inline-item">
                <a href="https://www.behance.net/alexdevero" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-behance"></span>
                </a>
              </li> */}

              {/* <li className="list--inline-item">
                <a href="https://www.facebook.com/deveroalex" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-facebook"></span>
                </a>
              </li> */}

              <li className="list--inline-item">
                <a href="https://www.instagram.com/alexdevero/" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 text--right">
            <ul className="list--unstyled mt-1 footer__copy">
              <li>
                <Link href="/terms"><a>Terms and Conditions</a></Link>
              </li>

              <li>
                <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__copy mt-3 text--center">Copyright &copy;{new Date().getFullYear()} Devero Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}
