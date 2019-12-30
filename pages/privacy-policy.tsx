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
          title: 'Privacy Policy | Devero Studio'
        }}
      />

      <div className="container">

        <div className="row justify-content-center pt-5 pb-7">
          <div className="col-md-10 col-lg-8">
            <div className="text--center">
              <h1 className="h1 mb-4">Privacy Policy</h1>

              <Link href="/">
                <a className="link--black-red text--small">&lt; back home</a>
              </Link>
            </div>

            <h2 className="h2 mt-5">Our commitment to privacy</h2>

            <p className="mt-3">Your privacy is important to us. To better protect your privacy we provide this notice explaining our information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on every pages of our website.</p>

            <h2 className="h2 mt-5">The information we collect</h2>

            <p className="mt-3">This notice applies to all information collected or submitted on the Devero Studio's website or via phone with a Devero Studio representative. The types of information collected are personal, billing and project related. We might also collect information from you regarding third parties in relation to you (i.e. hosting company etc.).</p>

            <h2 className="h2 mt-5">The way we use information</h2>

            <p className="mt-3">We use the information you provide about yourself to provide services. We do not share this information with outside parties except to the extent necessary to complete your request for our services. Devero Studio reserves the right to reveal this information pursuant to a valid subpoena or court order.</p>

            <p className="mt-3">We use return email addresses to answer the email we receive for tech support, customer service, tell-a-friend, email updates. Such addresses are not used for any other purpose and are not shared with outside parties.</p>

            <p className="mt-3">Finally, we never use or share the personally identifiable information provided to us online, via phone, or in person, in ways unrelated to the ones described above without also providing you an opportunity to opt-out or otherwise prohibit such unrelated uses.</p>

            <h2 className="h2 mt-5">Our commitment to data security</h2>

            <p className="mt-3">To prevent unauthorized access, maintain data accuracy, and ensure the correct use of information, we have put in place appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online and offline.</p>

            <p className="mt-3">All online credit card transactions are performed only on secure servers through a secure SSL connection and comply with the latest standards in the industry. All billing information, including credit cards information, are deleted upon termination of the project with the client.</p>

            <h2 className="h2 mt-5">Third-party websites</h2>

            <p className="mt-3">This website may provide links to third-party websites. Any such links are provided solely as a convenience to you. Devero Studio has no control over these websites or their content and does not assume any responsibility or liability for these websites.Devero Studio does not endorse or make any representations about these websites, or any information, materials, or products found thereon. If you access any of the third-party websites linked on this Web site, you do so at your own risk.</p>

            <h2 className="h2 mt-5">How you can access or correct your information</h2>

            <p className="mt-3">At any time, you may later review or update the personal information we have collected online from you by contacting us at: studio@devero.io</p>

            <p className="mt-3">To protect your privacy and security, we will also take reasonable steps to verify your identity before granting access or making corrections.</p>

            <h2 className="h2 mt-5">How to contact us</h2>

            <p className="mt-3">Should you have other questions or concerns about these privacy policies, please send us an email at studio@devero.io</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
