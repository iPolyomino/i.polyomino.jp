<template>
  <div v-html="aboutme"></div>
</template>

<script>
import aboutme from '../static/aboutme.md'

export default {
  computed: {
    aboutme() {
      return aboutme
    }
  }
}
</script>
