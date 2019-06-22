const withOptimizedImages = require('next-optimized-images')
const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

module.exports = withTypescript(withOptimizedImages(withCSS(
  withSass({
    webpack(config, options) {
      return config
    }
  })))
)
