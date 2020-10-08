<template>
  <div>
    <div class="modal-bg"></div>
  </div>
</template>

<script>
// import { EventBus } from "../main";

export default {
  name: "modal-background",
  data: function() {
    return {
      modalOn: true
    };
  }
};
</script>

<style scoped>
.modal-bg {
  background-color: #00000080;
  width: 100%;
  height: 100%;
  color: black;
  position: absolute;
  left: 0%;
  top: 0%;
}
</style>
