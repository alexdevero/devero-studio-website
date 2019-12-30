/* eslint-disable react/no-multi-comp */
import * as React from 'react'
import Link from 'next/link'
import Masonry from 'react-masonry-component'
import { Waypoint } from 'react-waypoint'

export const Works = () => {
  let sectionRecentWorks: HTMLDivElement | null

  // const [isProjectsListVisible, handleOpenProjectsList] = React.useState(false)

  const handleWaypointEnter = (section: string) => {
    switch (section) {
      case 'recentWorks':
        sectionRecentWorks!.classList.add('fade-in-up')
        break
    }
  }

  return (
    <section id="works" className="pb-5">
      <div className="container pt-5 pb-5">
        <Waypoint onEnter={() => handleWaypointEnter('recentWorks')} topOffset="-40%">
          <div className="animated" ref={el => sectionRecentWorks = el}>
            <h2 className="h3 heading--small">Featured works</h2>

            <div className="divider divider--red divider--slim mb-4" />

            <Masonry className="masonry-wrapper">
              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <Link href="/case-supernova-studio">
                    <a>
                      <div className="projects__info">
                        <h2 className="projects__project-name">Supernova Studio</h2>

                        <h3 className="projects__project-type">Web development</h3>
                      </div>

                      <img
                        className="projects__thumbnail thumbnail"
                        src={require('./../static/images/showcase-thumbnails/snapshot-top-supernova-small.png')}
                        alt="Supernova Studio website snapshot" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <Link href="/case-svaca">
                    <a>
                      <div className="projects__info">
                        <h2 className="projects__project-name">Cerstva Svaca</h2>

                        <h3 className="projects__project-type">Web development</h3>
                      </div>

                      <img
                        className="projects__thumbnail thumbnail"
                        src={require('./../static/images/showcase-thumbnails/snapshot-top-cerstvasvaca-small.jpg')}
                        alt="Cerstva Svaca website snapshot" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                <Link href="/case-fresh-tasty">
                    <a>
                      <div className="projects__info">
                        <h2 className="projects__project-name">Fresh &amp; Tasty</h2>

                        <h3 className="projects__project-type">Web development</h3>
                      </div>

                      <img
                        className="projects__thumbnail thumbnail"
                        src={require('./../static/images/showcase-thumbnails/snapshot-top-fresh-and-tasty-small.png')}
                        alt="Fresh & Tasty website snapshot" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <Link href="/case-whisky">
                    <a>
                      <div className="projects__info">
                        <h2 className="projects__project-name">Česká Whisky</h2>

                        <h3 className="projects__project-type">Web design & development</h3>
                      </div>

                      <img
                        className="projects__thumbnail thumbnail"
                        src={require('./../static/images/showcase-thumbnails/snapshot-top-ceska-whisky-desktop-v6-small.jpg')}
                        alt="Ceska Whisky web design concept" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <Link href="/case-slavnosti">
                    <a>
                      <div className="projects__info">
                        <h2 className="projects__project-name">Slavnosti Růžového Vína</h2>

                        <h3 className="projects__project-type">Web development</h3>
                      </div>

                      <img
                        className="projects__thumbnail thumbnail"
                        src={require('./../static/images/showcase-thumbnails/snapshot-top-slavnosti-ruzoveho-vina-small.png')}
                        alt="Slavnosti Růžového Vína website snapshot" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <Link href="/">{/* /case-tesla */}
                    <a>
                      <div className="projects__info">
                        <h2 className="projects__project-name">Tesla</h2>

                        <h3 className="projects__project-type">Web design</h3>
                      </div>

                      <img
                        className="projects__thumbnail thumbnail"
                        src={require('./../static/images/showcase-thumbnails/snapshot-top-tesla-web-design-concept-small.jpg')}
                        alt="Tesla web design concept" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <Link href="/">{/* /case-harley */}
                    <a>
                      <div className="projects__info">
                        <h2 className="projects__project-name">Harley-Davidson</h2>

                        <h3 className="projects__project-type">Web design</h3>
                      </div>

                      <img
                        className="projects__thumbnail thumbnail"
                        src={require('./../static/images/showcase-thumbnails/snapshot-top-harley-davidson-landing-page-v6-desktop-small.jpg')}
                        alt="Harley-Davidson web design concept" />
                    </a>
                  </Link>
                </div>
              </div>
            </Masonry>

            <div className="projects__projects mt-6">
              {/* {isProjectsListVisible && (
                <div className="row mb-5">
                  <div className="col-sm-2 col-md-4">
                    <h2 className="h5">Web design</h2>

                    <ul className="list--unstyled">
                      <li>Tesla Motors</li>
                      <li>Harley Davidson</li>
                      <li>Česká Whisky</li>
                      <li>Posli</li>
                    </ul>
                  </div>

                  <div className="col-sm-2 col-md-4">
                    <h2 className="h5 mt-4">Web development</h2>

                    <ul className="list--unstyled">
                      <li>Supernova <a href="https://www.supernova.io" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                      <li>Fresh & Tasty <a href="https://www.freshandtasty.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                      <li>Čerstvá Sváča</li>
                      <li>Slavnosti Růžového Vína <a href="https://www.slavnostiruzovehovina.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                      <li>Česká Whisky <a href="https://www.ceskawhisky.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                      <li>Trinity</li>
                      <li>Material</li>
                      <li>Maelstrom</li>
                      <li>Sumava</li>
                    </ul>
                  </div>

                  <div className="col-sm-2 col-md-4">
                    <h2 className="h5">App design</h2>

                    <ul className="list--unstyled">
                      <li></li>
                    </ul>

                    <h2 className="h5">App development</h2>

                    <ul className="list--unstyled">
                      <li>Supernova Cloud <a href="https://www.app.supernova.io" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                      <li>StartMonday</li>
                      <li>Účetnictví Online <a href="https://www.uol.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                    </ul>

                    <h2 className="h5">Consulting</h2>

                    <ul className="list--unstyled">
                      <li>DámeJídlo</li>
                    </ul>
                  </div>
                </div>
              )} */}

              <div className="text--center">
                {/* <a className="link--black-red" onClick={() => handleOpenProjectsList(!isProjectsListVisible)}><span className={`fas fa-angle-${isProjectsListVisible ? 'up' : 'down'}`} style={{ marginRight: 4 }} /> {isProjectsListVisible ? 'Hide' : 'View'} all projects</a> */}
                <Link href="/portfolio">
                  <a className="h4 link--black-red"><strong>View all projects <span className="fas fa-long-arrow-alt-right text--underline" /></strong></a>
                </Link>
              </div>
            </div>
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
