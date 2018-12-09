<template>
  <canvas width="800" height="600" class="canvas"></canvas>
</template>

<script>
import Background from "~/assets/dtnsim/background.js";
import Agent from "~/assets/dtnsim/agent.js";

export default {
  methods: {
    drawCanvas() {
      const width = this.$el.width;
      const height = this.$el.height;

      const background = new Background(this.context, width, height);
      background.draw();

      this.agents.forEach(agent => {
        agent.setCoordinate(width * Math.random(), height * Math.random());
        agent.draw();
      });
    }
  },
  mounted() {
    this.context = this.$el.getContext("2d");

    // init agents
    this.agents = [...Array(10).keys()].map(_ => new Agent(this.context));

    // display
    this.drawCanvas();
  }
};
</script>

<style>
canvas.canvas {
  border: 1px solid green;
}
</style>
