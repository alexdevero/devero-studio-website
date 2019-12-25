import * as React from 'react'
import $ from 'jquery'
import Lottie from 'lottie-react-web'
// import ReCAPTCHA from "react-google-recaptcha"
import { Waypoint } from 'react-waypoint'

import { logEvent } from './../utils/analytics'

import formAnimation from './../static/lottie-animation-message-sent.json'

export class Contact extends React.Component {
  state = {
    formEmail: '',
    formMessage: '',
    formName: '',
    // formProject: '',
    // formService: '',
    formUsername: '',
    // isCaptchaValid: false,
    isErrorBotShown: false,
    isErrorShown: false,
    isFormSubmitted: false
    // isFormValid: false
  }

  inputEmail: HTMLInputElement | undefined
  inputName: HTMLInputElement | undefined
  inputMessage: HTMLTextAreaElement | undefined
  // inputProject: HTMLSelectElement | undefined
  // inputService: HTMLSelectElement | undefined
  inputUsername: HTMLInputElement | undefined
  sectionContact: HTMLDivElement | undefined

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > 0 && event.target.name !== 'formEmail') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    if (event.target.name === 'formEmail') {
      /* eslint-disable */
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      /* eslint-enable */

      if (re.test(String(event.target.value).toLowerCase())) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    }
  }

  // Show message in console when reCaptcha plugin is loaded
  // onCaptchaLoad = () => {
  //   console.log('Captcha loaded')
  // }

  // Update state after reCaptcha validates visitor
  // onCaptchaVerify = response => {
  //   this.setState({
  //     isCaptchaValid: true
  //   })
  // }

  handleFormSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (this.state.formEmail.length > 0 && this.state.formName.length > 0 /* && this.state.formMessage.length > 0 /* && this.state.isCaptchaValid */) {
      this.setState({
        isErrorShown: false
        // isFormValid: true
      })

      setTimeout(() => {
        $.ajax({
          data: this.state,
          type: 'POST',
          url: './../static/contact.php',
          success: function(data) {
            console.info(data)
          },
          error: function(xhr, status, err) {
            console.log(xhr)
            console.error(status, err.toString())
          }
        })

        // Register in Google Analytics
        logEvent('User', 'Contact via form')

        this.setState({
          formEmail: '',
          formMessage: '',
          formName: '',
          // formProject: '',
          // formService: '',
          formUsername: '',
          // isCaptchaValid: false,
          isErrorBotShown: false,
          isErrorShown: false,
          isFormSubmitted: true
          // isFormValid: false
        })
      }, 1000)
    } else if (this.state.formUsername.length !== 0) {
      this.setState({
        isErrorBotShown: true
      })
    } else {
      if (this.state.formEmail.length === 0) {
        this.inputEmail.classList.add('input--with-error')
      } else {
        this.inputEmail.classList.remove('input--with-error')
      }

      // Let's keep message optional
      // if (this.state.formMessage.length === 0) {
      //   this.inputMessage.classList.add('input--with-error')
      // } else {
      //   this.inputMessage.classList.remove('input--with-error')
      // }

      if (this.state.formName.length === 0) {
        this.inputName.classList.add('input--with-error')
      } else {
        this.inputName.classList.remove('input--with-error')
      }

      this.setState({
        isErrorShown: true
      })
    }
  }

  handleWaypointEnter = () => {
    this.sectionContact!.classList.add('fade-in-up')
  }

  render() {
    return (
      <section id="contact">
        <div className="container pt-5 pb-5">
          <Waypoint onEnter={this.handleWaypointEnter} topOffset="-40%">
            <div ref={el => this.sectionContact = el} className="animated pb-5">

              <div className="row">
                <div className="col-md-8 col-lg-7 mb-5 mt-lg-0">
                  <h1 className="h3 heading--small">A project with Devero Studio?</h1>

                  <div className="divider divider--red divider--slim" />

                  <p className="mb-5">Fill in this form or send us an <a href="mailto:studio@devero.io" className="link--black-red">e-mail</a>.</p>

                  {!this.state.isFormSubmitted && (
                    <form action="">
                      <fieldset className="input--absolute">
                        <input onChange={this.handleInputChange} id="formName" name="formName" type="text" required ref={(inputName) => this.inputName = inputName} />

                        <label htmlFor="formName">Name</label>
                      </fieldset>

                      <div className="mt-3">
                        <fieldset className="input--absolute">
                          <input onChange={this.handleInputChange} id="formEmail" name="formEmail" type="email" required ref={(inputEmail) => this.inputEmail = inputEmail} />

                          <label htmlFor="formEmail">Email</label>
                        </fieldset>
                      </div>

                      {/* <div className="row mt-3">
                        <div className="col-md-6">
                          <fieldset className="input--absolute">
                            <select onChange={this.handleInputChange} id="inputService" name="formService" required ref={(inputService) => this.inputService = inputService}>
                              <option disabled selected value="">What do you need *</option>
                              <option value="Design">Design</option>
                              <option value="Development">Development</option>
                              <option value="Design & Development">Design & Development</option>
                            </select>
                          </fieldset>
                        </div>

                        <div className="col-md-6 mt-3 mt-md-0">
                          <fieldset className="input--absolute">
                            <select onChange={this.handleInputChange} id="inputProject" name="formProject" required ref={(inputProject) => this.inputProject = inputProject}>
                              <option disabled selected value="">Type of project *</option>
                              <option value="App">App</option>
                              <option value="Web">Web</option>
                            </select>
                          </fieldset>
                        </div>
                      </div> */}

                      <fieldset className="input--absolute mt-4 mb-4">
                        <textarea onChange={this.handleInputChange} id="formMessage" name="formMessage" required ref={(inputMessage) => this.inputMessage = inputMessage} />

                        <label htmlFor="formMessage">Project details (optional)</label>
                      </fieldset>

                      <fieldset className="input--absolute input--username">
                        <input onChange={this.handleInputChange} id="formUsername" name="formUsername" type="text" ref={(inputUsername) => this.inputUsername = inputUsername} />

                        <label htmlFor="formUsername">Username *</label>
                      </fieldset>

                      {/* <fieldset className="mb-4">
                        <ReCAPTCHA
                          sitekey="6Ldt6RgUAAAAAKtaxY2787y3S7uP5Wp9kzL0PMMg"
                          size="normal"
                          onChange={this.onCaptchaVerify}
                        />
                      </fieldset> */}

                      {this.state.isErrorShown && (
                        <fieldset className="mb-3">
                          <p className="text--small"><strong>Please, make sure to fill all fields.</strong></p>
                        </fieldset>
                      )}

                      {this.state.isErrorBotShown && (
                        <fieldset className="mb-3">
                          <p className="text--small"><strong>We don&apos;t work with spammers and bots.</strong></p>
                        </fieldset>
                      )}

                      {this.state.isFormSubmitted && (
                        <fieldset className="mb-3">
                          <p className="text--small"><strong>Your message is on the way. We will reply in three days.</strong></p>
                        </fieldset>
                      )}

                      <button onClick={this.handleFormSubmit} className="btn btn--full-width btn--black-red contact-button-cta" data-text="Send">Send</button>
                    </form>
                  )}

                  {this.state.isFormSubmitted && (
                    <Lottie
                      style={{
                        width: 550,
                        height: 550
                      }}
                      options={{
                        animationData: formAnimation
                      }}
                    />
                  )}
                </div>

                <div className="col-md-4 offset-lg-1">
                  <h2 className="h3 heading--small">Contacts</h2>

                  <div className="divider divider--red divider--slim" />

                  <h3 className="h5 mb-1">Hire:</h3>

                  <a href="mailto:studio@devero.io" className="link--black-red">studio@devero.io</a>

                  <h3 className="h5 mt-4 mb-1">Follow:</h3>

                  <ul className="list--inline list--unstyled contact-social-media-list">
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
                  </ul>

                  <ul className="list--inline list--unstyled contact-social-media-list">
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
                </div>
              </div>
            </div>
          </Waypoint>
        </div>
      </section>
    )
  }
}
