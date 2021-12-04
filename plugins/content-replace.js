const visit = require('unist-util-visit')

module.exports = () => tree => visit(tree, 'element', (node) => {
  // Replace images in articles with nuxt-picture tags for optimal viewing
  // Note: animated gif is not supported without a provider.
  if (node.tagName === 'img' && !node.properties.src.includes('.gif')) {
    node.tagName = 'nuxt-picture'
  }
})
