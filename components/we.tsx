import * as React from 'react'

export const We = () => {
  return(
    <section>
      <div className="container pt-5 pb-5 text--center">
        <h1 className="h2">Where We Are</h1>

        <div className="divider divider--black divider--center"></div>

        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <img className="icon--big" src={require('./../static/images/icon-san-francisco.svg')} alt="San Francisco, USA" />

            <h2 className="h3">San Francisco</h2>

            <h3 className="h4">USA</h3>
          </div>

          <div className="col-sm-6 col-lg-3">
            <img className="icon--big" src={require('./../static/images/icon-prague.svg')} alt="Prague, Czech Republic" />

            <h2 className="h3">Prague</h2>

            <h3 className="h4">Czech Republic</h3>
          </div>

          <div className="col-sm-6 col-lg-3">
            <img className="icon--big" src={require('./../static/images/icon-london.svg')} alt="London, United Kingdom" />

            <h2 className="h3">London</h2>

            <h3 className="h4">United Kingdom</h3>
          </div>

          <div className="col-sm-6 col-lg-3">
            <img className="icon--big" src={require('./../static/images/icon-shanghai.svg')} alt="Shanghai, China" />

            <h2 className="h3">Shanghai</h2>

            <h3 className="h4">China</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
