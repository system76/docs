<template>
  <main>
    <article>
      <header>
        <div class="bg-blue-500 text-blue-900">
          <div class="max-w-7xl mx-auto py-3 px-4">
            <div class="flex items-center justify-between flex-wrap">
              <div class="w-0 flex-1 flex items-center">
                <nuxt-link
                  to="/"
                  class="flex p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 md:text-lg"
                >
                  <font-awesome-icon icon="arrow-left" />
                  <span class="sr-only">All Articles</span>
                </nuxt-link>

                <h1 class="my-0 ml-3 font-sans italic text-lg truncate md:text-3xl">
                  Support Articles
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="article.tableOfContents"
          class="bg-gray-50 text-gray-600 lg:hidden"
        >
          <div class="max-w-7xl mx-auto py-2 px-4">
            <div class="flex items-center justify-between flex-wrap">
              <div class="w-0 flex-1 flex items-center">
                <h2 class="flex-1 my-0 ml-3 text-md truncate">
                  Table of Contents
                </h2>

                <a
                  href="#"
                  class="flex mr-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  @click.prevent="tableOfContents = !tableOfContents"
                >
                  <font-awesome-icon icon="bars" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <nav
          v-if="article.tableOfContents"
          v-show="tableOfContents"
          class="bg-gray-50 text-gray-600 border-t border-gray-200 lg:hidden"
        >
          <ul class="max-w-7xl mx-auto py-2 px-4">
            <li
              v-for="toc in article.toc"
              :key="toc.id"
            >
              <nuxt-link
                :class="{
                  'pl-4': (toc.depth === 2),
                  'pl-8': (toc.depth === 3)
                }"
                :to="`#${toc.id}`"
                class="block px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                @click="tableOfContents = false"
              >
                {{ toc.text }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </header>

      <div class="flex justify-center my-6 mx-auto px-4 max-w-full sm:max-w-screen-sm md:my-12 lg:max-w-7xl">
        <div class="prose prose-sm max-w-full flex-1 sm:prose xl:prose-lg lg:max-w-4xl">
          <h1>{{ article.title }}</h1>
          <nuxt-content :document="article" />
        </div>

        <nav
          v-if="article.tableOfContents"
          class="hidden ml-8 lg:block lg:flex-none lg:w-1/4"
        >
          <h1 class="mt-0 mx-7 font-bold text-sm uppercase">
            Table of Contents
          </h1>

          <ul class="max-w-7xl mx-auto py-2 px-4">
            <li
              v-for="toc in article.toc"
              :key="toc.id"
            >
              <nuxt-link
                :class="{
                  'pl-4': (toc.depth === 2),
                  'pl-8': (toc.depth === 3)
                }"
                :to="`#${toc.id}`"
                class="block px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                @click="tableOfContents = false"
              >
                {{ toc.text }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

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
              rel="nofollow noopener noreferrer"
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
                  class="hover:underline focus:underline"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  last edited at <time :datetime="article.updatedAt">{{ updatedAt }}</time>
                </a>
                by
                <a
                  :href="article.authors[0].profileUrl"
                  class="hover:underline focus:underline"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
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
              :href="`https://github.com/system76/docs/edit/master/content/${article.slug}.md`"
              class="flex items-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 md:text-lg md:px-3"
              rel="nofollow noopener noreferrer"
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

  data: () => ({
    tableOfContents: false
  }),

  head () {
    return {
      title: this.article.title,

      meta: [
        { hid: 'description', name: 'description', content: this.article.description },

        { hid: 'og:site_name', property: 'og:site_name', content: 'System76 Support' },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        { hid: 'og:url', property: 'og:url', content: `https://support.system76.com/articles/${this.article.slug}` },
        { hid: 'og:image', property: 'og:image', content: `https://support.system76.com${this.article.facebookImage}` },
        { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
        { hid: 'og:image:height', property: 'og:image:height', content: '600' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: this.article.title },

        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description },
        { hid: 'twitter:site', name: 'twitter:site', content: '@system76' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:image:src', name: 'twitter:image:src', content: `https://support.system76.com${this.article.twitterImage}` }
      ]
    }
  },

  computed: {
    firstTocDepth () {
      const [first] = this.article.toc
        .map(toc => toc.depth)
        .sort()

      return first || 1
    },

    updatedAt () {
      return (new Date(this.article.updatedAt)).toLocaleDateString('en-US', {
        timeZone: 'MST'
      })
    }
  }
}
</script>
