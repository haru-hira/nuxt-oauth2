<template>
  <div>callback</div>
</template>

<script>
export default {
  mounted() {
    // See https://auth.nuxtjs.org/api/storage.html#cookies
    const expiration = this.$auth.$storage.getCookie(
      '_token_expiration.keycloak'
    )
    const expirationDate = new Date(expiration)
    this.$auth.$storage.setCookie(
      'expiration_date',
      expirationDate.toLocaleString({ timeZone: 'Asia/Tokyo' })
    )
  },
}
</script>
