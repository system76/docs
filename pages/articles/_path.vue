<template>
  <main class="px-4">
    <nuxt-content
      class="prose prose-sm max-w-screen sm:prose sm:max-w-screen-sm lg:prose-lg lg:max-w-screen-lg mx-auto"
      :document="article"
    />

    <h6 class="text-center mx-auto">
      Article last modified: {{ updatedAt }}
    </h6>
  </main>
</template>

<script>
export default {

  asyncData: async ({ $content, error, params }) => ({
    article: await $content(params.path)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Article not found' })
      })
  }),
  head () {
    return {
      title: this.article.title,

      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
      ]
    }
  },

  computed: {
    updatedAt () {
      return (new Date(this.article.updatedAt)).toLocaleString('en-US', {
        timeZone: 'MST'
      })
    }
  }
}
</script>
