<template>
  <div>logout</div>
</template>

<script>
export default {
  mounted() {
    this.$auth.logout()
  },
}
</script>
