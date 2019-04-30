const withOptimizedImages = require('next-optimized-images')
const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(withOptimizedImages(
  withSass({
    webpack(config, options) {
      return config
    }
  }))
)
