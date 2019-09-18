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
    formProject: '',
    formService: '',
    formUsername: '',
    // isCaptchaValid: false,
    isErrorBotShown: false,
    isErrorShown: false,
    isFormSubmitted: false
    // isFormValid: false
  }

  inputEmail: HTMLInputElement | undefined
  inputName: HTMLInputElement | undefined
  inputMessage: HTMLInputElement | undefined
  inputProject: HTMLDivElement | undefined
  inputService: HTMLDivElement | undefined
  inputUsername: HTMLInputElement | undefined
  sectionContact: HTMLDivElement | undefined

  handleInputChange = (event: React.ChangeEvent) => {
    if (event.target.value.length > 0 && event.target.name !== 'formEmail') {
      this.setState({
        [event.target.name]: event.target.value
      }, () => {
        console.log(this.state)
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

  handleFormSubmit = (event: React.FormEventHandler) => {
    event.preventDefault()

    if (this.state.formEmail.length > 0 && this.state.formName.length > 0 && this.state.formMessage.length > 0 && this.state.formUsername.length === 0 && this.state.formProject.length === 0 && this.state.formService.length === 0 /* && this.state.isCaptchaValid */) {
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
            console.error(status, err.toString())
          }
        })

        // Register in Google Analytics
        logEvent('User', 'Contact via form')

        this.setState({
          formEmail: '',
          formMessage: '',
          formName: '',
          formProject: '',
          formService: '',
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

      if (this.state.formMessage.length === 0) {
        this.inputMessage.classList.add('input--with-error')
      } else {
        this.inputMessage.classList.remove('input--with-error')
      }

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
      <section>
        <div className="container pt-5 pb-5">
          <Waypoint onEnter={this.handleWaypointEnter} topOffset="-40%">
            <div ref={el => this.sectionContact = el} className="animated pb-5">
              <h1 className="h3 heading--small text--center">Let&apos;s get started on your project</h1>

              <div className="divider divider--center divider--red divider--slim" />

              <p className="text--center mb-5">Drop us a line and we&apos;ll contact you to build a plan together.</p>

              <div className="row justify-content-center">
                <div className="col-md-11 col-md-9 col-lg-7">
                  {!this.state.isFormSubmitted && (
                    <form action="">
                      <div className="row">
                        <div className="col-md-6">
                          <fieldset className="input--absolute">
                            <input onChange={this.handleInputChange} id="formName" name="formName" type="text" required ref={(inputName) => this.inputName = inputName} />

                            <label htmlFor="formName">Full name *</label>
                          </fieldset>
                        </div>

                        <div className="col-md-6 mt-3 mt-md-0">
                          <fieldset className="input--absolute">
                            <input onChange={this.handleInputChange} id="formEmail" name="formEmail" type="email" required ref={(inputEmail) => this.inputEmail = inputEmail} />

                            <label htmlFor="formEmail">Email *</label>
                          </fieldset>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-6">
                          <fieldset className="input--absolute">
                            <select onChange={this.handleInputChange} id="inputService" name="inputService" type="text" required ref={(inputService) => this.inputService = inputService}>
                              <option disabled selected value="">What do you need *</option>
                              <option value="Design">Design</option>
                              <option value="Development">Development</option>
                              <option value="Design & Development">Design & Development</option>
                            </select>

                            {/* <label htmlFor="inputService">What do you need *</label> */}
                          </fieldset>
                        </div>

                        <div className="col-md-6 mt-3 mt-md-0">
                          <fieldset className="input--absolute">
                            <select onChange={this.handleInputChange} id="inputProject" name="inputProject" type="text" required ref={(inputProject) => this.inputProject = inputProject}>
                              <option disabled selected value="">Type of project *</option>
                              <option value="App">App</option>
                              <option value="Web">Web</option>
                            </select>

                            {/* <label htmlFor="inputProject">Type of project *</label> */}
                          </fieldset>
                        </div>
                      </div>

                      <fieldset className="input--absolute mt-4 mb-2">
                        <textarea onChange={this.handleInputChange} id="formMessage" name="formMessage" required ref={(inputMessage) => this.inputMessage = inputMessage} />

                        <label htmlFor="formMessage">Message *</label>
                      </fieldset>

                      <fieldset className="input--absolute input--username">
                        <input onChange={this.handleInputChange} id="formUsername" name="formUsername" type="text" ref={(inputUsername) => this.inputUsername = inputUsername} />

                        <label htmlFor="formUsername">Username *</label>
                      </fieldset>

                      <fieldset className="mb-3">
                        <p className="text--small mt-0"><i>* All fields are required</i></p>
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

                      <button onClick={this.handleFormSubmit} className="btn btn--full-width btn--black contact-button-cta" data-text="Send">Send</button>
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
              </div>
            </div>
          </Waypoint>
        </div>
      </section>
    )
  }
}
