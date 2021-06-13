<template>
  <main>
    <article>
      <header class="bg-blue-500 text-white">
        <div class="max-w-7xl mx-auto py-3 px-4">
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
          </div>
        </div>
      </header>

      <nuxt-content
        class="prose prose-sm max-w-screen my-6 sm:prose sm:max-w-screen-sm md:my-12 lg:prose-lg lg:max-w-screen-lg mx-auto px-4"
        :document="article"
      />

      <footer class="bg-gray-50 border-t border-gray-100 mt-16">
        <div class="max-w-7xl py-4 px-4 mx-auto md:flex md:items-center md:justify-between">
          <div
            v-if="article.authors.length > 0"
            class="flex -space-x-1 overflow-hidden md:mr-4"
          >
            <a
              v-for="author in [...article.authors].reverse()"
              :key="author.username"
              :href="author.profileUrl"
              target="_blank"
            >
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-gray-50"
                :src="author.avatarUrl"
                :alt="author.username"
              >
            </a>
          </div>

          <div class="flex-1 min-w-0 mt-4 md:mt-0">
            <p class="text-md leading-7 text-gray-900 sm:truncate">
              Article was
              <template v-if="article.authors.length > 0">
                <a
                  :href="article.authors[0].commitUrl"
                  target="_blank"
                  class="hover:underline focus:underline"
                >
                  last edited at <time :datetime="article.updatedAt">{{ updatedAt }}</time>
                </a>
                by
                <a
                  :href="article.authors[0].profileUrl"
                  target="_blank"
                  class="hover:underline focus:underline"
                >
                  @{{ article.authors[0].username }}
                </a>
              </template>
              <template v-else>
                last edited at <time :datetime="article.updatedAt">{{ updatedAt }}</time>
              </template>
            </p>
          </div>

          <div class="flex mt-4 md:mt-0 md:ml-4">
            <a
              :href="`https://github.com/system76/docs/edit/master/_articles/${article.slug}.md`"
              class="flex items-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 md:text-lg md:px-3"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
              <span class="inline ml-2">Edit on GitHub</span>
            </a>
          </div>
        </div>
      </footer>
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
      return (new Date(this.article.updatedAt)).toLocaleDateString('en-US', {
        timeZone: 'MST'
      })
    }
  }
}
</script>
