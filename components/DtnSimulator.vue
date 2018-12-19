<template>
  <canvas width="800" height="600" class="canvas"></canvas>
</template>

<script>
import Background from "~/assets/dtnsim/background.js";
import Agent from "~/assets/dtnsim/agent.js";

export default {
  data: function() {
    return {
      NODE_COUNT: 20,
      AGENT_COUNT: 2
    };
  },
  methods: {
    drawCanvas() {
      const width = this.$el.width;
      const height = this.$el.height;

      const background = new Background(
        this.context,
        width,
        height,
        this.nodes
      );
      background.draw();

      this.agents.forEach(agent => {
        const index = Math.floor(this.nodes.length * Math.random());
        const coordinate = this.nodes[index];
        agent.setCoordinate(coordinate);
        agent.draw();
      });
    },
    initNodes() {
      const width = this.$el.width;
      const height = this.$el.height;

      this.nodes = [...Array(this.NODE_COUNT).keys()].map(agent => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return [x, y];
      });
    }
  },
  mounted() {
    this.context = this.$el.getContext("2d");

    // init agents
    this.agents = [...Array(this.AGENT_COUNT).keys()].map(
      _ => new Agent(this.context)
    );

    // init nodes
    this.nodes = [];
    this.initNodes();

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
