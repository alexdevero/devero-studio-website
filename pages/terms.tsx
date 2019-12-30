import * as React from 'react'
import Link from 'next/link'
import NextSeo from 'next-seo'

// Import utils
import { initGA, logPageView } from '../utils/analytics'

// Import components
import { Footer } from './../components/footer'

// Import styles
import './../styles/styles.scss'

export default () => {
  React.useEffect(() => {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true
    }

    logPageView()
  })

  return (
    <div>
      <NextSeo
        config={{
          title: 'Terms and Conditions | Devero Studio'
        }}
      />

      <div className="container">
        <div className="row justify-content-center pt-5 pb-7">
          <div className="col-md-10 col-lg-8">
            <div className="text--center">
              <h1 className="h1 mb-4">Terms and Conditions</h1>

              <Link href="/">
                <a className="link--black-red text--small">&lt; back home</a>
              </Link>
            </div>

            <p className="mt-3">1. Devero Studio starts working on a project upon receipt of a down payment. Unless otherwise specified in writing, the client is charged the remaining balance upon completion of the project. Websites are made live upon completion of the project, when all payments are cleared. If applicable, hosting and domain name registration fees must be paid every month.</p>

            <p className="mt-3">2. Additional services come at additional fees, on a fee for service basis or on an hourly rate. If clients require additional services, the correspondent fee is added to their invoice and they are charged accordingly.</p>

            <p className="mt-3">3. Delays in project completion may occwur when:</p>

            <ul className="list--unstyled mt-3">
              <li>&mdash;There is a delay in any payments</li>

              <li>&mdash;The client requests further changes in the design, structure, or content of the project</li>

              <li>&mdash;The client purchases an additional service related to the project</li>

              <li>&mdash;There is a delay in the receipt of any materials form the client</li>

              <li>&mdash;Time frame estimates are approximate only and are subject to change at any time at Devero Studio's discretion. At any time, and at its whole discretion, Devero Studio's may decide to put a project on hold.</li>
            </ul>

            <p className="mt-3">4. All of our services are 100% satisfaction guaranteed. We don't stop working until our clients are completely satisfied with their solution. That is our commitment. However, Devero Studio will under no circumstances be held responsible to satisfy unreasonable expectations or request Devero Studio‘s discretion to decide whether or not a request or an expectation is reasonable or lies within the scope of offer of services to its client. As an example, if the client purchases a certain service, but in order to be fully satisfied, Devero Studio judges that an additional service is necessary, then it is no longer Devero Studio's responsibility or commitment to satisfy the client. In other words, Devero Studio guarantees 100% satisfaction within the framework of its original agreement with the client, according to Devero Studio's understanding.</p>

            <p className="mt-3">5. Services or part of services (i.e. elements of a project) that have been approved by the client are considered as services with which the client is 100% satisfied. Any further work on these services (elements of the project) will be invoiced accordingly.</p>

            <p className="mt-3">6. Unless clearly specified otherwise, all project statuses are set as “completed” after a 3 month period has passed (calculated from the first payment date).This means no more work will be done on that project and no service will be provided. This doesn't apply to hosting and domain name registration services, which are provided independently of the project status, and only according to the client's payments.</p>

            <p className="mt-3">7. If client is not satisfied with Devero Studio's Services, client can ask for a refund on any unused monies. Devero Studio will be happy to exercise a refund, after doing it on review.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
