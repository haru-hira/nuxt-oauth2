<template>
  <div>login</div>
</template>

<script>
export default {
  mounted() {
    this.$auth.loginWith('keycloak')
  },
}
</script>
