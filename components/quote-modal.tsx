import * as React from 'react'
import $ from 'jquery'

interface QuoteModalInterface {
  handleQuoteClick: () => void;
}

export const QuoteModal = (props: QuoteModalInterface) => {
  const [currency, setCurrency] = React.useState<'EUR' | 'USD'>('EUR')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [projectType, setProjectType] = React.useState('')
  const [budget, setBudget] = React.useState('1')
  const [qUsername, setQUsername] = React.useState('')
  const [isQuoteErrorShown, setIsQuoteErrorShown] = React.useState(false)
  const [isQuoteErrorBotShown, setIsQuoteErrorBotShown] = React.useState(false)
  const [isQuoteFormSubmitted, setIsQuoteFormSubmitted] = React.useState(false)

  const handleQuoteFormSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (qUsername.length > 0) {
      setIsQuoteErrorBotShown(true)
      return
    }

    if (currency.length !== 0 && name.length !== 0 && email.length !== 0 && description.length !== 0 && projectType.length !== 0 && budget.length !== 0) {
      setTimeout(() => {
        const data = {
          currency: currency,
          name: name,
          email: email,
          description: description,
          projectType: projectType,
          budget: budget
        }

        $.ajax({
          data: data,
          method: 'POST',
          url: './../static/quote.php',
          headers: {
            'Access-Control-Allow-Origin': '*'
         },
          success: function(data) {
            console.info(data)

            setIsQuoteFormSubmitted(true)
          },
          error: function(xhr, status, err) {
            console.log(xhr)
            console.error(status, err.toString())
          }
        })

        setCurrency('EUR')
        setName('')
        setEmail('')
        setDescription('')
        setProjectType('')
        setBudget('1')
        setQUsername('')
      }, 1000)
    } else {
      setIsQuoteErrorShown(true)
    }
  }

  return (
    <div className="quote-modal">
      <button className="quote-modal__button" onClick={props.handleQuoteClick} />

      <form>
        <h2 className="h4">1) How can we help you?</h2>

        <div className="row">
          <div className="col-sm-6 col-md-4">
            <input className="radio-radio" defaultChecked={projectType === 'Web Design'} type="radio" name="radQuote" id="radQuoteDesign" />

            <label className="radio-wrapper" htmlFor="radQuoteDesign" onClick={() => setProjectType('Web Design')}>
              <span className="radio-label">Web Design</span>
            </label>
          </div>

          <div className="col-sm-6 col-md-4 mt-3 mt-sm-0">
            <input className="radio-radio" defaultChecked={projectType === 'Web Development'} type="radio" name="radQuote" id="radQuoteDevelopment" />

            <label className="radio-wrapper" htmlFor="radQuoteDevelopment" onClick={() => setProjectType('Web Development')}>
              <span className="radio-label">Web Development</span>
            </label>
          </div>

          {/* <div className="col-sm-6 col-md-4">
            <input className="radio-radio" defaultChecked={projectType === 'New Website'} type="radio" name="radQuote" id="radQuoteNewWebsite" />

            <label className="radio-wrapper" htmlFor="radQuoteNewWebsite" onClick={() => setProjectType('New Website')}>
              <span className="radio-label">New Website</span>
            </label>
          </div> */}

          <div className="col-sm-6 col-md-4 mt-3 mt-md-0">
            <input defaultChecked={projectType === 'Existing Website'} className="radio-radio" type="radio" name="radQuote" id="radQuoteExWebsite" />

            <label className="radio-wrapper" htmlFor="radQuoteExWebsite" onClick={() => setProjectType('Existing Website')}>
              <span className="radio-label">Existing Website</span>
            </label>
          </div>

          <div className="col-sm-6 col-md-4 mt-3">
            <input className="radio-radio" defaultChecked={projectType === 'eCommerce'} type="radio" name="radQuote" id="radQuoteCommerce" />

            <label className="radio-wrapper" htmlFor="radQuoteCommerce" onClick={() => setProjectType('eCommerce')}>
              <span className="radio-label">eCommerce</span>
            </label>
          </div>

          <div className="col-sm-6 col-md-4 mt-3">
            <input className="radio-radio" defaultChecked={projectType === 'App Design'} type="radio" name="radQuote" id="radQuoteAppDesign" />

            <label className="radio-wrapper" htmlFor="radQuoteAppDesign" onClick={() => setProjectType('App Design')}>
              <span className="radio-label">App Design</span>
            </label>
          </div>

          <div className="col-sm-6 col-md-4 mt-3">
            <input className="radio-radio" defaultChecked={projectType === 'App Development'} type="radio" name="radQuote" id="radQuoteAppDev" />

            <label className="radio-wrapper" htmlFor="radQuoteAppDev" onClick={() => setProjectType('App Development')}>
              <span className="radio-label">App Development</span>
            </label>
          </div>
        </div>

        <h2 className="h4 mt-4">2) Describe project</h2>

        <fieldset className="input--absolute mt-4 mb-4">
          <textarea placeholder="The more details you give, the more accurate is the estimation" name="quoteDescription" id="quoteDescription" onChange={(event) => setDescription(event.currentTarget.value)} required />
        </fieldset>

        <h2 className="h4 mt-4">3) Intended Budget (<span className="link--black-red text--underline" onClick={() => setCurrency('EUR')}>EUR</span>/<span className="link--black-red text--underline" onClick={() => setCurrency('USD')}>USD</span>)</h2>

        <input defaultValue={budget} type="range" name="quoteBudget" id="quoteBudget" min={1} max={100} step={1} onChange={(event) => setBudget(event.currentTarget.value)} />

        <small><strong>Current budget: {budget === '1' ? '<=' + budget : budget === '100' ? '>=' + budget : budget} K {currency}</strong></small>

        <h2 className="h4 mt-4">4) Contact information</h2>

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

        <fieldset className="input--absolute input--username">
          <input onChange={(event) => setQUsername(event.currentTarget.value)} id="quoteUsername" name="quoteUsername" type="text" />

          <label htmlFor="quoteUsername">Username *</label>
        </fieldset>

        {isQuoteErrorShown && (
          <fieldset className="mb-3 mt-3">
            <p className="text--small"><strong>Please, make sure to fill all fields.</strong></p>
          </fieldset>
        )}

        {isQuoteErrorBotShown && (
          <fieldset className="mb-3 mt-3">
            <p className="text--small"><strong>We don&apos;t work with spammers and bots.</strong></p>
          </fieldset>
        )}

        {isQuoteFormSubmitted && (
          <fieldset className="mb-3 mt-3">
            <p className="text--small"><strong>Your message is on the way. We will reply in three days.</strong></p>
          </fieldset>
        )}

        <button onClick={handleQuoteFormSubmit} className="btn btn--full-width btn--black-red contact-button-cta mt-4" data-text="Send">Send</button>
      </form>
    </div>
  )
}
