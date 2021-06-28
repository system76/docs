<template>
  <main>
    <header class="bg-blue-500 text-blue-900">
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
    </header>

    <nav class="max-w-7xl px-4 py-24 mx-auto">
      <ul>
        <ul class="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-6">
          <article-listing
            v-for="article in articles"
            :key="article.path"
            :article="article"
          />
        </ul>
      </ul>
    </nav>
  </main>
</template>

<script>
export default {
  asyncData: async ({ $content }) => ({
    articles: await $content()
      .only(['title', 'description', 'slug'])
      .where({ hidden: false })
      .sortBy('title')
      .fetch()
  })
}
</script>
