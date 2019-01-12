<template>
  <v-content class="main-contents">
    <v-flex xs12 sm10 offset-sm1>
      <v-layout class="mx-2 my-2">
        <dtn-simulator-component :settings="settings" ref="dtncomp" />
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
            <v-btn color="primary" flat @click="applySettings">Apply</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-flex>
  </v-content>
</template>

<script>
import DtnSimulatorComponent from "~/components/DtnSimulator.vue";

export default {
  components: {
    DtnSimulatorComponent
  },
  data() {
    return {
      settings: {
        node: 20,
        agent: 10,
        range: 40
      }
    };
  },
  methods: {
    applySettings() {
      Object.keys(this.settings).map((key, index) => {
        this.settings[key] = parseInt(this.settings[key], 10);
      });
      this.$refs.dtncomp.initMain();
    }
  }
};
</script>
