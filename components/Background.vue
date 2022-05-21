<template>
  <div class="backGroundSVG">
    <svg xmlns="http://www.w3.org/2000/svg" v-for="i in 100" :key="i">
      <rect
        width="100%"
        height="100%"
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
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.backGroundSVG > svg {
  width: max(10vw, 10vh);
  height: max(10vw, 10vh);
}
</style>
