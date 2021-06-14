import { extname } from 'path'

function maybeFixLink (node) {
  if (node.tag === 'nuxt-link') {
    const ext = extname(node.props.to)

    if (ext !== '') {
      node.tag = 'a'
      node.props.href = node.props.to
      node.props.rel = ['nofollow', 'noopener', 'noreferrer']
      node.props.target = '_blank'

      delete node.props.to
    }
  }

  if (node.children != null) {
    node.children.forEach(maybeFixLink)
  }
}

export default function (document) {
  if (document.extension !== '.md') {
    return
  }

  document.body.children.forEach(maybeFixLink)
}
