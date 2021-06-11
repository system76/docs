<template>
  <main>
    <h1>Support Docs</h1>

    <nav>
      <h2>Articles:</h2>

      <ul>
        <li
          v-for="article in articles"
          :key="article.path"
        >
          <nuxt-link :to="path(article)">
            {{ article.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script>
export default {
  asyncData: async ({ $content }) => ({
    articles: await $content()
      .only(['title'])
      .where({ hidden: false })
      .sortBy('title')
      .fetch()
  }),

  methods: {
    path (article) {
      return `/articles${article.path}`
    }
  }
}
</script>
