import * as React from 'react'

export const Testimonials = () => {
  return(
    <section>
      <div className="container pt-5 pb-5">
        <h1 className="h3 heading--small text--center">Our clients said</h1>

        <div className="divider divider--red divider--center"></div>

        <div className="row">
          <div className="col-md-4 col-lg-4">
            <blockquote>
              <p className="blockquote__text">&ldquo;Team at Devero Studio is great to work with. Very professional, responsive and delivered outstanding work just like I had imagined as the outcome. Will definitely hire them again.&rdquo;</p>
              <footer className="blockquote__footer">&mdash;Jeremy Fisher, CEO of RocketSpur</footer>
            </blockquote>
          </div>

          <div className="col-md-4 col-lg-4">
            <blockquote>
              <p className="blockquote__text">&ldquo;Devero Studio proved to be a very good choice. Team at Devero Studio did a great job re-designing our website. It exceeded my expectations from design to development.&rdquo;</p>
              <footer className="blockquote__footer">&mdash;Mike Hurley, CTO at Clava</footer>
            </blockquote>
          </div>

          <div className="col-md-4 col-lg-4">
            <blockquote>
              <p className="blockquote__text">&ldquo;Team at Devero Studio has been a tremendous help. What would have taken other agencies 6 months only took them 1.5 months.&rdquo;</p>
              <footer className="blockquote__footer">&mdash;Terrence Jackson, CEO of Ringio</footer>
            </blockquote>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-lg-4">
            <blockquote>
              <p className="blockquote__text">&ldquo;Great work and done in time! Very important for time-sensitive projects.&rdquo;</p>
              <footer className="blockquote__footer">&mdash;Terri Morris, VP of product at iServe</footer>
            </blockquote>
          </div>

          <div className="col-md-4 col-lg-4">
            <blockquote>
              <p className="blockquote__text">&ldquo;People at Devero Studio was a pleasure to work with. They compiled my vision into a true masterpiece, that I am proud to display.&rdquo;</p>
              <footer className="blockquote__footer">&mdash;Joshua Harvey, CTO of Volocity</footer>
            </blockquote>
          </div>

          <div className="col-md-4 col-lg-4">
            <blockquote>
              <p className="blockquote__text">&ldquo;Devero Studio is professional, very reliable, flexible, and delivers on time. They are able to put your ideas into practice often better than your own conception, incredibly fortunate to work with this agency.&rdquo;</p>
              <footer className="blockquote__footer">&mdash;Ryan Ferguson, Director of Engineering at Homesnap</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
