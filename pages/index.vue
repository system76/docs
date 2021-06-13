<template>
  <main>
    <header class="w-full bg-cover bg-center">
      <nuxt-img
        src="/images/website/robot-type.png"
        alt="Buy a computer - Don't talk to one. Lifetime support from 100% real humans"
        class="px-4 py-8 lg:py-10 mx-auto"
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
          to="#troubleshooot"
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
      v-for="listing in listings"
      :key="listing.id"
      class="max-w-7xl mx-auto my-16 px-4 divide-y-2 divide-gray-100 sm:my-24 sm:px-6 md:my-24 lg:px-8 xl:my-32"
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
        class="mt-8 pt-8"
      >
        <ul class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
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
        class="mt-8 pt-8"
      >
        <h3
          :id="nestedListing.id"
          class="text-2xl md:text-3xl"
        >
          {{ nestedListing.title }}
        </h3>

        <div class="mt-2 pt-6">
          <ul class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
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
export default {

  asyncData: async ({ $content }) => ({
    articles: await $content()
      .only(['title', 'description', 'keywords', 'section', 'slug'])
      .where({ hidden: false })
      .sortBy('title')
      .fetch()
  }),
  data: () => ({
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

  computed: {
    articlesForSection () {
      return section => this.articles.filter((article) => {
        return (article.section === section)
      })
    }
  }
}
</script>

<style scoped>
  header {
    background-image: radial-gradient(rgba(87, 79, 74, 0.5), #574f4a), url("/images/website/robot.jpg");
  }
</style>
