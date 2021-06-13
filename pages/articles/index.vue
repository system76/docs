<template>
  <main>
    <header class="bg-blue-500 text-white">
      <div class="max-w-7xl mx-auto py-3 px-4">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <h1 class="my-0 font-sans italic text-lg truncate md:font-extralight md:text-3xl">
              Support Docs
            </h1>
          </div>

          <div class="flex-shrink-0 ml-3">
            <a
              href="https://github.com/system76/docs/tree/master/_articles"
              class="flex items-center p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 md:text-lg md:px-3"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
              <span class="hidden md:inline md:ml-2">View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>

    <nav class="max-w-7xl px-4 py-24 mx-auto">
      <ul>
        <ul class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
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
