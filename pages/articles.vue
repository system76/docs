<template>
  <main>
    <section-articles v-for="(section, i) in articleSections" :key="i" :section="section" :name="i" />
  </main>
</template>

<script>
import SectionArticles from '~/components/section-articles'

export default {
  components: {
    SectionArticles
  },
  data: () => ({
    articles: {}
  }),

  computed: {
    articleSections () {
      const sections = {}
      try {
        this.articles.forEach((e) => {
          if (e.section === undefined) {
            e.section = '_'
          }

          if (!(e.section in sections)) {
            sections[e.section] = []
          }

          try {
            sections[e.section].push(e)
          } catch (e) {
            alert(JSON.stringify(e))
          }
        })
      } catch (e) {
        return false
      }

      return sections
    }
  },

  async created () {
    this.articles = await this.$content('/').fetch()
  }

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
