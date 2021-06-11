<template>
  <main>
    <h1 class="text-6xl mb-4">
      Buy a computer. Don't talk to one.
    </h1>

    <div>
      <h3>Getting Help</h3>

      <article-listing
        v-for="article in articlesForSection('getting-help')"
        :key="article.path"
        :article="article"
      />
    </div>

    <div>
      <h3>Learn</h3>

      <div>
        <h4>Switching to Linux</h4>

        <article-listing
          v-for="article in articlesForSection('switching')"
          :key="article.path"
          :article="article"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  asyncData: async ({ $content }) => ({
    articles: await $content()
      .only(['title', 'description', 'keywords', 'section'])
      .where({ hidden: false })
      .sortBy('title')
      .fetch()
  }),

  computed: {
    articlesForSection () {
      return section => this.articles.filter((article) => {
        return (article.section === section)
      })
    }
  }
}
</script>
