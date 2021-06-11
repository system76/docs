<template>
  <div>
    <sys-headerbar
      url-homepage="https://system76.com"
      url-laptops="https://system76.com/laptops"
      url-desktops="https://system76.com/desktops"
      url-mini="https://system76.com/desktops/meerkat"
      url-servers="https://system76.com/servers"
      url-pop-os="/"
      url-contact="https://system76.com/contact"
      url-account="https://system76.com/my-account"
      url-admin="https://joshua.system76.com/admin"
      url-login="/auth/login"
      url-logout="/auth/logout"
      :admin="false"
      :authenticated="false"
    />

    <Nuxt />

    <sys-footerbar
      url-contact="https://system76.com/contact"
      url-about="https://system76.com/about"
      url-careers="https://system76.com/careers"
      url-specials="https://system76.com/specials"
      url-shipping="https://system76.com/shipping"
      url-financing="https://system76.com/financing"
      url-warranty="https://system76.com/warranty"
      url-privacy="https://system76.com/privacy"
      url-disclaimer="https://system76.com/disclaimer"
      url-terms="https://system76.com/terms"
      show-newsletter-button
      @subscribe="toggleSubscribeModal"
    />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
