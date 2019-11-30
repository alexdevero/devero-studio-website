import * as React from 'react'
import axios from 'axios'
import { Waypoint } from 'react-waypoint'
import { xml2js } from 'xml-js'

export const Blog = () => {
  let sectionBlog: HTMLDivElement | null

  const [blogData, updateBlogData] = React.useState([])

  React.useEffect(() => {
    async function fetchBlog() {
      const data = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://blog.alexdevero.com/feed/`).then(res => res.data)
      const dataConverted = await xml2js(data, { compact: true/*, spaces: 2*/ })

      let dataForState = []
      let month = ''

      function dateFormatter(date) {
        switch (date.substr(8, 3)) {
          case 'Jan':
            month = '01'
            break
          case 'Feb':
            month = '02'
            break
          case 'Mar':
            month = '03'
            break
          case 'Apr':
            month = '04'
            break
          case 'May':
            month = '05'
            break
          case 'Jun':
            month = '06'
            break
          case 'Jul':
            month = '07'
            break
          case 'Aug':
            month = '08'
            break
          case 'Sep':
            month = '09'
            break
          case 'Oct':
            month = '10'
            break
          case 'Nov':
            month = '11'
            break
          default:
            return '12'
        }

        return `${date.substr(date.indexOf(', ') + 2, 2)}/${month}/${date.substr(12, 4)}`
      }

      await dataConverted.rss.channel.item.map((post) => {
        dataForState.push({
          description: post.description._cdata,
          id: post['post-id']._text,
          link: post.link._text,
          // pubDate: post.pubDate._text,
          pubDate: dateFormatter(post.pubDate._text),
          title: post.title._text
        })
      })

      updateBlogData(dataForState)
    }

    fetchBlog()
  }, [])

  const handleWaypointEnter = () => {
    sectionBlog!.classList.add('fade-in-up')
  }

  return (
    <Waypoint onEnter={handleWaypointEnter} topOffset="-40%">
      <div className="container animated pb-5" ref={el => sectionBlog = el}>
        <h1 className="h4 heading--small text--center">From our blog</h1>

        <div className="divider divider--red divider--center" />

        <div className="row">
          {blogData.map((blogPost, index) => {
            return (
              <div className={`col-sm-6 col-md-4${index > 1 ? ' mt-5' : ''}${index < 3 ? ' mt-md-0' : ''}${index > 2 ? ' mt-md-5' : ''}`} key={blogPost.id}>
                <div>
                  <div className="blog-post__title"><strong>{blogPost.title}</strong></div>

                  <div className="blog-post__date text--small mt-1 mb-1">{blogPost.pubDate}</div>

                  {/* <div className="blog-post__description">{blogPost.description.substr(blogPost.description.indexOf('<p>') + 3, 135)}...</div> */}

                  <a className="link--black-red" href={blogPost.link} target="_blank" rel="noopener noreferrer">Read on the blog</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Waypoint>
  )
}
