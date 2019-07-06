import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const Testimonials = () => {
  let sectionTestimonials: HTMLDivElement | null

  const handleWaypointEnter = () => {
    sectionTestimonials!.classList.add('fade-in-up')
  }

  return (
    <Waypoint onEnter={handleWaypointEnter} topOffset="-40%">
      <section className="animated" ref={el => sectionTestimonials = el}>
        <div className="container pt-5 pb-5">
          <h1 className="h3 heading--small text--center">What people say</h1>

          <div className="divider divider--red divider--center"></div>

          <div className="row">
            <div className="col-md-4 col-lg-4">
              <blockquote>
                <p className="blockquote__text">&ldquo;Team at Devero Studio is great to work with. Very professional, responsive and delivered outstanding work just like I had imagined as the outcome. Will definitely hire them again.&rdquo;</p>
                <footer className="blockquote__footer">
                  <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-jeremy-fisher.jpg')} />

                  <div className="blockquote__autor">Jeremy Fisher<br/>CEO of RocketSpur</div>
                </footer>
              </blockquote>
            </div>

            <div className="col-md-4 col-lg-4">
              <blockquote>
                <p className="blockquote__text">&ldquo;Devero Studio proved to be a very good choice. Team at Devero Studio did a great job re-designing our website. It exceeded my expectations from design to development.&rdquo;</p>
                <footer className="blockquote__footer">
                  <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-mike-hurley.jpg')} />

                  <div className="blockquote__autor">Mike Hurley<br />CTO at Clava</div>
                </footer>
              </blockquote>
            </div>

            <div className="col-md-4 col-lg-4">
              <blockquote>
                <p className="blockquote__text">&ldquo;Team at Devero Studio has been a tremendous help. What would have taken other agencies 6 months only took them 1.5 months.&rdquo;</p>
                <footer className="blockquote__footer">
                  <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-terrence-jackson.jpg')} />

                  <div className="blockquote__autor">Terrence Jackson<br />CEO of Ringio</div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-lg-4">
              <blockquote>
                <p className="blockquote__text">&ldquo;Great work and done in time! Very important for time-sensitive projects.&rdquo;</p>
                <footer className="blockquote__footer">
                  <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-terri-morris.jpg')} />

                  <div className="blockquote__autor">Terri Morris<br />VP of product at iServe</div>
                </footer>
              </blockquote>
            </div>

            <div className="col-md-4 col-lg-4">
              <blockquote>
                <p className="blockquote__text">&ldquo;People at Devero Studio was a pleasure to work with. They compiled my vision into a true masterpiece, that I am proud to display.&rdquo;</p>
                <footer className="blockquote__footer">
                  <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-joshua-harvey.jpg')} />

                  <div className="blockquote__autor">Joshua Harvey<br />CTO of Volocity</div>
                </footer>
              </blockquote>
            </div>

            <div className="col-md-4 col-lg-4">
              <blockquote>
                <p className="blockquote__text">&ldquo;Devero Studio is professional, very reliable, flexible, and delivers on time. They are able to put your ideas into practice often better than your own conception, incredibly fortunate to work with this agency.&rdquo;</p>
                <footer className="blockquote__footer">
                  <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-ryan-ferguson.jpg')} />

                  <div className="blockquote__autor">Ryan Ferguson<br/>Director of Engineering at Homesnap</div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </Waypoint>
  )
}
