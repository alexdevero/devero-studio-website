/* eslint-disable react/no-multi-comp */
import * as React from 'react'
// import Link from 'next/link'
import { Waypoint } from 'react-waypoint'
import ImageZoom from 'react-medium-image-zoom'

export const Projects = () => {
  let sectionRecentWorks: HTMLDivElement | null

  const [isProjectsListVisible, handleOpenProjectsList] = React.useState(false)

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
            <h2 className="h3 heading--small">Featured projects</h2>

            <div className="divider divider--red divider--slim mb-4" />

            <div className="services__row services__row--one row pt-1">
              <div className="col-md-6 projects-col">
                <div className="projects__wrapper" style={{ backgroundColor: '#181b1f' }}>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Supernova</h2>

                    <h3 className="projects__project-type">Web development</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Supernova',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-supernova@1x.png')
                    }}
                    zoomImage={{
                      alt: 'Supernova',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-supernova@2x.png')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>

              <div className="col-md-6 projects-col">
                <div className="projects__wrapper" style={{ backgroundColor: '#ffb300' }}>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Fresh &amp; Tasty</h2>

                    <h3 className="projects__project-type">Web development</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Fresh & Tasty',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-fresh-and-tasty@1x.png')
                    }}
                    zoomImage={{
                      alt: 'Fresh & Tasty',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-fresh-and-tasty@2x.png')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>

              <div className="col-md-6 projects-col">
                <div className="projects__wrapper" style={{ backgroundColor: '#c544a0' }}>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Slavnosti Růžového Vína</h2>

                    <h3 className="projects__project-type">Web development</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Slavnosti Růžového Vína',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-slavnosti-ruzoveho-vina@1x.png')
                    }}
                    zoomImage={{
                      alt: 'Slavnosti Růžového Vína',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-slavnosti-ruzoveho-vina@2x.png')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>

              <div className="col-md-6 projects-col">
                <div className="projects__wrapper" style={{ backgroundColor: '#323844' }}>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Tesla</h2>

                    <h3 className="projects__project-type">Web design</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Tesla web design concept',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-tesla@1x.png')
                    }}
                    zoomImage={{
                      alt: 'Tesla web design concept',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-tesla@2x.png')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>

              <div className="col-md-6 projects-col">
                <div className="projects__wrapper" style={{ backgroundColor: '#000' }}>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Harley-Davidson</h2>

                    <h3 className="projects__project-type">Web design</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Harley-Davidson web design concept',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-harley-davidson@1x.png')
                    }}
                    zoomImage={{
                      alt: 'Harley-Davidson web design concept',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-harley-davidson@2x.png')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>

              <div className="col-md-6 projects-col">
                <div className="projects__wrapper" style={{ backgroundColor: '#fca22d' }}>
                  <div className="projects__info">
                    <h2 className="projects__project-name">Česká Whisky</h2>

                    <h3 className="projects__project-type">Web development</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Ceska Whisky web design concept',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-ceska-whisky@1x.png')
                    }}
                    zoomImage={{
                      alt: 'Ceska Whisky web design concept',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-ceska-whisky@2x.png')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>

              <div className="col-md-6 projects-col">
                <div className="projects__wrapper" style={{ backgroundColor: '#3a401a' }}>
                  <div className="projects__info">
                    <h2 className="projects__project-name">National Park Šumava</h2>

                    <h3 className="projects__project-type">Web design</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Sumava',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-sumava@1x.png')
                    }}
                    zoomImage={{
                      alt: '',
                      src: require('./../static/images/showcase-thumbnails/macbook-white-sumava@2x.png')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>
            </div>

            <div className="projects__projects">
              {isProjectsListVisible && (
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
                    {/* <h2 className="h5">App design</h2>

                    <ul className="list--unstyled">
                      <li></li>
                    </ul> */}

                    <h2 className="h5">App development</h2>

                    <ul className="list--unstyled">
                      <li>Supernova Cloud <a href="https://www.app.supernova.io" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                      <li>StartMonday</li>
                      <li>Účetnictví Online <a href="https://www.uol.cz" className="link--black-red" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link-alt" style={{ fontSize: 12 }} /></a></li>
                    </ul>

                    {/* <h2 className="h5">Consulting</h2>

                    <ul className="list--unstyled">
                      <li>DámeJídlo</li>
                    </ul> */}
                  </div>
                </div>
              )}

              <div className="text--center">
                <a className="link--black-red" onClick={() => handleOpenProjectsList(!isProjectsListVisible)}><span className={`fas fa-angle-${isProjectsListVisible ? 'up' : 'down'}`} style={{ marginRight: 4 }} /> {isProjectsListVisible ? 'Hide' : 'View'} all projects</a>
              </div>
            </div>
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
