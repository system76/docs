import { getHighlighter } from 'shiki'

const REPLACE_MAP = {
  '#002B36': 'var(--code-00)',
  'rgb(147, 161, 161)': 'var(--code-0F)',
  '#93A1A1': 'var(--code-0F)',
  '#859900': 'var(--code-0A)',
  '#268BD2': 'var(--code-0C)',
  '#2AA198': 'var(--code-0E)'
}

export default async function highlighter () {
  const highlighter = await getHighlighter({ theme: 'solarized-dark' })

  return (rawCode, lang) => {
    const highlighted = highlighter.codeToHtml(rawCode, (lang === 'null') ? 'text' : lang)

    return Object.entries(REPLACE_MAP).reduce((text, [a, b]) => {
      return text
        .replaceAll(`color:${a}`, `color:${b}`)
        .replaceAll(`color: ${a}`, `color: ${b}`)
    }, highlighted)
  }
}
