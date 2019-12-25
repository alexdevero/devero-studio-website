import * as React from 'react'

interface QuoteModalInterface {
  handleQuoteClick: () => void;
}

export const QuoteModal = (props: QuoteModalInterface) => {
  const [currency, setCurrency] = React.useState('EUR')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [projectType, setProjectType] = React.useState('')
  const [] = React.useState('')

  // const handleCurrencyChange = (currency: string) => {
  //   console.log(currency)
  // }

  // const handleInputChange = (inputType: string, event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
  //   switch (inputType) {
  //     case 'name'
  //   }
  // }

  const handleQuoteFormSubmit = () => {
    if (currency.length !== 0 && name.length !== 0 && email.length !== 0 && description.length !== 0 && projectType.length !== 0) {}
  }

  return (
    <div className="quote-modal">
      <button className="quote-modal__button" onClick={props.handleQuoteClick} />

      <form>
        <h2 className="h3">1) How can we help you?</h2>

        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <label htmlFor="radQuoteDesign" onClick={() => setProjectType('Web Design')}>
              <input type="radio" name="radQuote" id="radQuoteDesign"/>

              <span>Web Design</span>
            </label>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <label htmlFor="radQuoteDevelopment" onClick={() => setProjectType('Web Development')}>
              <input type="radio" name="radQuote" id="radQuoteDevelopment"/>

              <span>Web Development</span>
            </label>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <label htmlFor="radQuoteWebsite" onClick={() => setProjectType('New Website')}>
              <input type="radio" name="radQuote" id="radQuoteWebsite"/>

              <span>New Website</span>
            </label>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <label htmlFor="radQuoteWebsite" onClick={() => setProjectType('Existing Website')}>
              <input type="radio" name="radQuote" id="radQuoteWebsite"/>

              <span>Existing Website</span>
            </label>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <label htmlFor="radQuoteCommerce" onClick={() => setProjectType('eCommerce')}>
              <input type="radio" name="radQuote" id="radQuoteCommerce"/>

              <span>eCommerce</span>
            </label>
          </div>
        </div>

        <h2 className="h3 mt-4">2) Describe project</h2>

        <textarea name="quoteDescription" id="quoteDescription"  onChange={(event) => setDescription(event.currentTarget.value)}></textarea>

        <h2 className="h3 mt-4">3) Intended Budget (<span onClick={() => setCurrency('EUR')}>EUR</span>/<span onClick={() => setCurrency('USD')}>USD</span>)</h2>¨

        <h2 className="h3 mt-4">4) Contact information</h2>

        <div className="row">
          <div className="col-sm-6">
            <fieldset className="input--absolute">
              <input onChange={(event) => setName(event.currentTarget.value)} id="quoteName" name="quoteName" type="text" required />

              <label htmlFor="quoteName">Name</label>
            </fieldset>
          </div>

          <div className="col-sm-6 mt-4 mt-sm-0">
            <fieldset className="input--absolute">
              <input onChange={(event) => setEmail(event.currentTarget.value)} id="quoteEmail" name="quoteEmail" type="email" required />

              <label htmlFor="quoteEmail">Email</label>
            </fieldset>
          </div>
        </div>

        <button onClick={handleQuoteFormSubmit} className="btn btn--full-width btn--black-red contact-button-cta mt-4" data-text="Send">Send</button>
      </form>
    </div>
  )
}
