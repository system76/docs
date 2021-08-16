<template>
  <li class="block group">
    <nuxt-link :to="`/articles/${article.slug}`">
      <div class="sys-article-p font-bold group-focus:underline group-hover:underline">
        {{ article.title }}
      </div>
      <div class="sys-article-p text-warm-gray-500">
        {{ article.description }}
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
