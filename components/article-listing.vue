<template>
  <li class="block group">
    <nuxt-link :to="`/articles/${article.slug}`">
      <dt class="text-lg leading-6 font-semibold text-gray-900 group-focus:underline group-hover:underline">
        {{ article.title }}
      </dt>
      <dd class="mt-2 text-base text-gray-500">
        {{ article.description }}
      </dd>
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
