<template>
  <main>
    <header class="w-full bg-cover bg-center">
      <nuxt-img
        src="/images/website/robot-type.png"
        alt="Buy a computer - Don't talk to one. - Lifetime support from 100% real humans"
        class="py-20 mx-auto"
      />
    </header>

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

<style scoped>
  header {
    background-image: radial-gradient(rgba(87, 79, 74, 0.5), #574f4a), url("/images/website/robot.jpg");
  }
</style>

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
