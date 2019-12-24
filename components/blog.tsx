import * as React from 'react'
import axios from 'axios'
import { Waypoint } from 'react-waypoint'
import { xml2js } from 'xml-js'

interface PostInterface {
  description: { _cdata: string };
  id: {
    _attributes: { xmlns: string };
    _text: string
  };
  link: {
    _attributes: { xmlns: string };
    _text: string
  };
  // pubDate: string;
  pubDate: {
    _attributes: { xmlns: string };
    _text: string
  };
  title: {
    _attributes: { xmlns: string };
    _text: string
  };
}

export const Blog = () => {
  let sectionBlog: HTMLDivElement | null

  const [blogData, updateBlogData] = React.useState([])

  React.useEffect(() => {
    async function fetchBlog() {
      const data = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://blog.alexdevero.com/feed/`).then(res => res.data)
      const dataConverted: any = await xml2js(data, { compact: true/*, spaces: 2*/ })

      let dataForState = []

      function dateFormatter(date: string) {
        const newDate = new Date(Date.parse(date))
        let newDay = newDate.getDate()
        let newMonth = newDate.getMonth() + 1 // Month starts with 0 so it is necessary to add 1
        let newYear = newDate.getFullYear()

        return `${newDay < 10 ? '0' + newDay : newDay}/${newMonth}/${newYear}`
      }

      await dataConverted.rss.channel.item.map((post: PostInterface) => {
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
        <h1 className="h4 heading--small">From our blog</h1>

        <div className="divider divider--red" />

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
