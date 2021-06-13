<template>
  <main>
    <header class="w-full bg-cover bg-center">
      <nuxt-img
        alt="Buy a computer - Don't talk to one. Lifetime support from 100% real humans"
        class="px-4 py-8 lg:py-10 mx-auto"
        height="440"
        src="/images/website/robot-type.png"
        width="1207"
      />
      <h1 class="hidden">
        Buy a computer - Don't talk to one. Lifetime support from 100% real humans
      </h1>
    </header>

    <section class="max-w-2xl mx-auto my-12 px-4 text-center sm:px-6 md:mb-24 lg:px-8">
      <h2 class="text-4xl font-bold">
        Support Articles
      </h2>

      <div class="my-4">
        <nuxt-link
          class="inline-block my-2 mx-2 bg-gray-100 text-black rounded px-4 py-2 uppercase font-serif tracking-wider hover:bg-gray-200 focus:bg-gray-200"
          to="#learn"
        >
          Learn
        </nuxt-link>

        <nuxt-link
          class="inline-block my-2 mx-2 bg-gray-100 text-black rounded px-4 py-2 uppercase font-serif tracking-wider hover:bg-gray-200 focus:bg-gray-200"
          to="#tune"
        >
          Tune
        </nuxt-link>

        <nuxt-link
          class="inline-block my-2 mx-2 bg-gray-100 text-black rounded px-4 py-2 uppercase font-serif tracking-wider hover:bg-gray-200 focus:bg-gray-200"
          to="#troubleshoot"
        >
          Troubleshoot
        </nuxt-link>
      </div>

      <h2 class="text-3xl mt-7">
        Support Tickets
      </h2>

      <p class="text-lg mt-4">
        Can't find what you're looking for in the articles below? Our team is
        here to help. After logging into your account, submit a support ticket
        and our Customer Happiness Team will be on the case!
      </p>

      <div class="my-7 text-center">
        <a
          class="inline-block bg-gray-100 text-black rounded px-4 py-2 uppercase font-serif tracking-wider hover:bg-gray-200 focus:bg-gray-200"
          href="https://system76.com/my-account/support-tickets/new"
          target="blank"
        >
          Submit a Ticket
        </a>
      </div>

      <p class="text-lg mx-auto">
        Having trouble submitting a support ticket? Contact our office at
        <a
          class="font-bold whitespace-nowrap"
          href="tel:+17202269269"
        >
          (720) 226-9269
        </a> between 8am-5pm MST and we'll help you out!
      </p>
    </section>

    <section
      id="search"
      class="max-w-4xl mx-auto my-8 px-4"
    >
      <div class="relative">
        <!--
          This whole dropdown search can be upgraded to Headless UI once
          Nuxt moves to Vue 3.0
        -->
        <form
          class="relative flex items-center pr-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-white focus-within:ring-orange-500 focus-within:shadow-sm"
          novalidate
          role="search"
          @submit.prevent="$fetch"
        >
          <input
            id="search-box"
            v-model="search"
            type="search"
            aria-autocomplete="list"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="none"
            spellcheck="false"
            class="flex-auto -mr-9 appearance-none bg-transparent pl-4 pr-12 py-4 rounded-md text-md font-medium text-gray-700 focus:outline-none"
            placeholder="Search..."
            aria-label="Search articles"
            :aria-expanded="search !== ''"
            aria-haspopup="true"
            aria-controls="search-results"
            @keyup.passive="debouncedFetch"
            @blur.passive="debouncedFetch"
          >

          <font-awesome-icon icon="search" />
        </form>

        <div
          v-show="search !== ''"
          id="search-results"
          aria-labelledby="search-box"
          aria-orientation="vertical"
          class="origin-top absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="listbox"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <span
              v-if="$fetchState.error != null"
              class="text-gray-400 block px-4 py-2 text-sm"
              role="option"
              tabindex="-1"
            >
              An error occured while fetching search results
            </span>
            <span
              v-else-if="results.length === 0 && $fetchState.pending"
              class="text-gray-400 block px-4 py-2 text-sm"
              role="option"
              tabindex="-1"
            >
              Loading...
            </span>
            <span
              v-else-if="results.length === 0"
              class="text-gray-400 block px-4 py-2 text-sm"
              role="option"
              tabindex="-1"
            >
              No Results
            </span>

            <nuxt-link
              v-for="article in results"
              v-else
              :key="article.slug"
              :to="`/articles/${article.slug}`"
              class="text-gray-700 block px-4 py-2 group hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
              role="option"
            >
              <div class="text-md leading-6 font-semibold group-hover:text-gray-900 group-hover:underline group-focus:text-gray-900 group-focus:underline">
                {{ article.title }}
              </div>
              <div class="text-sm mt-1 text-sm text-gray-400">
                {{ article.description }}
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section
      v-for="listing in listings"
      :key="listing.id"
      class="max-w-7xl mx-auto my-8 px-4 divide-y-2 divide-gray-100 sm:my-9 sm:px-6 md:my-10 lg:px-8 xl:my-12"
    >
      <div>
        <h2
          :id="listing.section"
          class="text-4xl md:text-5xl font-bold"
        >
          {{ listing.title }}
        </h2>

        <p
          v-if="listing.description"
          class="text-lg mt-4"
        >
          {{ listing.description }}
        </p>
      </div>

      <div
        v-if="listing.section != null && articlesForSection(listing.section).length > 0"
        class="mt-6 pt-6"
      >
        <ul class="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-6">
          <article-listing
            v-for="article in articlesForSection(listing.section)"
            :key="article.path"
            :article="article"
          />
        </ul>
      </div>

      <div
        v-for="nestedListing in listing.listings"
        :key="nestedListing.section"
        class="mt-6 pt-6"
      >
        <h3
          :id="nestedListing.id"
          class="text-2xl md:text-3xl"
        >
          {{ nestedListing.title }}
        </h3>

        <div class="mt-2 pt-6">
          <ul class="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-6">
            <article-listing
              v-for="article in articlesForSection(nestedListing.section)"
              :key="article.path"
              :article="article"
            />
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import throttle from 'lodash/throttle'

export default {
  asyncData: async ({ $content }) => ({
    articles: await $content()
      .only(['title', 'description', 'keywords', 'section', 'slug'])
      .where({ hidden: false })
      .sortBy('title')
      .fetch()
  }),

  data: () => ({
    search: '',
    results: [],

    listings: [{
      title: 'Getting Help',
      section: 'getting-help'
    }, {
      title: 'Learn',
      section: 'learn',
      listings: [{
        title: 'Switching To Linux',
        section: 'switching'
      }, {
        title: 'Learn About Your Computer',
        section: 'learn-about-your-computer'
      }, {
        title: 'Learn About Your Operating System',
        section: 'learn-about-your-os'
      }, {
        title: 'Learn About Pop!_OS',
        section: 'pop'
      }, {
        title: 'Learn About Ubuntu',
        section: 'ubuntu'
      }, {
        title: 'Media',
        section: 'media'
      }, {
        title: 'General Hardware Information',
        section: 'general-hardware-info'
      }]
    }, {
      title: 'Tune',
      section: 'tune',
      listings: [{
        title: 'Software',
        section: 'software'
      }, {
        title: 'Hardware',
        section: 'hardware'
      }, {
        title: 'Windows',
        section: 'windows'
      }]
    }, {
      title: 'Troubleshoot',
      section: 'troubleshoot',
      listings: [{
        title: 'Software Troubleshooting',
        section: 'software-troubleshooting'
      }, {
        title: 'Network Troubleshooting',
        section: 'network-troubleshooting'
      }, {
        title: 'Hardware Troubleshooting',
        section: 'hardware-troubleshooting'
      }, {
        title: 'Repairs and Returns',
        section: 'repairs-returns'
      }]
    }, {
      title: 'Community Articles',
      description: 'The following documents have been graciously submitted by community members. They have not been checked for accuracy, completeness, or style. Please contact the contributers through their GitHub account for any questions.',
      section: 'community'
    }, {
      title: 'Case Studies',
      section: 'case-studies'
    }]
  }),

  async fetch () {
    if (this.search === '') {
      this.results = []
    } else {
      this.results = await this.$content()
        .only(['title', 'description', 'slug'])
        .limit(10)
        .search(this.search)
        .fetch()
    }
  },

  computed: {
    articlesForSection () {
      return section => this.articles.filter((article) => {
        return (article.section === section)
      })
    }
  },

  methods: {
    debouncedFetch: throttle(function () {
      this.$fetch()
    }, 400)
  }
}
</script>

<style scoped>
  header {
    background-image: radial-gradient(rgba(87, 79, 74, 0.5), #574f4a), url("/images/website/robot.jpg");
  }
</style>
