<template>
  <v-card class="mx-2 my-5 text-center" color="light-blue lighten-5">
    <svg
      version="1.1"
      id="nameLayer"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1920 1080"
      style="enable-background:new 0 0 1920 1080;"
      xml:space="preserve"
    >
      <g>
        <g id="H_character">
          <line class="st0" x1="330.9" y1="127.5" x2="330.9" y2="727.5"></line>
          <line class="st0" x1="305.9" y1="427.5" x2="630.9" y2="427.5"></line>
          <line class="st0" x1="630.9" y1="127.5" x2="630.9" y2="727.5"></line>
        </g>
        <g id="a_character">
          <line
            class="st0"
            x1="1030.9"
            y1="427.5"
            x2="1030.9"
            y2="727.5"
          ></line>
          <circle class="st1" cx="905" cy="577.5" r="125"></circle>
        </g>
        <g id="g_character">
          <circle class="st1" cx="1305" cy="577.5" r="125"></circle>
          <path
            class="st1"
            d="M1180.9,827.5c0,69,56,125,125,125c69,0,125-56,125-125v-400"
          ></path>
        </g>
        <g id="i_character">
          <circle class="st1" cx="1585" cy="332.5" r="5"></circle>
          <line class="st0" x1="1585" y1="427.5" x2="1585" y2="727.5"></line>
        </g>
      </g>
    </svg>
  </v-card>
</template>

<style>
@keyframes css_anime {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes css_anime {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes reverse_css_anime {
  from {
    stroke-dashoffset: -1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes reverse_css_anime {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 2000;
  }
}

svg#nameLayer {
  max-width: 800px;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

/*IE CSS Hack*/

@media all and (-ms-high-contrast: none) {
  svg#nameLayer {
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
    height: 50vh;
  }
}

/*Edge CSS Hack*/

@supports (-ms-ime-align: auto) {
  svg#nameLayer {
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
  }
}

g {
  fill: none;
  stroke-width: 50;
  stroke-miterlimit: 10;
}

g > .st0 {
  animation: css_anime 3s linear normal;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  -webkit-animation: css_anime 3s linear normal;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
}

g > .st1 {
  animation: reverse_css_anime -3s linear normal;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  -webkit-animation: reverse_css_anime 3s linear normal;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
}

#H_character {
  stroke: #66aedf;
}

#a_character {
  stroke: #dda748;
}

#g_character {
  stroke: #cd8087;
}

#i_character {
  stroke: #c0cd32;
}
</style>
