/* eslint-disable react/no-multi-comp */
import * as React from 'react'
// import Link from 'next/link'
import { Waypoint } from 'react-waypoint'
import ImageZoom from 'react-medium-image-zoom'
import Masonry from 'react-masonry-component'

export const Projects = () => {
  let sectionRecentWorks: HTMLDivElement | null

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

            <Masonry className="masonry-wrapper">
              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <div className="projects__info">
                    <h2 className="projects__project-name">Trinity</h2>

                    <h3 className="projects__project-type">Web design, web development</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Trinity',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-trinity-small.jpg')
                    }}
                    zoomImage={{
                      alt: 'Trinity',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-trinity.jpg')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <div className="projects__info">
                    <h2 className="projects__project-name">Maelstrom</h2>

                    <h3 className="projects__project-type">Web design, web development</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Maelstrom',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-maelstrom-small.jpg')
                    }}
                    zoomImage={{
                      alt: 'Maelstrom',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-maelstrom.jpg')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <div className="projects__info">
                    <h2 className="projects__project-name">Material</h2>

                    <h3 className="projects__project-type">Web design, web development</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Material',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-material-small.jpg')
                    }}
                    zoomImage={{
                      alt: 'Material',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-material.jpg')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <div className="projects__info">
                    <h2 className="projects__project-name">Alice</h2>

                    <h3 className="projects__project-type">Web design, web development</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Alice',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-alice-small.jpg')
                    }}
                    zoomImage={{
                      alt: 'Alice',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-alice.jpg')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <div className="projects__info">
                    <h2 className="projects__project-name">Cube</h2>

                    <h3 className="projects__project-type">Web design, web development</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Cube',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-cube-small.jpg')
                    }}
                    zoomImage={{
                      alt: 'Cube',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-cube.jpg')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="projects__wrapper">
                  <div className="projects__info">
                    <h2 className="projects__project-name">National Park Šumava</h2>

                    <h3 className="projects__project-type">Web design, web development</h3>
                  </div>

                  <ImageZoom
                    image={{
                      alt: 'Sumava',
                      className: 'projects__thumbnail thumbnail',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-sumava-v2-small.jpg')
                    }}
                    zoomImage={{
                      alt: 'Sumava',
                      src: require('./../static/images/projects-thumbnails/snapshot-top-sumava-v2.jpg')
                    }}
                  />

                  {/* <Link href={generateCaseStudyBtnLink()}><a className="link--black-red link--underline">See case study</a></Link> */}
                </div>
              </div>
            </Masonry>
          </div>
        </Waypoint>
      </div>
    </section>
  )
}
