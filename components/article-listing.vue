<template>
  <div>
    <h4>
      <nuxt-link :to="path">
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
  },

  computed: {
    path () {
      return `/articles${this.article.path}`
    }
  }
}
</script>
