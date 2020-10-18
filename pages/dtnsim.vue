<template>
  <v-main>
    <v-flex xs12 sm10 offset-sm1>
      <v-layout class="mx-2 my-2" wrap>
        <v-flex xs12 md8>
          <dtn-simulator-component :settings="settings" ref="dtncomp" />
        </v-flex>
        <v-flex xs12 md4>
          <v-card>
            <v-card-text>
              <v-text-field
                label="node"
                v-model="settings.node"
                type="number"
              ></v-text-field>
            </v-card-text>
            <v-card-text>
              <v-text-field
                label="agent"
                v-model="settings.agent"
                :min="1"
                type="number"
              ></v-text-field>
            </v-card-text>
            <v-card-text>
              <v-text-field
                label="range"
                v-model="settings.range"
                :min="10"
                type="number"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="applySettings">Apply</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-main>
</template>

<script>
import DtnSimulatorComponent from "~/components/DtnSimulator.vue";

export default {
  components: {
    DtnSimulatorComponent,
  },
  data() {
    return {
      settings: {
        node: 20,
        agent: 10,
        range: 40,
      },
    };
  },
  methods: {
    applySettings() {
      Object.keys(this.settings).map((key, index) => {
        this.settings[key] = parseInt(this.settings[key], 10);
      });
      this.$refs.dtncomp.initMain();
    },
  },
};
</script>

<style scoped>
canvas.canvas {
  width: 100%;
}
</style>
