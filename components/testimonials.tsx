import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const Testimonials = () => {
  let sectionTestimonials: HTMLElement | null

  const [activeSlide, handleActiveSlideChange] = React.useState('one')

  const handleWaypointEnter = () => {
    sectionTestimonials!.classList.add('fade-in-up')
  }

  return (
    <Waypoint onEnter={handleWaypointEnter} topOffset="-40%">
      <section className="animated" ref={el => sectionTestimonials = el}>
        <div className="container pt-5 pb-5">
          <h1 className="h3 heading--small text--center">What people say</h1>

          <div className="divider divider--red divider--center" />

          <div className={`slider__slide${activeSlide === 'one' ? ' slider__slide--active' : ''}`}>
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <blockquote className="blockquote">
                  <p className="blockquote__text">&ldquo;Devero Studio is great to work with. Professional, responsive and delivered outstanding work. We will definitely hire them again.&rdquo;</p>
                  <footer className="blockquote__footer">
                    {/* <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-jeremy-fisher.jpg')} /> */}

                    <div className="blockquote__autor">Jeremy Fisher</div>

                    <div className="blockquote__position">CEO of RocketSpur</div>
                  </footer>
                </blockquote>
              </div>

              <div className="col-md-4 col-lg-4">
                <blockquote className="blockquote">
                  <p className="blockquote__text">&ldquo;Devero Studio proved to be a very good choice. They did a great job re-designing our website. It exceeded my expectations.&rdquo;</p>
                  <footer className="blockquote__footer">
                    {/* <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-mike-hurley.jpg')} /> */}

                    <div className="blockquote__autor">Mike Hurley</div>

                    <div className="blockquote__position">CTO at Clava</div>
                  </footer>
                </blockquote>
              </div>

              <div className="col-md-4 col-lg-4">
                <blockquote className="blockquote">
                  <p className="blockquote__text">&ldquo;Team at Devero Studio has been a tremendous help. What would have taken other agencies 6 months only took them 1.5 months.&rdquo;</p>
                  <footer className="blockquote__footer">
                    {/* <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-terrence-jackson.jpg')} /> */}

                    <div className="blockquote__autor">Terrence Jackson</div>

                    <div className="blockquote__position">CEO of Ringio</div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <div className={`slider__slide${activeSlide === 'two' ? ' slider__slide--active' : ''}`}>
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <blockquote className="blockquote">
                  <p className="blockquote__text">&ldquo;Great work and delivered in time! This is very important especially for time-sensitive projects.&rdquo;</p>
                  <footer className="blockquote__footer">
                    {/* <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-terri-morris.jpg')} /> */}

                    <div className="blockquote__autor">Terri Morris</div>

                    <div className="blockquote__position">VP of product at ART Lab</div>
                  </footer>
                </blockquote>
              </div>

              <div className="col-md-4 col-lg-4">
                <blockquote className="blockquote">
                  <p className="blockquote__text">&ldquo;Devero Studio was a pleasure to work with. They compiled my vision into a true masterpiece, that I am proud to show.&rdquo;</p>
                  <footer className="blockquote__footer">
                    {/* <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-joshua-harvey.jpg')} /> */}

                    <div className="blockquote__autor">Joshua Harvey</div>

                    <div className="blockquote__position">CTO of Volocity</div>
                  </footer>
                </blockquote>
              </div>

              <div className="col-md-4 col-lg-4">
                <blockquote className="blockquote">
                  <p className="blockquote__text">&ldquo;Devero Studio is professional, very reliable, flexible, and delivers on time. We was glad to work with this agency.&rdquo;</p>
                  <footer className="blockquote__footer">
                    {/* <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-ryan-ferguson.jpg')} /> */}

                    <div className="blockquote__autor">Ryan Ferguson</div>

                    <div className="blockquote__position">Director of Engineering at Homesnap</div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <ul className="slider__dots list--unstyled">
            <li>
              <span className={`slider__dot${activeSlide === 'one' ? ' slider__dot--active' : ''}`} onClick={() => handleActiveSlideChange('one')} />
            </li>

            <li>
              <span className={`slider__dot${activeSlide === 'two' ? ' slider__dot--active' : ''}`} onClick={() => handleActiveSlideChange('two')} />
            </li>
          </ul>
        </div>
      </section>
    </Waypoint>
  )
}
