const visit = require('unist-util-visit')

module.exports = () => tree => visit(tree, 'element', (node) => {
  // Replace images in articles with nuxt-picture tags for optimal viewing
  if (node.tagName === 'img') {
    node.tagName = 'nuxt-picture'
  }
})
