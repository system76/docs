<template>
  <div>
    <div
      id="image"
      class="bg-white text-gray-900 border-b-18 border-orange-500 flex flex-col relative"
    >
      <div class="flex-auto flex flex-col justify-center px-16 py-12">
        <h1 class="text-8xl font-bold my-0">
          {{ article.title }}
        </h1>
      </div>

      <div class="px-16 pt-4 pb-12">
        <h2 class="text-3xl text-gray-400 font-normal my-0">
          Last Updated {{ updatedAt }}
        </h2>
      </div>

      <div class="h-32 w-32 absolute right-12 bottom-8">
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
