<template>
  <main>
    <header class="w-full bg-cover bg-center">
      <nuxt-img
        src="/images/website/robot-type.png"
        alt="Buy a computer - Don't talk to one. - Lifetime support from 100% real humans"
        class="px-4 py-8 lg:py-10 mx-auto"
      />
    </header>

    <section class="max-w-7xl mx-auto mt-12 px-4 text-center sm:px-6 lg:px-8">
      <h2 class="text-4xl">Support Articles</h2>

      <div>
        <nuxt-link to="#learn">
          Learn
        </nuxt-link>

        <nuxt-link to="#tune">
          Tune
        </nuxt-link>

        <nuxt-link to="#troubleshooot">
          Troubleshoot
        </nuxt-link>
      </div>

      <h2>Support Tickets</h2>

      <p>
        Can't find what you're looking for in the articles below? Our team is
        here to help. After logging into your account, submit a support ticket
        and our Customer Happiness Team will be on the case!
      </p>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="getting-help">
      <h1>Getting Help</h1>

      <ul>
        <li
          v-for="article in articlesForSection('getting-help')"
          :key="article.path"
        >
          <article-listing :article="article" />
        </li>
      </ul>

      <a href="https://system76.com/my-account/support-tickets/new" target="_blank">
        Submit a ticket
      </a>

      <p>
        Having trouble submitting a support ticket? Contact our office at <a
        href="tel:+17202269269">(720) 226-9269</a> between 8am-5pm MST and we'll
        help you out!
      </p>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="learn">
      <h1>Learn</h1>

      <section>
        <h2>Switching to Linux</h2>

        <ul>
          <li
            v-for="article in articlesForSection('switching')"
            :key="article.path"
          >
            <article-listing :article="article" />
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>

<style scoped>
  header {
    background-image: radial-gradient(rgba(87, 79, 74, 0.5), #574f4a), url("/images/website/robot.jpg");
  }
</style>

<script>
export default {
  asyncData: async ({ $content }) => ({
    articles: await $content()
      .only(['title', 'description', 'keywords', 'section', 'slug'])
      .where({ hidden: false })
      .sortBy('title')
      .fetch()
  }),

  computed: {
    articlesForSection () {
      return section => this.articles.filter((article) => {
        return (article.section === section)
      })
    }
  }
}
</script>
