<template>
  <header-nav />
  <router-view />
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'

export default {
  components: {
    HeaderNav,
  },
}
</script>
