<template>
  <main>
    <article>
      <header class="bg-blue-500 text-white">
        <div class="max-w-7xl mx-auto py-3 px-2">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <nuxt-link
                to="/"
                class="flex p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 md:text-lg"
              >
                <font-awesome-icon icon="arrow-left" />
              </nuxt-link>

              <h1 class="my-0 ml-3 font-sans italic text-lg truncate md:font-extralight md:text-3xl">
                {{ article.title }}
              </h1>
            </div>

            <div class="flex-shrink-0 ml-3">
              <a
                :href="`https://github.com/system76/docs/edit/master/_articles/${article.slug}.md`"
                class="flex items-center p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 md:text-lg md:px-3"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
                <span class="hidden md:inline md:ml-2">Edit on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <nuxt-content
        class="prose prose-sm max-w-screen my-6 sm:prose sm:max-w-screen-sm md:my-12 lg:prose-lg lg:max-w-screen-lg mx-auto px-4"
        :document="article"
      />

      <h6
        class="text-center mx-auto my-4 px-4"
      >
        Article last modified: <time :datetime="article.updatedAt">{{ updatedAt }}</time>
      </h6>
    </article>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, error, params, redirect }) {
    const article = await $content(params.path)
      .fetch()
      .catch(() => null)

    if (article != null) {
      return { article }
    }

    const [redirectedArticle] = await $content()
      .only(['slug'])
      .where({
        redirect_from: { $contains: `/articles/${params.path}` }
      })
      .fetch()
      .catch(() => [])

    if (redirectedArticle != null) {
      return redirect(`/articles/${redirectedArticle.slug}`)
    }

    return error({
      statusCode: 404,
      message: 'Article not found'
    })
  },

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
