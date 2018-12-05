<template>
  <canvas width="800" height="600" class="canvas"></canvas>
</template>

<script>
import Background from "~/assets/dtnsim/background.js";
import Agent from "~/assets/dtnsim/agent.js";

export default {
  methods: {
    drawCanvas() {
      const agent = new Agent(this.ctx);
      agent.setCoordinate(200, 200);
      agent.draw();
      this.ctx.fill();
    }
  },
  mounted() {
    this.ctx = this.$el.getContext("2d");
    this.drawCanvas();
  }
};
</script>

<style>
canvas.canvas {
  border: 1px solid green;
}
</style>
