<template>
<canvas id='backGroundCanvas'></canvas>
</template>

<script>
import Vue from 'vue';
export default {
  mounted() {
    const color_arr = [
      '#F9DB57',
      '#E6855E',
      '#B75C9D',
      '#9D73BB',
      '#42AAC7',
      '#40BFB0'
    ];
    const cv_id = document.getElementById('backGroundCanvas');
    const ctx = cv_id.getContext('2d');
    const draw = () => {
      if (cv_id.getContext) {
        const window_width = window.outerWidth || document.documentElement.clientWidth;
        const window_hight = window.outerHeight || document.documentElement.clientHeight;
        let one_piece = window_width / 10;
        if (window_hight > window_width) {
          one_piece = window_hight / 10;
        }
        cv_id.width = window_width;
        cv_id.height = window_hight;
        for (let j = 0; j <= 9; j++) {
          for (let i = 0; i <= 9; i++) {
            ctx.fillStyle = color_arr[Math.floor(Math.random() * color_arr.length)];
            ctx.fillRect(one_piece * i, one_piece * j, one_piece + 1, one_piece + 1);
          }
        }
      }
      window.onresize = () => {
        draw();
      };
    };
    draw();
  }
};
</script>

<style>
#backGroundCanvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: none;
  width: 100%;
  height: 100%;
  z-index:0;
}
</style>
