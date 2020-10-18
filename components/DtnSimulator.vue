<template>
  <canvas width="800" height="600" class="canvas"></canvas>
</template>

<script>
import Main from "~/assets/dtnsim/main.js";

export default {
  props: ["settings"],
  mounted() {
    this.main = new Main(this.$el, this.settings);
  },
  methods: {
    initMain() {
      if (this.main != null) {
        this.main.stopAnimation();
      }
      try {
        this.main = new Main(this.$el, this.settings);
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
