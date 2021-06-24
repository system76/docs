<template>
  <main :class="[$style.main, 'flex']">
    <div class="flex self-center justify-center max-w-7xl mx-auto px-4 py-12 text-white">
      <div class="flex-1 max-w-lg mx-auto">
        <nuxt-img
          v-if="status === 404"
          alt="404!"
          class="mx-auto"
          height="245"
          src="https://assets.system76.com/errors/404.png"
          width="512"
        />
        <nuxt-img
          v-else
          alt="500!"
          class="mx-auto"
          height="324"
          src="https://assets.system76.com/errors/500.png"
          width="512"
        />

        <div class="my-6">
          <template v-if="status === 404">
            <h1 class="my-2 text-4xl">
              It's a puzzle.
            </h1>
            <p class="my-4 text-lg">
              We're not quite sure what you're looking for, but we have
              options for what to do next. And if in a bizzare twist you were
              actually looking for a puzzle&hellip; for some reason, we have that
              too.
            </p>
          </template>
          <template v-else>
            <h1 class="my-2 text-4xl">
              It's not you, it's us..
            </h1>
            <p class="my-4 text-lg">
              We didn't mean to let you down. We just need a chance to patch things
              up.
            </p>
            <p class="hidden my-4 text-lg lg:block">
              (Look how hard 5iMON is trying&hellip;)
            </p>
          </template>
        </div>

        <div class="mt-4">
          <a
            class="inline-block bg-blue-500 text-black rounded px-4 py-2 uppercase font-serif tracking-wider hover:bg-blue-400 focus:bg-blue-400"
            href="#"
            onclick="window.history.go(-1);return false;"
          >
            Go Back
          </a>

          <a
            v-if="status != 404"
            class="inline-block bg-blue-500 text-black rounded px-4 py-2 uppercase font-serif tracking-wider hover:bg-blue-400 focus:bg-blue-400"
            href="#"
            onclick="window.location.reload();return false;"
          >
            Reload
          </a>

          <nuxt-link
            class="inline-block bg-orange-500 text-black rounded px-4 py-2 uppercase font-serif tracking-wider hover:bg-orange-400 focus:bg-orange-400"
            to="/"
          >
            Go Home
          </nuxt-link>
        </div>
      </div>

      <div class="hidden lg:block lg:flex-1 lg:ml-12">
        <nuxt-img
          src="https://assets.system76.com/errors/5iMON.png"
          alt="5iMON the robot taping a torn heart paper"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: [Object, Error],
      default: () => new Error('Internal Server Error')
    }
  },

  head: {
    title: 'Error!'
  },

  computed: {
    status () {
      const statusCode = Number(this.error.statusCode)
      const status = Number(this.error.status)

      if (statusCode > 0 && statusCode < 600) {
        return statusCode
      } else if (status > 0 && statusCode < 600) {
        return status
      } else {
        return 404
      }
    }
  }
}
</script>

<style module>
  .main {
    background-image: radial-gradient(circle, #858ab0 25%, #707796 75%);
  }
</style>
