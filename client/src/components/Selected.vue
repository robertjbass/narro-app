<template>
  <div>
    <!-- <div> delete the below v-show statement -->
    <div v-show="false">
      <!-- <h4>Selected Component:</h4> -->
      <h1 v-if="selectedService() != 'Copper'">No Selected Service</h1>
      <h1 v-else>Selected Service: {{ selectedService() }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Selected",
  props: {
    service: {
      type: String
    }
  },
  // data: function() {
  //   return {
  //     service: "Copper"
  //   };
  // },
  methods: {
    selectedService(service) {
      // TODO: Find way to listen for which service is clicked
      // TODO: Link to services.json
      service = "";
      return service;
    }
  }
};
</script>
<style scoped>
* {
  font-family: monospace;
}
</style>
