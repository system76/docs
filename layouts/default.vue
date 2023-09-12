<template>
  <div class="min-h-screen flex flex-col">
    <sys-omnibar>
      <template #global>
        <a
          href="https://system76.com/specials"
          target="_blank"
        >
          Gear Up and SAVE up to $150!
        </a>
      </template>

      <template #copy>
        <a
          href="https://system76.com/desktops"
          target="_blank"
        >
          New Thelio Accent Panels! Learn More!
        </a>
      </template>

      <template #local>
        <span :class="$style.hidden" />
      </template>
    </sys-omnibar>

    <sys-headerbar
      url-homepage="https://system76.com"
      url-laptops="https://system76.com/laptops"
      url-desktops="https://system76.com/desktops"
      url-mini="https://system76.com/desktops/meerkat"
      url-servers="https://system76.com/servers"
      url-components="https://system76.com/components"
      url-keyboards="https://system76.com/accessories/launch"
      url-pop-os="https://pop.system76.com"
      url-contact="https://system76.com/contact"
      url-login="https://system76.com/login"
    />

    <nuxt class="flex-auto" />

    <sys-footerbar
      url-contact="https://system76.com/contact"
      url-about="https://system76.com/about"
      url-careers="https://system76.com/careers"
      url-sutainability="https://system76.com/sustainability"
      url-shipping="https://system76.com/shipping"
      url-privacy="https://system76.com/privacy-and-legal"
    />
  </div>
</template>

<style>
html,
body,
#__nuxt,
#__layout {
  min-height: 100vh;
}
</style>

<style module>
/** This fixes an issue with the specials offers button hidden on tablet size **/
.hidden {
  display: none !important;
}
</style>
