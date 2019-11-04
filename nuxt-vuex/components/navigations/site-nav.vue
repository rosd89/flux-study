<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="secondary"
  >
    <b-navbar-brand href="#">
      Nuxt vuex Test
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse
      id="nav-collapse"
      is-nav
    >
      <b-navbar-nav>
        <b-nav-item
          v-for="item in navItems"
          :key="item.path"
          :href="item.path"
          :active="activePath === item.path.replace('/', '')"
        >
          {{ item.name }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SiteNav',
  computed: {
    ...mapState(['navItems']),
    activePath () {
      return this.$route.path.split('/')[1]
    }
  }
}
</script>
