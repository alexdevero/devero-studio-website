import Link from 'next/link'

export default () => {
  return(<div>
    Portfolio <Link href='/'>
      <a>back home</a>
    </Link>

    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <Link href="/portfolio/">
            <a className="portfolio__link">
              <img className="portfolio__thumbnail thumbnail" src={require('./../static/images/showcase-thumbnails/thumbnail-tesla-web-design-concept.jpg')} alt="Tesla web design concept.jpg" />
            </a>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link href="/portfolio/">
            <a className="portfolio__link">
              <img className="portfolio__thumbnail thumbnail" src={require('./../static/images/showcase-thumbnails/thumbnail-harley-davidson.jpg')} alt="Harley-Davidson web design concept.jpg" />
            </a>
          </Link>
        </div>

        <div className="col-md-6 col-lg-4">
          <Link href="/portfolio/">
            <a className="portfolio__link">
              <img className="portfolio__thumbnail thumbnail" src={require('./../static/images/showcase-thumbnails/thumbnail-ceska-whisky.jpg')} alt="Ceska Whisky web design concept.jpg" />
            </a>
          </Link>
        </div>

        {/* <div className="row col-md-6 col-lg-4"></div> */}

        {/* <div className="row col-md-6 col-lg-4"></div> */}

        {/* <div className="row col-md-6 col-lg-4"></div> */}

        {/* <div className="row col-md-6 col-lg-4"></div> */}

        {/* <div className="row col-md-6 col-lg-4"></div> */}

        {/* <div className="row col-md-6 col-lg-4"></div> */}
      </div>
    </div>
  </div>)
}
