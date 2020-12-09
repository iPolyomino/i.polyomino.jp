<template>
  <v-main>
    <v-flex xs12 sm8 offset-sm2>
      <v-card color="light-blue lighten-5" class="mx-2 my-2">
        <v-container fluid grid-list-lg>
          <section>
            <video ref="camera" width="700" height="700" autoplay />
            <v-btn v-on:click="toggleCamera">カメラ切り替え</v-btn>
          </section>
        </v-container>
      </v-card>
    </v-flex>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      intervalRef: null,
      isRearCamera: true,
    };
  },
  methods: {
    async toggleCamera() {
      this.isRearCamera = !this.isRearCamera;
      await this.setCameraSrc();
    },
    async setCameraSrc() {
      this.$refs.camera.srcObject = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: this.isRearCamera ? "environment" : "user" },
      });
    },
  },

  async mounted() {
    await this.setCameraSrc();
  },

  unmounted() {
    clearInterval(this.intervalRef);
  },
};
</script>
