<template>
  <canvas width="800" height="600" class="canvas"></canvas>
</template>

<script>
import Main from "~/assets/dtnsim/main.js";

export default {
  data: function() {
    return {
      NODE_COUNT: 20,
      AGENT_COUNT: 2
    };
  },
  mounted() {
    new Main(
      this.$el.getContext("2d"),
      this.$el.width,
      this.$el.height,
      this.NODE_COUNT,
      this.AGENT_COUNT
    );
  }
};
</script>

<style>
canvas.canvas {
  border: 1px solid green;
}
</style>
