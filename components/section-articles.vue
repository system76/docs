<template>
  <section>
    <h2 class="text-5xl">
      {{ name }}
    </h2>
    <pre v-for="(article, a ) in section" :key="a" class="pt-4">
      url:
        /articles/{{ article.section }}/{{ article.slug }}
      title:
        {{ article.title }}
      description:
        {{ article.description }}
      hidden:
        {{ article.hidden }}
      path:
        {{ article.path }}
    </pre>
  </section>
</template>

<script>
export default {
  name: 'SectionArticles',

  props: {
    section: {
      type: Array,
      required: true
    },

    name: {
      type: String,
      required: true
    }
  }
}
</script>
