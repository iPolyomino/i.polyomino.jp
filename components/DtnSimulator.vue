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
      this.main.stopAnimation();
      this.main = new Main(this.$el, this.settings);
    }
  }
};
</script>

<style>
canvas.canvas {
  border: 1px solid green;
}
</style>
