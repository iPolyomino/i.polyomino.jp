<template>
  <div class="backGroundSVG">
    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 1000">
      <rect
        v-for="(n, i) in 100"
        :x="(i % 10) * 100"
        :y="Math.floor(i / 10) * 100"
        width="100"
        height="100"
        :key="n"
        :fill="colors[Math.floor(Math.random() * colors.length)]"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "#F9DB57",
        "#E6855E",
        "#B75C9D",
        "#9D73BB",
        "#42AAC7",
        "#40BFB0",
      ],
    };
  },
};
</script>

<style>
.backGroundSVG {
  width: max(100vw, 100vh);
  height: max(100vw, 100vh);
  position: fixed;
}
.backGroundSVG > svg {
  width: max(100vw, 100vh);
  height: max(100vw, 100vh);
}
</style>
