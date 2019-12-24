import * as React from 'react'
import { Waypoint } from 'react-waypoint'

export const Testimonials = () => {
  let sectionTestimonials: HTMLElement | null

  const [activeSlide, handleActiveSlideChange] = React.useState(1)

  const handleWaypointEnter = () => {
    sectionTestimonials!.classList.add('fade-in-up')
  }

  const handleTestimonialSlideChange = (direction: string) => {
    if (direction === 'left') {
      if (activeSlide - 1 > 0) {
        handleActiveSlideChange(activeSlide - 1)
      } else {
        handleActiveSlideChange(6)
      }
    } else {
      if (activeSlide + 1 <= 6) {
        handleActiveSlideChange(activeSlide + 1)
      } else {
        handleActiveSlideChange(1)
      }
    }
  }

  return (
    <Waypoint onEnter={handleWaypointEnter} topOffset="-40%">
      <section className="animated" ref={el => sectionTestimonials = el}>
        <div className="container pt-5 pb-5">
          <h1 className="h3 heading--small text--center">Feedback from our clients</h1>

          <div className="divider divider--red divider--center" />

          <div className="slider-wrapper">
            <div className="slides">
              <div className={`slider__slide${activeSlide === 1 ? ' slider__slide--active' : ''}`}>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <blockquote className="blockquote">
                      <p className="blockquote__text">&ldquo;Devero Studio is great to work with. Professional, responsive and delivered outstanding work. We will definitely hire them again.&rdquo;</p>
                      <footer className="blockquote__footer">
                        <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-jeremy-fisher.jpg')} />

                        <div className="blockquote__autor">Jeremy Fisher</div>

                        {/* <div className="blockquote__position">CEO of RocketSpur</div> */}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className={`slider__slide${activeSlide === 2 ? ' slider__slide--active' : ''}`}>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <blockquote className="blockquote">
                      <p className="blockquote__text">&ldquo;Devero Studio proved to be a very good choice. They did a great job re-designing our website. It exceeded my expectations.&rdquo;</p>
                      <footer className="blockquote__footer">
                        <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-mike-hurley.jpg')} />

                        <div className="blockquote__autor">Mike Hurley</div>

                        {/* <div className="blockquote__position">CTO at Clava</div> */}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className={`slider__slide${activeSlide === 3 ? ' slider__slide--active' : ''}`}>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <blockquote className="blockquote">
                      <p className="blockquote__text">&ldquo;Devero Studio has been a tremendous help. What would have taken other agencies 6 months only took them 1.5 months.&rdquo;</p>
                      <footer className="blockquote__footer">
                        <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-terrence-jackson.jpg')} />

                        <div className="blockquote__autor">Terrence Jackson</div>

                        {/* <div className="blockquote__position">CEO of Ringio</div> */}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className={`slider__slide${activeSlide === 4 ? ' slider__slide--active' : ''}`}>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <blockquote className="blockquote">
                      <p className="blockquote__text">&ldquo;Great work and delivered in time! Their way of handling projects is excellent and interactive. It was great experience to work with Devero Studio.&rdquo;</p>
                      <footer className="blockquote__footer">
                        <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-terri-morris.jpg')} />

                        <div className="blockquote__autor">Terri Morris</div>

                        {/* <div className="blockquote__position">VP of product at ART Lab</div> */}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className={`slider__slide${activeSlide === 5 ? ' slider__slide--active' : ''}`}>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <blockquote className="blockquote">
                      <p className="blockquote__text">&ldquo;Devero Studio was a pleasure to work with. They re-designed our website and created design I am proud to show.&rdquo;</p>
                      <footer className="blockquote__footer">
                        <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-joshua-harvey.jpg')} />

                        <div className="blockquote__autor">Joshua Harvey</div>

                        {/* <div className="blockquote__position">CTO of Volocity</div> */}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className={`slider__slide${activeSlide === 6 ? ' slider__slide--active' : ''}`}>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <blockquote className="blockquote">
                      <p className="blockquote__text">&ldquo;Devero Studio is professional, very reliable, flexible, and delivers on time. We was glad to work with this agency.&rdquo;</p>
                      <footer className="blockquote__footer">
                        <img className="blockquote__avatar" src={require('./../static/images/testimonials-photos/photo-ryan-ferguson.jpg')} />

                        <div className="blockquote__autor">Ryan Ferguson</div>

                        {/* <div className="blockquote__position">Director of Engineering at Homesnap</div> */}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <button className="slider__arrow slider__arrow--left" onClick={() => handleTestimonialSlideChange('left')} />
              <button className="slider__arrow slider__arrow--right" onClick={() => handleTestimonialSlideChange('right')} />
            </div>

            <ul className="slider__dots list--unstyled">
              <li>
                <span className={`slider__dot${activeSlide === 1 ? ' slider__dot--active' : ''}`} onClick={() => handleActiveSlideChange(1)} />
              </li>

              <li>
                <span className={`slider__dot${activeSlide === 2 ? ' slider__dot--active' : ''}`} onClick={() => handleActiveSlideChange(2)} />
              </li>

              <li>
                <span className={`slider__dot${activeSlide === 3 ? ' slider__dot--active' : ''}`} onClick={() => handleActiveSlideChange(3)} />
              </li>

              <li>
                <span className={`slider__dot${activeSlide === 4 ? ' slider__dot--active' : ''}`} onClick={() => handleActiveSlideChange(4)} />
              </li>

              <li>
                <span className={`slider__dot${activeSlide === 5 ? ' slider__dot--active' : ''}`} onClick={() => handleActiveSlideChange(5)} />
              </li>

              <li>
                <span className={`slider__dot${activeSlide === 6 ? ' slider__dot--active' : ''}`} onClick={() => handleActiveSlideChange(6)} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Waypoint>
  )
}
