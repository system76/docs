<template>
  <div>
    <div
      id="image"
      class="bg-white text-gray-900 flex flex-col relative"
    >
      <div class="flex-none px-16 pt-12">
        <h1 class="text-7xl font-bold leading-tight">
          {{ article.title }}
        </h1>
      </div>

      <div class="flex-auto px-16 pt-8">
        <p class="text-4xl text-gray-600 leading-snug line-clamp-3">
          {{ article.description }}
        </p>
      </div>

      <div class="px-16 pt-16 pb-12">
        <h2 class="text-3xl text-gray-400 font-normal">
          Last Updated {{ updatedAt }}
        </h2>
      </div>

      <div class="h-8 bg-orange-500 flex-none" />

      <div class="h-32 w-32 absolute right-12 bottom-16">
        <sys-logo />
      </div>
    </div>
  </div>
</template>

<script>
import { SysLogo } from '@system76/design'

export default {

  components: {
    SysLogo
  },
  layout: 'empty',

  async asyncData ({ $content, ssrContext }) {
    const { contentPath, contentField } = ssrContext
    const article = await $content(contentPath).fetch()

    return { article, field: contentField }
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

<style scoped>
  #image {
    height: 600px;
    width: 1200px;
  }
</style>
