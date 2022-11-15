<template>
  <main class="bg-gray-100">
    <header class="w-full bg-cover bg-center lg:pb-16">
      <nuxt-img
        alt="Buy a computer - Don't talk to one. Lifetime support from 100% real humans"
        class="px-4 py-8 lg:py-10 mx-auto w-full max-w-3xl"
        height="440"
        src="/images/website/robot-type.png"
        width="1207"
      />
      <h1 class="hidden">
        Buy a computer - Don't talk to one. Lifetime support from 100% real humans
      </h1>

      <div class="px-4 pb-12 mx-auto max-w-4xl">
        <div class="relative">
          <!--
            This whole dropdown search can be upgraded to Headless UI once
            Nuxt moves to Vue 3.0
          -->
          <form
            class="relative flex items-center pr-4 border bg-white border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-500 focus-within:shadow-sm"
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
              class="flex-auto -mr-8 appearance-none bg-transparent pl-4 pr-12 py-4 rounded-md text-md font-medium text-gray-700 focus:outline-none"
              placeholder="Search Support Articles..."
              aria-label="Search support articles"
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
            class="origin-top absolute z-10 right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
      </div>
    </header>

    <section class="max-w-full mx-auto my-12 px-4 grid gap-y-6 gap-x-6 grid-cols-1 md:max-w-3xl lg:-mt-16 lg:max-w-6xl lg:grid-cols-2 lg:mb-16">
      <div class="px-4 py-3 flex flex-col bg-white rounded-lg">
        <div class="mx-4 my-4 md:min-h-[4rem]">
          <h2 class="sys-article-h3">
            Support Articles
          </h2>

          <p class="text-lg my-4 text-warm-gray-600">
            Search helpful documentation for answers to a variety of questions or issues.
          </p>
        </div>

        <ul class="space-y-2">
          <li>
            <nuxt-link
              to="#troubleshoot"
              class="flex items-center px-4 py-3 transition duration-150 ease-in-out rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-warm-gray-600 text-white sm:h-12 sm:w-12 transition duration-150 ease-in-out group-hover:bg-orange-500 group-focus:bg-orange-500">
                <font-awesome-icon icon="search" />
              </div>
              <div class="ml-4">
                <p class="font-bold text-warm-gray-800">
                  Troubleshoot
                </p>
                <p class="text-warm-gray-600">
                  Detailed solutions for prominent issues.
                </p>
              </div>
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="#tune"
              class="flex items-center px-4 py-3 transition duration-150 ease-in-out rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-warm-gray-600 text-white sm:h-12 sm:w-12 transition duration-150 ease-in-out group-hover:bg-orange-500 group-focus:bg-orange-500">
                <font-awesome-icon icon="wrench" />
              </div>
              <div class="ml-4">
                <p class="font-bold text-warm-gray-800">
                  Tune
                </p>
                <p class="text-warm-gray-600">
                  Information on how to upgrade, maintain, and customize your system.
                </p>
              </div>
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="#learn"
              class="flex items-center px-4 py-3 transition duration-150 ease-in-out rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-warm-gray-600 text-white sm:h-12 sm:w-12 transition duration-150 ease-in-out group-hover:bg-orange-500 group-focus:bg-orange-500">
                <font-awesome-icon icon="graduation-cap" />
              </div>
              <div class="ml-4">
                <p class="font-bold text-warm-gray-800">
                  Learn
                </p>
                <p class="text-warm-gray-600">
                  A general guide for new users. Welcome!
                </p>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="px-4 py-4 flex flex-col bg-white rounded-lg">
        <div class="mx-4 my-3 md:min-h-[4rem]">
          <h2 class="sys-article-h3">
            Contact Us
          </h2>

          <p class="text-lg my-4 text-warm-gray-600">
            Can’t find what you’re looking for in our support articles? Our team is here to help.
          </p>
        </div>

        <ul class="space-y-2 md:space-y-4">
          <li>
            <a
              href="/articles/before-you-open-a-support-ticket"
              class="flex items-center px-4 py-3 transition duration-150 ease-in-out rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-warm-gray-600 text-white sm:h-12 sm:w-12 transition duration-150 ease-in-out group-hover:bg-orange-500 group-focus:bg-orange-500">
                <font-awesome-icon icon="bolt" />
              </div>
              <div class="ml-4">
                <p class="font-bold text-warm-gray-800">
                  Before You Open a Ticket
                </p>
                <p class="text-warm-gray-600">
                  A troubleshooting triage to help you self-diagnose a variety of issues.
                </p>
              </div>
            </a>
          </li>

          <li>
            <a
              href="https://system76.com/my-account/support-tickets/new"
              class="flex items-center px-4 py-3 transition duration-150 ease-in-out rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              target="_blank"
              rel=""
            >
              <div class="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-warm-gray-600 text-white sm:h-12 sm:w-12 transition duration-150 ease-in-out group-hover:bg-orange-500 group-focus:bg-orange-500">
                <font-awesome-icon icon="ticket-alt" />
              </div>
              <div class="ml-4">
                <p class="font-bold text-warm-gray-800">
                  Open a Support Ticket
                </p>
                <p class="text-warm-gray-600">
                  Get expert help from real support humans. Recommended for most users.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section
      v-for="listing in listings"
      :key="listing.id"
      class="max-w-7xl mx-auto my-10 px-4 divide-y-2 divide-transparent sm:my-12 md:my-16 xl:my-24"
    >
      <div>
        <h2
          :id="listing.section"
          class="sys-article-h2"
        >
          {{ listing.title }}
        </h2>

        <p
          v-if="listing.description"
          class="sys-article-p mt-4"
        >
          {{ listing.description }}
        </p>
      </div>

      <div
        v-if="listing.section != null && articlesForSection(listing.section).length > 0"
        class="mt-4 sm:mt-6 md:mt-8"
      >
        <ul class="space-y-2 sm:space-y-3 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 xl:gap-y-6">
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
        class="mt-4 sm:mt-6 md:mt-8 xl:mt-10"
      >
        <h3
          :id="nestedListing.id"
          class="sys-article-h3"
        >
          {{ nestedListing.title }}
        </h3>

        <div class="mt-4 sm:mt-6 xl:mt-8">
          <ul class="space-y-2 sm:space-y-3 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 xl:gap-y-6">
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
      title: 'Tune',
      section: 'tune',
      listings: [{
        title: 'Software',
        section: 'software'
      }, {
        title: 'Hardware',
        section: 'hardware'
      }]
    }, {
      title: 'Learn',
      section: 'learn',
      listings: [{
        title: 'Switching To Linux',
        section: 'switching'
      }, {
        title: 'About Your Computer',
        section: 'about-your-computer'
      }, {
        title: 'About Your Operating System',
        section: 'about-your-os'
      }, {
        title: 'About Pop!_OS',
        section: 'pop'
      }, {
        title: 'About Ubuntu',
        section: 'ubuntu'
      }, {
        title: 'Media',
        section: 'media'
      }, {
        title: 'General Hardware Information',
        section: 'general-hardware-info'
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
    background-image: radial-gradient(rgba(87, 79, 74, 0.75), #574f4a), url("/images/website/robot.jpg");
  }
</style>
