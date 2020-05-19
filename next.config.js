// const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
// const withSass = require('@zeit/next-sass')
// const withTypescript = require('@zeit/next-typescript')
// const withCSS = require('@zeit/next-css')

/*module.exports = withPlugins([
  // withCSS,
  withSass,
  withOptimizedImages,
  // withTypescript
])*/

// module.exports = withTypescript(withOptimizedImages(withCSS(
//   withSass({
//     webpack(config, options) {
//       return config
//     }
//   })))
// )

module.exports = withOptimizedImages()
