import * as React from 'react'

export const Footer = () => {
  return(
    <footer className="pt-5 pb-5 text--center">
      <ul className="list--inline list--unstyled">
        <li className="list--inline-item">
          <a href="https://twitter.com/alexdevero" target="_blank">
            <span className="fab fa-twitter"></span>
          </a>
        </li>

        <li className="list--inline-item">
          <a href="https://github.com/alexdevero" target="_blank">
            <span className="fab fa-github"></span>
          </a>
        </li>

        {/* <li className="list--inline-item">
          <a href="https://codesandbox.io/u/alexdevero" target="_blank">
            <span className="fab fa-sandbox"></span>
          </a>
        </li> */}

        <li className="list--inline-item">
          <a href="https://codepen.io/alexdevero/" target="_blank">
            <span className="fab fa-codepen"></span>
          </a>
        </li>

        <li className="list--inline-item">
          <a href="https://stackoverflow.com/story/alexdevero" target="_blank">
            <span className="fab fa-stack-overflow"></span>
          </a>
        </li>

        <li className="list--inline-item">
          <a href="https://dribbble.com/alexdevero" target="_blank">
            <span className="fab fa-dribbble"></span>
          </a>
        </li>

        {/* <li className="list--inline-item">
          <a href="https://www.behance.net/alexdevero" target="_blank">
            <span className="fab fa-behance"></span>
          </a>
        </li> */}

        {/* <li className="list--inline-item">
          <a href="https://www.facebook.com/deveroalex" target="_blank">
            <span className="fab fa-facebook"></span>
          </a>
        </li> */}

        <li className="list--inline-item">
          <a href="https://www.instagram.com/alexdevero/" target="_blank">
            <span className="fab fa-instagram"></span>
          </a>
        </li>
      </ul>

      <p className="footer__copy">&copy;{new Date().getFullYear()} Devero Studio. All rights reserved.</p>
    </footer>
  )
}
