<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-oauth2</h1>
      <h2>welcome, {{ userName }}</h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <a href="./login" rel="noopener noreferrer" class="button--grey">
          Login
        </a>
        <a href="./logout" rel="noopener noreferrer" class="button--grey">
          Logout
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import jwtDecode from 'jwt-decode'

export default Vue.extend({
  data() {
    return {
      userName: '',
    }
  },
  mounted() {
    const token = this.$auth.$storage.getCookie('_token.keycloak')
    const decoded = jwtDecode(token)
    this.userName = decoded.preferred_username
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
