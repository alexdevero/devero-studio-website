import * as React from 'react'
import $ from 'jquery'
import ReCAPTCHA from "react-google-recaptcha"
import { Waypoint } from 'react-waypoint'

export class Contact extends React.Component {
  state = {
    formEmail: '',
    formName: '',
    formMessage: '',
    isCaptchaValid: false,
    isErrorShown: false,
    isFormSubmitted: false,
    isFormValid: false
  }

  inputEmail
  inputName
  inputMessage
  sectionContact: HTMLDivElement | null

  handleInputChange = (event: any) => {
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
  onCaptchaLoad = () => {
    console.log('Captcha loaded')
  }

  // Update state after reCaptcha validates visitor
  onCaptchaVerify = response => {
    this.setState({
      isCaptchaValid: true
    })
  }

  handleFormSubmit = (event: any) => {
    event.preventDefault()

    if (this.state.formEmail.length > 0 && this.state.formName.length > 0 && this.state.formMessage.length > 0 && this.state.isCaptchaValid) {
      this.setState({
        isErrorShown: false,
        isFormValid: true
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

        console.log(this.state)

        this.setState({
          formEmail: '',
          formMessage: '',
          formName: '',
          isCaptchaValid: false,
          isErrorShown: false,
          isFormSubmitted: true,
          isFormValid: false
        })
      }, 1000)
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
    return(
      <section>
        <div className="container pt-5 pb-5">
          <Waypoint onEnter={this.handleWaypointEnter} topOffset="-40%">
            <div ref={el => this.sectionContact = el} className="animated">
              <h1 className="h3 heading--small text--center">Let's get started on your project</h1>

              <div className="divider divider--center divider--red divider--slim" />

              <p className="text--center mb-5">Drop us a line and we'll contact you to build a plan together.</p>

              <div className="row justify-content-center">
                <div className="col-md-11 col-md-9 col-lg-7">
                  <form action="">
                    <div className="row">
                      <div className="col-sm-6">
                        <fieldset className="input--absolute">
                          <input onChange={this.handleInputChange} id="formName" name="formName" type="text" required={true} ref={(inputName) => this.inputName = inputName} />

                          <label htmlFor="formName">Full name *</label>
                        </fieldset>
                      </div>

                      <div className="col-sm-6 mt-3 mt-sm-0">
                        <fieldset className="input--absolute">
                          <input onChange={this.handleInputChange} id="formEmail" name="formEmail" type="email" required={true} ref={(inputEmail) => this.inputEmail = inputEmail} />

                          <label htmlFor="formEmail">Email *</label>
                        </fieldset>
                      </div>
                    </div>

                    <fieldset className="input--absolute mt-3 mb-3">
                      <textarea onChange={this.handleInputChange} id="formMessage" name="formMessage" required={true} ref={(inputMessage) => this.inputMessage = inputMessage} />

                      <label htmlFor="formMessage">Message *</label>
                    </fieldset>

                    <fieldset className="mb-4">
                      <ReCAPTCHA
                        sitekey="6Ldt6RgUAAAAAKtaxY2787y3S7uP5Wp9kzL0PMMg"
                        size="normal"
                        onChange={this.onCaptchaVerify}
                      />
                    </fieldset>

                  {this.state.isErrorShown && (
                    <fieldset className="mb-3">
                        <p className="text--small"><strong>Please, make sure to fill all fields.</strong></p>
                      </fieldset>
                    )}

                  {this.state.isFormSubmitted && (
                    <fieldset className="mb-3">
                        <p className="text--small"><strong>Your message is on the way. We will reply in three days.</strong></p>
                      </fieldset>
                    )}

                    <button onClick={this.handleFormSubmit} className="btn btn--full-width btn--red" data-text="Send">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </Waypoint>
        </div>
      </section>
    )
  }
}
