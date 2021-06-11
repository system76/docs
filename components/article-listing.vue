<template>
  <div>
    <h4>
      <nuxt-link :to="`/articles/${article.slug}`">
        {{ article.title }} >>
      </nuxt-link>
    </h4>

    <p>
      {{ article.description }}
    </p>
  </div>
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
