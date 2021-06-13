import path from 'path'
import consola from 'consola'
import fetch from 'node-fetch'

const logger = consola.withScope('@system76/docs')

export default async function (document) {
  if (document.extension !== '.md' || process.env.GITHUB_TOKEN == null) {
    document.authors = []
    return
  }

  const fullPath = path.join('content', `${document.path}.md`)

  await fetch(`https://api.github.com/repos/system76/docs/commits?path=${encodeURIComponent(fullPath)}`, {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  })
    .then(res => res.json())
    .then(commits => commits.map(commit => ({
      username: commit.author.login,
      commitUrl: commit.html_url,
      avatarUrl: commit.author.avatar_url,
      profileUrl: commit.author.html_url
    })))
    .then(commits => commits.filter((c, i, a) => {
      return (a.findIndex(ctwo => (ctwo.username === c.username)) === i)
    }))
    .then((users) => {
      document.authors = users
    })
    .catch(() => {
      document.authors = []
      logger.warn('Failed to grab contributors from GitHub')
    })
}
