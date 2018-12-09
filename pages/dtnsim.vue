<template>
  <v-content class="main-contents">
    <v-flex xs12 sm10 offset-sm1>
      <v-layout class="mx-2 my-2"> <dtn-simulator-component /> </v-layout>
    </v-flex>
  </v-content>
</template>

<script>
import DtnSimulatorComponent from "~/components/DtnSimulator.vue";

export default {
  components: {
    DtnSimulatorComponent
  }
};
</script>
